import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import PrimaryButton from "../../Component/PrimaryButton"
import { FaArrowRight } from "react-icons/fa6";

const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const stars = Array(5).fill(0);
    const [related, setRelated] = useState([]);
    const [loader, setLoader] = useState(true);



    useEffect(() => {
        fetch(`http://localhost:5000/single-product/${id}`)
            .then(res => res.json())
            .then(result => {
                setProduct(result);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [id]);

    useEffect(() => {
        if (product) {
            setLoader(true)
            fetch(`http://localhost:5000/category?category=${product.subcategory_name}`)
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    setRelated(result);
                    setLoader(false);
                })
                .catch((err) => {
                    console.log(err.message);
                    setLoader(false)
                })
        };

    }, [product])

    return (
        <div className='container mx-auto bg-white'>

            <div className='py-8 mx-2 '>
                <h2 className='text-2xl pb-2 font-bold text-[#db2777]'>
                    Details
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-4 md:flex-row justify-center items-center md:gap-12'>
                    <div className=' col-span-2'>
                        <img className='w-full lg:h-[450px] md:h-[350px] h-[250px]' src={product?.img} alt="product" />
                    </div>
                    <div className='col-span-2 py-4 md:py-0'>
                        <h3 className='text-4xl font-bold'>{product?.item_name}</h3>
                        <p className='text-xl mt-4 font-semibold'>{product?.subcategory_name}</p>
                        <p>{product?.short_description}</p>
                        <div className='text-xl'>
                            {stars.map((_, index) => (
                                <span key={index} style={{ color: index < product?.rating ? "gold" : "gray" }}>
                                    ★
                                </span>
                            ))}
                        </div>
                        <div className='flex font-bold items-center gap-4 '>
                            Processing Time:
                            <span className=' border p-2 rounded-xl bg-black text-white font-bold'>
                                {product?.processing_time}
                            </span>
                        </div>
                        <div className='my-4'>
                            <span className=' border p-2 rounded-xl bg-[#db2777] text-white font-bold'>
                                {product?.stockStatus}
                            </span>
                        </div>
                        <div className='flex gap-1 pt-4 items-center text-3xl font-bold'>
                            <FaBangladeshiTakaSign /> {product?.price}
                        </div>
                        <div className='mt-2 max-w-[300px]'>
                            <PrimaryButton className={'w-full'} text={"Buy Now"}></PrimaryButton>
                        </div>

                    </div>
                </div>

            </div>
            <div className='divider'></div>
            <div className='mx-2'>
                <div className='flex items-center text-2xl font-bold text-[#db2777] gap-2'>
                    <h2>Related Product </h2>
                    <FaArrowRight />
                </div>
                {
                    loader && <p className='text-center text-2xl pt-24'><span class="loading loading-spinner text-secondary"></span> </p>
                }
                <div className='grid grid-cols-2 md:grid-cols-6 items-center gap-4 mb-8 mt-4'>
                    {
                        related?.filter(singleitem => singleitem._id !== product?._id).map(single => <Link key={single._id} to={`/details/${single._id}`}> <div className='relative group cursor-pointer flex justify-center border hover:border-[#bd2777] duration-500 rounded-xl overflow-hidden' >
                            <img className='w-full h-36 rounded-xl' src={single?.img} alt="" />
                            <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-500 group-hover:bg-opacity-10"></div>
                        </div></Link>)
                    }
                    <Link><PrimaryButton text={"More"}></PrimaryButton></Link>
                </div>
            </div>
        </div>
    );
};

export default Details;