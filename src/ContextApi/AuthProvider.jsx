import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebaseConfig/firebaseConfig';
import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [loader,setLoader] = useState(true);
    const [user,setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider()

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


   const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth,googleProvider);
   };

   const facebookLogin = () => {
    setLoader(true);
    return signInWithPopup(auth,facebookProvider);
   };

   const updateUser = (name,photoUrl) => {
    return updateProfile(auth.currentUser,{
        displayName:name,photoURL:photoUrl
    });
   };


    const value = {loader,user,createUserEmailPass,logOut,logIn,googleLogin,updateUser,facebookLogin}
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;