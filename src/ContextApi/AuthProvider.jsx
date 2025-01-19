import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebaseConfig/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [loader,setLoader] = useState(true);
    const [user,setUser] = useState(null);

    const createUserEmailPass = (email,password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
            setLoader(false);
        });
        return () => unsubscribe()
    },[]);

    const logOut = () =>{
        setLoader(true);
        return signOut(auth);
    };

    const logIn = (email,password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password);
   };


    const value = {loader,user,createUserEmailPass,logOut,logIn}
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;