import { NextRequest, NextResponse } from "next/server";
import {
  contactSchema,
  escapeHtml,
  checkRateLimit,
  getMailTransporter,
  DEFAULT_RECIPIENT_EMAIL,
} from "@/lib/email";
import { siteConfig } from "@/data/site";

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown-ip";

    const rateLimit = checkRateLimit(ip);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error:
            "Too many requests from this IP. Please wait a few minutes or call us directly at " +
            siteConfig.phone,
        },
        { status: 429 }
      );
    }

    const body = await req.json();

    if (body.confirm_website && body.confirm_website.length > 0) {
      return NextResponse.json({
        success: true,
        message: "Message received.",
      });
    }

    const parseResult = contactSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          error: "Please correct the highlighted fields.",
          details: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parseResult.data;
    const safeName = escapeHtml(data.fullName);
    const safeMobile = escapeHtml(data.mobile);
    const safeEmail = escapeHtml(data.email || "Not provided");
    const safeSubject = escapeHtml(data.subject);
    const safeMessage = escapeHtml(data.message);

    const cleanDigits = data.mobile.replace(/\D/g, "");
    const waUrl = `https://wa.me/91${cleanDigits}`;
    const telUrl = `tel:+91${cleanDigits}`;

    const adminHtml = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>New Contact Message – Brahmani Travels</title></head>
<body style="margin: 0; padding: 24px; font-family: sans-serif; background-color: #f1f5f9; color: #1e293b;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0;">
    <tr>
      <td style="background-color: #06123A; padding: 24px 30px; text-align: center; border-bottom: 4px solid #C9962E;">
        <h1 style="margin: 0; color: #ffffff; font-size: 22px;">Brahmani Travels</h1>
        <p style="margin: 4px 0 0; color: #E8C468; font-size: 13px; text-transform: uppercase;">New Contact Message Received</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 28px 30px;">
        <table width="100%" border="0" cellspacing="0" cellpadding="6" style="border-collapse: collapse; font-size: 14px;">
          <tr><td style="width: 35%; color: #64748b; font-weight: 600;">Name:</td><td style="color: #0f172a; font-weight: 700;">${safeName}</td></tr>
          <tr><td style="color: #64748b; font-weight: 600;">Mobile:</td><td style="color: #0f172a; font-weight: 700;">+91 ${safeMobile}</td></tr>
          <tr><td style="color: #64748b; font-weight: 600;">Email:</td><td style="color: #0f172a;">${safeEmail}</td></tr>
          <tr><td style="color: #64748b; font-weight: 600;">Subject:</td><td style="color: #0A1F5C; font-weight: 700;">${safeSubject}</td></tr>
          <tr><td style="color: #64748b; font-weight: 600; vertical-align: top;">Message:</td><td style="color: #334155; line-height: 1.5;">${safeMessage}</td></tr>
        </table>
        <div style="margin-top: 24px; padding-top: 18px; border-top: 1px solid #e2e8f0; text-align: center;">
          <a href="${telUrl}" style="display: inline-block; padding: 10px 20px; margin: 4px; background: #C9962E; color: #06123A; text-decoration: none; font-weight: 700; border-radius: 8px;">📞 Call Customer</a>
          <a href="${waUrl}" style="display: inline-block; padding: 10px 20px; margin: 4px; background: #25D366; color: #ffffff; text-decoration: none; font-weight: 700; border-radius: 8px;">💬 WhatsApp</a>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    const transporter = getMailTransporter();
    const recipient = process.env.CONTACT_TO_EMAIL || DEFAULT_RECIPIENT_EMAIL;

    if (transporter && recipient) {
      await transporter.sendMail({
        from: `"Brahmani Travels Contact" <${process.env.SMTP_USER}>`,
        to: recipient,
        replyTo: data.email || undefined,
        subject: `[Contact Form] ${data.fullName}: ${data.subject}`,
        text: `Name: ${data.fullName}\nMobile: ${data.mobile}\nEmail: ${data.email || "N/A"}\nSubject: ${data.subject}\n\n${data.message}`,
        html: adminHtml,
      });
    } else {
      console.log(`[Local Dev / Contact Notice] Contact message from ${data.fullName}: ${data.subject}`);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent. We will get back to you shortly.",
    });
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      {
        error: "Unable to send message right now. Please call us at " + siteConfig.phone,
      },
      { status: 500 }
    );
  }
}
