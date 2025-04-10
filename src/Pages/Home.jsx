import React, { useCallback, useEffect, useState } from 'react'
// import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/testLayout/Sidebar'
import ChatWindow from '../components/testLayout/ChatWindow'
import { useParams } from 'react-router-dom'
import UserInfo from '../components/testLayout/UserInfo'
import Title from '../components/shared/Title'
import { useGetChatDetailsQuery } from '../redux/api/api'
import { NEW_MESSAGE_ALERT, NEW_REQUEST, START_OR_STOP_TYPING, UPDATE_USER_STATUS, USER_CONNECTED } from '../constants/events'
import { useDispatch, useSelector } from 'react-redux'
import { incrementNotification, setNewMessageAleart, setNewMessageAleartSidebarRefetch, setOnlineUsers, setTyping } from '../redux/slicer/chat'
import { useSocketEvents } from '../hooks/hook'
import { GetSoket } from '../socket/socket'
import { RiseLoader } from 'react-spinners'
import notificationSound from '../accets/Message-notification.mp3';

const Home = () => {
  const [userInfoShow, setUserInfoShow] = useState(false);
  const [chatData, setChatData] = useState({});
  const {id} = useParams();

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  // const socket = 

  // console.log(!id)
   const socket = GetSoket();

  useEffect(() => {
    // Notify the server that the user has connected
    socket?.emit(USER_CONNECTED);

    // Cleanup on unmount
    return () => {
      socket.off(UPDATE_USER_STATUS);
    };
  }, [socket]);





   const {data,isLoading} = useGetChatDetailsQuery({chatId: id,populate:true},{skip:!id});
  //  console.log(ChatDetails.data);

  //  console.log(socket.id);
  // console.log(isLoading)
  // if(Object.keys(chatData).length !== 0) console.log(chatData);

  const { getNotificationSound } = useNotificationSounds();


  const newMessageAlertHandler = useCallback((data) => {
    dispatch(setNewMessageAleartSidebarRefetch(data));
    if(data?.chatId === id) return;
    dispatch(setNewMessageAleart(data));
    if(getNotificationSound){
      getNotificationSound.currentTime = 0; // rewind for rapid use
      getNotificationSound.play().catch((err) => {
        console.warn("Sound blocked:", err.message);
      });
    }
  
  },[id]);



  const newRequesetHandler = useCallback(() => {dispatch(incrementNotification())},[]);
    const startOrStopTypingListener = useCallback((data) => {
      if(user === data.user) return;
      // console.log(data);
      dispatch(setTyping(data));
    }, [user]);
    const checkOnlineUsersHandler = useCallback((data) =>  dispatch(setOnlineUsers(data.onlineUsers)), []);

    const eventHandlersArr = { [NEW_MESSAGE_ALERT]: newMessageAlertHandler,[NEW_REQUEST]: newRequesetHandler, [START_OR_STOP_TYPING]: startOrStopTypingListener,[UPDATE_USER_STATUS]:checkOnlineUsersHandler  };
  
    useSocketEvents(socket, eventHandlersArr);

    useEffect(() => {
    setChatData(data);
    }, [data]);

  return (<>
  {/* <Navbar /> */}
  <Title  />
  <div className="flex h-[calc(100dvh)]">
      <Sidebar id={id} />

      {isLoading && <div className='flex justify-center items-start h-[calc(100dvh)] w-full'><div className='my-auto'><RiseLoader size={25} margin={10} color="#881ec7" speedMultiplier={1.5} /></div></div>}
      
      {id && Object?.keys(chatData || {})?.length !== 0 && !isLoading &&<>
      <ChatWindow paramId={id} user={user} chater={chatData?.chat} setShowInfo={setUserInfoShow} showInfo={userInfoShow} />

      <UserInfo id={id} chatData={chatData?.chat} setShowInfo={setUserInfoShow} showInfo={userInfoShow} />
      </>}
    </div>
    </>
  )
}

export default Home




const useNotificationSounds = () => {
  const [getNotificationSound, setGetNotificationSound] = useState(null);

  useEffect(() => {
    const init = () => {
      setGetNotificationSound(new Audio(notificationSound));
    };

    // Only initialize sounds on first user click
    window.addEventListener("click", init, { once: true });

    return () => {
      window.removeEventListener("click", init);
    };
  }, []);

  return { getNotificationSound };
};
