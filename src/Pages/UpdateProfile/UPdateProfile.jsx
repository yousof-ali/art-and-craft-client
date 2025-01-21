import React, { useContext } from 'react';
import { AuthContext } from '../../ContextApi/AuthProvider';
import PrimaryButton from '../../Component/PrimaryButton'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UPdateProfile = () => {
    const { user, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleUpdate = (e) => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const photoUrl = from.photoUrl.value;
        updateUser(name, photoUrl)
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Profile Updated!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/account")
            })
            .catch((err) => {
                console.log(err.message)
            })
    };
    return (
        <div className='max-w-[800px] bg-white mt-4 md:mt-12 md:border md:shadow-md rounded-xl p-4 mx-auto'>
            <h2 className='text-3xl font-bold text-[#db2777] text-center pb-8'>Update Account</h2>
            <div className='mx-2 flex flex-col md:flex-row gap-6 items-center'>
                <div>
                    <img className='max-w-[300px]' src={user.photoURL} alt="user" />
                </div>
                <div className='space-y-4 w-full'>

                    <p className='text-xl'>Email Address: <span className='font-light'>{user?.email}</span></p>
                    <p className='text-xl'>Email Status: <span className='font-light'>{user?.
                        emailVerified ? "Verified" : "Not Veified"}</span></p>
                    <form className='w-full' onSubmit={handleUpdate}>
                        <p className='text-xl'>Name: <input name='name' type="text" className='border rounded-md outline-[#bd2777] p-2 ' defaultValue={user?.displayName} /></p>
                        <p className='text-xl mt-4 mb-8'>Photo: <input name='photoUrl' type="url" className='border rounded-md outline-[#bd2777] p-2  ' defaultValue={user?.photoURL} /></p>
                        <div className='flex  justify-end'>
                            <PrimaryButton text={"Submit"}></PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default UPdateProfile;