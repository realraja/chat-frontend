import moment from "moment";
import React, { useState } from "react";
import ModalImage from "react-modal-image";

const UserInfo = ({ showInfo, setShowInfo, id }) => {
  const images = [
    "https://i.pinimg.com/originals/74/62/97/746297d9c22c5262fc359dac640c23b4.gif",
    "https://pics.craiyon.com/2023-06-28/b0931868d81346b68f5964f0c393b2fe.webp",
    "https://wallpapercave.com/wp/wp12329072.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2GkPejKNDZwT-pdA9eHflGX-aoixsLYq6JA&s",
    "https://img.freepik.com/premium-photo/cute-handsome-anime-boy_675932-411.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(images.length-1);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };


  // console.log(moment('2023-10-05T17:18:01.959Z').fromNow())

  return (
    <div
      className={`max-sm:w-full sm:w-full md:w-1/4 bg-gray-800 text-white ${
        showInfo ? "" : "hidden"
      } ${id ? "" : "max-sm:hidden sm:hidden md:block"}`}
    >
      {/* <ModalImage
  small={"https://i.pinimg.com/originals/74/62/97/746297d9c22c5262fc359dac640c23b4.gif"}
  large={"https://i.pinimg.com/originals/74/62/97/746297d9c22c5262fc359dac640c23b4.gif"}
  alt="Hello World!"
/> */}
      <div className="p-4 border-b border-gray-700 flex items-center gap-3">
        <div onClick={() => setShowInfo(false)} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 max-sm:block sm:block md:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 max-sm:hidden sm:hidden md:block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex w-full justify-between items-center cursor-pointer">
          <h2 className="text-2xl font-bold">User Info</h2>
        </div>
      </div>
      <div className="flex flex-col items-center mb-4">
        <div className="relative w-full">
          <h1 className="absolute mt-3 left-1/2 top-0 transform -translate-y-1/2 text-2xl">{currentImageIndex+1}/{images.length}</h1>
          {/* <img
            src={images[currentImageIndex]}
            alt="User Profile"
            className="w-full h-96 object-cover"
          /> */}
          <ModalImage
        small={images[currentImageIndex]}
        large={images[currentImageIndex]} // Replace with your actual image URL
        alt="Preview Image"
        className="w-full h-96 object-cover"
      />
          <button
            onClick={handlePrevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2  text-gray-600 hover:text-white  text-5xl h-full pr-5 pl-5 p-1"
          >
            &lt;
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-white text-5xl h-full pr-5 pl-5 p-1 "
          >
            &gt;
          </button>
        </div>
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
        <p className="mb-2">
          <i className="fas fa-user mr-2"></i> {moment('2023-10-05T17:18:01.959Z').fromNow()}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
