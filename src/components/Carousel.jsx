import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPreviousImage = () => {
    setCurrentIndex((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  const goNextImage = () => {
    setCurrentIndex((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  return (
    <div>
      <img src={images[currentIndex]} alt="carousel" />
      <button onClick={goPreviousImage}>Previous</button>
      <button onClick={goNextImage}>Next</button>
    </div>
  );
}

export default Carousel;