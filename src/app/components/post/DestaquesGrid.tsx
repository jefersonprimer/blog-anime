// components/post/NewsGrid.tsx


import { Post } from '@/types/posts';
import Link from 'next/link';
import PostCardRows from './PostCardRows';

type DestaquesGridProps = {
  posts: Post[];
};

const DestaquesGrid: React.FC<DestaquesGridProps> = ({ posts }) => {
  // Filtrar apenas os posts da categoria "Noticias"
  const DestaquesGrid = posts.filter((post) => post.category === 'destaques');

  if (DestaquesGrid.length === 0) {
    return <p className="text-center text-gray-500">Nenhuma notícia encontrada.</p>;
  }

  // Mostrar apenas os 5 primeiros posts
  const displayedPosts = DestaquesGrid.slice(0, 5);

  return (
    <div>
      <h1 className='text-3xl text-black border-b-4 border-[#F47521] my-4'>Destaques</h1>
      <div className="flex flex-col bg-[#FFFCF6] ">
        {displayedPosts.map((post) => (
          <PostCardRows key={post.id} post={post} />
        ))}
        {/* Se houver mais de 5 notícias, mostrar o botão "Ver mais" */}
        {DestaquesGrid.length > 5 && (
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

export default DestaquesGrid;
