import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';





const TopCategory = () => {
    const [allData, setALlData] = useState([]);
    const [categories,setCategories] = useState([]);
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

    useEffect(() => {
        fetch('https://art-and-craft-server-one.vercel.app/all-craft')
            .then(res => res.json())
            .then(result => {
                setALlData(result);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, []);

    useEffect(() => {
        fetch('/category.json')
        .then(res => res.json())
        .then(result => {
            setCategories(result);
        })
        .catch((err) => {
            console.log(err.message);
        })
    },[]);


    return (
        <div className='container px-2 mx-auto pb-8'>
            <div className='divider'></div>

            <h2 className='text-2xl pb-0 font-bold flex items-center gap-3'><span className='dark:text-white'>Top</span> <span className='text-[#db2777]'>Categories </span><span className='text-[#db2777]'><FaArrowRight /></span></h2>
            <div className="slider-container py-6 ">
                <Slider {...settings}>
                    {
                        categories?.map(single => <div key={single.id} className='px-2' >
                            <div className='flex justify-center '>
                                <div className='p-2 hover:border-[#db2777] duration-500 rounded-full border-dotted border-2 overflow-hidden'>
                                    <Link to={`category/${single.id}`}>
                                        <img className='cursor-pointer rounded-full p-2 transform hover:scale-110 transition duration-1000' src={single.img} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className='py-2'>
                                <h3 className='font-bold text-xl text-center text-[#db2777]'>{single.category}</h3>
                                <p className='dark:text-gray-200 text-center'>{allData.filter(singledata => singledata.subcategory_name === single.category).length} Products</p>
                            </div>
                        </div>)
                    }
                    {/* <div className='px-2' >
                        <div className='flex justify-center '>
                            <div className='p-2 hover:border-[#db2777] duration-500 rounded-full border-dotted border-2 overflow-hidden'>
                                <Link to={`category/${'1'}`}>
                                    <img className='cursor-pointer rounded-full p-2 transform hover:scale-110 transition duration-1000' src="./c1.jpg" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className='py-2'>
                            <h3 className='font-bold text-xl text-center text-[#db2777]'>Clary-made pottery</h3>
                            <p className='text-center'>{allData.filter(single => single.subcategory_name === 'Clary-made pottery').length} Products</p>
                        </div>
                    </div>
                    <div className='px-2'>
                        <div className='flex justify-center '>
                            <div className='p-2 hover:border-[#db2777] duration-500 rounded-full border-dotted border-2 overflow-hidden'>
                                <Link to={`category/${'2'}`}>
                                    <img className='cursor-pointer rounded-full p-2 transform hover:scale-110 transition duration-1000' src="./c2.jpg" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className='py-2'>
                            <h3 className='font-bold text-xl text-center text-[#db2777]'>Stoneware</h3>
                            <p className='text-center'>{allData.filter(single => single.subcategory_name === 'Stoneware').length} Products</p>
                        </div>
                    </div>
                    <div className='px-2'>
                        <div className='flex justify-center '>
                            <div className='p-2 hover:border-[#db2777] duration-500 rounded-full border-dotted border-2 overflow-hidden'>
                                <Link to={`category/${'3'}`}>
                                    <img className='cursor-pointer rounded-full p-2 transform hover:scale-110 transition duration-1000' src="./c3.jpg" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className='py-2'>
                            <h3 className='font-bold text-xl text-center text-[#db2777]'>Porcelain</h3>
                            <p className='text-center'>{allData.filter(single => single.subcategory_name === 'Porcelain').length} Products</p>
                        </div>
                    </div>
                    <div className='px-2'>
                        <div className='flex justify-center '>
                            <div className='p-2 hover:border-[#db2777] duration-500 rounded-full border-dotted border-2 overflow-hidden'>
                                <Link to={`category/${'4'}`}>
                                <img className='cursor-pointer rounded-full p-2 transform hover:scale-110 transition duration-1000' src="./c4.jpg" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className='py-2'>
                            <h3 className='font-bold text-xl text-center text-[#db2777]'>Terra Cotta</h3>
                            <p className='text-center'>{allData.filter(single => single.subcategory_name === 'Terra Cotta').length} Products</p>
                        </div>
                    </div>
                    <div className='px-2'>
                        <div className='flex justify-center '>
                            <div className='p-2 hover:border-[#db2777] duration-500 rounded-full border-dotted border-2 overflow-hidden'>
                                <Link to={`/category/${'5'}`}>
                                <img className='cursor-pointer rounded-full p-2 transform hover:scale-110 transition duration-1000' src="./c5.jpg" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className='py-2'>
                            <h3 className='font-bold text-xl text-center text-[#db2777]'>Ceramics & Architectural</h3>
                            <p className='text-center'>{allData.filter(single => single.subcategory_name === 'Ceramics and Architectural').length} Products</p>
                        </div>
                    </div>
                    <div className='px-2'>
                        <div className='flex justify-center '>
                            <div className='p-2 hover:border-[#db2777] duration-500 rounded-full border-dotted border-2 overflow-hidden'>
                               <Link to={`/category/${'6'}`}>
                               <img className='cursor-pointer rounded-full p-2 transform hover:scale-110 transition duration-1000' src="./c6.jpg" alt="" />
                               </Link>
                            </div>
                        </div>
                        <div className='py-2'>
                            <h3 className='font-bold text-xl text-center text-[#db2777]'>Home decor pottery</h3>
                            <p className='text-center'>{allData.filter(single => single.subcategory_name === 'Home decor pottery').length} Products</p>
                        </div>
                    </div> */}

                </Slider>
            </div>

        </div>
    );
};

export default TopCategory;