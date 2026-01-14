import NextAuth, { NextAuthOptions, Session } from "next-auth";
import { connectToDatabase } from "@/db";
import User from "@/models/User";

export const authOptions: NextAuthOptions = {
  providers: [
    // Providers removed as per request
  ],
  callbacks: {
    async session({ session }: { session: Session }) {
      // Add user ID and role to session
      await connectToDatabase();
      const dbUser = await User.findOne({ email: session.user?.email });
      if (dbUser && session.user) {
        const sessionUser = session.user as { id?: string; role?: string; email?: string | null };
        sessionUser.id = dbUser._id.toString();
        sessionUser.role = dbUser.role;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
