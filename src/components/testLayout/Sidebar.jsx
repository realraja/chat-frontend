import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import ModalImage from "react-modal-image";

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
    name: "Trilok",
    lastMessage: "Trilok joined Telegram",
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
    name: "Trilok",
    lastMessage: "Trilok joined Telegram",
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
    name: "Trilok",
    lastMessage: "Trilok joined Telegram",
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

const Sidebar = ({ id }) => {
  const [searchText, setSearchText] = useState('');
  // const [isSearch, setIsSearch] = useState(false);
  const navigate = useNavigate();

  
  return (
    <div
      className={`max-sm:w-full sm:w-full md:w-1/4 bg-gray-800 text-white h-[calc(100dvh)] ${
        id ? "max-sm:hidden sm:hidden md:block" : ""
      }`}
    >
      <div className="flex h-full flex-col">
        <div className="h-fit flex justify-between items-center gap-5 py-3 px-2 border-b border-gray-700">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md px-2 py-2 text-sm font-medium text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 mt-2 w-64 bg-purple-950 bg-opacity-85 text-white rounded-lg shadow-lg">
                <div className="p-4">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`cursor-pointer p-2 rounded flex items-center ${
                          active ? "bg-gray-700" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
                          />
                        </svg>
                        Saved Messages
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`cursor-pointer p-2 rounded flex items-center ${
                          active ? "bg-gray-700" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                          />
                        </svg>
                        New Group
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={() => navigate("/profile")}
                        className={`cursor-pointer p-2 rounded flex items-center ${
                          active ? "bg-gray-700" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                          />
                        </svg>
                        Notifications
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={() => navigate("/profile")}
                        className={`cursor-pointer p-2 rounded flex items-center ${
                          active ? "bg-gray-700" : ""
                        }`}
                      >
                        <svg
                          onClick={() => navigate("/profile")}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                          />
                        </svg>
                        Profile
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={() => navigate("/profile")}
                        className={`cursor-pointer p-2 rounded flex items-center ${
                          active ? "bg-gray-700" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                        Settings
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={() => navigate("/profile")}
                        className={`cursor-pointer p-2 rounded flex items-center ${
                          active ? "bg-gray-700" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                          />
                        </svg>
                        Notifications
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`cursor-pointer p-2 rounded flex items-center ${
                          active ? "bg-gray-700" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                          />
                        </svg>
                        Log Out
                      </div>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <input
            // onInput={() => setIsSearch(true)}
            // onBlur={()=> searchText || setIsSearch(false)}
            value={searchText}
            onChange={(e)=> {setSearchText(e.target.value);}}
            type="search"
            name="search"
            placeholder="Search"
            className="bg-gray-700 w-full h-10 px-4 rounded-full focus:outline-none text-white"
          />
        </div>
        <div className="h-full overflow-auto scrollEditclass">
          {!searchText ? (
            <ul>
              {conversations.map((conv, index) => (
                <li
                  key={index}
                  className="mb-4 cursor-pointer hover:bg-gray-700 p-2 rounded flex items-center"
                >
                  <ModalImage
                    small={conv.imageUrl}
                    large={conv.imageUrl}
                    alt="Preview Image"
                    className="w-10 h-10 rounded-full mr-4 object-cover"
                  />
                  <div
                    onClick={() => navigate("/chat/" + conv.name)}
                    className="flex justify-between w-full"
                  >
                    <div>
                      <h3 className="text-lg font-semibold">{conv.name}</h3>
                      <p className="text-sm text-gray-400">
                        {conv.lastMessage}
                      </p>
                    </div>
                    <p className="text-xs text-gray-400">{conv.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (searchText.length < 3?(<h1>Write Atleast 3 Characters for search.</h1>):<ul>
                <li
                  className="mb-4 cursor-pointer hover:bg-gray-700 p-2 rounded flex items-center"
                >
                  <ModalImage
                    small={conversations[0].imageUrl}
                    large={conversations[0].imageUrl}
                    alt="Preview Image"
                    className="w-10 h-10 rounded-full mr-4 object-cover"
                  />
                  <div
                    onClick={() => navigate("/chat/" + conversations[0].name)}
                    className="flex justify-between w-full"
                  >
                    <div>
                      <h3 className="text-lg font-semibold">{conversations[0].name}</h3>
                      <p className="text-sm text-gray-400">
                        {conversations[0].lastMessage}
                      </p>
                    </div>
                    <p className="text-xs text-gray-400">{conversations[0].time}</p>
                  </div>
                </li>
              
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

/*

import React, { useEffect, useRef, useState } from "react";
import ModalImage from "react-modal-image";
import { useNavigate } from "react-router-dom";

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
    name: "Trilok",
    lastMessage: "Trilok joined Telegram",
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
    name: "Trilok",
    lastMessage: "Trilok joined Telegram",
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
    name: "Trilok",
    lastMessage: "Trilok joined Telegram",
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
const Sidebar = ({id}) => {
    
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div className={`max-sm:w-full sm:w-full md:w-1/4 bg-gray-800 text-white h-[calc(100dvh)] ${id?'max-sm:hidden sm:hidden md:block':''}`}>
      <div className="flex h-full flex-col" >
        <div  className="h-fit flex justify-between items-center gap-5 py-3 px-2 border-b border-gray-700">
          <svg  ref={dropdownRef}        
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
        <div  className="absolute top-0 left-0 mt-12 ml-2 w-64 bg-purple-950 bg-opacity-85 text-white rounded-lg shadow-lg p-4 ">
          <ul>
            <li className=" cursor-pointer p-2 hover:bg-gray-700 rounded flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
</svg>

              Saved Messages
            </li>
            <li onClick={()=> navigate('/profile')} className=" cursor-pointer p-2 hover:bg-gray-700 rounded flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
</svg>

              New Group
            </li>
            <li className=" cursor-pointer p-2 hover:bg-gray-700 rounded flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
</svg>

              Notifications
            </li>
            
            <li className=" cursor-pointer p-2 hover:bg-gray-700 rounded flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

              Profile
            </li>
            <li className=" cursor-pointer p-2 hover:bg-gray-700 rounded flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

              Settings
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
</svg>

              Log Out
            </li>
          </ul>
          <div className="p-2 mt-4 text-gray-400">
            Chat Me Web 10.9.7
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
              {/* <img
                src={conv.imageUrl}
                alt={conv.name}
                className="w-10 h-10 rounded-full mr-4 object-cover"
              /> }
              <ModalImage
        small={conv.imageUrl}
        large={conv.imageUrl} // Replace with your actual image URL
        alt="Preview Image"
        className="w-10 h-10 rounded-full mr-4 object-cover"
      />
              <div onClick={()=> navigate('/chat/'+conv.name)} className="flex justify-between w-full">
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

*/
