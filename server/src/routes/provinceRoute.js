import express from "express";
import * as provinceController from "../controllers/provinceController";

const router = express.Router();

router.get("/all", provinceController.getProvinces);

export default router;
