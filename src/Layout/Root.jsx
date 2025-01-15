import React from 'react';
import Header from '../Component/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer';

const Root = () => {
    return (
        <div className='max-w-[2000px] mx-auto'>
            <Header></Header>
            <div className='min-h-[70vh]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;