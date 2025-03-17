// components/PostGrid.tsx

import PostCard from './PostCard';
import { Post } from '@/types/posts';

type PostGridProps = {
  posts: Post[];
};

const PostGrid: React.FC<PostGridProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostGrid;
