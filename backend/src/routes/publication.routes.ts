import { Router } from "express";
import { PublicationController } from "../controllers/publication.controller";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import multer from "multer";
import upload from "../config/upload";

export const publicationRoutes = Router();
const publicationController = new PublicationController();

const uploadPublication = multer(upload.upload("publication"));

publicationRoutes.post(
   "/",
   ensureAuthenticated,
   uploadPublication.single("file"),
   (req, res) => publicationController.create(req, res)
);

publicationRoutes.get("/", (req, res) =>
   publicationController.listAll(req, res)
);


publicationRoutes.post("/likes/:publicationId", ensureAuthenticated, (req, res) =>
   publicationController.like(req, res)
);
