// import {NextAuthOptions} from "next-auth";
import User from "../../../../models/user";
import dbConnect from "@/lib/mongodb";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { Session } from "next-auth";

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async  authorize(credentials: any): Promise<any> {
        await dbConnect();
        try {
          const user = await User.findOne({
            $or: [
              { email: credentials.identifier },
              { username: credentials.identifier },
            ],
          });
          if (!user) {
            throw new Error("No usr found with this email");
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
        //   throw new Error(error);
          throw new Error(`Database error: ${error.message}`);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }:{token:any;user:any}): Promise<any> {
      if (user) {
        token._id = user._id?.toString();
        token.username = user.username;

        return token;
      }
    },
    async session({ session, token }:{session: Session;token:any}): Promise<Session> {
      if (token) {
        session.user._id = token._id;
        sessionStorage.user.username = token.username;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
    
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
};
