import React from "react";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import {
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import PostIdPage from "../pages/PostIdPage";
import { publicRoutes, privateRoutes } from "../router/routes";
import Login from "../pages/Login";
import { useContext } from "react";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";


const AppRouter = () => {
    const {isAuth,  isLoading} = useContext(AuthContext);
    console.log(isAuth);
    if(isLoading) {
        return <Loader/>
        
    }

    return (
        isAuth
            ? <Routes>
                    {privateRoutes.map(route => 
                        <Route
                         element ={<route.element/>} 
                         path={route.path} 
                         key ={route.path}
                         />
                    )}
                <Route path="/login" element = {<Navigate replace to= "/posts"/>} />
                </Routes>
                
            :  
            <Routes>
                    {publicRoutes.map(route => 
                        <Route 
                        element ={<route.element/>}
                        path={route.path} 
                        key = {route.path}
                        />
                    )}
                <Route path="*" element = {<Navigate replace to= "/login"/>} />
           
                </Routes>
                
            

        // <Routes>
        //   {/* <Route path="/about" element = {<About/>}/>
        //   <Route path = "/posts" element = {<Posts></Posts>} />
        //   <Route path="/posts/:id" element = {<PostIdPage/>}/> */}

        //   {privateRoutes.map(route => 
        //     <Route element ={<route.element/>} path={route.path} />
        //   )}


        //    {publicRoutes.map(route => 
        //     <Route element ={<route.element/>} path={route.path} />
        //   )}
        

        //   {/* <Route path = "/" element = {<Posts></Posts>} />
        //   <Route path="*" element = {<Error></Error>}/> */}
        // </Routes>
    )
};

export default AppRouter;