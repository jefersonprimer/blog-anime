'use client';

import useFetchPosts from './hooks/useFetchPosts';
import PostGrid from './components/post/PostGrid';
import Sidebar from './components/sidebar/Sidebar';
import Banner from './components/Banner';
import NewsGrid from './components/post/NewsGrid';
import ArticlesGrid from './components/post/ArticlesGrid';
import DestaqueCarousel from './components/post/DestaqueCarousel';
import Destaques from './components/post/Destaques';

const HomePage = () => {
  const { posts, loading, error } = useFetchPosts();

  if (loading) {
    return <p className="text-center text-lg">Carregando posts...</p>;
  }

  if (error) {
    return <p className="text-center text-lg text-red-500">{error}</p>;
  }

  return (
    <div className="w-[1200px] mx-auto px-4">
      <Banner
        src="https://a.storyblok.com/f/178900/2304x154/02c4ee539d/pt_sololevelings2_cr_desktop_2304x154.png/m/filters:quality(95)format(webp)"
        alt="Solo Leveling"
        width={2304}
        height={154}
      />

      {/* Ajuste da grid */}
      <div className="grid grid-cols-12">
        {/* Primeiro Grid de Posts (25% da largura) */}
        <div className="col-span-3">
          <NewsGrid posts={posts} />
        </div>

        {/* Sidebar (50% da largura) */}
        <div className="col-span-6">
          <Destaques posts={posts} />
        </div>

        {/* Segundo Grid de Posts (25% da largura) */}
        <div className="col-span-3">
          <ArticlesGrid posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
