// app/api/contact/route.js
export async function GET(req) {
    const vcard = `
  BEGIN:VCARD
  VERSION:3.0
  FN:Vagaro Technologi
  ORG:Vagaro
  TITLE:React Developer
  TEL;TYPE=CELL:1234567890
  EMAIL:vagaro@yopmail.com
  ADR;TYPE=WORK:;;Ahmedabad;Gujarat;;India
  END:VCARD
    `.trim();
  
    return new Response(vcard, {
      headers: {
        "Content-Type": "text/vcard; charset=utf-8",
        "Content-Disposition": "inline; filename=contact.vcf",
      },
    });
  }
  