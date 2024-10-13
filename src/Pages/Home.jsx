import React, { useState } from 'react'
// import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/testLayout/Sidebar'
import ChatWindow from '../components/testLayout/ChatWindow'
import { useParams } from 'react-router-dom'
import UserInfo from '../components/testLayout/UserInfo'
import { useMyChatsQuery } from '../redux/api/api'

const Home = () => {
  const [userInfoShow, setUserInfoShow] = useState(false);
  const params = useParams();

  const {isLoading,isError,error,refetch,data} = useMyChatsQuery('');

  console.log('deta===>',data);
  // console.log(params.id)
  return (<>
  {/* <Navbar /> */}
  <div className="flex h-[calc(100dvh)]">
      <Sidebar id={params.id} chatList={data?.chat} />
      
      <ChatWindow id={params.id} setShowInfo={setUserInfoShow} showInfo={userInfoShow} />

      <UserInfo id={params.id} setShowInfo={setUserInfoShow} showInfo={userInfoShow} />
    </div>
    </>
  )
}

export default Home
