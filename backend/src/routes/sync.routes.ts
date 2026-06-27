import { Router } from "express";
import { sync } from "../controllers/sync.controller.js";

const router = Router();

router.post("/", sync);

export default router;