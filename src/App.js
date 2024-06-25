import React, { lazy } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const Login = lazy(()=> import('./Pages/Login'));
const Register = lazy(()=> import('./Pages/Reginster'));
const Home = lazy(()=> import('./Pages/Home'));

// let user = true;

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
        {/* // <Route element={<}>
        // </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
