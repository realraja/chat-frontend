import React, { useState } from "react";

const messages = [
  {
    sender: "Telegram",
    content:
      "Just for you, we have developed an unrealistically cool application...",
    time: "08:53 PM",
    type: "text",
  },
  {
    sender: "Telegram",
    content: "1000062192.jpg",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "Telegram",
    content: "1000062193.jpg",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "Telegram",
    content: "1000062193.jpg",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "Telegram",
    content: "1000062193.jpg",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "Telegram",
    content: "1000062193.jpg",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "Telegram",
    content: "1000062193.jpg",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "Telegram",
    content: "1000062193.jpg",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "Telegram",
    content: "1000062193.jpg",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "Telegram",
    content: "1000062193.jpg",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "Telegram",
    content: "1000062193.jpg",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "Telegram",
    content: "1000062193.jpg",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "Telegram",
    content: "1000062193.jpg",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "Telegram",
    content: "1000062193.jpg",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "Telegram",
    content: "1000062193.jpg",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "Telegram",
    content: "1000062193.jpg",
    time: "03:20 PM",
    type: "image",
  },
  // Add more messages as needed
];
const ChatWindow = () => {
    const [message, setMessage] = useState('')

  return (
    <div className="max-sm:w-full sm:w-full md:w-3/4 h-screen flex flex-col bg-gray-900 text-white relative">
      <div className="p-3 border-b border-gray-700 flex justify-between items-center  cursor-pointer">
        <div className="flex">
          <img
            src="https://img.freepik.com/premium-photo/cute-handsome-anime-boy_675932-411.jpg"
            alt={"conv.name"}
            className="w-10 h-10 rounded-full mr-4 object-cover"
          />
          <h2 className="text-2xl font-bold">Papa Ji</h2>
        </div>
        <p className="text-sm text-gray-400">last seen 6/23/2024</p>
      </div>
      <div
        className="flex-grow p-4 overflow-y-auto scrollEditclass pb-20"
        style={{ background: "url(https://gifdb.com/images/high/black-background-blue-meteor-shower-96b6ypkabnn7d0jm.gif)", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 ${msg.sender === "You" ? "text-right" : ""}`}
          >
            {msg.type === "text" ? (
              <p
                className={`inline-block p-2 rounded-lg ${
                  msg.sender === "You" ? "bg-blue-600" : "bg-gray-700"
                }`}
              >
                {msg.content}
              </p>
            ) : (
              <img
                src={msg.content}
                alt="Attachment"
                className="inline-block p-2 rounded-lg bg-gray-700"
              />
            )}
            <p className="text-xs text-gray-400">{msg.time}</p>
          </div>
        ))}
      </div>
      <form onSubmit={(e)=> {e.preventDefault(); setMessage('')}} className="flex max-sm:w-full sm:w-[80%] md:w-full lg:w-[80%] px-3 absolute  self-center bottom-5 gap-3">
       
        <input
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
          type="text"
          placeholder="Message"
          className="flex-grow p-4 text-lg bg-gray-800 text-white rounded-3xl focus:outline-none"
        />

        {
            message? <button type="submit" className="p-2 px-4 bg-purple-600 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 -rotate-45"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>:<button  className="p-2 px-4 bg-purple-600 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
            />
          </svg>
        </button>
        }
        
        
      </form>
    </div>
  );
};

export default ChatWindow;
