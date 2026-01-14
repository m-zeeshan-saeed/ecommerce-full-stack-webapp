import { NextResponse } from "next/server";
import { connectToDatabase } from "@/db";
import Order from "@/models/Order";
import User from "@/models/User";
import Product from "@/models/Product";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET || "";
if (!JWT_SECRET) {
  console.warn("JWT_SECRET is not defined");
}

const encodedSecret = new TextEncoder().encode(JWT_SECRET);

async function verifyAdmin(req: Request) {
  const token = req.headers.get("cookie")?.split("; ").find(c => c.startsWith("token="))?.split("=")[1];
  if (!token) return false;
  try {
    const { payload } = await jwtVerify(token, encodedSecret);
    return payload.role === "admin";
  } catch (error) {
    return false;
  }
}

export async function GET(req: Request) {
  if (!(await verifyAdmin(req))) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectToDatabase();

    const totalOrders = await Order.countDocuments();
    const activeUsers = await User.countDocuments({ role: "user" });
    const totalProducts = await Product.countDocuments();

    const orders = await Order.find({});
    const totalRevenue = orders.reduce((sum, order) => sum + order.totalAmount, 0);

    // Get recent transactions
    const recentTransactions = await Order.find({})
      .sort({ createdAt: -1 })
      .limit(5)
      .populate("user", "name")
      .lean();

    return NextResponse.json({
      stats: [
        { label: "Total Revenue", value: `$${totalRevenue.toFixed(2)}`, trend: "+0%", color: "blue" },
        { label: "Total Orders", value: totalOrders.toString(), trend: "+0%", color: "purple" },
        { label: "Active Users", value: activeUsers.toString(), trend: "+0%", color: "green" },
        { label: "Total Products", value: totalProducts.toString(), trend: "+0%", color: "red" },
      ],
      recentTransactions: recentTransactions.map((t: any) => ({
        name: t.user?.name || "Unknown",
        item: `${t.items.length} items`,
        price: `$${t.totalAmount.toFixed(2)}`,
        status: t.status.charAt(0).toUpperCase() + t.status.slice(1)
      }))
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
