"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from './LandingPage.module.css'; // Import the CSS module

const slideImages = [
  {
    url: '/1.jpg',
  },
  {
    url: '/2.jpg',
  },
  {
    url: '/3.jpg',
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-teal-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">My Website</h1>
          <div className='gap-3 flex'>
            <Button>
              <Link href="/" className="text-white mr-4">Become a Seller</Link>
            </Button>
            <Button>
              <Link href="#pricing" className="text-white mr-4">Buyer</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-grow bg-gray-100 flex items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to My Webiste</h2>
          <p className="text-xl mb-8"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ratione.</p>
          <a href="#features" className="bg-teal-500 text-white py-2 px-4 mb-4 rounded">Learn More</a>
        </div>
        <div className="w-full max-w-4xl mx-auto"> 
          <Slide autoplay duration={3000} transitionDuration={500} indicators={false} cssClass={styles.slider}>
            {slideImages.map((slideImage, index) => (
              <div key={index} className="each-slide">
                <div style={{ 'backgroundImage': `url(${slideImage.url})`, 'height': '500px', 'backgroundSize': 'cover', 'backgroundPosition': 'center' }}>
                  {/* <span className="bg-opacity-75 bg-gray-800 text-white p-2">{slideImage.caption}</span> */}
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Features</h3>
          <div className="flex justify-around">
            <div className="w-1/3 p-4">
              <h4 className="text-2xl font-bold mb-2">Feature 1</h4>
              <p>Feature 1 description.</p>
            </div>
            <div className="w-1/3 p-4">
              <h4 className="text-2xl font-bold mb-2">Feature 2</h4>
              <p>Feature 2 description.</p>
            </div>
            <div className="w-1/3 p-4">
              <h4 className="text-2xl font-bold mb-2">Feature 3</h4>
              <p>Feature 3 description.</p>
            </div>
          </div>
        </div>
      </section>

    

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Contact Us</h3>
          <p>Contact information goes here.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-500 p-4 text-white text-center">
        <p>&copy; 2024 MyLandingPage. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
