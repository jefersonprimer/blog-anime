'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Post } from '@/types/posts';

export default function PostDetailPage() {
  const params = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Captura os parâmetros da URL
  const { category, year, month, day, slug } = params;

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);
        console.log("Fetching with params:", { category, year, month, day, slug });

        // Busca todos os posts
        const response = await axios.get('https://blog-backend-ten-plum.vercel.app/api/posts');
        const allPosts = response.data;
        
        // Busca primária: tenta encontrar por combinação exata dos parâmetros
        let foundPost = allPosts.find((p: Post) => {
          // Converte a string de data em componentes
          const dateStr = p.date; // Formato "YYYY-MM-DD"
          const [postYear, postMonth, postDay] = dateStr.split('-');
          
          // Comparação com todos os parâmetros
          const categoryMatch = p.category.toLowerCase() === category?.toLowerCase();
          const yearMatch = postYear === year;
          const monthMatch = postMonth === month;
          const dayMatch = postDay === day;
          const slugMatch = p.slug === slug;
          
          console.log(`Post ${p.id} matches:`, {
            categoryMatch, yearMatch, monthMatch, dayMatch, slugMatch,
            fullMatch: categoryMatch && yearMatch && monthMatch && dayMatch && slugMatch
          });
          
          return categoryMatch && yearMatch && monthMatch && dayMatch && slugMatch;
        });

        // Se não encontrou, tenta uma busca apenas pelo slug
        if (!foundPost) {
          console.log("First search failed, trying by slug only");
          foundPost = allPosts.find((p: Post) => p.slug === slug);
        }

        // Se ainda não encontrou, tenta pelo ID em slugs que têm o formato "ID-resto-do-slug"
        if (!foundPost && slug && slug.includes('-')) {
          console.log("Second search failed, trying by ID in slug");
          const potentialId = slug.split('-')[0];
          if (!isNaN(Number(potentialId))) {
            foundPost = allPosts.find((p: Post) => p.id === Number(potentialId));
          }
        }

        if (foundPost) {
          console.log("Found post:", foundPost);
          setPost(foundPost);
        } else {
          setError('Post não encontrado com os parâmetros fornecidos.');
        }
      } catch (err) {
        console.error("Erro ao buscar o post:", err);
        setError(`Erro ao carregar o post: ${(err as Error).message}`);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchPost();
    } else {
      setError('Slug não fornecido na URL.');
      setLoading(false);
    }
  }, [category, year, month, day, slug]);

  if (loading) {
    return <div className="container mx-auto p-4">Carregando...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4 text-red-500">{error}</div>;
  }

  if (!post) {
    return <div className="container mx-auto p-4">Post não encontrado.</div>;
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      {/* Título e Data */}
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-4">
        {new Date(post.date).toLocaleDateString('pt-BR', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })}
      </p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-[#F0EDE7] border border-[#F0EDE7] text-[#298382] text-xs font-semibold px-2 py-1 rounded-[10px]"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* Conteúdo */}
      <div className="prose max-w-none mb-8">
        <p>{post.content}</p>
      </div>
      
      {/* Imagens */}
      {post.images && post.images.length > 0 && (
        <div className="space-y-4 mb-8">
          {post.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${post.title} - Imagem ${index + 1}`}
              className="w-full h-auto rounded-lg shadow"
            />
          ))}
        </div>
      )}
      
      {/* Vídeos */}
      {post.videos && post.videos.length > 0 && (
        <div className="space-y-6 mb-8">
          {post.videos.map((video, index) => (
            <div key={index} className="aspect-video">
              <iframe
                src={video}
                title={`${post.title} - Vídeo ${index + 1}`}
                className="w-full h-full rounded-lg shadow"
                allowFullScreen
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          ))}
        </div>
      )}
      
      {/* Autor e Categoria */}
      <div className="border-t border-gray-200 pt-4 mt-6">
        <p className="text-sm">
          <span className="text-gray-600">Autor:</span> <span className="font-medium text-[#00787E]">{post.author}</span> | 
          <span className="text-gray-600"> Categoria:</span> <span className="font-medium">{post.category}</span>
        </p>
      </div>
    </div>
  );
}