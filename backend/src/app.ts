import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { router } from "./routes";

const api = express();
api.use(express.json());

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
