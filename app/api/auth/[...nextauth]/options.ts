import User from "../../../../models/user";
import dbConnect from "@/lib/mongodb";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { Session } from "next-auth";
import { AuthOptions, SessionOptions } from "next-auth";

const session: SessionOptions = {
  strategy: "jwt",
  maxAge: 30 , 
  updateAge: 24,
};

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        identifier: { label: "Email or Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any): Promise<any> {
        await dbConnect();
        try {
          const user = await User.findOne({
            $or: [
              { email: credentials.identifier },
              { username: credentials.identifier },
            ],
          });
          if (!user) {
            throw new Error("No user found with this email or username");
          }
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (isPasswordCorrect) {
            return user;
          } else {
            throw new Error("Incorrect Password");
          }
        } catch (error: any) {
          console.error("Database error:", error.message);
          throw new Error("Authentication failed" + error.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }): Promise<any> {
      if (user) {
        token._id = user._id?.toString();
        // token.username = user.username;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: any }): Promise<Session> {
      if (token) {
        session.user.email = token.email;
        // session.user.username = token.username;
      }
      return session;
    },
  },
  pages: {
    signIn: "api/auth/signin",
  },
  session: session,
  secret: process.env.NEXTAUTH_SECRET,
};
