"use strict"

import { Router } from "express";
import {
    handleLogin,
    handleRegister
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post('/login/', handleLogin);
userRouter.post('/register/', handleRegister);

export { userRouter }