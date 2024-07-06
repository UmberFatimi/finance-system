// import NextAuth from "next-auth"
// import { MongoDBAdapter } from "@auth/mongodb-adapter"
// import clientPromise from "./lib/db"
 
// export const { handlers, auth, signIn, signOut } = NextAuth({
//   adapter: MongoDBAdapter(clientPromise),
// })



// // /lib/auth.ts
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// const authOptions = {
//   providers: [
//     CredentialsProvider({
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
//   pages: {
//     signIn: "/auth/signin",
//     signOut: "/auth/signout",
//     error: "/auth/error",
//     verifyRequest: "/auth/verify-request",
//     newUser: "/auth/new-user",
//   },
// };

// export default authOptions;
