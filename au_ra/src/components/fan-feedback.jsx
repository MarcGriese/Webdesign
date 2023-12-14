import React, { useState, useRef } from 'react';

export default function Feedback() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const touchRef = useRef(null);

  const texts = ['Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    'Text 2', 'Text 3', 'Text 4', 'Text 5'];
  const names = ['Name 1', 'Name 2', 'Name 3', 'Name 4', 'Name 5'];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? texts.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePointClick = (index) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStartX !== null) {
      const currentX = e.touches[0].clientX;
      const diff = touchStartX - currentX;

      if (diff > 50) {
        handleNext();
        setTouchStartX(null);
      } else if (diff < -50) {
        handlePrevious();
        setTouchStartX(null);
      }
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };



  return (
    <div
      className="feedback--container row"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={touchRef}
    >
      <div className="left-feedback--container col-3">
        <div className="left-arrow-feedback--container">

        </div>
      </div>
      <div className="middle-feedback--container col-6">
        <div className="text-feedback--container">
          <h3>
            {texts[currentIndex]}
          </h3>
        </div>
        <div className="name-feedback--container">
          <p>
            {names[currentIndex]}
          </p>
        </div>
        <div className="current-index-feedback--container" style={{ display: 'flex', justifyContent: 'center' }}>
          {[...Array(texts.length)].map((_, index) => (
            <div className='point-feedback--container'
              key={index}
              style={{
                backgroundColor: index === currentIndex ? 'white' : 'grey',
              }}
              onClick={() => handlePointClick(index)}
            ></div>
          ))}
        </div>
      </div>
      <div className="right-feedback--container col-3">

      </div>
    </div>
  )
}