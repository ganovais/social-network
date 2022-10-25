import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

export const authRoutes = Router();
const authController = new AuthController();

authRoutes.post("/login", (req, res) => authController.login(req, res));
authRoutes.get("/me", ensureAuthenticated, (req, res) =>
   authController.me(req, res)
);
