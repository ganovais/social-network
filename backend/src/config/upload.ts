import crypto from "node:crypto";
import { resolve } from "node:path";
import multer from "multer";

export default {
   upload(folder: string) {
      return {
         storage: multer.diskStorage({
            destination: resolve(__dirname, "..", "uploads", folder),
            filename: (request, file, callback) => {
               const fileHash = crypto.randomBytes(16).toString("hex");
               const filename = `${fileHash}-${file.originalname}`;

               return callback(null, filename);
            },
         }),
      };
   },
};
