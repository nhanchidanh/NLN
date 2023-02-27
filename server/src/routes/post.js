import { Router } from "express";
import * as postController from "../controllers/postController";
const router = Router();

router.get("/all", postController.getPost);

export default router;
