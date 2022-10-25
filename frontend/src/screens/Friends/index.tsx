import { CardFriend } from '../../components/CardFriend';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { BodyContent, Container, Content, ListFriends } from './styles';

export function Friends() {
  return (
    <Container>
      <Header />

      <Content>
        <Sidebar />

        <BodyContent>
          <h1>Amigos</h1>

          <ListFriends>
            <CardFriend
              friend={{
                name: 'Gabriel',
                username: 'ganovais',
                avatar: '',
                id: 1,
              }}
            />
          </ListFriends>
        </BodyContent>
      </Content>
    </Container>
  );
}
