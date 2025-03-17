"use client"

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Post } from '@/types/posts';

export default function PostDetailPage() {
  const params = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const postId = params.id as string;

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);
        
        // Log the URL we're fetching from
        const url = `https://blog-backend-ten-plum.vercel.app/api/posts`;
        console.log("Fetching from:", url);
        
        // Get all posts first
        const response = await axios.get(url);
        
        // Find the specific post by ID
        const allPosts = response.data;
        console.log("All posts:", allPosts);
        
        const foundPost = allPosts.find((p: Post) => p.id.toString() === postId);
        console.log("Found post:", foundPost);
        
        if (foundPost) {
          setPost(foundPost);
          setError(null);
        } else {
          setError('Post não encontrado com ID: ' + postId);
        }
      } catch (err) {
        console.error("Error fetching post:", err);
        setError('Erro ao carregar os detalhes do post. Erro: ' + (err.message || 'Desconhecido'));
      } finally {
        setLoading(false);
      }
    }

    if (postId) {
      fetchPost();
    } else {
      setError('ID do post não fornecido.');
      setLoading(false);
    }
  }, [postId]);

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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-4">Publicado em: {post.date}</p>
      <div className="content mb-4">
        <p>{post.content}</p>
        {post.images && post.images.length > 0 && (
          <img src={post.images[0]} alt={post.title} className="w-full h-auto mt-4" />
        )}
        {post.videos && post.videos.length > 0 && (
          <div className="videos mt-4">
            {post.videos.map((video, index) => (
              <iframe
                key={index}
                width="560"
                height="315"
                src={video}
                title={`Vídeo ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ))}
          </div>
        )}
      </div>
      {post.tags && post.tags.length > 0 && (
        <div className="tags">
          <p><strong>Tags:</strong> {post.tags.join(', ')}</p>
        </div>
      )}
    </div>
  );
}