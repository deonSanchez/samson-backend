import express from "express";
import controller from "../controller/posts";

const router = express.Router();

router.get("/", controller.getPosts);
router.get("/:id", controller.getPost);

export default router;
