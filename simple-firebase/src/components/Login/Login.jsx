import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase.init';

const Login = () => {

    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();


    const handleSignIn = () => {
        console.log("Sign in clicked");

        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => {
                console.log(error);
            })
    }


    const handleSignOut = () => {
        setUser(null);
    }

    return (
        <div>
            <h2>Please Log In</h2>


            {
                user ? <button onClick={handleSignOut}>Sign Out</button> : <button onClick={handleSignIn}>SignIn with Google</button>
            }
            {
                user && <div>
                    <h2>{user.displayName}</h2>
                    <p>{user.email}</p>
                    <img src={user.photoURL} />

                </div>
            }
        </div>
    );
};

export default Login;