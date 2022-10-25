import { useState } from 'react';
import { FiRefreshCw } from 'react-icons/fi';
import { Header } from '../../components/Header';
import { NewPostInput } from '../../components/NewPostInput';
import { Posts } from '../../components/Posts';
import { Sidebar } from '../../components/Sidebar';
import { BodyPosts, Container, Content } from './styles';

export function Home() {
  const [posts, setPosts] = useState([]);
  
  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />

        <BodyPosts>
          <NewPostInput />

          <div className="refresh">
            <h1>Postagens</h1>

            <FiRefreshCw size={30} />
          </div>

          <Posts posts={posts} />
        </BodyPosts>
      </Content>
    </Container>
  );
}
