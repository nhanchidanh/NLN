import express from "express";
import * as priceRangeController from "../controllers/priceRangeController";

const router = express.Router();

router.get("/all", priceRangeController.getPrices);

export default router;
