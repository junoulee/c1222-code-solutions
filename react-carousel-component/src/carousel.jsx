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
  const clickDot = (i) => {
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
          {images.map((slide, i) =>
            <i key={images[i].id}
                onClick={() => clickDot(i)}
                className={(i === currentSlide) ? 'fa-solid fa-circle circle' : 'fa-regular fa-circle circle'}></i>
          )}
        </div>
      </div>
    </div>
  );
}
