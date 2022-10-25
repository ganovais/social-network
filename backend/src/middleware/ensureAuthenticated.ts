import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
   sub: string;
}

export async function ensureAuthenticated(
   request: Request,
   response: Response,
   next: NextFunction
) {
   const prisma = new PrismaClient();
   const authHeader = request.headers.authorization;

   if (!authHeader) {
      throw new Error("Token is missing");
   }

   const [, token] = authHeader.split(" ");

   try {
      const { sub: user_id } = verify(
         token,
         "0c01cc2f3dfbec4a0dbb938afb7599f7"
      ) as Payload;

      const user = await prisma.user.findUnique({
         where: { id: parseInt(user_id) },
      });

      if(!user) {
         throw new Error("Invalid token");
      }

      request.userId = parseInt(user_id);
      next();
   } catch (error: any) {
      throw new Error(error);
   }
}
