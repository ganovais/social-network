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

   async getMyFriends(request: Request, response: Response) {
      const { userId } = request;
      const friends = await this.userService.getMyFriends(userId);

      return response.status(200).json({ friends });
   }

   async getUsers(request: Request, response: Response) {
      const username = request.query.username as string;
      const { userId } = request;
      const users = await this.userService.getUsers(userId, username);

      return response.status(200).json(users);
   }

   async addFriend(request: Request, response: Response) {
      const { userId } = request;
      const { friend_id } = request.body;
      await this.userService.addFriend(friend_id, userId);

      return response.status(200).json({ error: false });
   }

   async removeFriend(request: Request, response: Response) {
      const { userId } = request;
      const { friend_id } = request.body;
      await this.userService.removeFriend(friend_id, userId);

      return response.status(204).json({ error: false });
   }

   async getLikes(request: Request, response: Response) {
      const { userId } = request;
      const likes = await this.userService.getLikes(userId);

      return response.status(200).json({ likes });
   }

   async profile(request: Request, response: Response) {
      const username = request.params.username as string;
      
      const { userId } = request;
      const user = await this.userService.profile(userId, username);

      return response.status(200).json(user);
   }
}
