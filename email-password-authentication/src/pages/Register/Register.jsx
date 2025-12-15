import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/firebase.init';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';


const Register = () => {

    const [errorMsg, setErrorMsg] = useState();
    const [success, setSuccess] = useState(false);
    const [show, setShow] = useState(false);


    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const terms = event.target.terms.checked;
        console.log(email, password);

        setSuccess(false)
        setErrorMsg('')


        if (!terms) {
            setErrorMsg("Accept Our Terms and Condition");
            return;
        }


        const passwordExpDigit = /(?=.*\d)/;
        const passwordExpLowercase = /(?=.*[a-z])/;
        const passwordExpUppercase = /(?=.*[A-Z])/;

        if (password.length < 6) {
            setErrorMsg("Password must be 6 Character");
            return;
        }

        else if (!passwordExpUppercase.test(password)) {
            setErrorMsg("Password must have one uppercase letter");
            return;
        }
        else if (!passwordExpLowercase.test(password)) {
            setErrorMsg("Password must have one lowercase letter");
            return;
        }
        else if (!passwordExpDigit.test(password)) {
            setErrorMsg("Password must have one digit");
            return;
        }
        else {
            setErrorMsg("");
        }





        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);
                setSuccess(true);
            })
            .catch(error => {
                console.log(error);
                setErrorMsg(error.message)
            })
    }


    return (
        <div className='max-w-sm mx-auto mt-14 m-10 '>
            <h1 className='text-2xl font-bold mb-7' >Please Register</h1>
            <form onSubmit={handleLogin} className=''>
                <div className="">
                    <div>
                        <label className="input validator join-item">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg>
                            <input type="email" name='email' placeholder="mail@site.com" required />
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>
                    </div>
                </div>


                <br />
                {/* Password field */}


                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path
                                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                            ></path>
                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </g>
                    </svg>
                    <div className='flex justify-between'>
                        <input
                            type={show ? 'text' : 'password'}
                            name='password'
                            required
                            placeholder="Password"
                            minLength="3"
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                        />
                        <button onClick={() => setShow(!show)} className='p-0 ml-20' >{show ? <IoIosEyeOff /> : <IoIosEye />}</button>
                    </div>
                </label>
                <p className="validator-hint hidden">
                    Must be more than 8 characters, including
                    <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                </p>

                <br />
                <label className="label mt-4">
                    <input type="checkbox" name='terms' className="checkbox" />
                    Terms and Condition
                </label>

                <br />


                <input className='btn btn-primary my-5' type="submit" value="Submit" />
            </form>

            {
                errorMsg && <p className='text-red-400'>{errorMsg}</p>
            }
            {
                success && <p className='text-green-400'>User Created Successfully</p>
            }
        </div>
    );
};

export default Register;