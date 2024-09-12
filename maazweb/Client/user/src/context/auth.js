import { useState,useEffect, useContext, createContext } from "react";
import { setContext } from "redux-saga/effects";
const AuthContext = createContext();

const AuthProvider = ({Children}) =>{
    const [auth, setAuth]= useState({
        user:null,
        tokens:""
    })
    return (
        <AuthContext.Provider value={[auth,setAuth]}>
            {Children}
        </AuthContext.Provider>
    )
}

// custom Hook
const useAuth =() => setContext(AuthContext)

export {useAuth, AuthProvider}