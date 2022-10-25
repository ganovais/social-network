import { Request, Response } from "express";
import { PublicationService } from "../services/publication.service";

export class PublicationController {
   private publicationService = new PublicationService();

   async create(request: Request, response: Response) {
      const { userId } = request;
      const { description } = request.body;
      const image = request.file?.filename as any;

      const publication = await this.publicationService.create(
         userId,
         description,
         image
      );

      return response.json({ publication });
   }

   async listAll(request: Request, response: Response) {
      const publications = await this.publicationService.listAll();

      return response.status(200).json({ publications });
   }

   async like(request: Request, response: Response) {
      const { userId } = request;
      const { publicationId } = request.params;
      const type = await this.publicationService.like(
         userId,
         parseInt(publicationId)
      );
      return response.status(200).json({ type });
   }
}
