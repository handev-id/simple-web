import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { pin } = await request.json();

    if (!pin) {
      return NextResponse.json({ error: "PIN is required" }, { status: 400 });
    }

    const adminPin = process.env.ADMIN_PIN;

    if (!adminPin) {
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    if (pin === adminPin) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid PIN" }, { status: 401 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 500 },
    );
  }
}
