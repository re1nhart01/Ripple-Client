"use server"

import React, { Suspense } from "react";
import Card from "#/components/card/Card";

export type PostType = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function getData(): Promise<PostType[]> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json();
  }

export default async function Page() {
    const data = await getData();
    
    return (
        <div className="w-full h-full bg-[#000000]">
            <Suspense fallback={<div>Loading...</div>}>
                {
                    data.map((el) => {
                        return <Card key={el.id} {...el} />
                    }) 
                }
            </Suspense>
        </div>
    )
}