import express from "express";
import { singupController } from "../controllers/signupController";
import { loginController } from "../controllers/loginController";

const router = express.Router();


// User Signup
router.post("/signup", singupController.SignUP);

// User Login
router.post("/login", loginController.login);

export default router;
