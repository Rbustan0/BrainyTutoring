import React from 'react';
import Carousel from './Carousel';

const Headers = () => {

  const images = [
    // '/calcu.webp',
    '/world.jpeg',
    '/coding.jpeg',
    '/robo.webp',
    '/boardtech.jpeg'
  ];

  return (
    <div className='bg-slate-300'>
      <h1>Brainy Tutoring</h1>
      <Carousel images={images} />
    </div>
  );
};

export default Headers;
