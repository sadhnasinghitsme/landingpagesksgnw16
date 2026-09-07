import { NextResponse } from "next/server";

/**
 * Admission enquiry endpoint.
 *
 * Right now it validates the payload and logs it. Wire this to the school's
 * CRM / email / Google Sheet / WhatsApp API by replacing the TODO block.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").replace(/\D/g, "");
  const classApplyingFor = String(body.classApplyingFor ?? "").trim();

  if (String(body.company ?? "").trim() !== "") {
    // honeypot tripped — pretend success, do nothing
    return NextResponse.json({ ok: true });
  }

  if (!name || phone.length < 10 || !classApplyingFor) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 422 });
  }

  const lead = {
    name,
    phone,
    classApplyingFor,
    source: String(body.source ?? "unknown"),
    receivedAt: new Date().toISOString(),
  };

  // TODO: deliver `lead` to the school (email / CRM / sheet / webhook).
  console.log("[admission-enquiry]", lead);

  return NextResponse.json({ ok: true });
}
