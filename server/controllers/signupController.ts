import { Request, Response } from "express";

import User from "../models/User";

export const singupController = {
    async SignUP(req: Request, res: Response) :Promise<any> {
        const { username, email } = req.body;

  try {
        const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // 
    const newUser = new User({
      username,
      email
        });

    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
}
}

