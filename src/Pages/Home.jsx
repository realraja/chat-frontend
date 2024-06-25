import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-rose-500 gap-5 min-h-screen'>
      <a href="/login"><button className='border-2 border-purple-700 bg-cyan-400 p-5 rounded'>Login</button></a>
      <a href="/register"><button className='border-2 border-purple-700 bg-cyan-400 p-5 rounded'>Register</button></a>
    </div>
  )
}

export default Home
