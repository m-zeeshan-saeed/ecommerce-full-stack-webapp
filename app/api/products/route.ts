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
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json(
      { message: "Error creating product", error: errorMessage },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    await connectToDatabase();

    let query = {};
    if (category) {
      query = { category };
    }

    const products = await Product.find(query);
    return NextResponse.json(products, { status: 200 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json(
      { message: "Error fetching products", error: errorMessage },
      { status: 500 }
    );
  }
}
