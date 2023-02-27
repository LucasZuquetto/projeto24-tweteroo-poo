import { Router } from "express";
import {
   getTweets,
   getTweetsByUsername,
   postTweets,
} from "../controllers/tweetsController.js";

const tweetsRouter = Router();

tweetsRouter
   .post("/tweets", postTweets)
   .get("/tweets/:username", getTweetsByUsername)
   .get("/tweets", getTweets);

export default tweetsRouter;
