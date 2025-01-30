import React, { useState } from 'react';
import Slider from './Shared/Slider';
import PopularProduct from './Shared/PopularProduct';
import TopCategory from './Shared/TopCategory';
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import Handmade from './Shared/Handmade';

const Home = () => {
    return (
        <div className='dark:bg-gray-700'>
            <Slider></Slider>
            <div className='container hidden lg:flex  overflow-x-auto   py-8  justify-between items-center  mx-auto'>
                <div className='flex  justify-center items-center gap-3 transition-all duration-300'>
                    <div className='hover:rotate-6 transition-transform duration-500'>
                        <img src="./s4.jpg" alt="Free Shipping" />
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold text-[#db2777] transition-colors duration-300'>Free Shipping</h3>
                        <p className='font-light dark:text-gray-200'>Free Shipping for order over $130</p>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className='flex justify-center items-center gap-3 transition-all duration-300'>
                    <div className='hover:rotate-6 transition-transform duration-500'>
                        <img  src="./s1.jpg" alt="Free Shipping" />
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold text-[#db2777] transition-colors duration-300'>Money Guarantee</h3>
                        <p className='font-light dark:text-gray-200'>Within 30 days for an exchange.</p>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className='flex  justify-center items-center gap-3 transition-all duration-300'>
                    <div className='hover:rotate-6 transition-transform duration-500'>
                        <img src="./s2.jpg" alt="Free Shipping" />
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold text-[#db2777] transition-colors duration-300'>24/7 online support</h3>
                        <p className='font-light dark:text-gray-200'>24 hours a day, 7 days a week</p>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className='flex justify-center items-center gap-3 transition-all duration-300'>
                    <div className='hover:rotate-6 transition-transform duration-500'>
                        <img src="./s3.jpg" alt="Free Shipping" />
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold text-[#db2777] transition-colors duration-300'>Flexible Payment</h3>
                        <p className='font-light dark:text-gray-200'>Pay with Multiple Credit Cards</p>
                    </div>
                </div>
            </div>
            <div className='divider  container hidden lg:flex mx-auto'></div>
            <PopularProduct></PopularProduct>
            <TopCategory></TopCategory>
            <Handmade></Handmade>
        </div>
    );
};

export default Home;