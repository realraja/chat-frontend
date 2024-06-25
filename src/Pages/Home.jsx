import React from 'react'
import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/testLayout/Sidebar'
import ChatWindow from '../components/testLayout/ChatWindow'

const Home = () => {
  return (<>
  {/* <Navbar /> */}
  <div className="flex h-[calc(100dvh)]">
      <Sidebar />
      
      <ChatWindow />
    </div>
    </>
  )
}

export default Home
