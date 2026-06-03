const TriangleLayout = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
      {/* 
        This inline SVG defines the triangular shape. 
        Points: [tip left, top right, bottom right]
      */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="left-pointing-triangle" clipPathUnits="objectBoundingBox">
            <polygon points="0 0.5, 1 0, 1 1" />
          </clipPath>
        </defs>
      </svg>

      {/* Container holding the custom shape, colored background, and two columns */}
      <div
        className="w-full max-w-4xl bg-blue-600 flex shadow-lg relative overflow-hidden"
        style={{ clipPath: 'url(#left-pointing-triangle)', aspectRatio: '16 / 9' }}
      >
        {/* Left Column: Text (Placed in the wide left section of the triangle) */}
        <div className="w-1/2 flex flex-col justify-center p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Custom Shape Layout</h2>
          <p className="text-lg leading-relaxed">
            By clipping the container using an SVG polygon, we get the illusion of a custom shape.
            The text natively flows in the wider, left-hand side of the triangle, keeping
            away from the sharp, narrowing point on the right.
          </p>
        </div>

        {/* Right Column: Image (Placed in the narrow right section) */}
        <div className="w-1/2 h-full relative">
          <img
            src="https://unsplash.com"
            alt="Abstract geometric landscape"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default TriangleLayout;