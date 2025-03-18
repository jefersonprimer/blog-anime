"use client"

// components/PostCard.tsx

import { Post } from '@/types/posts';
import Link from 'next/link';

type PostCardProps = {
  post: Post;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="border border-gray-300 p-4 mb-4 flex flex-col items-start">
      <Link href={`/posts/${post.id}/${post.slug}`} className="w-full">
        <img
          src={"https://www.intoxianime.com/wp-content/uploads/2024/11/81sWQXTqCxL-tile-520x246.jpg"}
          alt={post.title}
          className="w-full h-auto rounded-lg"
        />
        <div className="mt-4">
          <p className="text-sm text-gray-500">{post.date}</p>
          <h2 className="text-xl font-bold mt-2">{post.title}</h2>
          <p className="text-base text-gray-700 mt-2">{post.summary}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;