import { NextRequest, NextResponse } from "next/server";

// Brevo transactional email — wired but NOT active until client approves go-live.
// To activate: set BREVO_API_KEY and CONTACT_TO_EMAIL in Vercel env vars.
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "payroll@hisassignment.co.za";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, email, company, service, message } = body;

  if (!firstName || !lastName || !email || !service) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!BREVO_API_KEY) {
    // Brevo not yet configured — log and return success so form UX works during build preview
    console.log("[contact] Brevo not configured. Would have sent:", { firstName, lastName, email, company, service, message });
    return NextResponse.json({ ok: true });
  }

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": BREVO_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sender: { name: "His Assignment Website", email: "noreply@hisassignment.co.za" },
      to: [{ email: CONTACT_TO_EMAIL }],
      replyTo: { email, name: `${firstName} ${lastName}` },
      subject: `New enquiry — ${service}`,
      htmlContent: `
        <h2>New website enquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "—"}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong><br/>${message || "—"}</p>
      `,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Brevo error:", await res.text());
    return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
