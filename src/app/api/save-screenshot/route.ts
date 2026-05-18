import { writeFileSync } from "fs";
import { join } from "path";
import { NextRequest, NextResponse } from "next/server";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: cors });
}

export async function POST(req: NextRequest) {
  const { filename, data } = await req.json();
  const dest = join(process.cwd(), "public", "images", "projects", filename);
  const buf = Buffer.from(data, "base64");
  writeFileSync(dest, buf);
  return NextResponse.json({ ok: true }, { headers: cors });
}
