import React, { useContext, useState } from 'react';
import loginanimation from './../Login/Animation - 1737277869322.json'
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PrimaryButton from '../../Component/PrimaryButton'
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from '../../ContextApi/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';



const Register = () => {
    const { loader, createUserEmailPass } = useContext(AuthContext);
    const [hide, setHide] = useState(true);
    const [err, setErr] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const handelHide = () => {
        setHide(!hide);
    };
    const handleRegister = (e) => {
        setErr("");
        e.preventDefault();
        const from = e.target
        const name = from.name.value
        const email = from.email.value
        const password = from.password.value
        const photo = 'https://i.ibb.co.com/TKcxK0g/default-user.jpg'

        if (password.length < 6) {
            setErr("password will be more than 6 character!");
            return;
        }
        else if (!/^(?=.*[A-Z])/.test(password)) {
            setErr('use one uppercase in password ')
            return
        }
        else if (!/^(?=.*[a-z])/.test(password)) {
            setErr('use one lowercase in password')
            return
        };
        createUserEmailPass(email, password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: name, photoURL: photo
                })
                    .then(() => {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Account Created",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(location?.state ? location.state : "/");
                    })
            })
            .catch((err) => {
                setErr(err.message);
            })
    };
    return (
        <div className='flex flex-col  min-h-[70vh]  md:flex-row container mx-auto justify-center items-center'>
            <div className='flex flex-col justify-center items-center flex-1 '>

                <div className='card bg-base-100 pb-6 w-full max-w-sm shrink-0  shadow-2xl'>
                    <h2 className=' text-center text-2xl pt-4  font-bold text-[#db2777]'>Register
                    </h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="  outline-[#db2777] border rounded-xl p-3" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="  outline-[#db2777] border rounded-xl p-3" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={hide ? "password" : "text"} name='password' placeholder="password" className="  outline-[#db2777] border rounded-xl p-3" required />
                            <div onClick={handelHide} className='text-2xl cursor-pointer absolute bottom-3 right-4'>
                                {
                                    hide ? <IoEye></IoEye> : <IoEyeOff />
                                }
                            </div>
                        </div>

                        {err && <p className='text-sm text-red-600'>{err}</p>}

                        <div className="form-control mt-6 ">
                            <PrimaryButton text={'Register'}></PrimaryButton>
                        </div>
                        <p>Already Account ? <Link to={"/login"} className='btn btn-link text-[#db2777]'>Login Now</Link></p>
                    </form>
                </div>
            </div>
            <div className='flex-1 hidden md:flex'>
                <Lottie animationData={loginanimation}></Lottie>
            </div>
        </div>
    );
};

export default Register;