import React from 'react';
import PrimaryButton from "../Component/PrimaryButton";
import { FaRegHeart, FaRegBookmark } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { Link } from 'react-router-dom';


const Card = ({ product }) => {
    const { img, item_name, subcategory_name, short_description, price, rating } = product;
    const stars = Array(5).fill(0);

    return (
        <div className="card relative hover:border border hover:border-[#db2777] bg-base-100 shadow-xl group">
            <figure>
                <div className="h-56 w-full">
                    <img className="h-full w-full" src={img} alt="craft" />
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
                <p className="font-light">{short_description}</p>
                <p className="font-bold">
                    Price: <span className="text-[#db2777]">{price} $</span>
                </p>
                <div className="card-actions justify-end">
                    <Link to={"/details"}><PrimaryButton text="Details" /></Link>
                </div>
            </div>

            {/* Hover Buttons */}
            <div className="absolute top-1 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-2">

                    <button data-tooltip-id="heart-tooltip"
                        data-tooltip-content="Add to Favorites" className="text-xl font-bold cursor-pointer bg-white p-2 rounded-full text-[#db2777]">
                        <FaRegHeart />
                    </button>

                    <button data-tooltip-id="bookmark-tooltip"
                        data-tooltip-content="Save for Later" className="text-xl font-bold cursor-pointer bg-white p-2 rounded-full text-[#db2777]">
                        <FaRegBookmark />
                    </button>
                </div>
            </div>
            <Tooltip id="heart-tooltip" place="top" />
            <Tooltip id="bookmark-tooltip" place="top" />
        </div>
    );
};

export default Card;
