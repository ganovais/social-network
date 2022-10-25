import { PrismaClient } from "@prisma/client";

export class PublicationService {
   private prisma = new PrismaClient();

   async create(userId: number, description: string, image: string) {
      const publication = await this.prisma.publication.create({
         data: {
            description,
            image,
            user_id: userId,
         },
      });

      return publication;
   }

   async listAll() {
      const publications = await this.prisma.publication.findMany({
         include: {
            user: {
               select: {
                  password: false,
                  name: true,
                  username: true,
                  avatar: true,
               },
            },
            likes: true,
         },
         orderBy: { created_at: "desc" },
      });

      return publications;
   }

   async like(userId: number, publicationId: number) {
      let type = "minus";
      const exists = await this.prisma.likes.findFirst({
         where: {
            publication_id: publicationId,
            user_id: userId,
         },
      });

      if (exists) {
         await this.prisma.likes.deleteMany({
            where: {
               publication_id: publicationId,
               user_id: userId,
            },
         });
      } else {
         await this.prisma.likes.create({
            data: {
               publication_id: publicationId,
               user_id: userId,
            },
         });
         type = "plus";
      }

      return type;
   }
}
