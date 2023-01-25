import express from "express";
import { signup, login } from "./../src/controllers/user-controller";

const router = express.Router();

router.post("/signup", signup);
router.get("/login", login);

module.exports = router;
