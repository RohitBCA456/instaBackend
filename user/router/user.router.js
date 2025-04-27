import Router from "express";
import { loginUser, logoutUser, makeAccount } from "../controller/user.controller.js";
import { verifyJWT } from "../middleware/auth.js";

const router = Router();

router.route("/createAccount").post(makeAccount);
router.route("/login").post(loginUser);
router.route("/logout").get(verifyJWT, logoutUser);

export default router;
