import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const signInUser = (email, password) => {
        setLoading(true);

        return signInWithEmailAndPassword(auth, email, password)
    }



    const logOutUser = () => {
        setLoading(true);

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
            setLoading(false);

        })
        return () => {
            unSubscribe();
        }
    }, [])



    const userInfo = {
        user,
        loading,
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