import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {

    const { signInUser } = use(AuthContext);

    const handleLogin = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;


        signInUser(email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (

        <div className="card bg-base-100 w-full mx-auto mt-16 max-w-sm shrink-0 shadow-2xl">

            <h1 className="text-3xl text-center font-bold">Login now!</h1>

            <div className="card-body">
                <form onSubmit={handleLogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>New to website? Please <Link to='/register' className=' text-blue-500 underline'>Register</Link></p>
            </div>
        </div>

    );
};

export default Login;