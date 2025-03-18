// components/HomePage.tsx

'use client';

import useFetchPosts from './hooks/useFetchPosts';
import PostGrid from './components/post/PostGrid';
import Sidebar from './components/sidebar/Sidebar';

const HomePage = () => {
  const { posts, loading, error } = useFetchPosts();

  if (loading) {
    return <p className="text-center text-lg">Carregando posts...</p>;
  }

  if (error) {
    return <p className="text-center text-lg text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4"> {/* Garantindo que o conteúdo esteja centralizado com margens laterais iguais */}
      {/* <h1 className="text-3xl font-semibold mb-6 text-center">Posts Recentes</h1> */}

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
