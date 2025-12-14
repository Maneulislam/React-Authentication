import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase.init';

const Login = () => {

    const provider = new GoogleAuthProvider();


    const handleSignIn = () => {
        console.log("Sign in clicked");

        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <h2>Please Log In</h2>
            <button onClick={handleSignIn}>SignIn with Google</button>
        </div>
    );
};

export default Login;