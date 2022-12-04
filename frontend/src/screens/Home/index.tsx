import { useEffect, useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { Header } from "../../components/Header";
import { NewPostInput } from "../../components/NewPostInput";
import { Posts } from "../../components/Posts";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { BodyPosts, Container, Content } from "./styles";

interface LikeProps {
   publication_id: number;
}
export function Home() {
   const [posts, setPosts] = useState([]);

   async function getPosts() {
      const { data } = await api.get("/publications");
      const { data: likes } = await api.get("/users/likes");

      const posts = data.publications.map((pub: any) => {
         const meLiked = likes.likes.some(
            (like: LikeProps) => like.publication_id === pub.id
         );

         return {
            id: pub.id,
            user: pub.user,
            content: pub.description,
            image: pub.image
               ? import.meta.env.VITE_URL_FILE + "publication/" + pub.image
               : null,
            likes: pub.likes.length,
            created_at: new Date(pub.created_at).toLocaleDateString("pt-BR", {
               day: "2-digit",
               month: "long",
               year: "numeric",
            }),
            meLiked,
         };
      });

      setPosts(posts);
   }

   useEffect(() => {
      getPosts();
   }, []);

   return (
      <Container>
         <Header />
         <Content>
            <Sidebar />

            <BodyPosts>
               <NewPostInput reloadPosts={getPosts} />

               <div className="refresh">
                  <h1>Postagens</h1>

                  <FiRefreshCw onClick={getPosts} size={30} />
               </div>

               <Posts posts={posts} />
            </BodyPosts>
         </Content>
      </Container>
   );
}
