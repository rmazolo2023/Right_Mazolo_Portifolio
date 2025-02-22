import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

const Banner = () => {
  // Inline style for the small white spots
  const whiteSpotStyle = {
    position: 'absolute',
    width: '1px',  // smaller size
    height: '1px', // smaller size
    borderRadius: '50%',
    backgroundColor: 'white',
    animation: 'move 10s infinite ease-in-out',
  };

  // Generate random spots function
  const generateSpots = () => {
    const spots = [];
    for (let i = 0; i < 300; i++) {
      const top = Math.random() * 100 + '%';
      const left = Math.random() * 100 + '%';
      spots.push(
        <div
          key={i}
          style={{
            ...whiteSpotStyle,
            top,
            left,
            animationDuration: `${Math.random() * 5 + 5}s`,  // Randomize animation duration
            animationDelay: `${Math.random() * 5}s`, // Randomize animation delay
          }}
        />
      );
    }
    return spots;
  };

  // Inline keyframes for animation (random movement)
  const keyframesStyle = {
    '@keyframes move': {
      '0%': { transform: 'translate(0, 0)' },
      '50%': { transform: 'translate(10px, 10px)' },
      '100%': { transform: 'translate(0, 0)' },
    },
  };

  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black relative"
      style={keyframesStyle} // Inline keyframes
    >
      <LeftBanner />
      <RightBanner />
      
      {/* Container for the random white spots */}
      <div className="absolute inset-0 pointer-events-none">
        {generateSpots()} {/* Render hundreds of spots */}
      </div>
    </section>
  );
}

export default Banner;
