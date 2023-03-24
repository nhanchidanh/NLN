import { Router } from "express";
import * as postController from "../controllers/postController";
const router = Router();

router.get("/all", postController.getPost);
router.get("/limit", postController.getPostLimit);
router.get("/new-post", postController.getNewPost);

export default router;
