import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

export class AuthController {
   private authService = new AuthService();

   async login(request: Request, response: Response) {
      const { email, password } = request.body;
      const { user, token } = await this.authService.login(email, password);
      return response.json({ user, token });
   }

   async me(request: Request, response: Response) {
      const { userId } = request;
      const user = await this.authService.me(userId);
      return response.json({ user });
   }
}
