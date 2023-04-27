import express from "express";
import favoriteController from "../controllers/favoriteController";

const router = express.Router();

router.get("/all", favoriteController.getAllByUserId);
router.post("/create", favoriteController.create);
router.delete("/delete", favoriteController.remove);

export default router;
