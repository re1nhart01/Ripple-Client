"use client"

import {useParams, useRouter} from "next/navigation";
import {useEffect, useState } from "react";
import {PostType} from "#/app/list/page";

async function getData(id: number): Promise<PostType> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json();
}

export default function PageDetail() {
    const [state, setState] = useState(0);
    const [post, setPost] = useState<PostType | null>(null);
    const params = useParams<{ id: string }>();
    const imageUrl = 'https://i1.sndcdn.com/artworks-ouh4taKSsahFF40y-1I2YwQ-t500x500.jpg';
    
  
  useEffect(() => {
    if (!params) return;
    getData(+`${params.id}`).then((el) => setPost(el));
  }, [params]);
  
  if (!post) return <div>Loading...</div>
  
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="w-full h-96 object-contain" src={imageUrl} alt={post.title} />
        <div className="p-6">
          <h1 className="text-[#000000] text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-700 text-lg mb-4">{post.body}</p>
          <div className="text-gray-900">
            <h2 className="text-2xl font-semibold mb-2">Details:</h2>
            <ul className="list-disc list-inside">
              <li className="mb-2">User ID: {post.userId}</li>
              <li className="mb-2">Post ID: {post.id}</li>
            </ul>
          </div>
          <button onClick={() => setState(prev => prev + 1)} className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Take Action {state}
          </button>
          <button onClick={() => setState(prev => prev - 1)} className="ml-1 mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}