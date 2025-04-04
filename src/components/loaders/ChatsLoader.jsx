import React from 'react';

const ChatsLoader = ({showInfo=false,paramId=true,bgcolor=false}) => {
  return (
    <div
    className={` ${showInfo
      ? "max-sm:hidden sm:hidden md:flex md:w-1/2"
      : "max-sm:w-full sm:w-full md:w-3/4"
      } h-[calc(100dvh)] flex flex-col  text-white relative ${paramId ? "" : "max-sm:hidden sm:hidden md:flex flex flex-col gap-4 p-6  min-h-screen w-full justify-end"
      } gap-5  ${bgcolor && "bg-gray-900 p-6"}`}
  >
    {/* Chat 1 - Left */}
    <div className="flex items-start gap-2">
      <div className="bg-gray-800 p-4 rounded-xl max-w-sm animate-pulse h-6 w-3/4"></div>
    </div>

    {/* Chat 2 - Right */}
    <div className="flex justify-end">
      <div className="bg-gray-700 p-4 rounded-xl max-w-sm animate-pulse h-6 w-1/2"></div>
    </div>

    {/* Chat 3 - Left */}
    <div className="flex items-start gap-2">
      <div className="bg-gray-800 p-4 rounded-xl max-w-xs animate-pulse h-6 w-1/3"></div>
    </div>

    {/* Chat 4 - Right */}
    <div className="flex justify-end">
      <div className="bg-gray-700 p-4 rounded-xl max-w-xs animate-pulse h-6 w-1/4"></div>
    </div>

    {/* Chat 5 - Left */}
    <div className="flex items-start gap-2">
      <div className="bg-gray-800 p-4 rounded-xl max-w-md animate-pulse h-6 w-2/3"></div>
    </div>

    {/* Chat 6 - Right */}
    <div className="flex justify-end">
      <div className="bg-gray-700 p-4 rounded-xl max-w-md animate-pulse h-6 w-1/3"></div>
    </div>

    {/* Chat 1 - Left */}
    <div className="flex items-start gap-2">
      <div className="bg-gray-800 p-4 rounded-xl max-w-sm animate-pulse h-6 w-3/4"></div>
    </div>

    {/* Chat 2 - Right */}
    <div className="flex justify-end">
      <div className="bg-gray-700 p-4 rounded-xl max-w-sm animate-pulse h-6 w-1/2"></div>
    </div>

    {/* Chat 3 - Left */}
    <div className="flex items-start gap-2">
      <div className="bg-gray-800 p-4 rounded-xl max-w-xs animate-pulse h-6 w-1/3"></div>
    </div>

    {/* Chat 4 - Right */}
    <div className="flex justify-end">
      <div className="bg-gray-700 p-4 rounded-xl max-w-xs animate-pulse h-6 w-1/4"></div>
    </div>

    {/* Chat 5 - Left */}
    <div className="flex items-start gap-2">
      <div className="bg-gray-800 p-4 rounded-xl max-w-md animate-pulse h-6 w-2/3"></div>
    </div>

    {/* Chat 6 - Right */}
    <div className="flex justify-end">
      <div className="bg-gray-700 p-4 rounded-xl max-w-md animate-pulse h-6 w-1/3"></div>
    </div>

  </div>
  );
};

export default ChatsLoader;
