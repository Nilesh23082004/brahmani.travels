# Brahmani Travels — Web Platform

Modern, premium, 2026 SaaS-quality website and booking platform for **Brahmani Travels** (Ahmedabad, Gujarat, India).

---

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## Email & Booking Backend Configuration

The booking and contact APIs use **Nodemailer** with STARTTLS (Port 587) for transactional emails.

### 1. Environment Variables Setup

Create a `.env.local` file in the root directory by copying `.env.example`:

```bash
cp .env.example .env.local
```

Fill in your actual SMTP credentials:

```env
SMTP_HOST=smtp.gmail.com        # e.g. smtp.gmail.com, smtp.resend.com, smtp-relay.brevo.com
SMTP_PORT=587                   # 587 (STARTTLS) or 465 (SSL)
SMTP_USER=your-email@gmail.com  # SMTP authentication username
SMTP_PASS=your-app-password     # SMTP authentication password / App password
CONTACT_TO_EMAIL=contact@brahmanitravels.com  # Business email where enquiries are dispatched
```

> **Security Note:** `.env.local` is listed in `.gitignore` and is never committed to Git. Never hardcode credentials.

---

## Local Email Testing

### Option A: Local Development Without SMTP (Simulated Mode)
If `SMTP_HOST` or `CONTACT_TO_EMAIL` are not provided in `.env.local`, the `/api/booking` and `/api/contact` endpoints automatically run in **safe development mode**:
- Submissions pass zod validation and rate limiting.
- The request details and simulated email are logged to the server terminal.
- A success JSON response is returned to the user interface.

### Option B: Free Test Inboxes (Ethereal Email)
To test actual HTML email delivery without sending real emails:
1. Generate temporary credentials at [https://ethereal.email/create](https://ethereal.email/create).
2. Put the generated host, port, user, and pass into `.env.local`.
3. Sent emails can be viewed in the Ethereal web inbox.

### Option C: Gmail App Password
1. Enable 2-Step Verification on your Google Account.
2. Generate an **App Password** (16 characters).
3. Set `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=587`, `SMTP_USER=your-email@gmail.com`, `SMTP_PASS=your-16-char-app-password`.

---

## API Endpoints

### 1. `POST /api/booking`
- **Validation**: Server-side Zod schema validation (Indian 10-digit mobile number, future dates, sanitization).
- **Security**: In-memory rate limiting (5 requests / IP / 10 minutes) & hidden honeypot trap (`confirm_website`).
- **Emails Sent**:
  - Designed HTML & plain-text notification to `CONTACT_TO_EMAIL` with quick tap-to-call and WhatsApp action links.
  - Automatic polite customer confirmation auto-reply (if the customer supplied an email address).

### 2. `POST /api/contact`
- General inquiry submission endpoint with the same rate limiting, validation, and notification structure.

