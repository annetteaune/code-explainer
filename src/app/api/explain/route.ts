import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { code } = await req.json();

    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistral",
        prompt: `Please explain this code in simple terms:\n\n${code}`,
        stream: false,
      }),
    });

    const data = await response.json();
    return NextResponse.json({ explanation: data.response });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to explain code" },
      { status: 500 }
    );
  }
}
