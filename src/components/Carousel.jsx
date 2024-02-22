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
    <div className="w-full relative">
      <div className="w-full h-96 relative">
        <img
          src={images[currentIndex]}
          alt="carousel"
          className="w-full h-full object-cover"
          style={{
            opacity: 1,
            transition: "opacity 3s ease-in-out",
          }}
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex item-center justify-center">
          <button
            className="w-6 h-6 mx-1 rounded-full bg-gray-600 hover:bg-gray-800"
            onClick={goPreviousImage}
          ></button>
          <button
            className="w-6 h-6 mx-1 rounded-full bg-gray-600 hover:bg-gray-800"
            onClick={goNextImage}></button>
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
}

export default Carousel;