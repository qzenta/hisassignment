import { NextRequest, NextResponse } from "next/server";

const BREVO_API_KEY   = process.env.BREVO_API_KEY;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "payroll@hisassignment.co.za";
const BREVO_LIST_ID   = Number(process.env.BREVO_LIST_ID ?? 0); // set in Vercel env

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, email, company, service, message } = body;

  if (!firstName || !lastName || !email || !service) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Brevo not yet configured — log and return success so form UX works during preview
  if (!BREVO_API_KEY) {
    console.log("[contact] Brevo not configured. Would have sent:", { firstName, lastName, email, company, service, message });
    return NextResponse.json({ ok: true });
  }

  const headers = {
    "api-key": BREVO_API_KEY,
    "Content-Type": "application/json",
  };

  // 1 — Send transactional email notification to client
  const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers,
    body: JSON.stringify({
      sender:  { name: "His Assignment Website", email: "payroll@hisassignment.co.za" },
      to:      [{ email: CONTACT_TO_EMAIL, name: "His Assignment Payroll" }],
      replyTo: { email, name: `${firstName} ${lastName}` },
      subject: `New enquiry — ${service}`,
      htmlContent: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#0F172A">
          <div style="background:#1B3A6B;padding:24px 32px">
            <h1 style="color:#fff;margin:0;font-size:20px">New Website Enquiry</h1>
            <p style="color:#00BFA5;margin:4px 0 0;font-size:13px">hisassignment.co.za contact form</p>
          </div>
          <div style="padding:32px;background:#F8FAFC;border:1px solid #E2E8F0">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:8px 0;color:#64748B;width:120px">Name</td><td style="padding:8px 0;font-weight:600">${firstName} ${lastName}</td></tr>
              <tr><td style="padding:8px 0;color:#64748B">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#00BFA5">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#64748B">Company</td><td style="padding:8px 0">${company || "—"}</td></tr>
              <tr><td style="padding:8px 0;color:#64748B">Service</td><td style="padding:8px 0;font-weight:600;color:#1B3A6B">${service}</td></tr>
            </table>
            ${message ? `<div style="margin-top:20px;padding:16px;background:#fff;border-left:3px solid #00BFA5;border-radius:4px"><p style="margin:0;font-size:13px;color:#475569;white-space:pre-wrap">${message}</p></div>` : ""}
          </div>
          <div style="padding:16px 32px;background:#1B3A6B;text-align:center">
            <p style="color:#94A3B8;font-size:11px;margin:0">His Assignment Payroll Solutions · hisassignment.co.za</p>
          </div>
        </div>
      `,
    }),
  });

  if (!emailRes.ok) {
    console.error("[contact] Brevo email error:", await emailRes.text());
    return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
  }

  // 2 — Upsert contact into Brevo CRM
  try {
    await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers,
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME:   firstName,
          LASTNAME:    lastName,
          COMPANY:     company || "",
          FORM_TYPE:   "contact",
          LEAD_STATUS: "new",
        },
        listIds:       BREVO_LIST_ID ? [BREVO_LIST_ID] : [],
        updateEnabled: true, // upsert — won't duplicate if they submit again
      }),
    });
  } catch (err) {
    // Non-fatal — email already sent; just log
    console.error("[contact] Brevo CRM sync error:", err);
  }

  return NextResponse.json({ ok: true });
}
