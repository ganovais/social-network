import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cors from "cors";
import { resolve } from "path";
import { router } from "./routes";

const api = express();
api.use(express.json());
api.use(cors());

const publicationFiles = resolve(__dirname, "uploads", "publication");
const avatarFiles = resolve(__dirname, "uploads", "avatar");

api.use("/uploads/publication", express.static(`${publicationFiles}`));
api.use("/uploads/avatar", express.static(`${avatarFiles}`));

api.use(router);

api.use((err: Error, req: Request, res: Response, next: NextFunction) => {
   return res.status(401).json({
      error: true,
      message: err.message,
   });
});

api.listen(3333, () => {
   console.log("Application is running on port 3333");
});
