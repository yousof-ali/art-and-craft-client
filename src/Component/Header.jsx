import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import PrimaryButton from '../Component/PrimaryButton'

const Header = () => {
    const links = <>
    <li >< NavLink to={'/'}>Home</NavLink></li>
    <li >< NavLink to={'/all'}>Art & Craft</NavLink></li>
    <li>< NavLink to={'/add'}>Add Craft </NavLink></li>
    <li>< NavLink to={'/my-craft'}>My Art & Craft </NavLink></li>
    <li>< NavLink to={'/blog'}>Blog </NavLink></li>
    <li>< NavLink to={'/register'}>Register </NavLink></li>
    </>
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img className='w-12' src="/logo.png" alt="" />𝕮𝖗𝖆𝖋𝖙𝖔𝖗𝖆</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu  menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={"/login"}><PrimaryButton text={'Login'}></PrimaryButton></Link>
            </div>
        </div>
    );
};

export default Header;