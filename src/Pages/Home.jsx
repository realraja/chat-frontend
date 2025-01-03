import React, { useCallback, useEffect, useState } from 'react'
// import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/testLayout/Sidebar'
import ChatWindow from '../components/testLayout/ChatWindow'
import { useParams } from 'react-router-dom'
import UserInfo from '../components/testLayout/UserInfo'
import Title from '../components/shared/Title'
import { useGetChatDetailsQuery } from '../redux/api/api'
import { NEW_MESSAGE_ALERT, NEW_REQUEST } from '../constants/events'
import { useDispatch } from 'react-redux'
import { incrementNotification, setNewMessageAleart } from '../redux/slicer/chat'
import { useSocketEvents } from '../hooks/hook'
import { GetSoket } from '../socket/socket'

const Home = () => {
  const [userInfoShow, setUserInfoShow] = useState(false);
  const [chatData, setChatData] = useState({});
  const {id} = useParams();
  const dispatch = useDispatch()
  // const socket = 

  // console.log(!id)
   const socket = GetSoket();

   const {data,isLoading} = useGetChatDetailsQuery({chatId: id,populate:true},{skip:!id});
  //  console.log(ChatDetails.data);

  //  console.log(socket.id);
  // console.log(isLoading)
  // if(Object.keys(chatData).length !== 0) console.log(chatData);


  const newMessageAlertHandler = useCallback((data) => {
    if(data?.chatId === id) return;
    dispatch(setNewMessageAleart(data));
  },[id]);
  const newRequesetHandler = useCallback(() => {dispatch(incrementNotification())},[]);

    const eventHandlersArr = { [NEW_MESSAGE_ALERT]: newMessageAlertHandler,[NEW_REQUEST]: newRequesetHandler };
  
    useSocketEvents(socket, eventHandlersArr);

    useEffect(() => {
    setChatData(data);
    }, [data]);

  return (<>
  {/* <Navbar /> */}
  <Title  />
  <div className="flex h-[calc(100dvh)]">
      <Sidebar id={id} />

      {isLoading && <h1 className='text-9xl text-red-400'>loading</h1>}
      
      {id && Object?.keys(chatData || {})?.length !== 0 && !isLoading &&<>
      <ChatWindow paramId={id} chater={chatData?.chat} setShowInfo={setUserInfoShow} showInfo={userInfoShow} />

      <UserInfo id={id} chatData={chatData?.chat} setShowInfo={setUserInfoShow} showInfo={userInfoShow} />
      </>}
    </div>
    </>
  )
}

export default Home
