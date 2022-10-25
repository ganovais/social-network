import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import { deleteFile } from "../utils/file";

export class UserService {
   private prisma = new PrismaClient();

   exclude<User, Key extends keyof User>(
      user: User,
      ...keys: Key[]
   ): Omit<User, Key> {
      for (let key of keys) {
         delete user[key];
      }
      return user;
   }

   async findByEmail(email: string) {
      const user = await this.prisma.user.findUnique({
         where: { email },
      });

      return user;
   }

   validateFields(name: string, email: string, password: string) {
      if (!name) {
         throw new Error("Nome é obrigatório");
      }
      if (!email) {
         throw new Error("E-mail é obrigatório");
      }
      if (!password) {
         throw new Error("Senha é obrigatório");
      }
      if (password.length < 6) {
         throw new Error("Informe uma senha com pelo menos 6 caracteres");
      }
   }

   async generateUsername(name: string) {
      const arrayName = name.toLowerCase().split(" ");

      let username =
         arrayName.length > 1
            ? arrayName[0] + "_" + (arrayName[1] != "" ? arrayName[1] : "zxcd")
            : arrayName[0] + "_zxcd";

      const lastUsername = await this.prisma.user.findMany({
         where: { username: { contains: username } },
         orderBy: { created_at: "desc" },
         take: 1,
      });

      if (lastUsername.length) {
         const arrayUsername = lastUsername[0].username.split("_");
         let increment = 0;

         if (arrayUsername.length > 2) {
            increment = parseInt(arrayUsername[2]) + 1;
            username = username + "_" + increment;
         } else {
            username = username + "_1";
         }
      }

      return username;
   }

   async create(name: string, email: string, password: string) {
      this.validateFields(name, email, password);

      const userExists = await this.findByEmail(email);

      if (userExists) {
         throw new Error("E-mail já está cadastrado!");
      }

      const username = await this.generateUsername(name);

      const passwordHash = await hash(password, 10);

      const user = await this.prisma.user.create({
         data: {
            name,
            email,
            password: passwordHash,
            username,
         },
      });

      this.exclude(user, "password");
      return user;
   }

   async update(userId: number, description: string, password: string) {
      const user = await this.prisma.user.findUnique({
         where: { id: userId },
      });

      if (!user) {
         throw new Error("Invalid token");
      }

      let passwordHash = "";

      if (password) {
         passwordHash = await hash(password, 10);
      }

      const userUpdated = await this.prisma.user.update({
         data: {
            description: description || user.description,
            password: passwordHash || user.password,
         },
         where: { id: userId },
      });

      this.exclude(userUpdated, "password");

      return userUpdated;
   }

   async updateAvatar(userId: number, avatar: string) {
      const user = await this.prisma.user.findUnique({
         where: {
            id: userId,
         },
      });

      if (!user) {
         throw new Error("Token invalid");
      }

      if (user.avatar) {
         await deleteFile('avatar', user.avatar);
      }

      const updatedUser = await this.prisma.user.update({
         data: {
            avatar,
         },
         where: { id: userId },
      });

      this.exclude(updatedUser, "password");

      return updatedUser;
   }
}
