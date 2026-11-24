import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/config";
import { inquiryLinks, validateInquiry } from "@/lib/inquiry";

const MAX_BODY_BYTES = 16_384;
const responseHeaders = { "Cache-Control": "no-store" };

// Prepare a handover. A serverless filesystem cannot durably store inquiries.
export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return NextResponse.json({ success: false, message: "Please send JSON project details." }, { status: 415, headers: responseHeaders });
  }
  let input: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) throw new Error("Empty body");
    const decoder = new TextDecoder();
    let body = "";
    let bytes = 0;
    try {
      while (true) {
        const chunk = await reader.read();
        if (chunk.done) break;
        bytes += chunk.value.byteLength;
        if (bytes > MAX_BODY_BYTES) {
          await reader.cancel();
          return NextResponse.json({ success: false, message: "Your inquiry is too long. Please shorten the project description." }, { status: 413, headers: responseHeaders });
        }
        body += decoder.decode(chunk.value, { stream: true });
      }
      body += decoder.decode();
    } finally {
      reader.releaseLock();
    }
    input = JSON.parse(body);
  } catch {
    return NextResponse.json({ success: false, message: "Please send valid JSON project details." }, { status: 400, headers: responseHeaders });
  }
  const { data, errors } = validateInquiry(input);
  if (Object.keys(errors).length) {
    return NextResponse.json({ success: false, errors, message: "Please check the highlighted fields." }, { status: 400, headers: responseHeaders });
  }
  return NextResponse.json({
    success: true,
    delivered: false,
    message: "Your inquiry is ready. Open WhatsApp or your email app and send the message to reach our team.",
    ...inquiryLinks(data, siteConfig.whatsappNumber, siteConfig.email),
  }, { headers: responseHeaders });
}
