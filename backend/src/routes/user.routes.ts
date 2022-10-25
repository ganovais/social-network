import { Router } from "express";
import multer from "multer";
import upload from "../config/upload";
import { UserController } from "../controllers/user.controller";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

export const userRoutes = Router();
const userController = new UserController();

const uploadUser = multer(upload.upload("avatar"));

userRoutes.post("/", (req, res) => userController.create(req, res));
userRoutes.put("/", ensureAuthenticated, (req, res) =>
   userController.update(req, res)
);

userRoutes.patch(
   "/avatar",
   ensureAuthenticated,
   uploadUser.single("file"),
   (req, res) => userController.updateAvatar(req, res)
);
