import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa6";





const TopCategory = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className='container px-2 mx-auto pb-8'>
            <div className='divider'></div>

            <h2 className='text-2xl pb-0 font-bold flex items-center gap-3'>Top <span className='text-[#db2777]'>Categories </span><span className='text-[#db2777]'><FaArrowRight /></span></h2>
            <div className="slider-container py-6 ">
                <Slider {...settings}>
                    <div className='px-2' >
                        <div className='flex justify-center '>
                            <div className='p-2 hover:border-[#db2777] duration-500 rounded-full border-dotted border-2 overflow-hidden'>
                                <img className='rounded-full p-2 transform hover:scale-110 transition duration-1000' src="./c1.jpg" alt="" />
                            </div>
                        </div>
                        <div className='py-2'>
                            <h3 className='font-bold text-xl text-center text-[#db2777]'>Clary-made pottery</h3>
                            <p className='text-center'>5 Products</p>
                        </div>
                    </div>
                    <div className='px-2'>
                        <div className='flex justify-center '>
                            <div className='p-2 hover:border-[#db2777] duration-500 rounded-full border-dotted border-2 overflow-hidden'>
                                <img className='rounded-full p-2 transform hover:scale-110 transition duration-1000' src="./c2.jpg" alt="" />
                            </div>
                        </div>
                        <div className='py-2'>
                            <h3 className='font-bold text-xl text-center text-[#db2777]'>Stoneware</h3>
                            <p className='text-center'>4 Products</p>
                        </div>
                    </div>
                    <div className='px-2'>
                        <div className='flex justify-center '>
                            <div className='p-2 hover:border-[#db2777] duration-500 rounded-full border-dotted border-2 overflow-hidden'>
                                <img className='rounded-full p-2 transform hover:scale-110 transition duration-1000' src="./c3.jpg" alt="" />
                            </div>
                        </div>
                        <div className='py-2'>
                            <h3 className='font-bold text-xl text-center text-[#db2777]'>Porcelain</h3>
                            <p className='text-center'>5 Products</p>
                        </div>
                    </div>
                    <div className='px-2'>
                        <div className='flex justify-center '>
                            <div className='p-2 hover:border-[#db2777] duration-500 rounded-full border-dotted border-2 overflow-hidden'>
                                <img className='rounded-full p-2 transform hover:scale-110 transition duration-1000' src="./c4.jpg" alt="" />
                            </div>
                        </div>
                        <div className='py-2'>
                            <h3 className='font-bold text-xl text-center text-[#db2777]'>Terra Cotta</h3>
                            <p className='text-center'>3 Products</p>
                        </div>
                    </div>
                    <div className='px-2'>
                        <div className='flex justify-center '>
                            <div className='p-2 hover:border-[#db2777] duration-500 rounded-full border-dotted border-2 overflow-hidden'>
                                <img className='rounded-full p-2 transform hover:scale-110 transition duration-1000' src="./c5.jpg" alt="" />
                            </div>
                        </div>
                        <div className='py-2'>
                            <h3 className='font-bold text-xl text-center text-[#db2777]'>Ceramics & Architectural</h3>
                            <p className='text-center'>4 Products</p>
                        </div>
                    </div>
                    <div className='px-2'>
                        <div className='flex justify-center '>
                            <div className='p-2 hover:border-[#db2777] duration-500 rounded-full border-dotted border-2 overflow-hidden'>
                                <img className='rounded-full p-2 transform hover:scale-110 transition duration-1000' src="./c6.jpg" alt="" />
                            </div>
                        </div>
                        <div className='py-2'>
                            <h3 className='font-bold text-xl text-center text-[#db2777]'>Home decor pottery</h3>
                            <p className='text-center'>5 Products</p>
                        </div>
                    </div>
                    
                </Slider>
            </div>

        </div>
    );
};

export default TopCategory;