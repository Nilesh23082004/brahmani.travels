import { NextRequest, NextResponse } from "next/server";
import {
  bookingSchema,
  escapeHtml,
  checkRateLimit,
  getMailTransporter,
  DEFAULT_RECIPIENT_EMAIL,
} from "@/lib/email";
import { siteConfig } from "@/data/site";

export async function POST(req: NextRequest) {
  try {
    // 1. In-memory Rate Limiting (5 requests per IP per 10 mins)
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown-ip";

    const rateLimit = checkRateLimit(ip);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error:
            "Too many booking requests from this IP. Please wait a few minutes or call us directly at " +
            siteConfig.phone,
        },
        { status: 429 }
      );
    }

    // 2. Parse and Validate Request Payload
    const body = await req.json();

    // Honeypot check: if confirm_website is filled, silently return success to trap bots
    if (body.confirm_website && body.confirm_website.length > 0) {
      console.warn(`[Spam Detected] Honeypot triggered from IP: ${ip}`);
      return NextResponse.json({
        success: true,
        message: "Your booking request has been received.",
      });
    }

    const parseResult = bookingSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          error: "Please correct the highlighted errors.",
          details: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parseResult.data;

    // 3. Prepare Sanitized Content for HTML Email
    const safeName = escapeHtml(data.fullName);
    const safeMobile = escapeHtml(data.mobile);
    const safeEmail = escapeHtml(data.email || "Not provided");
    const safeCarName = escapeHtml(data.carName);
    const safePickup = escapeHtml(data.pickupLocation);
    const safeDrop = escapeHtml(data.dropLocation);
    const safeDate = escapeHtml(data.travelDate);
    const safeTime = escapeHtml(data.pickupTime || "Not specified");
    const safePassengers = escapeHtml(data.passengers || "1");
    const safeDistance = data.approxDistanceKm
      ? `${escapeHtml(data.approxDistanceKm)} Km`
      : "Not specified";
    const safeFare = data.estimatedFare
      ? `₹${escapeHtml(data.estimatedFare)}`
      : "Standard Rate";
    const safeMessage = escapeHtml(data.message || "None");

    const cleanDigits = data.mobile.replace(/\D/g, "");
    const waUrl = `https://wa.me/91${cleanDigits}`;
    const telUrl = `tel:+91${cleanDigits}`;

    // 4. Build Admin Notification Email HTML
    const adminHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Booking Enquiry – Brahmani Travels</title>
</head>
<body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; color: #1e293b;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.08); border: 1px solid #e2e8f0;">
    <!-- Header -->
    <tr>
      <td style="background-color: #06123A; padding: 28px 32px; text-align: center; border-bottom: 4px solid #C9962E;">
        <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: 0.5px;">Brahmani Travels</h1>
        <p style="margin: 6px 0 0; color: #E8C468; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; font-weight: 600;">New Booking Enquiry Received</p>
      </td>
    </tr>

    <!-- Body Details -->
    <tr>
      <td style="padding: 32px 32px 24px;">
        <h2 style="margin: 0 0 16px; color: #0A1F5C; font-size: 18px; font-weight: 700;">Customer & Journey Overview</h2>
        
        <table width="100%" border="0" cellspacing="0" cellpadding="8" style="border-collapse: collapse; font-size: 14px;">
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="width: 38%; color: #64748b; font-weight: 600;">Customer Name:</td>
            <td style="color: #0f172a; font-weight: 700;">${safeName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="color: #64748b; font-weight: 600;">Mobile Number:</td>
            <td style="color: #0f172a; font-weight: 700;">+91 ${safeMobile}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="color: #64748b; font-weight: 600;">Email Address:</td>
            <td style="color: #0f172a;">${safeEmail}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9; background-color: #fdfbf7;">
            <td style="color: #85581A; font-weight: 700;">Selected Vehicle:</td>
            <td style="color: #0A1F5C; font-weight: 800; font-size: 15px;">${safeCarName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="color: #64748b; font-weight: 600;">Pickup Location:</td>
            <td style="color: #0f172a;">${safePickup}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="color: #64748b; font-weight: 600;">Drop Location:</td>
            <td style="color: #0f172a;">${safeDrop}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="color: #64748b; font-weight: 600;">Travel Date & Time:</td>
            <td style="color: #0f172a; font-weight: 600;">${safeDate} at ${safeTime}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="color: #64748b; font-weight: 600;">Passengers:</td>
            <td style="color: #0f172a;">${safePassengers} person(s)</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="color: #64748b; font-weight: 600;">Est. Distance:</td>
            <td style="color: #0f172a;">${safeDistance}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f0fdf4;">
            <td style="color: #166534; font-weight: 700;">Estimated Fare:</td>
            <td style="color: #15803d; font-weight: 800; font-size: 16px;">${safeFare}</td>
          </tr>
          <tr>
            <td style="color: #64748b; font-weight: 600; vertical-align: top;">Customer Notes:</td>
            <td style="color: #334155; line-height: 1.5;">${safeMessage}</td>
          </tr>
        </table>

        <!-- Quick Action Buttons for Operator -->
        <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
          <p style="margin: 0 0 14px; font-size: 13px; color: #64748b; font-weight: 600; text-transform: uppercase;">Direct Contact Actions:</p>
          <a href="${telUrl}" style="display: inline-block; padding: 12px 24px; margin: 4px; background: linear-gradient(135deg, #E8C468, #C9962E); color: #06123A; text-decoration: none; font-weight: 700; border-radius: 8px; font-size: 14px;">📞 Call Customer (+91 ${safeMobile})</a>
          <a href="${waUrl}" style="display: inline-block; padding: 12px 24px; margin: 4px; background-color: #25D366; color: #ffffff; text-decoration: none; font-weight: 700; border-radius: 8px; font-size: 14px;">💬 Open WhatsApp</a>
        </div>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background-color: #f8fafc; padding: 18px 32px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
        Received from Brahmani Travels Web Platform • Client IP: ${escapeHtml(ip)}
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    const adminText = `
NEW BOOKING ENQUIRY – BRAHMANI TRAVELS
======================================
Customer Name: ${data.fullName}
Mobile Number: +91 ${data.mobile}
Email Address: ${data.email || "Not provided"}

Vehicle: ${data.carName}
Pickup Location: ${data.pickupLocation}
Drop Location: ${data.dropLocation}
Date & Time: ${data.travelDate} at ${data.pickupTime || "Not specified"}
Passengers: ${data.passengers || "1"}
Approx Distance: ${data.approxDistanceKm ? data.approxDistanceKm + " Km" : "Not specified"}
Estimated Fare: ${data.estimatedFare ? "₹" + data.estimatedFare : "Standard rate"}
Notes: ${data.message || "None"}

Call Customer: +91 ${cleanDigits}
WhatsApp: https://wa.me/91${cleanDigits}
    `.trim();

    // 5. Send Email via Nodemailer
    const transporter = getMailTransporter();
    const recipient = process.env.CONTACT_TO_EMAIL || DEFAULT_RECIPIENT_EMAIL;

    if (transporter && recipient) {
      // Send Notification to Business
      await transporter.sendMail({
        from: `"Brahmani Travels Booking" <${process.env.SMTP_USER}>`,
        to: recipient,
        replyTo: data.email || undefined,
        subject: `[New Booking] ${data.fullName} - ${data.carName} (${data.travelDate})`,
        text: adminText,
        html: adminHtml,
      });

      // Send Auto-Reply to Customer if email provided
      if (data.email) {
        const customerHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Your Booking Request – Brahmani Travels</title>
</head>
<body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #1e293b;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 580px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
    <tr>
      <td style="background-color: #06123A; padding: 24px 30px; text-align: center; border-bottom: 3px solid #C9962E;">
        <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700;">Brahmani Travels</h1>
        <p style="margin: 4px 0 0; color: #E8C468; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase;">Your Journey, Our Responsibility</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 28px 30px;">
        <h2 style="margin: 0 0 12px; color: #0A1F5C; font-size: 18px;">Namaste ${safeName},</h2>
        <p style="margin: 0 0 16px; font-size: 14px; line-height: 1.6; color: #475569;">
          Thank you for choosing Brahmani Travels! We have successfully received your booking request for <strong>${safeCarName}</strong> on <strong>${safeDate}</strong>.
        </p>
        <div style="background-color: #f8fafc; border-left: 3px solid #C9962E; padding: 14px 18px; border-radius: 6px; margin: 18px 0; font-size: 13px; line-height: 1.6;">
          <strong>Pickup:</strong> ${safePickup}<br>
          <strong>Drop:</strong> ${safeDrop}<br>
          <strong>Travel Date:</strong> ${safeDate} ${safeTime ? `(${safeTime})` : ""}<br>
          <strong>Passengers:</strong> ${safePassengers}
        </div>
        <p style="margin: 0 0 16px; font-size: 14px; line-height: 1.6; color: #475569;">
          Our travel desk in Ahmedabad is reviewing vehicle availability and will call you on <strong>+91 ${safeMobile}</strong> shortly to confirm your booking and chauffeur details.
        </p>
        <p style="margin: 0 0 24px; font-size: 13px; color: #64748b;">
          Need immediate confirmation or planning a customized tour? Call or WhatsApp us directly at <strong>${siteConfig.phone}</strong>.
        </p>
        <div style="text-align: center;">
          <a href="${siteConfig.phoneTel}" style="display: inline-block; padding: 11px 22px; background: linear-gradient(135deg, #E8C468, #C9962E); color: #06123A; text-decoration: none; font-weight: 700; border-radius: 8px; font-size: 14px;">Call Us: ${siteConfig.phone}</a>
        </div>
      </td>
    </tr>
    <tr>
      <td style="background-color: #f1f5f9; padding: 16px 30px; text-align: center; font-size: 11px; color: #94a3b8;">
        ${siteConfig.name} • ${siteConfig.address.full}
      </td>
    </tr>
  </table>
</body>
</html>
        `;

        await transporter.sendMail({
          from: `"Brahmani Travels" <${process.env.SMTP_USER}>`,
          to: data.email,
          subject: `Booking Request Received – Brahmani Travels (${safeCarName})`,
          text: `Namaste ${data.fullName},\n\nWe have received your booking enquiry for ${data.carName} on ${data.travelDate}.\nOur team will call you shortly at +91 ${data.mobile} to confirm.\n\nWarm regards,\nBrahmani Travels\n${siteConfig.phone}`,
          html: customerHtml,
        });
      }
    } else {
      console.log(
        `[Local Dev / SMTP Notice] SMTP_HOST or CONTACT_TO_EMAIL not configured in environment. Booking logged successfully for ${data.fullName} (${data.carName}).`
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you! Your booking enquiry has been received. Our team will call you shortly.",
    });
  } catch (error) {
    console.error("[Booking API Error]:", error);
    // Never leak raw internal errors to client
    return NextResponse.json(
      {
        error:
          "Unable to submit booking enquiry at this moment. Please call us directly at " +
          siteConfig.phone,
      },
      { status: 500 }
    );
  }
}
