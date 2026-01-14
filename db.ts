import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
    throw new Error("Please provide MONGO_URL in the environment variables");
}

export async function connectToDatabase() {
    try {
        await mongoose.connect(MONGO_URL as string);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
