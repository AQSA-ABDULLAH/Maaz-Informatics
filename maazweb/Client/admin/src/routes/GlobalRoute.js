import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import RoutesStack from "./Routes";
import Sidebar from "../components/molecules/sidebar/Sidebar";
import Login from "../pages/Login/Login";
import {Route,Routes} from 'react-router-dom'
import { useSelector } from "react-redux";
const GlobalRoute = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn) {
      navigate('/login'); 
    } else {
      navigate('/'); 
    }
  }, [isSignedIn, navigate]);

  return (
    <>
      {isSignedIn ?
        (
          <>
            <RoutesStack
              openSidebar={openSidebar}
              setOpenSidebar={setOpenSidebar}
            />
            <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
          </>
        ) :
        (
          <Routes>
            <Route path='/login' element={<Login />}/>
          </Routes>
        )
      }
    </>
  );
};


export default GlobalRoute;