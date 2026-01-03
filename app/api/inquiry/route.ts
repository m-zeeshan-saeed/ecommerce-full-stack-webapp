import { NextResponse } from "next/server";
import { connectToDatabase } from "@/db";
import Inquiry from "@/models/Inquiry";


export async function POST(req:Request){
    try {
        await connectToDatabase();
        const body = await req.json();
        const {productName,quantity,unit,details} = body;
        if (!productName || !quantity || !unit || !details) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

const validUnits = ['Pcs', 'Kg', 'Liters'];
    if (!validUnits.includes(unit)) {
        return NextResponse.json(
            { success: false, message: "Invalid unit type. Must be Pcs, Kg, or Liters." },
            { status: 400 }
        );
    }
    const newInquiry = await Inquiry.create({
      productName,
      quantity,
      unit,
      details,
    });

        return NextResponse.json(
      { success: true, data: newInquiry, message: "Inquiry sent successfully" },
      { status: 201 }
    );
    } catch (error: any) {
    console.error("Inquiry API Error:", error);
    return NextResponse.json(
      { success: false, message: "Server Error", error: error.message },
      { status: 500 }
    );
  }
}
