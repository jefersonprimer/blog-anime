// components/HomePage.tsx

'use client';

import useFetchPosts from './hooks/useFetchPosts';
import PostGrid from './components/post/PostGrid';
import Sidebar from './components/sidebar/Sidebar';
import Banner from './components/Banner';

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Grid de Posts */}
        <div className="col-span-2 lg:col-span-2">
          <PostGrid posts={posts} />
        </div>

        {/* Sidebar com os componentes */}
        <div className="col-span-1">
          <Sidebar />
        </div>
      </div>
      
    
    </div>
  );
};

export default HomePage;
