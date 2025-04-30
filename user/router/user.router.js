import Router from "express";
import {
  changePassword,
  loginUser,
  logoutUser,
  makeAccount,
  socketChatHandler,
  uploadPost,
} from "../controller/user.controller.js";
import { verifyJWT } from "../middleware/auth.js";
import { upload } from "../middleware/multer.js";
const router = Router();

router.route("/createAccount").post(makeAccount);
router.route("/login").post(loginUser);
router.route("/logout").get(verifyJWT, logoutUser);
router.route("/change-password").post(verifyJWT, changePassword);
router
  .route("/uploadPost")
  .post(verifyJWT, upload.fields([{ name: "post", maxCount: 1 }]), uploadPost);

export default router;
