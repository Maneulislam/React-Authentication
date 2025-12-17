import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Profile = () => {
    const { user } = use(AuthContext)
    return (
        <div className='max-w-lg mt-20 mx-auto'>
            <h1>Your Profile</h1>
            <p>{user.email}</p>
        </div>
    );
};

export default Profile;