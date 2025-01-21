import React, { useContext } from 'react';
import { AuthContext } from '../../ContextApi/AuthProvider';
import PrimaryButton from '../../Component/PrimaryButton'
import { Link } from 'react-router-dom';

const MyAccount = () => {
    const { user } = useContext(AuthContext);
 
    return (
        <div className='max-w-[800px] bg-white mt-4 md:mt-12 md:border md:shadow-md rounded-xl p-4 mx-auto'>
            <h2 className='text-3xl font-bold text-[#db2777] text-center pb-8'>My Account</h2>
            <div className='mx-2 flex flex-col md:flex-row gap-6 items-center'>
                <div>
                    <img className='max-w-[300px]' src={user.photoURL} alt="user" />
                </div>
                <div className='space-y-4'>
                    <p className='text-xl'>Name: <span className='font-light'>{user?.displayName}</span></p>
                    <p className='text-xl'>Email Address: <span className='font-light'>{user?.email}</span></p>
                    <p className='text-xl'>Email Status: <span className='font-light'>{user?.
                        emailVerified ? "Verified" : "Not Veified"}</span></p>
                    <p className='text-xl'>Account Created At : <span className='font-light'>{user?.metadata?.creationTime
                        }</span></p>
                    <p className='text-xl'>Last Login At : <span className='font-light'>{user?.metadata?.lastSignInTime
                        }</span></p>

                </div>
            </div>
            <div className='flex justify-end mt-4'>
                <Link to={'/update-profile'}><PrimaryButton text={"Update"}></PrimaryButton></Link>
            </div>

        </div>
    );
};

export default MyAccount;