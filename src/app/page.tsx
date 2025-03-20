'use client';

import { useState, useEffect } from 'react';
import useFetchPosts from './hooks/useFetchPosts';
import PostGrid from './components/post/PostGrid';
import Sidebar from './components/sidebar/Sidebar';
import Banner from './components/Banner';
import NewsGrid from './components/post/NewsGrid';
import ArticlesGrid from './components/post/ArticlesGrid';
import DestaqueCarousel from './components/post/DestaqueCarousel';
import Destaques from './components/post/Destaques';
import AdBanner from './components/post/AdBanner';
import AnimeSeriesCard from './components/AnimeSeriesCard';
import QuizzesAndTests from './components/post/QuizzesAndTests';
import Guides from './components/post/Guides';


const HomePage = () => {
  const { posts, loading, error } = useFetchPosts();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return <p className="text-center text-lg">Carregando posts...</p>;
  }

  if (error) {
    return <p className="text-center text-lg text-red-500">{error}</p>;
  }

  return (
    <div className="relative">
      <div className="w-[1200px] mx-auto px-4">
        <Banner
          src="https://a.storyblok.com/f/178900/2304x154/02c4ee539d/pt_sololevelings2_cr_desktop_2304x154.png/m/filters:quality(95)format(webp)"
          alt="Solo Leveling"
          width={2304}
          height={154}
        />
        <div className="grid grid-cols-12 mb-8">
          <div className="col-span-3">
            <NewsGrid posts={posts} />
          </div>
          <div className="col-span-6">
            <Destaques posts={posts} />
          </div>
          <div className="col-span-3">
            <ArticlesGrid posts={posts} />
          </div>
        </div>
        <Banner
          src="https://a.storyblok.com/f/178900/2304x154/27d59539f6/q12025_crnews_bannerplacements-pt-br-cr_desktop_2304x154.png/m/filters:quality(95)format(webp)"
          alt="Temporada de janeiro de 2025"
          width={2304}
          height={154}
        />
        <AdBanner />
      </div>
      <AnimeSeriesCard />
      <QuizzesAndTests />
      
      <AnimeSeriesCard />
     
      <Guides />
      {/* Botão Voltar ao Topo */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <>voltar ao Topo</>
        </button>
      )}
    </div>
  );
};

export default HomePage;
