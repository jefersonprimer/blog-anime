// components/post/NewsGrid.tsx

import PostCard from './PostCard';
import { Post } from '@/types/posts';
import Link from 'next/link';

type NewsGridProps = {
  posts: Post[];
};

const NewsGrid: React.FC<NewsGridProps> = ({ posts }) => {
  // Filtrar apenas os posts da categoria "Noticias"
  const newsPosts = posts.filter((post) => post.category === 'noticias');

  if (newsPosts.length === 0) {
    return <p className="text-center text-gray-500">Nenhuma notícia encontrada.</p>;
  }

  // Mostrar apenas os 5 primeiros posts
  const displayedPosts = newsPosts.slice(0, 5);

  return (
    <div>
      <h1 className='text-3xl text-black border-b-4 border-[#F47521] mr-2 my-4'>Últimas notícias</h1>
      <div className="flex flex-col bg-[#F0EDE7] mr-2">
        {displayedPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        {/* Se houver mais de 5 notícias, mostrar o botão "Ver mais" */}
        {newsPosts.length > 5 && (
          <div className="text-center mt-4">
            <Link
              href="/news/latest"
              className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 transition rounded-md"
            >
              Ver mais
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsGrid;
