import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Avatar, ImageAvatar } from "./styles";

interface CustomAvatarProps {
   avatar?: string;
   name: string;
   username: string;
   closeModal?: () => void;
}

export function CustomAvatar({
   avatar,
   name,
   username,
   closeModal = () => {},
}: CustomAvatarProps) {
   const { user } = useAuth();
   const navigate = useNavigate();

   function handleNavigate() {
      closeModal();
      if (user.username === username) {
         navigate("/profile/me");
      } else {
         navigate(`/profile/${username}`);
      }
   }

   return (
      <div onClick={handleNavigate}>
         {avatar ? (
            <ImageAvatar src={avatar} alt="Imagem de perfil" />
         ) : (
            <Avatar>{name[0] + name[1]}</Avatar>
         )}
      </div>
   );
}
