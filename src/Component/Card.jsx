import React, { useContext, useEffect, useState } from 'react';
import PrimaryButton from "../Component/PrimaryButton";
import { FaRegHeart } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { AuthContext } from '../ContextApi/AuthProvider';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';




const Card = ({ product }) => {
    const { user } = useContext(AuthContext);
    const { _id, img, item_name, subcategory_name, short_description, price, rating } = product;
    const stars = Array(5).fill(0);
    const [favr, setfavr] = useState([]);
    const navigate = useNavigate();
    const [alert, setAlert] = useState({ open: false, message: '', severity: '' });


    useEffect(() => {
        fetch(`http://localhost:5000/getfav`)
            .then(res => res.json())
            .then(result => { 
                const fil = result.filter(single => single.email === user?.email)
                setfavr(fil);   
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [user]);
    


    const handleFav = (id) => {
        if (!user) {
            navigate('/login')
            return
        }
        const ids = id
        const email = user?.email
        const status = 'yes'

        const fav = { ids, email, status }

        const exist = favr.find(single => single.ids === ids );

        if (!exist) {
            fetch(`http://localhost:5000/favorites`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(fav)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.insertedId) {
                        setfavr([...favr, fav]);
                        setAlert({ open: true, message: 'Added to Favorites!', severity: 'success' });
                    } else {
                        console.log("lkdhgeoit")
                    }

                });

        } else {
            fetch(`http://localhost:5000/unfav/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    if (result.deletedCount > 0) {
                        const filtar = favr.filter(single => single.ids !== id)
                        setfavr(filtar);
                        setAlert({ open: true, message: 'Remove to Favorites!', severity: 'success' });
                    }
                })
                .catch((err) => {
                    console.log(err.message);
                })

        }


    };


    // const handleBookmarks =(id) => {
    //     if(!user){
    //         navigate('/login');
    //         return;
    //     };

    //     const ids = id;
    //     const email = user?.email;
    //     const status = 'yes'
    //     const booked = {ids,email,status}

    //     const exist = bookmark.find(single => single.ids === ids);

    //     if(!exist){
    //         fetch(`http://localhost:5000/bookmark`,{
    //             method:"POST",
    //             headers:{
    //                 'content-type':'application/json'
    //             },
    //             body:JSON.stringify(booked)
    //         })
    //         .then(res => res.json())
    //         .then(result => {
    //             if (result.insertedId) {
    //                 setBookmark([...bookmark, booked]);
    //                 setAlert({ open: true, message: 'Added to Bookmarked!', severity: 'success' });
    //             } else {
    //                 console.log("lkdhgeoit")
    //             }
    //         })
    //     }
    // }



    const handleCloseAlert = () => {
        setAlert({ ...alert, open: false });
    };

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
                    Price: <span className="text-[#db2777]">{price} </span>
                </p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${product?._id}`}><PrimaryButton text="Details" /></Link>
                </div>
            </div>

            {/* Hover Buttons */}
            <div className="absolute top-1 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-2">
                   
                            <button
                                onClick={() => handleFav(_id)}
                                data-tooltip-id="heart-tooltip"
                                data-tooltip-content={
                                    favr.find((single) => single.ids == _id)
                                        ? 'Favorites'
                                        : 'Add to Favorites'
                                }
                                className="text-xl font-bold cursor-pointer bg-white p-2 rounded-full text-[#db2777]"
                            >
                                {favr.find((single) => single.ids == _id) ? (
                                    <FaHeart />
                                ) : (
                                    <FaRegHeart />
                                )}
                            </button>
                        
                    


                    {/* <button data-tooltip-id="bookmark-tooltip"
                        data-tooltip-content="Save for Later" className="text-xl font-bold cursor-pointer bg-white p-2 rounded-full text-[#db2777]">
                        <FaRegBookmark />
                    </button> */}
                </div>
            </div>
            <Tooltip id="heart-tooltip" place="top" />
            <Tooltip id="bookmark-tooltip" place="top" />


            <Snackbar
                open={alert.open}
                autoHideDuration={3000}
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseAlert} severity={alert.severity}>
                    {alert.message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Card;
