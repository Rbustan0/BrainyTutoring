import React from 'react';
import Carousel from './Carousel';

const Slides = () => {

  const images = [
    '/calcu.webp',
    '/world.jpeg',
    '/coding.jpeg',
    '/robo.webp',
    '/boardtech.jpeg'
  ];

  return (
    <div>
      <Carousel images={images} />
    </div>
  );
};

export default Slides;
