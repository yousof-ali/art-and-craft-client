import React, { useContext, useState } from 'react';
import { AuthContext } from '../../ContextApi/AuthProvider';
import PrimaryButton from '../../Component/PrimaryButton'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddCraft = () => {
    const [category, setCategory] = useState('Clary-made pottery');
    const [ratings, setrating] = useState(1);
    const [status, setStatus] = useState('In stock');
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChangeCategory = (e) => {
        setCategory(e.target.value);
    };
    const handleRateing = (e) => {
        setrating(e.target.value);
    };
    const handleStatus = (e) => {
        setStatus(e.target.value);
    };
    const handleAdd = (e) => {
        e.preventDefault()
        const form = e.target;
        const img = form.imgurl.value;
        const item_name = form.name.value;
        const subcategory_name = category;
        const short_description = form.des.value;
        const price = parseInt(form.price.value);
        const rating = parseInt(ratings);
        const customization = "No";
        const frist = Math.floor(Math.random() * 5) + 1;
        const second = Math.floor(Math.random() * 4) + 6;
        const processing_time = `${frist}-${second} days`;
        const stockStatus = status;
        const email = user?.email;

        const newData = { img, item_name, subcategory_name, short_description, price, rating, customization, processing_time, stockStatus, email };

        fetch('https://art-and-craft-server-one.vercel.app/new-craft', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "New Craft Added!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/my-craft');
                }
            })
            .catch((err) => {
                console.log(err.message)
            });

    };

    return (
        <div className='max-w-[1000px] mx-auto  bg-white mt-6 '>
            <div className='border border-[#db2777] shadow-xl rounded mx-2'>
                <h2 className='text-3xl text-center font-bold bg-[#db2777] text-white p-3 '> Add Craft </h2>

                <form onSubmit={handleAdd} className='p-4 md:p-6 space-y-4' action="">
                    <div className='md:flex w-full gap-6'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input type="=text" name='name' placeholder="Name" className="p-3 outline-[#db2777] border rounded" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select
                                className="p-3 rounded border  outline-[#db2777]"
                                name=""
                                id=""
                                onChange={handleChangeCategory}
                            >
                                <option value="Clary-made pottery">
                                    {" "}
                                    Clary-made pottery
                                </option>
                                <option value="Stoneware"> Stoneware</option>
                                <option value="Porcelain"> Porcelain</option>
                                <option value="Terra Cotta"> Terra Cotta</option>
                                <option value="Ceramics & Architectural"> Ceramics & Architectural</option>
                                <option value="Home decor pottery"> Home decor pottery</option>
                            </select>
                        </div>

                    </div>
                    <div className='md:flex w-full gap-6'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Img URL</span>
                            </label>
                            <input type="url" name='imgurl' placeholder="Photo URL" className="p-3 outline-[#db2777] border rounded" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="=text" name='des' placeholder="Description" className="p-3 outline-[#db2777] border rounded" required />
                        </div>


                    </div>
                    <div className='md:flex w-full gap-6'>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input readOnly value={user?.email} type="email" placeholder="Price" className="p-3 outline-[#db2777] border rounded" required />
                        </div>
                        <div className='md:flex md:w-1/2 gap-2'>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name='price' placeholder="Price" className="p-3 outline-[#db2777] border rounded" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Status</span>
                                </label>
                                <select
                                    className="p-3 rounded border  outline-[#db2777]"
                                    name=""
                                    id=""
                                    onChange={handleStatus}
                                >
                                    <option value='In stock'>
                                        {" "}
                                        In stock
                                    </option>
                                    <option value='No stock'>No stock </option>


                                </select>

                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <select
                                    className="p-3 rounded border  outline-[#db2777]"
                                    name=""
                                    id=""
                                    onChange={handleRateing}
                                >
                                    <option value={1}>
                                        {" "}
                                        1
                                    </option>
                                    <option value={2}>2 </option>
                                    <option value={3}> 3</option>
                                    <option value={4}> 4</option>
                                    <option value={5}> 5</option>

                                </select>
                            </div>
                        </div>


                    </div>

                    <div className='flex justify-end pt-5'>
                        <PrimaryButton text={"Add"}></PrimaryButton>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default AddCraft;