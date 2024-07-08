"use client";
import React from 'react';
import useSWR from "swr";
import Card from './Card';
import { Loader } from 'lucide-react';

const fetcher = (url: any) => fetch(url).then((res) => res.json());

interface CardData {
  title: string;
  description: string;
  price: string;
}

function CardList() {
  const { data, error, isLoading } = useSWR<CardData[]>('http://localhost:3000/api/service', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return (
    <div className="flex justify-center items-center h-full">
      <Loader className="animate-spin" size={48} />
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center">
      {data.map((card, index) => (
        <Card 
          key={index} 
          title={card.title} 
          description={card.description} 
          price={card.price}
        />
      ))}
    </div>
  );
}

export default CardList;
