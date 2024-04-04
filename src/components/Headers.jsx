import React from 'react';
import Carousel from './Carousel';

const Headers = () => {

  const images = [
    '/world.jpeg',
    '/coding.jpeg',
    '/robo.webp',
    '/boardtech.jpeg'
  ];

  return (
    <div className='bg-blue-400'>
      <h1 className='text-stone-100 text-7xl text-center pt-2 pb-4 font-extrabold font-mono'>Brainy Tutoring</h1>
      <Carousel images={images} />
    </div>
  );
};

export default Headers;
