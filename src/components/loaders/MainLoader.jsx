import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="space-y-4">
        {[...Array(10)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex space-x-4">
            {[...Array(3)].map((_, colIndex) => (
              <div
                key={colIndex}
                className="w-[28vw] h-[8vh] bg-gray-800 rounded animate-pulse"
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
