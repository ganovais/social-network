import { FiLogOut, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Container, ItemList } from "./styles";

export function Sidebar() {
   const { signOut } = useAuth();
   return (
      <Container>
         <ItemList>
            <FiUsers />
            <Link to="/friends">Amigos</Link>
         </ItemList>

         <ItemList onClick={signOut}>
            <FiLogOut />
            <p>Sair</p>
         </ItemList>
      </Container>
   );
}
