import { Router } from "express";
import { login, register, logout } from "../controllers/auth.controller.js";
const router = Router();

router.post("/register", register); //cuando haga una peticion post de register ejecuta register
router.post("/login", login); //cuando haga una peticion post de login ejecuta login
router.post("/logout", logout);
export default router;
