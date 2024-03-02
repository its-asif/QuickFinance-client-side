/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider,FacebookAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "@firebase/auth";





const AuthContext = createContext()
const ContextApi = ({ children }) => {
    const axiosPublic = useAxiosPublic()
    // emailAndPassword Authentication
    const [AuthUser, setAuthUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //create User with Email
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Update User
    const UpdateUser = (name, photo_Url) => {
        // setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo_Url
        })
    }

    // Google Sign In
    const GoogleProvider = new GoogleAuthProvider();

    const GoogleSignUp = () => {
        return signInWithPopup(auth, GoogleProvider)
    }
    // Facebook Sign In
    const FaceBookProvider = new FacebookAuthProvider();

    const FacebookSignUp = () => {
        return signInWithPopup(auth, FaceBookProvider)
    }

    //Sign In User
    const SignInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Log Out User
    const LogOut = () => {
        setLoading(true)
        setAuthUser(null)
        return signOut(auth)
    }

    //Manage User

    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, (user) => {
            const userEmail = user?.email || AuthUser?.email;
            const loggedUser = { email: userEmail };
            setAuthUser(user)
            setLoading(false);
            if (user) {
                axiosPublic.post('/api/v1/jwt',loggedUser, { withCredentials: true })
                .then(res=>{
                    console.log('token response', res.data);
                })
                axiosPublic.post('/api/users',loggedUser)
                .then(res=>{
                    console.log('token response', res.data);
                })
               

            }
            else {
                axiosPublic.post('/api/v1/logout',loggedUser,{
                    withCredentials:true
                })
                .then(res=>{
                    console.log('token response', res.data);
                })
            }
        });

        return () => Unsubscribe()
    }, [axiosPublic])


    const contextInfo = {
        AuthUser,
        loading,
        createUser,
        UpdateUser,
        SignInUser,
        GoogleSignUp,
        FacebookSignUp,
        LogOut
    }


    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export { AuthContext, ContextApi };
