import { FiLogOut, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Container, ItemList } from "./styles";

export function Sidebar() {
    return (
        <Container>
            <ItemList>
                <FiUsers />
                <Link to='/friends'>Amigos</Link>
            </ItemList>

            <ItemList>
                <FiLogOut />
                <p>Sair</p>
            </ItemList>
        </Container>
    )
}