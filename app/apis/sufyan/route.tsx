import { NextApiRequest, NextApiResponse } from "next";

export const post = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email, password, role } = req.body;
    res.status(200).json({ message: "User registered successfully!", data: { name, email, role } });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

