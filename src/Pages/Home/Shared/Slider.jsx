import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay
} from "swiper/modules";

import "swiper/swiper-bundle.css";
import "swiper/css";
import { Link } from 'react-router-dom';
import PrimaryButton from "../../../Component/PrimaryButton"
import { FaArrowRight } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";


const Slider = () => {
    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
      });
    return (
        <div className='max-w-[2000px]  mx-auto'>
            <Swiper
                modules={[Navigation,Autoplay, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
            >
                <SwiperSlide>
                    <div className='flex px-2 py-4 md:py-0 bg-orange-50   md:px-8 lg:px-32 items-center justify-between md:gap-4 lg:gap-16'>
                        <div className='max-w-3xl space-y-2'>
                            <p className='text-[#db2777] lg:text-2xl'>𝓒𝓮𝓻𝓪𝓶𝓲𝓬𝓼</p>
                            <h2 className='text-3xl lg:text-6xl font-semibold'>Purchase Our Latest Product Up To <span className='text-[#db2777]'>30% Off</span></h2>
                            <p className='font-light lg:text-xl pb-4'>Experience the Art of Durability – Premium Ceramic Solutions for Every Need.</p>
                            <Link to={"/all"} ><PrimaryButton text={`Buy Now`}><FaArrowRight /></PrimaryButton></Link>

                        </div>
                        <div className='hidden md:flex'>
                            <img src="/first2.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex px-2 py-4 md:py-0 bg-lime-50   md:px-8 lg:px-32 items-center justify-between md:gap-4 lg:gap-16'>
                        <div className='max-w-3xl space-y-2'>
                            <p className='text-[#db2777] lg:text-2xl'>𝓟𝓸𝓽𝓽𝓮𝓻𝔂</p>
                            <h2 className='text-3xl lg:text-6xl font-semibold'>Fing and Buy Premium Art & Craft <span className='text-[#db2777]'>30% Off</span></h2>
                            <p className='font-light lg:text-xl pb-4'>Crafted with Care, Shaped by Tradition – Timeless Pottery for Every Home.</p>
                            <Link to={"/all"} ><PrimaryButton text={`Buy Now`}><FaArrowRight /></PrimaryButton></Link>
                        </div>
                        <div  className='hidden md:flex'>
                            <img src="/second2.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex px-2 py-4 md:py-0 bg-slate-300  md:px-8 lg:px-32 items-center justify-between md:gap-4 lg:gap-16'>
                        <div className='max-w-3xl space-y-2'>
                            <p className='text-[#db2777] lg:text-2xl'>𝓢𝓽𝓸𝓷𝓮𝔀𝓪𝓻𝓮</p>
                            <h2 className='text-3xl lg:text-6xl font-semibold'>Purchase Our Latest Product Up To <span className='text-[#db2777]'>30% Off</span></h2>
                            <p className='font-light lg:text-xl pb-4'>Durable, Elegant, Timeless – Discover the Beauty of Handcrafted Stoneware.</p>
                            <Link to={"/all"} ><PrimaryButton text={`Buy Now`}><FaArrowRight /></PrimaryButton></Link>
                        </div>
                        <div  className='hidden md:flex'>
                            <img src="/third.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;