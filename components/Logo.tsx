import { cn } from '@/lib/utils'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const font=Montserrat({
    weight:"700",
    subsets:["latin"]
  
  })
export const Logo = () => {
  return (
    <div>
        <Link href={"/"} className='flex items-center'>
        <div className='relative h-8 w-8 mr-4'>
            <Image fill src={"/logo.png"} alt='logo'/>
        </div>
        <h1 className={cn("text-2xl font-bold ",font.className)}>
            ServiceSphere
            </h1>
        </Link>
    </div>
  )
}
