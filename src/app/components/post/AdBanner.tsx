'use client';

import useFetchPosts from "@/app/hooks/useFetchPosts";
import ArticlesGrid from "./ArticlesGrid";
import Destaques from "./Destaques";
import NewsGrid from "./NewsGrid";

    
const AdBanner = () => {
const { posts, loading, error } = useFetchPosts();

if (loading) {
    return <p className="text-center text-lg">Carregando posts...</p>;
}

if (error) {
    return <p className="text-center text-lg text-red-500">{error}</p>;
}
  return (
    <div className="relative w-full max-w-[1200px] mx-auto mt-[30px]">
        <div className="w-full max-w-[1200px] flex justify-between items-center">
            <h1 className="text-3xl text-black border-b-4 border-[#F47521]  my-4">Anúncios</h1>
            <div className="text-[#008382] border-1 border-[#008382] px-4 py-2">
                Todos os anúncios
            </div>
        </div>

      {/* Ajuste da grid */}
      <div className="grid grid-cols-12 mb-8">
        {/* Sidebar (50% da largura) */}
        <div className="col-span-5">
         <Destaques posts={posts} />
        </div>

        {/* Primeiro Grid de Posts (25% da largura) */}
        <div className="col-span-3">
          <NewsGrid posts={posts} />
        </div>

        {/* Segundo Grid de Posts (25% da largura) */}
        <div className="col-span-4">
          <ArticlesGrid posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
