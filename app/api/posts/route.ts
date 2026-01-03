import { NextResponse } from "next/server";
import {connectToDatabase} from "../../../db";
import Post from "../../../models/Post";


export const GET = async () => {
    try {
        await connectToDatabase();
        const posts = await Post.find();
        return NextResponse.json(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
    }
}
