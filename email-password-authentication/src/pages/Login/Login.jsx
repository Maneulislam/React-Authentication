import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { auth } from '../../firebase/firebase.init';
import { Link } from 'react-router';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';

const Login = () => {

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [show, setShow] = useState();
    const emailRef = useRef();


    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        setSuccess(false);
        setError('');


        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess(true)
            })
            .catch(error => {
                setError("Please enter correct email and password");
            })
    }



    const handleForgetPass = () => {

        const email = emailRef.current.value;

        setError('')

        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Password reset email sent")
            })
            .catch(error => {
                setError(error.message)
            })
    }


    return (


        <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleLogin} className="fieldset">
                    <h1 className="text-5xl font-bold mb-5">Login now!</h1>

                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' ref={emailRef} placeholder="Email" />
                    <label className="label">Password</label>
                    <div className='relative'>
                        <input type={show ? "text" : "password"} className="input" name='password' placeholder="Password" />

                        <button onClick={() => setShow(!show)} className='absolute right-10 top-4'>{show ? <IoIosEyeOff /> : <IoIosEye />}</button>
                    </div>
                    <div><a onClick={handleForgetPass} className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>New This Website? Please <Link to='/register' className='text-blue-500 underline'>Register</Link></p>
            </div>
            {
                error && <p className='text-red-500'>{error}</p>
            }
            {
                success && <p className='text-green-500'>User Logged in Successfully</p>
            }
        </div>

    );
};

export default Login;