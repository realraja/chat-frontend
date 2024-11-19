import React, { useEffect, useRef, useState } from "react";
import ModalImage from "react-modal-image";
import { Link } from "react-router-dom";
import { GetSoket } from "../../socket/socket";
import { NEW_MESSAGE } from "../../constants/events";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
// import { useGetChatDetailsQuery } from "../../redux/api/api";

const messages = [
  {
    sender: "Telegram",
    content:
      "Just for you, we have developed an unrealistically cool application...",
    time: "08:53 PM",
    type: "text",
  },
  {
    sender: "You",
    content:
      "Just for you, we have developed an unrealistically for you, we have developed an unrealistically for you, we have developed an unrealistically cool developed an unrealistically cool application...",
    time: "08:53 PM",
    type: "text",
  },
  {
    sender: "Telegram",
    content:
      "Just for you, we have developed an unrealistically cool application...",
    time: "08:53 PM",
    type: "text",
  },
  {
    sender: "You",
    content: "1000062192.jpg",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "Telegram",
    content:
      "https://res.cloudinary.com/dwc3gwskl/image/upload/v1716375508/native_todoApp/ypxtu24iiq6yameluqfz.jpg",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "Telegram",
    content:
      "https://res.cloudinary.com/dwc3gwskl/image/upload/v1717480397/native_todoApp_task/auiqwdoshb8vqvmro9bc.jpg",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "You",
    content:
      "https://res.cloudinary.com/dwc3gwskl/image/upload/v1716375508/native_todoApp/ypxtu24iiq6yameluqfz.jpg",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "Telegram",
    content:
      "https://res.cloudinary.com/dwc3gwskl/image/upload/v1716375508/native_todoApp/ypxtu24iiq6yameluqfz.jpg",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "Telegram",
    content: "kya huaa",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "You",
    content:
      "https://res.cloudinary.com/dwc3gwskl/raw/upload/v1719539368/native_todoApp_task/bcbblputoz0uwheczcqa.html",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "You",
    content:
      "https://res.cloudinary.com/dwc3gwskl/raw/upload/v1719539286/native_todoApp_task/hdqe3k99aqvosxfztvla.txt",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "Telegram",
    content:
      "https://res.cloudinary.com/dwc3gwskl/image/upload/v1716375508/native_todoApp/ypxtu24iiq6yameluqfz.jpg",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "You",
    content:
      "https://res.cloudinary.com/dwc3gwskl/image/upload/v1717260770/native_todoApp_task/s3c1ko4pfkqqsnfaxeic.jpg",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "You",
    content:
      "https://res.cloudinary.com/dwc3gwskl/image/upload/v1716375508/native_todoApp/ypxtu24iiq6yameluqfz.jpg",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "Telegram",
    content:
      "https://res.cloudinary.com/dwc3gwskl/video/upload/v1717231214/sfcfphznqzmob6xsmop8.mp3",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "You",
    content:
      "https://res.cloudinary.com/dwc3gwskl/image/upload/v1716375508/native_todoApp/ypxtu24iiq6yameluqfz.jpg",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "Telegram",
    content:
      "https://res.cloudinary.com/dwc3gwskl/video/upload/v1719539141/smnwbqepusb71eflbgex.mp4",
    time: "03:20 PM",
    type: "image",
  },
  {
    sender: "You",
    content:
      "https://res.cloudinary.com/dwc3gwskl/image/upload/v1716375508/native_todoApp/ypxtu24iiq6yameluqfz.jpg",
    time: "03:20 PM",
    type: "image",
  },
  // Add more messages as needed
];
const ChatWindow = ({paramId, chater, setShowInfo, showInfo }) => {

  // const ChatDetails = useGetChatDetailsQuery({chatId: id,skip:!id});
  // console.log(ChatDetails.data);
  const socket = GetSoket();


  const {user} = useSelector(state => state.auth)

  const id = chater?._id;
  const members = chater?.members;
  const chaterData = chater?.members.find((i)=> i?._id?.toString() !== user);
  // console.log(chaterData)

  

  return (
    <div
      className={` ${showInfo
          ? "max-sm:hidden sm:hidden md:flex md:w-1/2"
          : "max-sm:w-full sm:w-full md:w-3/4"
        } h-[calc(100dvh)] flex flex-col bg-gray-900 text-white relative ${paramId ? "" : "max-sm:hidden sm:hidden md:flex"
        }`}
    >
      <div className="p-3 border-b border-gray-700 flex items-center gap-5">
        <Link
          className={`cursor-pointer max-sm:block sm:block md:hidden`}
          to={"/"}
        >
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
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
        <div
          onClick={() => setShowInfo(!showInfo)}
          className="flex w-full justify-between items-center  cursor-pointer"
        >
          <div className="flex">
            <img
              src={chater?.groupChat?chater?.imgUrl[0]:chaterData?.avatar}
              alt={"conv.name"}
              className="w-10 h-10 rounded-full mr-4 object-cover"
            />
            <h2 className="text-2xl font-bold">{chater?.groupChat?chater?.name:chaterData?.name}</h2>
          </div>
          <p className="text-sm text-gray-400">last seen 6/23/2024</p>
        </div>
      </div>
      <div
        className="flex-grow p-4 overflow-y-auto scrollEditclass pb-20"
        style={{
          background:
            "url(https://gifdb.com/images/high/black-background-blue-meteor-shower-96b6ypkabnn7d0jm.gif)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 ${msg.sender === "You" ? "text-right" : ""}`}
          >
            {msg.type === "text" ? (
              <p
                className={`inline-block p-2 max-w-[90%] text-start rounded-lg ${msg.sender === "You" ? "bg-blue-600" : "bg-gray-700"
                  }`}
              >
                {msg.content}
              </p>
            ) : (
              // <img
              //   src={msg.content}
              //   alt="Attachment"
              //   className="inline-block rounded-lg bg-gray-700 w-20"
              // />
              <ModalImage
                small={msg.content}
                large={msg.content}
                alt="Preview Image"
                className="inline-block rounded-lg bg-gray-700 w-20"
              />
            )}
            <p className="text-xs text-gray-400">{msg.time}</p>
          </div>

        ))}
        {/* {mediaBlobUrl && <audio src={mediaBlobUrl} controls className="inline-block p-2 max-w-[90%] text-start rounded-lg" />} */}
      </div>
      

      <div>
        <TextMessageComponent chatId={id} members={members} socket={socket} />
      </div>
    </div>
  );
};

export default ChatWindow;



const TextMessageComponent = ({chatId,members,socket}) =>{

  const [message, setMessage] = useState("");
  const [recordingTime, setRecordingTime] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaBlobUrl, setMediaBlobUrl] = useState(null);

  
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const intervalIdRef = useRef(null);  
  const streamRef = useRef(null);



  const audioSendHandle = () => {
    console.log(mediaBlobUrl);
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];
      streamRef.current = stream; // Store the stream reference to stop it later
  
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };
  
      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
        const audioUrl = URL.createObjectURL(audioBlob);
        setMediaBlobUrl(audioUrl);
  
        // Stop all audio tracks to release the microphone
        streamRef.current.getTracks().forEach((track) => track.stop());
      };
  
      mediaRecorderRef.current.start();
      setIsRecording(true);
      setRecordingTime(0);
      intervalIdRef.current = setInterval(() => {
        setRecordingTime((prevTime) => prevTime + 100);
      }, 100);
    } catch (error) {
      console.error("Error accessing audio stream:", error);
    }
  };
  
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    clearInterval(intervalIdRef.current);
    setIsRecording(false);
  
    // Stop the microphone (if not already stopped in `onstop`)
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
  };
  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const ms = milliseconds % 1000;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${ms < 100 ? ms < 10 ? '00' : '0' : ''}${ms}`;
  };




  const submitMessage = (e) =>{
    e.preventDefault();
    if(!message.trim()) return;

    socket.emit(NEW_MESSAGE,{chatId,members,message})
    console.log(message);
    setMessage('');
  }

  useEffect(()=>{
    socket.on(NEW_MESSAGE,(data)=>{
      console.log(data);
      toast.success(data.message.content);
    })
  },[socket])


 return <form onSubmit={submitMessage}
        className="flex max-sm:w-full sm:w-[80%] md:w-full lg:w-[80%] px-3 absolute  self-center bottom-5 gap-3"
      >
        <div  className="w-full relative">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Message"
            className="flex-grow w-full p-4 pr-16 text-lg bg-gray-800 text-white rounded-3xl focus:outline-none"
          />

          <button
            type="button"
            className=" absolute right-0 bottom-1 py-3.5 px-5 cursor-pointer"
          >
            {isRecording ? (
              formatTime(recordingTime)
            ) : (
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
                  d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                />
              </svg>
            )}
          </button>
        </div>


        {/* {status === 'stopped' && setRecordingUrl(mediaBlobUrl)} */}
        {!message || isRecording ? (
          !isRecording ? (
            <button
              onClick={startRecording}
              disabled={isRecording}
              className="p-2 px-4 bg-purple-600 rounded-full"
            >
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
          ) : (
            <>
              {" "}
              <button
                onClick={stopRecording}
                disabled={!isRecording}
                className={"p-2 px-4 bg-rose-600 rounded-full"}
              >
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
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>{" "}
              <button
                type="submit"
                onClick={() => { stopRecording(); audioSendHandle(); }}
                disabled={!isRecording}
                className="p-2 px-4 bg-purple-600 rounded-full"
              >
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
              </button>{" "}
            </>
          )
        ) : (
          <button
            type="submit"
            className="p-2 px-4 bg-green-600 rounded-full"
          >
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
          </button>
        )}

      </form>
}