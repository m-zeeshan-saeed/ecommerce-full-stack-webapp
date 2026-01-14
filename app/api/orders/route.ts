import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { connectToDatabase } from "@/db";
import Order from "@/models/Order";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { items, totalAmount, paymentMethod } = await req.json();

    if (!items || !totalAmount || !paymentMethod) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    // Get user from database if session doesn't have ID or just use session email/id
    // Assuming session.user contains the necessary info
    const newOrder = await Order.create({
      user: (session.user as { id?: string; email?: string | null }).id || session.user.email, // Adjust based on your Auth setup
      items,
      totalAmount,
      paymentMethod,
      status: "pending",
    });

    return NextResponse.json(
      { message: "Order placed successfully", orderId: newOrder._id },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Order creation error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
