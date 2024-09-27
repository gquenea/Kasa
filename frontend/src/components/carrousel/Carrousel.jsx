import "./Carrousel.scss";
import React, { useState } from "react";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";

export default function Carrousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carrousel-container">
      <div className="carrousel-slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>

      {images.length > 1 && (
        <>
          <div className="carrousel-buttons">
            <button onClick={prevSlide} className="carrousel-button prev">
              <img src={arrowLeft} alt="Flèche de gauche" />
            </button>
            <button onClick={nextSlide} className="carrousel-button next">
              <img src={arrowRight} alt="Flèche de droite" />
            </button>
          </div>

          <div className="carousel-counter">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}
