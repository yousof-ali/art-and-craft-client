import React, { useContext, useState } from 'react';
import Lottie from 'lottie-react';
import loginAnimation from "./Animation - 1737277869322.json"
import { FcGoogle } from "react-icons/fc";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PrimaryButton from '../../Component/PrimaryButton'
import { AuthContext } from '../../ContextApi/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const {logIn} = useContext(AuthContext);
    const [hide,setHide] = useState(true);
    const navigate = useNavigate();
    const [err,setErr] = useState('');
    const location = useLocation()
    const handelHide = () => {
        setHide(!hide);
    } ;

    const handleLogIn = (e) => {
        e.preventDefault();
        setErr("");
        const from = e.target 
        const email = from.email.value 
        const password = from.password.value 
        logIn(email,password)
        .then(result => {
            console.log(result);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
              navigate(location?.state ? location.state : "/");
        })
        .catch((err) => {
            setErr("wrong email or password!");
        })
    };
    return (
        <div className='flex flex-col  min-h-[70vh]  md:flex-row container mx-auto justify-center items-center'>
            <div className='flex flex-col justify-center items-center flex-1 '>

                <div className='card bg-base-100 pb-6 w-full max-w-sm shrink-0  shadow-2xl'>
                    <h2 className=' text-center text-2xl pt-4  font-bold text-[#db2777]'>Login
                    </h2>
                    <form onSubmit={handleLogIn} className="card-body">
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
                            <input type={hide?"password":"text"}  name='password' placeholder="password" className="  outline-[#db2777] border rounded-xl p-3" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <div onClick={handelHide} className='text-2xl cursor-pointer absolute bottom-11 right-4'>
                                {
                                    hide ? <IoEye></IoEye> : <IoEyeOff />
                                }
                            </div>
                        </div>
                        {
                            err&&<p className='text-sm text-red-600'>{err}</p>
                        }
                        <div className="form-control mt-6">
                            <PrimaryButton text={'Login'}></PrimaryButton>
                        </div>
                        <p>No Account ? <Link to={"/register"} className='btn btn-link text-[#db2777]'>Register Now</Link></p>
                    </form>
                    <div class="divider divider-secondary px-4">Continue With</div>


                    <div className='text-xl mx-4 flex '>
                        <span className='flex cursor-pointer items-center border rounded-xl p-2 gap-2'><FcGoogle /> Google</span>
                    </div>


                </div>
            </div>
            <div className='flex-1 hidden md:flex'>
                <Lottie animationData={loginAnimation}></Lottie>
            </div>
        </div>
    );
};

export default Login;