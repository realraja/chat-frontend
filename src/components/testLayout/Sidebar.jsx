import React, { useState } from "react";

const Sidebar = () => {
    
  const [isOpen, setIsOpen] = useState(false);
  const conversations = [
    {
      name: "Telegram",
      lastMessage: "Login code: ****. Do not give this code to anyone.",
      time: "01:19 PM",
      imageUrl:
        "https://img.freepik.com/premium-photo/cute-handsome-anime-boy_675932-411.jpg",
    },
    {
      name: "Milkha 97834 51057",
      lastMessage: "Milkha 97834 51057 joined Telegram",
      time: "Fri",
      imageUrl:
        "https://img.freepik.com/premium-photo/cute-handsome-anime-boy_675932-411.jpg",
    },
    {
      name: "Trilok",
      lastMessage: "Trilok joined Telegram",
      time: "Fri",
      imageUrl:
        "https://img.freepik.com/premium-photo/cute-handsome-anime-boy_675932-411.jpg",
    },
    {
      name: "Saved Messages",
      lastMessage: "RAKESH KUMAR4095833.pdf",
      time: "Fri",
      imageUrl:
        "https://img.freepik.com/premium-photo/cute-handsome-anime-boy_675932-411.jpg",
    },
    {
      name: "Aakash",
      lastMessage: "Photo",
      time: "Wed",
      imageUrl:
        "https://img.freepik.com/premium-photo/cute-handsome-anime-boy_675932-411.jpg",
    },
    {
      name: "Gurbhej",
      lastMessage: "O ta nai pta",
      time: "Wed",
      imageUrl:
        "https://img.freepik.com/premium-photo/cute-handsome-anime-boy_675932-411.jpg",
    },
    {
      name: "Papa Ji",
      lastMessage: "1000062193.jpg",
      time: "Tue",
      imageUrl:
        "https://img.freepik.com/premium-photo/cute-handsome-anime-boy_675932-411.jpg",
    },
    // Add more conversations as needed
  ];

  return (
    <div className="w-1/4 bg-gray-800 text-white h-screen  max-sm:hidden sm:hidden md:block">
      <div className="flex h-full flex-col">
        <div className="h-fit flex justify-between items-center gap-5 py-3 px-2 border-b border-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 cursor-pointer"
            onClick={()=> setIsOpen(!isOpen)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <input
            type="search"
            name="search"
            placeholder="Search"
            className="bg-gray-700 w-full h-10 px-4 rounded-full focus:outline-none text-white"
          />
        </div>
        {isOpen && (
        <div onBlur={()=> setIsOpen(false)} className="absolute top-0 left-0 mt-12 ml-2 w-64 bg-gray-600 bg-opacity-85 text-white rounded-lg shadow-lg p-4">
          <ul>
            <li className=" cursor-pointer p-2 hover:bg-gray-700 rounded flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
</svg>

              Saved Messages
            </li>
            <li className=" cursor-pointer p-2 hover:bg-gray-700 rounded flex items-center">
              <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10l5-5m0 0l5 5m-5-5v12" />
              </svg>
              Contacts
            </li>
            <li className=" cursor-pointer p-2 hover:bg-gray-700 rounded flex items-center">
              <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              My Stories
            </li>
            <li className=" cursor-pointer p-2 hover:bg-gray-700 rounded flex items-center">
              <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11V7a4 4 0 118 0v4M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2z" />
              </svg>
              Settings
            </li>
            <li className=" cursor-pointer p-2 hover:bg-gray-700 rounded flex items-center">
              <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9V3m-6 6l6-6 6 6m0 6v6m-6-6l-6 6 6 6" />
              </svg>
              Night Mode
            </li>
            <li className=" cursor-pointer p-2 hover:bg-gray-700 rounded flex items-center">
              <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5l14 14m-7 7a9 9 0 110-18 9 9 0 010 18z" />
              </svg>
              Animations
            </li>
            <li className=" cursor-pointer p-2 hover:bg-gray-700 rounded flex items-center">
              <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M9 16h6M12 9h.01" />
              </svg>
              Telegram Features
            </li>
            <li className=" cursor-pointer p-2 hover:bg-gray-700 rounded flex items-center">
              <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m-6-8h6m-6-4h6" />
              </svg>
              Report a Bug
            </li>
            <li className=" cursor-pointer p-2 hover:bg-gray-700 rounded flex items-center">
              <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Switch to K Version
            </li>
            <li className=" cursor-pointer p-2 hover:bg-gray-700 rounded flex items-center">
              <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              Install App
            </li>
          </ul>
          <div className="p-2 mt-4 text-gray-400">
            Telegram Web A 10.9.7
          </div>
        </div>
      )}
        <div className="h-full  overflow-auto scrollEditclass">
        <ul>
          {conversations.map((conv, index) => (
            <li
              key={index}
              className="mb-4 cursor-pointer hover:bg-gray-700 p-2 rounded flex items-center"
            >
              <img
                src={conv.imageUrl}
                alt={conv.name}
                className="w-10 h-10 rounded-full mr-4 object-cover"
              />
              <div className="flex justify-between w-full">
                <div>
                  <h3 className="text-lg font-semibold">{conv.name}</h3>
                  <p className="text-sm text-gray-400">{conv.lastMessage}</p>
                </div>
                <p className="text-xs text-gray-400">{conv.time}</p>
              </div>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
