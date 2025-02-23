import React, { useState, useEffect } from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

const Banner = () => {
  // State to store mouse position
  const [mousePosition, setMousePosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  // Function to update mouse position
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  // Attach the mousemove event to the document
  useEffect(() => {
    // Initially set the mouse position to the center of the screen
    setMousePosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    document.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Inline style for the small white spots
  const whiteSpotStyle = {
    position: 'absolute',
    width: '2px',  // smaller size
    height: '2px', // smaller size
    borderRadius: '50%',
    backgroundColor: 'white',
    pointerEvents: 'none',
  };

  // Generate random spots function
  const generateSpots = () => {
    const spots = [];
    for (let i = 0; i < 300; i++) {
      const top = Math.random() * 100 + '%';
      const left = Math.random() * 100 + '%';
      const offsetX = Math.random() * 20 - 10;  // Randomize horizontal movement
      const offsetY = Math.random() * 20 - 10;  // Randomize vertical movement

      spots.push(
        <div
          key={i}
          style={{
            ...whiteSpotStyle,
            top,
            left,
            transform: `translate(${mousePosition.x + offsetX - window.innerWidth / 2}px, ${mousePosition.y + offsetY - window.innerHeight / 2}px)`,
            transition: 'transform 0.3s ease-out',  // Smooth transition to the new position
          }}
        />
      );
    }
    return spots;
  };

  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black relative"
    >
      <LeftBanner />
      <RightBanner />
      
      {/* Container for the random white spots */}
      <div className="absolute inset-0 pointer-events-none">
        {generateSpots()} {/* Render hundreds of spots */}
      </div>
    </section>
  );
};

export default Banner;
