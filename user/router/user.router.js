import Router from "express";
import {
  changePassword,
  loginUser,
  logoutUser,
  makeAccount,
  uploadPost,
} from "../controller/user.controller.js";
import { verifyJWT } from "../middleware/auth.js";
import multer from "multer";
const router = Router();

router.route("/createAccount").post(makeAccount);
router.route("/login").post(loginUser);
router.route("/logout").get(verifyJWT, logoutUser);
router.route("/change-password").post(verifyJWT, changePassword);

const upload = multer({ dest: "public/temp/" });

router
  .route("/uploadPost")
  .post(verifyJWT, upload.single("post"), uploadPost);

export default router;
