import { Button } from '@/components/ui/button';
import React from 'react';

function Card({ title, description ,price } : any ) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className='flex justify-between items-center px-6 py-4'>
        <span className='text-xl font-bold'>
          {price}
        </span>
        <Button>Checkout</Button>
      </div>
    </div>
  );
}

export default Card;
