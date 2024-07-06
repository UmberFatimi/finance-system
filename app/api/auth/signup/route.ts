// /pages/api/auth/signup.ts
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import dbConnect from "../../../../lib/mongodb";
import User from "../../../../models/user";

// Handler for POST requests
export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      console.log("User already exists");
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
    console.log(User);
  } catch (error: any) {
    console.error("Error registering user:", error);
    res.status(405).json({ message: 'Method not allowed' });
  }
};

// Handler for other HTTP methods
// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     return POST(req, res);
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }
