import express from "express";
import { signin } from "./../src/controllers/user-controller";
import { loginValidation } from "./../src/Validation/login/login.validation";


const router = express.Router();

router.post("/signin", loginValidation, signin);

export default router;