import React from 'react';
import Carousel from './Carousel';

const Headers = () => {

  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    // Add more image URLs as needed
  ];

  return (
    <div>
      <h1>Brainy Tutoring</h1>
      <Carousel images={images} />
    </div>
  );
};

export default Headers;
