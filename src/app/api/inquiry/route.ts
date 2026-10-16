import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export interface InquiryPayload {
  name: string;
  company?: string;
  email: string;
  phone: string;
  projectType: string;
  budget?: string;
  description: string;
}

export async function POST(request: Request) {
  try {
    const data: InquiryPayload = await request.json();

    // Field validations
    const errors: Record<string, string> = {};

    if (!data.name || data.name.trim().length < 2) {
      errors.name = "Please provide your full name (minimum 2 characters).";
    }

    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Please provide a valid email address.";
    }

    if (!data.phone || data.phone.trim().replace(/\D/g, "").length < 10) {
      errors.phone = "Please provide a valid 10-digit phone number.";
    }

    if (!data.projectType) {
      errors.projectType = "Please select a project type.";
    }

    if (!data.description || data.description.trim().length < 10) {
      errors.description = "Please describe your project requirements (minimum 10 characters).";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors, message: "Please resolve the form errors before submitting." },
        { status: 400 }
      );
    }

    // Generate unique inquiry ID
    const inquiryId = `PI-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;
    const timestamp = new Date().toISOString();

    const record = {
      id: inquiryId,
      timestamp,
      ...data,
    };

    // Safely persist to a local inquiries storage file
    try {
      const storageDir = path.join(process.cwd(), ".data");
      if (!fs.existsSync(storageDir)) {
        fs.mkdirSync(storageDir, { recursive: true });
      }
      const storagePath = path.join(storageDir, "inquiries.json");
      let list = [];
      if (fs.existsSync(storagePath)) {
        try {
          const content = fs.readFileSync(storagePath, "utf-8");
          list = JSON.parse(content);
        } catch {
          list = [];
        }
      }
      list.push(record);
      fs.writeFileSync(storagePath, JSON.stringify(list, null, 2), "utf-8");
    } catch (fsError) {
      console.warn("Storage write notice:", fsError);
      // We don't fail the user request if filesystem write is read-only
    }

    return NextResponse.json({
      success: true,
      inquiryId,
      timestamp,
      message: "Thank you! Your project inquiry has been recorded successfully.",
    });
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your inquiry.",
      },
      { status: 500 }
    );
  }
}
