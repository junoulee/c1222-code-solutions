import React, { useState } from 'react';

export function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const lengthOfArray = images.length;
  const id = images[currentSlide].id;
  const slideImage = images[currentSlide].image;

  const previous = () => {
    const firstSlide = currentSlide === 0;
    const newIndex = firstSlide ? lengthOfArray - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const next = () => {
    const lastSlide = currentSlide === lengthOfArray - 1;
    const newIndex = lastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };
  const blackDot = (i) => {
    setCurrentSlide(i);
  };
  return (
    <div className='wrapper'>
      <div className='carousel'>

        <div key={id} className='slide'>
          <i className="fa-solid fa-chevron-left left-arrow" onClick={previous}></i>
          <img key={id} src={slideImage} />
          <i className="fa-solid fa-chevron-right right-arrow" onClick={next}></i>
        </div>

        <div className='dots'>
          {images.map((slide, i) => {
            return (
              <i key={i}
              onClick={() => blackDot(i)}
              className="fa-regular fa-circle circle"></i>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// { /* <i key={id} className="fa-solid fa-circle circle"></i> */ }
