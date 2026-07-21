import React from 'react';

interface PipeLabelProps {
  children?: React.ReactNode;
  className?: string;
}

const PipeLabel = ({ children, className = '' }: PipeLabelProps) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Curved Cylindrical Sticker SVG Background */}
      <svg
        className="absolute inset-0 w-full h-full text-jet-gray drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] filter"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 80 0 L 0 0 Q 20 50 0 100 L 80 100 Q 100 50 80 0 Z" />
      </svg>

      {/* Content Container positioned above the SVG */}
      <div className="relative z-10 w-full h-full flex items-center justify-center pl-[18%] pr-[22%] py-2 text-foreground font-semibold text-center select-none">
        <div className="line-clamp-4 overflow-hidden text-ellipsis">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PipeLabel;
