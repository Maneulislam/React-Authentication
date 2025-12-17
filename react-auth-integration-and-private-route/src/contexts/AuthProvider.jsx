import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    const logOutUser = () => {
        return signOut(auth)
    }


    // onAuthStateChanged(auth, (currentUser) => {
    //     if (currentUser) {
    //         console.log("Yes", currentUser);
    //     }

    // })


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Inside useEffect auth", currentUser);
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])



    const userInfo = {
        user,
        createUser,
        signInUser,
        logOutUser
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;