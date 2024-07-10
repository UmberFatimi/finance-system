import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from '@/components/ui/button';
import React from 'react';

function ServicesCard({ title, description ,price } : any ) {
  return (
    
<Card className=" w-96 m-5 text-center hover:shadow-md">
  <CardHeader>
    <CardTitle className="pb-2" >{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardHeader>
  <CardContent>
    <p>$ {price}</p>
  </CardContent>
  <CardFooter className="text-center justify-center ">
    <Button className="hover:shadow-md">Checkout</Button>
  </CardFooter>
</Card>


    // <div className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
    //   <div className="px-6 py-4">
    //     <div className="font-bold text-xl mb-2">{title}</div>
    //     <p className="text-gray-700 text-base">
    //       {description}
    //     </p>
    //   </div>
    //   <div className='text-xl font-bold'>
    //       $ {price} 
    //     </div>
    //   <div className='flex justify-between items-center px-6 py-4'>
        
    //     <Button>Checkout</Button>
    //   </div>
    // </div>
  );
}

export default ServicesCard;
