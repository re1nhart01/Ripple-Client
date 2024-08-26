"use server"
import { Metadata } from "next";
import Client from "./client";


type Props = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // read route params
    const id = params.id;
  
    return {
      title: `Post - ${id}`,
    };
  }

export default async function PageDetail() {
  return (
    <><Client /></>
  );
}