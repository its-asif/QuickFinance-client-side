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
            setAuthUser(user)
            if (user) {
                const UserInfo = {
                    email: user?.email
                }

                // get token and store client
                // axiosPublic.post('/jwt', UserInfo)
                //     .then(res => {
                //         if (res.data.token) {
                //             localStorage.setItem('access-token', res.data.token);
                //         }
                //     })

                setLoading(false)
            }
            else {

                // localStorage.removeItem('access-token');
                setLoading(false)
            }
        });

        return () => Unsubscribe()
    }, [])


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
