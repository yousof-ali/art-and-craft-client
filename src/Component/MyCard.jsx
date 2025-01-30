import React from 'react';
import PrimaryButton from '../Component/PrimaryButton'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCard = ({ data, mycraft, setMycraft }) => {
    const { _id, img, item_name, subcategory_name, short_description, price, rating, customization, processing_time, stockStatus } = data;

    const handleDelete = (id) => {
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://art-and-craft-server-one.vercel.app/delete-mycraft/${id}`,{
                    method:"DELETE"
                })
                .then(res => res.json())
                .then(result => {
                    const newData = mycraft.filter(single => single._id !==id);
                    setMycraft(newData);
                })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    return (
        <div className='grid mx-2 p-3 hover:shadow-md gap-4 border rounded duration-500 hover:border-[#db2777] md:grid-cols-3'>
            <div className=' col-span-1'>
                <img className='md:h-full h-[200px] w-full' src={img} alt="" />

            </div>
            <div className='md:col-span-2 space-y-2'>
                <p><span className='font-bold'>Name :</span> <span className='text-xl'>{item_name}</span></p>
                <p><span className='font-bold'>Category :</span> <span className='font-light'>{subcategory_name}</span></p>
                <p><span className='font-bold'>Description :</span> <span className='font-light'>{short_description}</span></p>
                <p><span className='font-bold'>Price :</span> <span className='font-light'>{price}</span> taka</p>
                <p><span className='font-bold'>Rating :</span> <span className='font-light'>{rating}</span> star</p>
                <p><span className='font-bold'>Customization :</span> <span className='font-light'>{customization}</span> </p>
                <p><span className='font-bold'>Processing Time :</span> <span className='font-light'>{processing_time}</span> </p>
                <p><span className='font-bold'>StockStatus:</span> <span className='font-light'>{stockStatus}</span> </p>

                <div className='flex justify-end gap-4'>
                    <Link to={`/edit/${_id}`}>  <PrimaryButton text={'Edit'}></PrimaryButton></Link>
                    <PrimaryButton onClick={() => handleDelete(_id)} text={'Delete'}></PrimaryButton>
                </div>

            </div>

        </div>
    );
};

export default MyCard;