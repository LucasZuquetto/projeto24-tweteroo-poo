import { Router } from "express";
import authRouter from "./authRouter.js";
import tweetsRouter from "./tweetsRouter.js";

const router = Router();

router.use(authRouter).use(tweetsRouter);

export default router;
