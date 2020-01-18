import { Router } from "express";
const router = Router();
import apiRoutes from "./api";

// Backend API routes
// /api
router.use("/api", apiRoutes);

export default router;
