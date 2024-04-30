import React, { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setOpacity(1);
      }, 40);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

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
    <div className="w-full relative">
      <div className="w-full h-96 relative">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="carousel"
            className="absolute w-full h-full object-cover transition-opacity duration-1000"
            loading="lazy"
            style={{
              opacity: index === currentIndex ? opacity : 0,
            }}
          />
        ))}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <button
            className="absolute left-0 hidden md:block w-6 h-6 mx-1 rounded-full bg-gray-600 hover:bg-gray-800"
            onClick={goPreviousImage}
          ></button>
          <button
            className="absolute right-0 hidden md:block w-6 h-6 mx-1 rounded-full bg-gray-600 hover:bg-gray-800"
            onClick={goNextImage}
          ></button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 mx-1 rounded-full ${
                index === currentIndex ? "bg-gray-500" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
