import React from 'react';

const LongArrowLeftSVG = ({
  className,
  fill = 'var(--jet-gray)',
  stroke = 'var(--jet-gray)',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1882 198"
    width="100%"
    height="100%"
    fill={fill}
    preserveAspectRatio="none"
    className={className}
    {...props}
  >
    <defs>
      <linearGradient id="flow-grad-left" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="var(--jet-gray)" stopOpacity="0" />
        <stop offset="0%" stopColor="rgb(var(--ivory-vals))" stopOpacity="1">
          <animate
            attributeName="offset"
            values="-0.3; 1.3"
            dur="2s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="100%" stopColor="var(--jet-gray)" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      d="M1758.11 0.17C1758.37 0.17 1758.63 0.17 1758.89 0.17C1761.46 3.48 1765.52 6 1768.85 8.62C1775.56 13.9 1782.18 19.3 1788.87 24.6C1809.71 41.1 1830.3 57.9 1851.13 74.4C1857.82 79.7 1864.44 85.1 1871.15 90.38C1874.68 93.16 1878.97 95.75 1881.33 99.5C1840.52 132.28 1799.71 165.06 1758.89 197.83C1758.63 197.83 1758.37 197.83 1758.11 197.83C1757.91 177.89 1757.7 157.94 1757.5 138C1171.72 138 585.94 138 0.17 138C0.17 112 0.17 86 0.17 60C585.94 60 1171.72 60 1757.5 60C1757.7 40.06 1757.91 20.11 1758.11 0.17Z"
      transform="translate(1882, 0) scale(-1, 1)"
      fill={fill}
      stroke={stroke}
      fillRule="evenodd"
      strokeWidth="0.25"
      strokeLinejoin="round"
    />
    <path
      d="M1758.11 0.17C1758.37 0.17 1758.63 0.17 1758.89 0.17C1761.46 3.48 1765.52 6 1768.85 8.62C1775.56 13.9 1782.18 19.3 1788.87 24.6C1809.71 41.1 1830.3 57.9 1851.13 74.4C1857.82 79.7 1864.44 85.1 1871.15 90.38C1874.68 93.16 1878.97 95.75 1881.33 99.5C1840.52 132.28 1799.71 165.06 1758.89 197.83C1758.63 197.83 1758.37 197.83 1758.11 197.83C1757.91 177.89 1757.7 157.94 1757.5 138C1171.72 138 585.94 138 0.17 138C0.17 112 0.17 86 0.17 60C585.94 60 1171.72 60 1757.5 60C1757.7 40.06 1757.91 20.11 1758.11 0.17Z"
      transform="translate(1882, 0) scale(-1, 1)"
      fill="url(#flow-grad-left)"
      fillRule="evenodd"
      stroke="url(#flow-grad-left)"
      strokeWidth="0.25"
      strokeLinejoin="round"
      className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    />
  </svg>
);

export default LongArrowLeftSVG;
