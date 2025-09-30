import express from "express";
import { getAllPanel } from "../controllers/panelController.js";

const router = express.Router();
router.get("/", getAllPanel);



export default router;