import express from "express";
import { authController } from "../controllers/authController"


export const authRouter = express.Router();

authRouter.post('/registration', authController.register)
authRouter.post('/login', authController.login)
