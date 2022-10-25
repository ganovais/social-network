import { PostItem } from "./PostItem";

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
interface PostsProps {
  posts: IPost[];
}
export function Posts({ posts }: PostsProps) {
  return (
    <div>
      {posts.length ? (
        posts.map((post) => <PostItem key={post.id} post={post} />)
      ) : (
        <h4>Nenhuma publicação encontrada</h4>
      )}
    </div>
  );
}
