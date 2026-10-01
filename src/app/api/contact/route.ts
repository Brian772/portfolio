import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  // In a real application, you would integrate with an email service
  // For now, we'll just validate and return success
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  // Simulate sending email/processing form data
  // In production, integrate with SendGrid, Resend, or similar service

  console.log("Contact form submission:", { name, email, message });

  return NextResponse.json(
    { success: true, message: "Message received successfully" },
    { status: 200 }
  );
}