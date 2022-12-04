import { useEffect, useState } from "react";
import { FiUserMinus, FiUserPlus } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { toast } from "react-toastify";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Posts } from "../../components/Posts";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { BodyContent, Container, Content, HeaderProfile } from "./styles";

interface IUser {
   id: number;
   name: string;
   username: string;
   description: string;
   followings?: [];
   followed_by?: [];
}

export function Profile() {
   const { username } = useParams();
   const [user, setUser] = useState({} as IUser);
   const [posts, setPosts] = useState([]);
   const [isFriends, setIsFriends] = useState(false);

   useEffect(() => {
      async function getProfile() {
         const { data } = await api.get("/users/profile/" + username);
         setIsFriends(data.followed_by.length || data.followings.length);

         const { data: likes } = await api.get("/users/likes");

         const posts = data.publications.map((pub: any) => {
            const meLiked = likes.likes.some(
               (like: any) => like.publication_id === pub.id
            );

            return {
               id: pub.id,
               user: pub.user,
               content: pub.description,
               image: pub.image
                  ? import.meta.env.VITE_URL_FILE + "publication/" + pub.image
                  : null,
               likes: pub.likes.length,
               created_at: new Date(pub.created_at).toLocaleDateString(
                  "pt-BR",
                  {
                     day: "2-digit",
                     month: "long",
                     year: "numeric",
                  }
               ),
               meLiked,
            };
         });

         setPosts(posts);
         setUser(data);
      }

      getProfile();
   }, [username]);

   async function handleAddFriend() {
      const { data } = await api.post("users/friends", {
         friend_id: user.id,
      });

      if (!data.error) {
         toast.success("Amigo adicionado com sucesso");
      } else {
         toast.warn("Vocês já são amigos");
      }

      setIsFriends(true);
   }

   async function handleRemoveFriend() {
      const { data } = await api.post("users/friends/remove", {
         friend_id: user.id,
      });

      if (!data.error) {
         toast.success("Amigo adicionado com sucesso");
      } else {
         toast.warn("Vocês já são amigos");
      }

      setIsFriends(false);
   }

   return (
      <Container>
         <Header />

         <Content>
            <Sidebar />

            <BodyContent>
               <HeaderProfile>
                  <div>
                     <h1 className="name">{user.name}</h1>
                     <b className="username">{user.username}</b>
                  </div>

                  {isFriends ? (
                     <Button
                        onClick={handleRemoveFriend}
                        title="Remover amigo"
                        icon={<FiUserMinus />}
                     />
                  ) : (
                     <Button
                        onClick={handleAddFriend}
                        title="Adicionar amigo"
                        icon={<FiUserPlus />}
                     />
                  )}
               </HeaderProfile>

               <Tabs style={{ marginTop: "30px" }}>
                  <TabList>
                     <Tab>Informações</Tab>
                     <Tab>Publicações</Tab>
                  </TabList>

                  <TabPanel style={{ paddingTop: 10 }}>
                     <h4 className="title-description">Descrição</h4>
                     <p>
                        {user.description
                           ? user.description
                           : "Nenhuma descrição informada ainda"}
                     </p>
                  </TabPanel>
                  <TabPanel style={{ paddingTop: 10 }}>
                     <Posts posts={posts} />
                  </TabPanel>
               </Tabs>
            </BodyContent>
         </Content>
      </Container>
   );
}
