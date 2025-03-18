import { Post } from '@/types/posts';
import Link from 'next/link';

type PostCardRowsProps = {
  post: Post;
};

const PostCardRows: React.FC<PostCardRowsProps> = ({ post }) => {
  return (
    <div className="border border-gray-300 p-4 mb-4 flex flex-row items-start gap-6">
      {/* Imagem à esquerda */}
      <img
        src={"https://www.intoxianime.com/wp-content/uploads/2024/11/81sWQXTqCxL-tile-520x246.jpg"}
        alt={post.title}
        className="w-40 h-40 object-cover rounded-lg"
      />
      
      {/* Conteúdo à direita */}
      <div className="flex flex-col justify-between">
        <p className="text-sm text-gray-500">{post.tags}</p>
        <p className="text-sm text-gray-500">{post.date}</p>
        <h2 className="text-xl text-[#000] font-bold mt-2">{post.title}</h2>
        <p className="text-base text-gray-700 mt-2">{post.author}</p>
      </div>
    </div>
  );
};

export default PostCardRows;
