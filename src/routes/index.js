import express from "express";
import welcome from "./welcome-routes";
import article from "./articles-routes";
import userMessages from "./userMessages-routes";
import comment from "./comments-routes";
import user from "./user-routes";



const router = express.Router();

router.use("/", welcome);
router.use("/article", article);
router.use("/userMessages", userMessages);
router.use("/comment", comment);
router.use("/user", user);

export default router;
