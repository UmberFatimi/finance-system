// pages/api/authenticate.ts
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";

import dbConnect from "../../../lib/mongodb";
import User from "../../../models/user";

export default async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email and password are required" });
      }
  
      try {
        const user = await User.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
          res.status(200).json({
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          });
        } else {
          res.status(401).json({ message: "Invalid email or password" });
        }
      } catch (error) {
        return res
          .status(500)
          .json({ message: "Internal server error authenticate" });
      }
    } catch (error:any) {
      console.log(error); res.status(500).json({ message: "Internal server error" });
    }
  
}
export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(405).json({ message: "Method not allowed" });
};
