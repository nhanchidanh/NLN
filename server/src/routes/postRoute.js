import { Router } from "express";
import verifyToken from "../middlewares/verifyToken";
import * as postController from "../controllers/postController";
const router = Router();

router.get("/all", postController.getPost);
router.get("/limit", postController.getPostLimit);
router.get("/new-post", postController.getNewPost);

router.post("/create-post", verifyToken, postController.createPost);

export default router;
