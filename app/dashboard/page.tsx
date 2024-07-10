import React from 'react'
import Card from '../components/Card'
import CardList from '../components/CardList'
import { Navbar } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Dashboard() {
  return (
    <div className='h-full mt-20'>
      <Navbar/>
      <CardList/>
      <Footer/>
      </div>
  )
}
