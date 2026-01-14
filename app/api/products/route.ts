import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/db";
import Product from "@/models/Product";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const body = await request.json();

    const product = await Product.create(body);

    return NextResponse.json(
      { message: "Product created successfully", product },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to create product" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get("category");

    let query = {};
    if (category) {
      query = { category };
    }

    const products = await Product.find(query);

    return NextResponse.json({ products }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch products" },
      { status: 500 }
    );
  }
}
