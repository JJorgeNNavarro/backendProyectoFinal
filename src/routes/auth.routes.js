import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";
const router = Router();

router.post("/register", register); //cuando haga una peticion post de register ejecuta register
router.post("/login", login); //cuando haga una peticion post de login ejecuta login

export default router;
