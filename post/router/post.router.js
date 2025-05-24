import { Router } from "express";
import { savePostToDataBase } from "../controller/post.controller.js";

const router = Router();

router.route("/uploadToDataBase").get(savePostToDataBase);

export default router;