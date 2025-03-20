"use client";

import useFetchPosts from "@/app/hooks/useFetchPosts";
import Destaques from "./Destaques";
import FilteredPostGrid from "../cards/FilteredPostGrid";
import ArticlesGrid from "./ArticlesGrid";
import Link from "next/link";
import FilteredPostGridRow from "../cards/FilteredPostGrid";

const AdBanner = () => {
  const { posts, loading, error } = useFetchPosts();

  if (loading) {
    return <p className="text-center text-lg">Carregando posts...</p>;
  }

  if (error) {
    return <p className="text-center text-lg text-red-500">{error}</p>;
  }

  // Filtra apenas posts da categoria "anuncio"
  const anuncios = posts.filter((post) => post.category === "anuncios");

  return (
    <div className="relative w-full max-w-[1200px] mx-auto mt-[30px]">
      <div className="w-full max-w-[1200px] border-b-4 border-[#F47521] flex justify-between items-center">
        <h1 className="text-3xl text-black my-4">Anúncios</h1>
        <div className="text-[#008382] border border-[#008382] px-4 py-2">
          <Link href="/news/announcements">Todos os anúncios</Link>
        </div>
      </div>

      {/* Grid com os três componentes, cada um recebendo uma parte dos anúncios */}
      <div className="grid grid-cols-12 mb-8">
        {/* Destaques (Primeiros 2 anúncios) */}
        <div className="col-span-5">
          <FilteredPostGridRow
            posts={anuncios} 
           
            category="anuncios" 
            limit={1} 
          />
        </div>
    

        {/* Grid de anúncios (Próximos 2 anúncios) */}
        <div className="col-span-3">
          <FilteredPostGrid 
            posts={anuncios} 
           
            category="anuncios" 
            limit={1} 
          />
        </div>

        {/* Segundo Grid de anúncios (Últimos 2 anúncios) */}
        <div className="col-span-4">
        <FilteredPostGrid 
            posts={anuncios}    
            category="anuncios" 
            limit={2} 
          />
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
