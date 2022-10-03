import React from "react";
import './styles/App.css';
import {
   BrowserRouter,
 } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./pages/Error";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsLoading(false)
  }, [])

  return (
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth,
        isLoading
      }}>
        <BrowserRouter>
        <Navbar/>
        <AppRouter/>  
        </BrowserRouter>
      </AuthContext.Provider>
      
  );
}


export default App;
