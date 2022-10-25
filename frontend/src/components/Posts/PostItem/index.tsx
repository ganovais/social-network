import { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { CustomAvatar } from '../../Avatar';
import { Container, PostContent, PostFooter, PostHeader } from './styles';

interface IUser {
  name: string;
  username: string;
  avatar: string;
}

interface IPost {
  id: number;
  user: IUser;
  content?: string;
  image?: string;
  likes: number;
  created_at: string;
  meLiked: boolean;
}
interface PostProps {
  post: IPost;
}

export function PostItem({ post }: PostProps) {
  const [likes, setLikes] = useState(post.likes);
  const [meLiked, setMeLiked] = useState(post.meLiked);

  async function handleLike(id: number) {
    setMeLiked(true);
  }

  return (
    <Container>
      <PostHeader>
        <CustomAvatar
          username={post.user.username}
          name={post.user.name}
          avatar={post.user.avatar}
        />

        <div>
          <p className="username">@{post.user.username}</p>
          <p className="post-date">@{post.created_at}</p>
        </div>
      </PostHeader>
      <PostContent>
        {post.content && <p>{post.content}</p>}
        {post.image && (
          <img
            className="pub-image"
            src={post.image}
            alt="Imagem da publicação"
          />
        )}
      </PostContent>
      <PostFooter>
        <FiHeart
          color={meLiked ? '#e94a4a' : '#ccc'}
          onClick={() => handleLike(post.id)}
        />
        {likes}
      </PostFooter>
    </Container>
  );
}
