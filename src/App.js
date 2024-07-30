import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import NotFound from "./Pages/NotFound";
import MainLoader from "./components/loaders/MainLoader";
import SoundRecorder from "./Pages/tests/SoundRecorder";
import AdminHome from "./Pages/admin/AdminHome";

const Login = lazy(() => import("./Pages/Login"));
const Register = lazy(() => import("./Pages/Reginster"));
const Home = lazy(() => import("./Pages/Home"));
const Profile = lazy(() => import("./Pages/Profile"));


let user = true;

const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<MainLoader />}>
      <Routes>
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:id" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register-pro" element={<Register />} />
        </Route>

        
          <Route path="/login" element={<ProtectedRoute user={!user} redirect="/" ><Login /></ProtectedRoute>} />
          <Route path="/register" element={<ProtectedRoute user={!user} redirect="/" ><Register /></ProtectedRoute>} />  
                  
          <Route path="/testadmin" element={<AdminHome />} />   
          <Route path="/test/recoder" element={<SoundRecorder />} />   
          <Route path="*" element={<NotFound />} />   
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;


