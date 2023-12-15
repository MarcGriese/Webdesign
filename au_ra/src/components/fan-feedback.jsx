import React, { useState, useRef, useEffect } from 'react';

export default function Feedback() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const touchRef = useRef(null);
  const intervalRef = useRef(null);
  const [slideOutLeft, setSlideOutLeft] = useState(false);
  const [slideOutRight, setSlideOutRight] = useState(false);
  const [LeftOrRight, setLeftOrRight] = useState(null); //left = 0, right = 1


  const texts = ['Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', 'Text 2', 'Text 3', 'Text 4', 'Text 5'];
  const names = ['Deine Mum', 'Name 2', 'Name 3', 'Name 4', 'Name 5'];

  const handlePrevious = () => {
    setSlideOutLeft(true);
    setLeftOrRight(0)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? texts.length - 1 : prevIndex - 1));
      setSlideOutLeft(false);
      resetInterval();
    }, 1000); // Zeit, die für die Animation benötigt wird
  };

  const handleNext = () => {
    setSlideOutRight(true);
    setLeftOrRight(1)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
      setSlideOutRight(false);
      resetInterval();
    }, 1000)
  };

  const handlePointClick = (index) => {
    if (index > currentIndex) {
      setSlideOutRight(true);
      setLeftOrRight(1);
    } else {
      setSlideOutLeft(true);
      setLeftOrRight(0);
    }
  
    setTimeout(() => {
      if (index > currentIndex) {
        setSlideOutRight(false);
      } else {
        setSlideOutLeft(false);
      }
      
      setCurrentIndex(index);
      resetInterval();
    }, 1000);
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

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
    }, 10000);
  };

  useEffect(() => {
    resetInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const getClassName = () => {

    if (LeftOrRight === 0) {
      if (slideOutLeft) {
        return 'slide-out-right';
      } else {
        return 'slide-in-left';
      }
    } else if (LeftOrRight === 1) {
      if (slideOutRight) {
        return 'slide-out-left';
      } else {
        return 'slide-in-right';
      }
    }
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


        <div class="left-arrow arrow" onClick={handlePrevious}>
          <span></span>
          <span></span>
          <span></span>
        </div>



      </div>
      <div className="middle-feedback--container col-6">
        <div className={`text-feedback--container ${getClassName()}`}>
          <h3>right
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

        <div class="right-arrow arrow" onClick={handleNext}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </div>
  )
}