import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Header.css'
import PrimaryButton from '../Component/PrimaryButton'
import { AuthContext } from '../ContextApi/AuthProvider';
import Swal from 'sweetalert2';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", 'light');
        }
    }, [darkMode])

    const links = <>
        <li >< NavLink to={'/'}>Home</NavLink></li>
        <li >< NavLink to={'/all'}>Art & Craft</NavLink></li>
        {
            user && <>
                <li>< NavLink to={'/add'}>Add Craft </NavLink></li>
                <li>< NavLink to={'/my-craft'}>My Art & Craft </NavLink></li>
            </>
        }
        {
            !user && <>
                <li>< NavLink to={'/register'}>Register </NavLink></li>
            </>
        }

    </>


    const handleLogOut = () => {
        Swal.fire({
            title: "Log Out?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log out!"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut();
                Swal.fire({
                    title: "Log Out",
                    position: 'center',
                    text: "Log Out Successfully",
                    icon: "success"
                });
                navigate('/');
            };
        });

    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };


    return (
        <div className="navbar bg-base-200 dark:bg-gray-900">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn dark:text-gray-300 btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu dark:text-white menu-sm dark:bg-gray-900 dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl dark:text-white"><img className='w-10' src="/logo.png" alt="" />𝕮𝖗𝖆𝖋𝖙𝖔𝖗𝖆</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu dark:text-white  menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <label className="swap mr-3 swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <button title={darkMode?'Light':"Dark"} onClick={toggleDarkMode}
                    className='transition-all duration-300 '>
                        {
                            darkMode ? (<svg
                                className=" h-8 dark:text-white w-8 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>) : (
                                <svg 
                                    className=" h-8 w-8 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                </svg>
                            )
                        }

                    </button>


                </label>
                {
                    user ? <><div><Link to={"/account"}> <img title={user?.displayName} className='w-8 cursor-pointer mr-2 md:mr-4 rounded-full border-2 border-[#db2777]' src={user?.photoURL} alt="user" /> </Link></div><PrimaryButton onClick={handleLogOut} text={"logout"}></PrimaryButton></> : <Link to={"/login"}><PrimaryButton text={'Login'}></PrimaryButton></Link>
                }

            </div>
        </div>
    );
};

export default Header;