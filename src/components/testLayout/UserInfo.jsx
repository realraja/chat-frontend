import React from "react";

const UserInfo = ({showInfo,setShowInfo}) => {
  return (
    <div className={`w-1/4 bg-gray-800 text-white ${showInfo?'':'hidden'}`}>
      <div className="p-4 border-b border-gray-700 flex items-center gap-3">
        <div
          className={`cursor-pointer`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6  max-sm:block sm:block md:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>

          <svg onClick={()=> setShowInfo(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6  max-sm:hidden sm:hidden md:block">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

        </div>
        <div className="flex w-full justify-between items-center  cursor-pointer">
            <h2 className="text-2xl font-bold">User Info</h2>
        </div>
      </div>
      <div className="flex flex-col items-center mb-4">
        <img
          src="https://i.pinimg.com/originals/74/62/97/746297d9c22c5262fc359dac640c23b4.gif"
          alt="User Profile"
          className="w-full"
        />
        <div>
          <h3 className="font-bold">Aakash</h3>
          <p className="text-sm text-gray-400">last seen 1 hour ago</p>
        </div>
      </div>
      <div>
        <p className="mb-2">
          <i className="fas fa-phone mr-2"></i> +91 91664 24613
        </p>
        <p className="mb-2">
          <i className="fas fa-user mr-2"></i> @Akashmoriya
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
