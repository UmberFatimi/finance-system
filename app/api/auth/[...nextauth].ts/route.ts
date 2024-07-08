import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/db";

// Define the user type
interface User {
  id: string;
  email: string;
  role: string;
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const res = await fetch("http://localhost:3000/api/authenticate", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user: User | null = await res.json();

        if (res.ok && user) {
          return Promise.resolve(user); // Ensure it returns a promise
        } else {
          return Promise.resolve(null); // Ensure it returns a promise
        }
      },
    }),
  ],
   adapter : MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      console.log("Session Callback:", { session, token });
      if (token) {
        session.user = {
          ...session.user,
          id: token.userId as string,
          role: token.role as string,
        };
      }
      return session;
    },
    async jwt({ token, user }) {
      console.log("JWT Callback:", { token, user });
      if (user) {
        token.userId = user.id;
        token.role = user.role;
      }
      return token;
    },
  },
  pages: {
    signIn: "api/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
    newUser: "/auth/new-user",
  },
});
