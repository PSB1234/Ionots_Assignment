import { Request, Response } from "express";
import User from "../models/User";


export const loginController = {
  async login(req: Request, res: Response) :Promise<any> {
    const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    res.status(200).json({ userId: user._id });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
},
};
