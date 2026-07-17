import React from 'react';
import style from './dynamic-bubbles/dynamic-bubbles.module.css';

const DynamicBubbles = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl">
      {/* Background bubbles container */}
      <div
        className={`absolute inset-0 -z-10 ${style.bubbles_container} overflow-hidden`}
        style={{ filter: 'url(#goo) blur(10px)' }}
      >
        <div className={`${style.b1}`}></div>
        <div className={`${style.b2}`}></div>
        <div className={`${style.b3}`}></div>
        <div className={`${style.b4}`}></div>
      </div>

      {/* Foreground content overlay */}
      <div className="relative z-10 w-full h-full p-6 sm:p-10">
        {children}
      </div>

      {/* SVG filter */}
      <svg xmlns="http://www.w3.org/2000/svg" className={`${style.svg}`}>
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default DynamicBubbles;
