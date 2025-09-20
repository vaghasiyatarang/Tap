import { NextRequest, NextResponse } from "next/server";

export async function GET(req) {
  const url = new URL(req.url);

  // Read fields from query (add/rename as you like)
  const first = url.searchParams.get("first") ?? "";
  const last = url.searchParams.get("last") ?? "";
  const company = url.searchParams.get("company") ?? "";
  const title = url.searchParams.get("title") ?? "";
  const phone = url.searchParams.get("phone") ?? "";
  const email = url.searchParams.get("email") ?? "";
  const street = url.searchParams.get("street") ?? "";     // optional
  const city = url.searchParams.get("city") ?? "";
  const region = url.searchParams.get("region") ?? "";
  const postal = url.searchParams.get("postal") ?? "";
  const country = url.searchParams.get("country") ?? "";

  // Build a VCARD 3.0 (widely supported)
  // ADR fields are: PO Box;Extended;Street;City;Region;Postal;Country
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${last};${first};;;`,
    `FN:${first} ${last}`.trim(),
    company ? `ORG:${company}` : "",
    title ? `TITLE:${title}` : "",
    phone ? `TEL;TYPE=CELL,VOICE:${phone}` : "",
    email ? `EMAIL;TYPE=INTERNET:${email}` : "",
    (city || region || country || street || postal)
      ? `ADR;TYPE=WORK:;;${street};${city};${region};${postal};${country}`
      : "",
    "END:VCARD",
  ].filter(Boolean).join("\r\n") + "\r\n";

  const filename = `${first || ""}${first && last ? "_" : ""}${last || ""}.vcf`.replace(/\s+/g, "_") || "contact.vcf";

  return new NextResponse(vcard, {
    status: 200,
    headers: {
      "Content-Type": "text/x-vcard; charset=utf-8",
      "Content-Disposition": `inline; filename="${filename}"`,
      "Cache-Control" : "no-cache, no-store, must-revalidate",
    },
  });
}