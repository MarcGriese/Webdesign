import React, { useState, useRef, useEffect } from 'react';

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const [slideDirection, setSlideDirection] = useState(null);

  const texts = [
    "Hey Au/Ra! Your music has this magic that transports me to another world. You bring clarity to dark moments and make me feel like I'm not alone. Thank you for that!",
    "Hey Jamie, your voice feels like a friend guiding me through both the highs and lows. Your melodies have this magnetic pull that keeps me coming back for more every time.",
    "Hi Au/Ra! Your lyrics always hit home and illuminate my thoughts. You have this knack for touching us as if you're singing directly to our hearts.",
    "Hey Au/Ra! Your sound is so unique, it makes me think and dance at the same time. Thank you for showing yourself through your music. You're an inspiration!",
    "Dear Au/Ra, your music paints emotions in ways I never knew possible. Your melodies create a sanctuary where I can lose myself and find myself all at once. Thank you for that incredible journey!"
  ];

  const names = [
    '~ David',
    '~ Cassia',
    '~ Liam',
    '~ Sophia',
    '~ Evelyn'
  ];

  const handlePrevious = () => {
    setSlideDirection('slide-out-right');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? texts.length - 1 : prevIndex - 1));
      setSlideDirection('slide-in-left');
      resetInterval();
    }, 500); // Zeit für die Animation
  };

  const handleNext = () => {
    setSlideDirection('slide-out-left');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
      setSlideDirection('slide-in-right');
      resetInterval();
    }, 500); // Zeit für die Animation
  };

  const handlePointClick = (index) => {
    if (index > currentIndex) {
      setSlideDirection('slide-out-left');
    } else {
      setSlideDirection('slide-out-right');
    }
  
    setTimeout(() => {
      setCurrentIndex(index);
      if (index > currentIndex) {
        setSlideDirection('slide-in-right');
      } else {
        setSlideDirection('slide-in-left');
      }
      resetInterval();
    }, 500); // Zeit für die Animation
  };
  
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
      setSlideDirection('slide-out-left');
      setTimeout(() => {
        setSlideDirection('slide-in-right');
      }, 500); // Zeit für die Animation
    }, 10000); // Intervall für den automatischen Textwechsel
  };

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="feedback--container row">
      <div className="left-feedback--container col-3">
        <div className="left-arrow arrow" onClick={handlePrevious}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="middle-feedback--container col-6">
        <div className={`text-feedback--container ${slideDirection}`}>
          <h3>{texts[currentIndex]}</h3>
        </div>
        <div className={`name-feedback--container ${slideDirection}`}>
          <p>{names[currentIndex]}</p>
        </div>
        <div className="current-index-feedback--container">
          {[...Array(texts.length)].map((_, index) => (
            <div
              className="point-feedback--container"
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
        <div className="right-arrow arrow" onClick={handleNext}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
