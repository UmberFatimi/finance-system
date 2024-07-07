import { cn } from '@/lib/utils'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'


const font= Montserrat({
    weight:"600",
    subsets:["latin"]
})
export const LandingNavbar = () => {
  return (
    <nav className='p-4 px-10 bg-transparent flex items-center justify-between'>
        <Link href={"/"} className='flex items-center'>
        <div className='relative h-8 w-8 mr-4'>
            <Image fill src={"/logo.png"} alt='logo'/>
        </div>
        <h1 className={cn("text-2xl font-bold ",font.className)}>
            ServiceSphere
            </h1>
        </Link>
        <div className='flex items-center gap-x-2'>
            <Link href={"/auth/signup"}>
            <Button >
                Get Started
                </Button>
            </Link>
        </div>
    </nav>
  )
}
