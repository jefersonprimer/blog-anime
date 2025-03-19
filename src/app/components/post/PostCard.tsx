"use client";

import { Post } from "@/types/posts";
import Link from "next/link";

type PostCardProps = {
  post: Post;
};

// Função para formatar a data no formato "Mar 17, 2025"
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
};

// Função para formatar a URL do post
const getPostUrl = (post: Post) => {
  // Formato da data: "YYYY-MM-DD"
  const [year, month, day] = post.date.split('-');
  
  return `/news/${post.category.toLowerCase()}/${year}/${month}/${day}/${post.slug}`;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="border-b border-[#29B9B7] px-3 py-4">
      <Link href={getPostUrl(post)} className="block">
        <img
          src="https://www.intoxianime.com/wp-content/uploads/2024/11/81sWQXTqCxL-tile-520x246.jpg"
          alt={post.title}
          className="w-full h-auto mb-4"
        />
        
        <div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#F0EDE7] hover:bg-white border border-[#F0EDE7] text-[#298382] text-xs font-semibold px-2 py-1 my-1 rounded-[10px]"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-2">{formatDate(post.date)}</p>
          <h2 className="text-xl text-[#000] font-bold mt-2 hover:text-[#00787E] transition-colors">{post.title}</h2>
          <p className="text-base text-[#00787E] mt-2">{post.author}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;