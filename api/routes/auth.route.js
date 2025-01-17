import e from "express";
import { signIn, signUp } from "../controllers/auth.controll.js";

const router = e.Router();

router.post("/signup", signUp)
router.post("/signin", signIn)

export default router;