import NextAuth from "next-auth";
import { connectToDatabase } from "@/db";
import User from "@/models/User";

const handler = NextAuth({
  providers: [
    // Providers removed as per request
  ],
  callbacks: {
    async session({ session }) {
      // Add user ID and role to session
      await connectToDatabase();
      const dbUser = await User.findOne({ email: session.user?.email });
      if (dbUser && session.user) {
        const user = session.user as { name?: string | null; email?: string | null; image?: string | null; id?: string; role?: string };
        user.id = dbUser._id.toString();
        user.role = dbUser.role;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
