import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    //loading state
    const [loading, setLoading] = useState(true);
    
    //user State
    const [user, setUser] = useState(null);

    //sign in with popup
    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // user creating with email and password 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //profile update for set user img url
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    //signin with email and password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //signout/logOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //pass data with context
    const authInfo = { user, setUser,loading,setLoading, createUser, updateUserProfile,providerLogin, logOut, signIn };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log('inside auth state change', currentUser);
            setUser(currentUser);

            // if(currentUser === null || currentUser.emailVerified){
            //     setUser(currentUser);
            //     console.log('setUser', user);
            // }
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;