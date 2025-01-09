import e from "express";
import { signUp } from "../controllers/auth.controll.js";

const router = e.Router();

router.post("/signup", signUp)

export default router;