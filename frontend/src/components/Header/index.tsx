import { Link } from "react-router-dom";
import { Container, Input } from "./styles";
import logo from "../../assets/logo.svg";
import { CustomAvatar } from "../Avatar";
import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";
import { ModalFriendship } from "../Modal";
import { api } from "../../services/api";

interface IUser {
   name: string;
   username: string;
   avatar: string;
   id: number;
}

export function Header() {
   const { user } = useAuth();
   const [search, setSearch] = useState("");
   const [users, setUsers] = useState<IUser[]>([]);
   const [showModal, setShowModal] = useState(false);

   useEffect(() => {
      async function getUsers() {
         if (!search || search.length < 5) {
            document.body.style.overflow = "auto";
            setShowModal(false);
            return;
         }

         const { data } = await api.get("/users", {
            params: {
               username: search,
            },
         });

         setShowModal(true);
         setUsers(data);
      }

      getUsers();
   }, [search]);

   function handleCloseModal() {
      setSearch("");
      setShowModal(false);
      setUsers([]);
   }

   return (
      <Container>
         <Link to="/home">
            <img src={logo} alt="Logo da @socialMedia" />
         </Link>

         <Input
            value={search}
            type="search"
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar amigo @username"
         />

         {showModal && (
            <ModalFriendship closeModal={handleCloseModal} users={users} />
         )}

         <CustomAvatar
            avatar={user.avatar}
            name={user.name}
            username={user.username}
         />
      </Container>
   );
}
