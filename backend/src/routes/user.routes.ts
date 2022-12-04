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

userRoutes.get("/profile/:username", ensureAuthenticated, (req, res) =>
   userController.profile(req, res)
);
userRoutes.get("/friends", ensureAuthenticated, (req, res) =>
   userController.getMyFriends(req, res)
);
userRoutes.get("/", ensureAuthenticated, (req, res) =>
   userController.getUsers(req, res)
);
userRoutes.post("/friends", ensureAuthenticated, (req, res) =>
   userController.addFriend(req, res)
);
userRoutes.post("/friends/remove", ensureAuthenticated, (req, res) =>
   userController.removeFriend(req, res)
);
userRoutes.get("/likes", ensureAuthenticated, (req, res) =>
   userController.getLikes(req, res)
);
