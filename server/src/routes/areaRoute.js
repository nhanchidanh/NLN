import express from "express";
import * as areaRangeController from "../controllers/areaRangeController";

const router = express.Router();

router.get("/all", areaRangeController.getAreas);

export default router;
