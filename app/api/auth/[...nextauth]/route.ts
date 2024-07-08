// import clientPromise from "@/lib/db";
// import NextAuth from "next-auth";
// import { MongoDBAdapter } from "@auth/mongodb-adapter"
// import CredentialsProvider from "next-auth/providers/credentials";

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       authorize: async (credentials) => {
//         const res = await fetch("http://localhost:3000/api/authenticate", {
//           method: "POST",
//           body: JSON.stringify(credentials),
//           headers: { "Content-Type": "application/json" },
//         });
//         const user = await res.json();

//         if (res.ok && user) {
//           return user;
//         } else {
//           return null;
//         }
//       },
//     }),
//   ],
//     adapter: MongoDBAdapter(clientPromise),
//   secret: process.env.NEXTAUTH_SECRET,
//   callbacks: {
//     async session({ session, token }) {
//       console.log("Session Callback:", { session, token });
//       if (token) {
//         session.user = {
//           ...session.user,
//           id: token.userId,
//           role: token.role,
//         };
//       }
//       return session;
//     },
//     async jwt({ token, user }) {
//       console.log("JWT Callback:", { token, user });
//       if (user) {
//         token.userId = user.id;
//         token.role = user.role;
//       }
//       return token;
//     },
//   },
//   pages: {
//     signIn: "/auth/signin",
//     signOut: "/auth/signout",
//     error: "/auth/error",
//     verifyRequest: "/auth/verify-request",
//     newUser: "/auth/new-user",
//   },
// });

import NextAuth from "next-auth";
import { authOptions } from "./options";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
