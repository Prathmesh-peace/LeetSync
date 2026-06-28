import { Router } from "express";

import { repository } from "../controllers/repository.controller.js";

const router = Router();

router.get("/", repository);

export default router;