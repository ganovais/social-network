import { Router } from "express";
import { authRoutes } from "./auth.routes";
import { publicationRoutes } from "./publication.routes";
import { userRoutes } from "./user.routes";

export const router = Router();

router.use("/api", authRoutes);
router.use("/api/users", userRoutes);
router.use("/api/publications", publicationRoutes);
