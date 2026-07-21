import React from 'react';

const ArrowLeftSVG = ({
  className,
  fill = 'var(--jet-gray)',
  stroke = 'var(--jet-gray)',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1772 624"
    width="100%"
    // height="100%"
    // fill={fill}
    className={className}
    {...props}
  >
    <path
      d="M1771.83 208.1C1771.83 277.37 1771.83 346.63 1771.83 415.9C1343.14 416.1 914.45 416.3 485.75 416.5C531.5 485.17 577.25 553.83 623 622.5C618.01 622.58 611.59 617.85 606.96 615.53C595.4 609.76 583.86 603.98 572.31 598.2C530.97 577.54 489.64 556.87 448.31 536.2C299.17 461.63 150.13 386.85 0.88 312.5C4.14 308.98 9.99 307.07 14.39 304.87C23.72 300.21 33.05 295.54 42.39 290.87C75.05 274.54 107.72 258.21 140.39 241.87C249.72 187.21 359.05 132.54 468.39 77.87C505.05 59.54 541.72 41.21 578.39 22.87C588.39 17.87 598.39 12.87 608.39 7.87C612.71 5.71 618.34 1.59 623.02 1.5C577.27 70.17 531.52 138.83 485.77 207.5C914.46 207.7 1343.15 207.9 1771.83 208.1Z"
      fill={fill}
      stroke={stroke}
      fillRule="evenodd"
      strokeWidth="0.25"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowLeftSVG;
