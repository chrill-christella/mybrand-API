import express from "express";
const { signup, login } = require("./../src/controllers/user-controller");

const router = express.Router();

router.post("/signup", signup);
router.get("/login", login);

export default router;
