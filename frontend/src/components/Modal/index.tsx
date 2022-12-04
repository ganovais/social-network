import { useEffect } from "react";
import { CustomAvatar } from "../Avatar";
import {
   Container,
   SearchResult,
   Users,
   User,
   UserInformation,
} from "./styles";

interface IUser {
   name: string;
   username: string;
   avatar: string;
   id: number;
}

interface ModalFriendshipProps {
   closeModal: () => void;
   users: IUser[];
}
export function ModalFriendship({ closeModal, users }: ModalFriendshipProps) {
   useEffect(() => {
      document.body.style.overflow = "hidden";
   }, []);

   function handleCloseModal() {
      closeModal();
      document.body.style.overflow = "auto";
   }

   return (
      <Container onClick={handleCloseModal}>
         <SearchResult onClick={(e) => e.stopPropagation()}>
            <Users>
               {users.length ? (
                  users.map((user) => (
                     <User key={user.id}>
                        <CustomAvatar
                           avatar={user.avatar}
                           username={user.username}
                           name={user.name}
                           closeModal={handleCloseModal}
                        />
                        <UserInformation>
                           <p>@{user.username}</p>
                           <p>{user.name}</p>
                        </UserInformation>
                     </User>
                  ))
               ) : (
                  <p>Nenhum amigo encontrado, tente com outro @username</p>
               )}
            </Users>
         </SearchResult>
      </Container>
   );
}
