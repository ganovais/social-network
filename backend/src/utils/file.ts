import fs from "node:fs";
import { resolve } from "node:path";

export async function deleteFile(folder: string, filename: string) {
   try {
      const destination = resolve(__dirname, "..", "uploads", folder, filename);
      
      await fs.promises.stat(destination);

      await fs.promises.unlink(destination);
   } catch (error) {
      return;
   }
}
