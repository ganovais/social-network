import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
   private userService = new UserService();

   async create(request: Request, response: Response) {
      const { name, email, password } = request.body;

      const user = await this.userService.create(name, email, password);
      return response.status(201).json({ user });
   }

   async update(request: Request, response: Response) {
      const { description, password } = request.body;
      const { userId } = request;

      const user = await this.userService.update(userId, description, password);
      return response.status(200).json({ user });
   }

   async updateAvatar(request: Request, response: Response) {
      const avatar = request.file?.filename!;
      const { userId } = request;

      const user = await this.userService.updateAvatar(userId, avatar);
      return response.status(200).json({ user });
   }
}
