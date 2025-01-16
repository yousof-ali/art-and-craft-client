import React from 'react';
import PrimaryButton from "../Component/PrimaryButton"
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";



const Card = ({ product }) => {
    const { img, item_name, subcategory_name, short_description, price, rating, customization, processing_time, stockStatus } = product;
    const stars = Array(5).fill(0)
    return (
        <div className="card relative hover:border border hover:border-[#db2777] bg-base-100 shadow-xl">
            <figure>

                <div className='h-56 w-full'>
                    <img
                        className='h-full w-full'
                        src={img}
                        alt="craft" />
                    
                </div>

            </figure>
            <div className="card-body">
                <div>
                    {stars.map((_, index) => (
                        <span key={index} style={{ color: index < rating ? "gold" : "gray" }}>
                            ★
                        </span>
                    ))}
                </div>
                <h2 className="card-title">{item_name}</h2>
                <p className='font-light'>{short_description}</p>
                <p className='font-bold'>Price : <span className='text-[#db2777]'>{price} $ </span></p>
                <div className="card-actions justify-end">
                    <PrimaryButton text={"Details"}></PrimaryButton>
                </div>
            </div>
            <div className="absolute top-1  gap-2 -right-36 rounded-xl py-2  px-4 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                       <div className='flex gap-2'>
                       <h3 className="text-xl font-bold cursor-pointer bg-white px-4 py-2 rounded text-[#db2777]"><FaRegHeart /></h3>
                       <h3 className="text-xl cursor-pointer font-bold bg-white px-4 py-2 rounded text-[#db2777]"><FaRegBookmark /></h3>
                       </div>
                        
                    </div>



        </div>
    );
};

export default Card;