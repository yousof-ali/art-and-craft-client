import React from 'react';
import PrimaryButton from "../../../Component/PrimaryButton"
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const Handmade = () => {
    AOS.init({
        duration: 1200,
        easing: "ease-in-out",
        once: true,
      });
    return (
        <div className='max-w-[1300px] container pt-8 pb-24 flex flex-col gap-24 md:flex-row justify-center items-center mx-auto'>
            <div className='flex-1 relative mr-16 ml-2 md:ml-0 md:mr-0 '>
               <img src="./h2.jpg" alt="" />
               <div className='absolute -right-14 -bottom-16'>
                <img data-aos="zoom-in" className='w-52 md:w-64 rounded-t-full border-4 border-white ' src="./h3.jpg" alt="" />
               </div>
            </div>
            <div className='flex-1 px-2 md:px-0 space-y-4'>
                <h3 className='text-xl font-bold text-[#db2777]'>MORE NATURE IN MORE HOMES</h3>
                <h2 className='text-2xl md:text-4xl font-bold'>Handmade with patience and love for the artisansl craft</h2>
                <div className='flex gap-4'>
                    <img src="./hi1.jpg" alt="" />
                    <div>
                        <h4 className='text-xl text-[#db2777]'>High quality product</h4>
                        <p>Each items is made with care and....</p>
                    </div>
                </div>
                <div className='pb-4 flex gap-4'>
                    <img src="./hi2.jpg" alt="" />
                    <div>
                        <h4 className='text-xl text-[#db2777]'>
                            Natural fibers
                        </h4>
                        <p>Each items is made with care and....</p>
                    </div>
                </div>
                <Link to={"/all"}><PrimaryButton text={"Shop Now"}></PrimaryButton></Link>
            </div>
        </div>
    );
};

export default Handmade;