import React, { useCallback, useEffect, useRef, useState } from "react";
import ModalImage from "react-modal-image";
import { Link } from "react-router-dom";
import { GetSoket } from "../../socket/socket";
import { NEW_MESSAGE } from "../../constants/events";
import { useSelector } from "react-redux";
import moment from "moment";
import toast from "react-hot-toast";
import { useSocketEvents } from "../../hooks/hook";
import { useGetMessagesQuery, useSendAttachmentsMutation } from "../../redux/api/api";

const ChatWindow = ({ paramId, chater, setShowInfo, showInfo }) => {
  const socket = GetSoket();

  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loadingOldMessages, setLoadingOldMessages] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const id = chater?._id;
  const members = chater?.members;
  const chaterData = chater?.members.find(
    (i) => i?._id?.toString() !== user
  );

  const oldMessagesChunk = useGetMessagesQuery({ chatId: paramId, page });
  const scrollRef = useRef(null); // Ref for the messages container
  // console.log(totalPages)
  // Auto-scroll to bottom on new messages


  // Append old messages when page changes
  // console.log(totalPages, oldMessagesChunk.data)

useEffect(() => {
  return ()=> {
    // setChatData({});
    setMessages([]);
  setPage(1); // Reset the page to start fresh
  setTotalPages(1); // Reset total pages
  }
}, [paramId]);

  useEffect(() => {
    if (oldMessagesChunk?.data?.message && oldMessagesChunk?.data?.page*1 === page) {
      // console.log(oldMessagesChunk?.data)
      setTotalPages(oldMessagesChunk?.data?.totalPages);
      const container = scrollRef.current;

      // Remember scroll position before loading old messages
      const prevScrollHeight = container?.scrollHeight;

      setMessages((prev) => [
        ...oldMessagesChunk?.data?.message,
        ...prev,
      ]);
      setLoadingOldMessages(false);

      // Restore scroll position after old messages load
      setTimeout(() => {
        if (container) {
          container.scrollTop = container.scrollHeight - prevScrollHeight;
        }
      }, 0);
    }
  }, [oldMessagesChunk,page]);



  // console.log(totalPages,page,page <= totalPages,!loadingOldMessages,!loadingOldMessages && page <= totalPages*1)
  // Function to load more messages
  const loadMoreMessages = () => {
    // console.log(totalPages)
    if (!loadingOldMessages) {
      setLoadingOldMessages(true);
      setPage((prev) => prev + 1);
    }
  };

  // Detect scroll to top for loading more messages
  useEffect(() => {
    const handleScroll = () => {
      const container = scrollRef.current;

      // Check if already loading or at the last page
      if (container && container.scrollTop === 0 && !loadingOldMessages && page < totalPages) {
        // toast.success('Loading more messages...');
        loadMoreMessages();
      }
    };

    const container = scrollRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => container?.removeEventListener("scroll", handleScroll);
  }, [page, totalPages, loadingOldMessages]); // Add dependencies

  // check bug
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const container = scrollRef.current;
  //     if (container && container.scrollTop === 0  && page <= totalPages) {
  //       toast.success('running');
  //       loadMoreMessages();
  //     }
  //   };

  //   const container = scrollRef.current;
  //   container?.addEventListener("scroll", handleScroll);

  //   return () => container?.removeEventListener("scroll", handleScroll);
  // }, []);
  const setBottomFunction = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }

  return (
    <div
      className={` ${showInfo
        ? "max-sm:hidden sm:hidden md:flex md:w-1/2"
        : "max-sm:w-full sm:w-full md:w-3/4"
        } h-[calc(100dvh)] flex flex-col bg-gray-900 text-white relative ${paramId ? "" : "max-sm:hidden sm:hidden md:flex"
        }`}
    >
      {/* Header */}
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
          className="flex w-full justify-between items-center cursor-pointer"
        >
          <div className="flex">
            <img
              src={
                chater?.groupChat ? chater?.imgUrl[0] : chaterData?.avatar
              }
              alt={"conv.name"}
              className="w-10 h-10 rounded-full mr-4 object-cover"
            />
            <h2 className="text-2xl font-bold">
              {chater?.groupChat ? chater?.name : chaterData?.name}
            </h2>
          </div>
          <p className="text-sm text-gray-400">last seen 6/23/2024</p>
        </div>
      </div>

      {/* Messages Container */}
      <div
        ref={scrollRef}
        className="flex-grow p-4 overflow-y-auto scrollEditclass pb-20"
        style={{
          background:
            "url(https://gifdb.com/images/high/black-background-blue-meteor-shower-96b6ypkabnn7d0jm.gif)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {loadingOldMessages && (
          <div className="text-center text-gray-400">Loading...</div>
        )}
        {messages.map((msg, index) => (
          <MessageComponent key={index} msg={msg} user={user} />
        ))}
      </div>

      {/* Input Area */}
      <div>
        <TextMessageComponent
          chatId={id}
          members={members}
          socket={socket}
          setMessages={setMessages}
          setBottom={setBottomFunction}
        />
      </div>
    </div>
  );
};

export default ChatWindow;

const MessageComponent = ({ msg, user }) => (
  <div
    className={`mb-4 ${msg.sender._id === user ? "text-right" : ""}`}
  >
    {msg.attachments?.length <= 0 || !msg.attachments ? (
      <p
        className={`inline-block p-2 max-w-[90%] text-start rounded-lg ${msg.sender === "You" ? "bg-blue-600" : "bg-gray-700"
          }`}
      >
        {msg.content}
      </p>
    ) : (
      msg?.attachments?.map(({ url, _id }) => {
        // Get the file extension from the URL
        const extension = url.split('.').pop().toLowerCase();

        // Conditional rendering based on file type
        if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension)) {
          // /dpr_auto/h_200
          // console.log(url)
          const smallUrl = url.replace('upload/',`upload/dpr_auto/h_350/`);
          // For images
          return (<div key={_id} className="min-h-[250px]">
            <ModalImage              
              small={smallUrl}
              large={url}
              alt="Preview Image"
              className="inline-block rounded-lg bg-gray-700/50 h-[250px] max-sm:w-[70vw] sm:w-[50%] object-contain my-0.5"
            />
          </div>);
        } else if (['mp3', 'wav', 'webm', 'ogg', 'm4a'].includes(extension)) {
          // For audio files
          return (<div key={_id} className="max-h-20">
            <audio  controls className="inline-block h-16 my-2">
              <source src={url} type={`audio/${extension}`} />
              Your browser does not support the audio element.
            </audio>
          </div>);
        } else if (['mp4', 'ogg'].includes(extension)) {
          // For video files
          return (<div key={_id} className="min-h-[300px]">
            <video  controls className="inline-block h-[300px] my-2">
              <source src={url} type={`video/${extension}`} />
              Your browser does not support the video element.
            </video>
          </div>);
        } else {
          // For other file types (e.g., PDFs, documents, etc.)
          return (
            <a
            key={_id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center w-[40%] px-5 py-3 text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16l8 8m0 0l8-8m-8 8V4"
                />
              </svg>
              Download File
            </a>
          );
        }
      }))}
    <p className="text-xs text-gray-400">{moment(msg.createdAt).fromNow()}</p>
  </div>
)

const TextMessageComponent = ({ chatId, members, socket, setMessages, setBottom }) => {

  const [message, setMessage] = useState("");
  const [recordingTime, setRecordingTime] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaBlob, setMediaBlob] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [isUploading, setIsUploading] = useState({file:null,loading:false});

  const dialogRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const intervalIdRef = useRef(null);
  const streamRef = useRef(null);

  const [sendAttachments] = useSendAttachmentsMutation();






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
        // const audioUrl = URL.createObjectURL(audioBlob);
        // audioSendHandle(audioBlob);
        setMediaBlob(audioBlob)

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



  const handleFileSelect = async (e, fileType) => {
    const files = e.target.files;
    if (files.length <= 0) return;
    if (files.length > 5) return toast.error(`Selected ${fileType}s are more than 5!`);

    // console.log(`Selected ${fileType}:`, files[0]); // Replace this with your upload logic
    setIsUploading({file:fileType,loading:true});
    const toastId = toast.loading(`Sending ${fileType}`);
    const fileArray = Array.from(files);

    try {
      const myForm = new FormData();
      myForm.append('chatId', chatId);
      fileArray.forEach((file) => myForm.append('files', file));

      // console.log(myForm.getAll('files'));

      const res = await sendAttachments(myForm);

      // console.log(res);

      if (res.data) { toast.success(`${fileType} sent successfully!`, { id: toastId }); } else { toast.error(`${fileType} failed to send!`, { id: toastId }); }
    } catch (error) {
      console.log(error)
      toast.error(`${fileType} ${error}`, { id: toastId })
    } finally {
      setIsUploading({file:null,loading:false});
    }

  };

  const audioSendHandle = async () => {

    setIsUploading({file:'audio',loading:true});
    const toastId = toast.loading("Sending Audio...");

    try {

      // Create a File object
      // const file = new File([mediaBlob], "audio.wav", { type: "audio/wav" });
      // console.log("Audio File:", file);

      // Prepare FormData
      const myForm = new FormData();
      myForm.append("chatId", chatId);
      myForm.append("files", mediaBlob);
      // console.log("FormData Content:", Array.from(myForm.entries()));

      // Send the request
      const res = await sendAttachments(myForm);

      if (res.data) {
        toast.success("Audio sent successfully!", { id: toastId });
      } else {
        toast.error("Audio failed to send!", { id: toastId });
      }
    } catch (error) {
      console.error("Error sending audio:", error);
      toast.error(`Audio upload failed: ${error.message}`, { id: toastId });
    } finally {
      setIsUploading({file:null,loading:false});
      setMediaBlob(null); // Clear the recorded audio
    }
  };


  // const handleCapture = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setImageSrc(e.target.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };


  const submitMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    socket.emit(NEW_MESSAGE, { chatId, members, message })
    // console.log(message);
    setMessage('');
  }

  const newMessageHandler = useCallback((data) => {
    // console.log(data);
    if(data.chatId !== chatId) return;
    setMessages((prev) => [...prev, data.message])
    // toast.success(data.message.content);
    setTimeout(() => {
      setBottom()
    }, 1);
  }, [setBottom,chatId]);

  const eventHandlersArr = { [NEW_MESSAGE]: newMessageHandler };

  useSocketEvents(socket, eventHandlersArr);

  // useEffect(()=>{
  //   socket.on(NEW_MESSAGE,(data)=>{
  //     console.log(data);
  //     toast.success(data.message.content);
  //   })
  // },[socket])
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setShowDialog(false);
      }
    };

    if (showDialog) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showDialog]);

  return <div
    className="w-full absolute bottom-5 items-center flex justify-center"><form onSubmit={submitMessage}
      className="flex gap-3 self-center max-sm:w-full sm:w-[80%] md:w-full lg:w-[80%] px-3"
    >
      <div className="w-full relative items-center">
        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={(e) => handleFileSelect(e, "image")}
          className="hidden"
          id="cameraInput"
        />
        <label
          htmlFor="cameraInput"
        // className="flex justify-center items-center gap-3 text-purple-300 py-2 rounded-lg border-2 border-purple-600 cursor-pointer"
        >
          <img className=" absolute h-14 bottom-1 py-3.5 px-5 cursor-pointer" src="https://img.icons8.com/?size=100&id=ppQLTjKugkhf&format=png&color=000000" alt="camera icon" />

        </label>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Message"
          className="flex-grow w-full p-4 pl-14 pr-16 text-lg bg-gray-800 text-white rounded-3xl focus:outline-none"
        />

        {isRecording ? <button
          type="button"
          className=" absolute right-0 bottom-1 py-3.5 px-5 cursor-pointer"
        >{formatTime(recordingTime)}</button> : <button
          type="button"
          className=" absolute right-0 bottom-1 py-3.5 px-5 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation(); // Prevents event propagation
            setShowDialog((prev) => !prev);
          }}
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
              d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
            />
          </svg>

        </button>}


        {/* Dialog */}
        {showDialog && (
          <div
            ref={dialogRef}
            className="absolute bottom-16 right-0 bg-gray-900 text-white rounded-lg shadow-lg py-2 w-40 animate-slide-in"
          >
            <ul>
              <li className="px-4 flex items-center text-center py-2 hover:bg-gray-800 cursor-pointer relative">
                <img className="h-6 mr-2" src="https://img.icons8.com/?size=100&id=BhVGuADUbtw9&format=png&color=000000" alt="image--v1" />
                Image
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => handleFileSelect(e, "image")}
                />
              </li>
              <li className="px-4 flex py-2 hover:bg-gray-800 cursor-pointer relative">

                <img className="h-6 mr-2" src="https://img.icons8.com/?size=100&id=WB3oQAyWBbjX&format=png&color=000000" alt="image--v1" />
                Audio
                <input
                  type="file"
                  multiple
                  accept="audio/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => handleFileSelect(e, "audio")}
                />
              </li>
              <li className="px-4 flex py-2 hover:bg-gray-800 cursor-pointer relative">
                <img className="h-6 mr-2" src="https://img.icons8.com/?size=100&id=0v3vEtjOL57p&format=png&color=000000" alt="image--v1" />

                Video
                <input
                  type="file"
                  multiple
                  accept="video/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => handleFileSelect(e, "video")}
                />
              </li>
              <li className="px-4 flex py-2 hover:bg-gray-800 cursor-pointer relative">
                <img className="h-6 mr-2 " src="https://img.icons8.com/?size=100&id=b0vfoq4G1DH5&format=png&color=000000" alt="image--v1" />
                File
                <input
                  type="file"
                  multiple
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => handleFileSelect(e, "file")}
                />
              </li>
            </ul>
          </div>
        )}
      </div>


      {/* {status === 'stopped' && setRecordingUrl(mediaBlobUrl)} */}
      {!message || isRecording ? (
        !isRecording ? (
          mediaBlob ? <><button
            onClick={() => setMediaBlob(null)}
            disabled={!mediaBlob}
            className={"p-2 px-4 bg-rose-600 rounded-full cursor-pointer"}
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
          </button>
          <button
            type="submit"
            onClick={() => { audioSendHandle(); }}
            disabled={!mediaBlob}
            className="p-2 px-4 bg-purple-600 rounded-full cursor-pointer"
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
            </button></> : <button
              onClick={startRecording}
              disabled={isRecording}
              className="p-2 px-4 bg-purple-600 rounded-full cursor-pointer"
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
            <button
              type="submit"
              onClick={() => { stopRecording(); }}
              disabled={!isRecording}
              className="p-2 px-4 bg-purple-600 rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fill-rule="evenodd" d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z" clip-rule="evenodd" />
              </svg>


            </button>{" "}
          </>
        )
      ) : (<button
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

    </form></div>
}

















// import { useGetChatDetailsQuery } from "../../redux/api/api";

// const Messages = [
//   {
//     sender: "Telegram",
//     content:
//       "Just for you, we have developed an unrealistically cool application...",
//     time: "08:53 PM",
//     type: "text",
//   },
//   {
//     sender: "You",
//     content:
//       "Just for you, we have developed an unrealistically for you, we have developed an unrealistically for you, we have developed an unrealistically cool developed an unrealistically cool application...",
//     time: "08:53 PM",
//     type: "text",
//   },
//   {
//     sender: "Telegram",
//     content:
//       "Just for you, we have developed an unrealistically cool application...",
//     time: "08:53 PM",
//     type: "text",
//   },
//   {
//     sender: "You",
//     content: "1000062192.jpg",
//     time: "03:20 PM",
//     type: "image",
//   },
//   {
//     sender: "Telegram",
//     content:
//       "https://res.cloudinary.com/dwc3gwskl/image/upload/v1716375508/native_todoApp/ypxtu24iiq6yameluqfz.jpg",
//     time: "03:20 PM",
//     type: "image",
//   },
//   {
//     sender: "Telegram",
//     content:
//       "https://res.cloudinary.com/dwc3gwskl/image/upload/v1717480397/native_todoApp_task/auiqwdoshb8vqvmro9bc.jpg",
//     time: "03:20 PM",
//     type: "image",
//   },
//   {
//     sender: "You",
//     content:
//       "https://res.cloudinary.com/dwc3gwskl/image/upload/v1716375508/native_todoApp/ypxtu24iiq6yameluqfz.jpg",
//     time: "03:20 PM",
//     type: "image",
//   },
//   {
//     sender: "Telegram",
//     content:
//       "https://res.cloudinary.com/dwc3gwskl/image/upload/v1716375508/native_todoApp/ypxtu24iiq6yameluqfz.jpg",
//     time: "03:20 PM",
//     type: "image",
//   },
//   {
//     sender: "Telegram",
//     content: "kya huaa",
//     time: "03:20 PM",
//     type: "image",
//   },
//   {
//     sender: "You",
//     content:
//       "https://res.cloudinary.com/dwc3gwskl/raw/upload/v1719539368/native_todoApp_task/bcbblputoz0uwheczcqa.html",
//     time: "03:20 PM",
//     type: "image",
//   },
//   {
//     sender: "You",
//     content:
//       "https://res.cloudinary.com/dwc3gwskl/raw/upload/v1719539286/native_todoApp_task/hdqe3k99aqvosxfztvla.txt",
//     time: "03:20 PM",
//     type: "image",
//   },
//   {
//     sender: "Telegram",
//     content:
//       "https://res.cloudinary.com/dwc3gwskl/image/upload/v1716375508/native_todoApp/ypxtu24iiq6yameluqfz.jpg",
//     time: "03:20 PM",
//     type: "image",
//   },
//   {
//     sender: "You",
//     content:
//       "https://res.cloudinary.com/dwc3gwskl/image/upload/v1717260770/native_todoApp_task/s3c1ko4pfkqqsnfaxeic.jpg",
//     time: "03:20 PM",
//     type: "image",
//   },
//   {
//     sender: "You",
//     content:
//       "https://res.cloudinary.com/dwc3gwskl/image/upload/v1716375508/native_todoApp/ypxtu24iiq6yameluqfz.jpg",
//     time: "03:20 PM",
//     type: "image",
//   },
//   {
//     sender: "Telegram",
//     content:
//       "https://res.cloudinary.com/dwc3gwskl/video/upload/v1717231214/sfcfphznqzmob6xsmop8.mp3",
//     time: "03:20 PM",
//     type: "image",
//   },
//   {
//     sender: "You",
//     content:
//       "https://res.cloudinary.com/dwc3gwskl/image/upload/v1716375508/native_todoApp/ypxtu24iiq6yameluqfz.jpg",
//     time: "03:20 PM",
//     type: "image",
//   },
//   {
//     sender: "Telegram",
//     content:
//       "https://res.cloudinary.com/dwc3gwskl/video/upload/v1719539141/smnwbqepusb71eflbgex.mp4",
//     time: "03:20 PM",
//     type: "image",
//   },
//   {
//     sender: "You",
//     content:
//       "https://res.cloudinary.com/dwc3gwskl/image/upload/v1716375508/native_todoApp/ypxtu24iiq6yameluqfz.jpg",
//     time: "03:20 PM",
//     type: "image",
//   },
//   // Add more messages as needed
// ];


