import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import NotFound from "./Pages/NotFound";

const Login = lazy(() => import("./Pages/Login"));
const Register = lazy(() => import("./Pages/Reginster"));
const Home = lazy(() => import("./Pages/Home"));
const Profile = lazy(() => import("./Pages/Profile"));

let user = true;

const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:id" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        
          <Route path="/login" element={<ProtectedRoute user={!user} redirect="/" ><Login /></ProtectedRoute>} />
          <Route path="/register" element={<ProtectedRoute user={!user} redirect="/" ><Register /></ProtectedRoute>} />  
                  
          <Route path="*" element={<NotFound />} />   
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;


