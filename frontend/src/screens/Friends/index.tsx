import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CardFriend } from "../../components/CardFriend";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { BodyContent, Container, Content, ListFriends } from "./styles";

interface IFriend {
   name: string;
   username: string;
   avatar: string;
   id: number;
}

export function Friends() {
   const [friends, setFriends] = useState<IFriend[]>([]);

   useEffect(() => {
      async function getFriends() {
         const { data } = await api.get("/users/friends");

         data.friends = [
            ...data.friends.followings.map((item: any) => item.follower),
            ...data.friends.followed_by.map((item: any) => item.following),
         ];

         const friendsFormatted = data.friends.map((friend: IFriend) => ({
            username: friend.username,
            name: friend.name,
            avatar: friend.avatar,
            id: friend.id,
         }));

         setFriends(friendsFormatted);
      }
      getFriends();
   }, []);

   async function removeFriend(friend_id: number) {
      const { data } = await api.post("users/friends/remove", {
         friend_id,
      });

      if (!data.error) {
         toast.success("Amigo adicionado com sucesso");
         const newList = [...friends];
         const index = newList.findIndex((friend) => friend.id === friend_id);
         if (index > -1) {
            newList.splice(index, 1);
            setFriends(newList);
         }
      } else {
         toast.warn("Vocês já são amigos");
      }
   }
   return (
      <Container>
         <Header />

         <Content>
            <Sidebar />

            <BodyContent>
               <h1>Amigos</h1>

               {friends.length ? (
                  <ListFriends>
                     {friends.map((friend) => (
                        <CardFriend
                           removeFriend={removeFriend}
                           key={friend.id}
                           friend={friend}
                        />
                     ))}
                  </ListFriends>
               ) : (
                  <h4>Nenhum amigo encontrado</h4>
               )}
            </BodyContent>
         </Content>
      </Container>
   );
}
