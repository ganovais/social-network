import { FiTrash2 } from "react-icons/fi";
import { CustomAvatar } from "../Avatar";
import { Container } from "./styles";

interface IFriend {
   name: string;
   username: string;
   avatar: string;
   id: number;
}

interface CardFriendProps {
   friend: IFriend;
   removeFriend: (friend_id: number) => void;
}
export function CardFriend({
   friend,
   removeFriend = () => {},
}: CardFriendProps) {
   console.log(friend);

   return (
      <Container>
         <CustomAvatar
            avatar={friend.avatar}
            name={friend.name}
            username={friend.username}
         />
         <div className="info">
            <p className="name">{friend.name}</p>
            <p className="username">@{friend.username}</p>
         </div>

         <FiTrash2 onClick={() => removeFriend(friend.id)} />
      </Container>
   );
}
