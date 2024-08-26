"use client"
import React, { FC, useState } from 'react';
import Link from "next/link";

export type cardProps = {
    userId: number;
    id: number;
    title: string;
    body: string;
}


const Card: FC<cardProps> = ({ body, id, title, userId }) => {
    const [counter, setCounter] = useState(id);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-2 ml-[auto] mr-[auto]">
      <Link href={`list/${id}`} className="px-6 py-4">
          <div className="text-[#000000] font-bold text-xl mb-2">#{id} {title}</div>
        <p className="text-gray-700 text-base">{body}</p>
      </Link>
      <div className="px-6 pt-4 pb-2">
          <button onClick={() => setCounter(prev => prev + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {counter}
        </button>
      </div>
    </div>
  );
};

export default Card;