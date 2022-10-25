import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

export class AuthService {
   private prisma = new PrismaClient();

   async login(email: string, password: string) {
      const user = await this.prisma.user.findUnique({
         where: { email },
      });

      if (!user) {
         throw new Error("E-mail ou senha incorretos.");
      }

      const passwordMatch = await compare(password, user.password);

      if (!passwordMatch) {
         throw new Error("E-mail ou senha incorretos.");
      }

      const token = sign({}, "0c01cc2f3dfbec4a0dbb938afb7599f7", {
         subject: String(user.id),
         expiresIn: "1d",
      });

      return {
         user: {
            name: user.name,
            email: user.email,
            username: user.username,
            avatar: user.avatar,
            description: user.description,
         },
         token,
      };
   }

   async me(userId: number) {
      const user = await this.prisma.user.findUnique({
         where: { id: userId },
      });

      return {
         name: user?.name,
         email: user?.email,
         username: user?.username,
         avatar: user?.avatar,
         description: user?.description,
      };
   }
}
