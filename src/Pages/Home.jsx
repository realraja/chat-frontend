import React, { useState } from 'react'
// import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/testLayout/Sidebar'
import ChatWindow from '../components/testLayout/ChatWindow'
import { useParams } from 'react-router-dom'
import UserInfo from '../components/testLayout/UserInfo'
import Title from '../components/shared/Title'
import { useGetChatDetailsQuery } from '../redux/api/api'
// import { GetSoket } from '../socket/socket'

const Home = () => {
  const [userInfoShow, setUserInfoShow] = useState(false);
  const {id} = useParams();

  // console.log(!id)
  //  const socket = GetSoket();

   const ChatDetails = useGetChatDetailsQuery({chatId: id,populate:true},{skip:!id});
  //  console.log(ChatDetails.data);

  //  console.log(socket.id);

  return (<>
  {/* <Navbar /> */}
  <Title  />
  <div className="flex h-[calc(100dvh)]">
      <Sidebar id={id} />
      
      <ChatWindow paramId={id} chater={ChatDetails?.data?.chat} setShowInfo={setUserInfoShow} showInfo={userInfoShow} />

      <UserInfo id={id} chatData={ChatDetails?.data?.chat} setShowInfo={setUserInfoShow} showInfo={userInfoShow} />
    </div>
    </>
  )
}

export default Home
