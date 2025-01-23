import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PrimaryButton from '../../Component/PrimaryButton'

const Edit = () => {
    const{id} = useParams();
    const [category, setCategory] = useState('Clary-made pottery');
    const [ratings, setrating] = useState(1);
    const [status, setStatus] = useState('In stock');
    const [oldData,setOldData] = useState({});
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
   

    useEffect(() => {
        fetch(`http://localhost:5000/single-product/${id}`)
        .then(res => res.json())
        .then(result => {
            setOldData(result)
        
            
        })
        .catch((err) => {
            console.log(err.message);
        });
    },[id]);

    const handleEdit = (e) => {
        e.preventDefault();
        const form = e.target;
        const img = form.imgurl.value;
        const item_name = form.name.value;
        const subcategory_name = category;
        const short_description = form.des.value;
        const price = parseInt(form.price.value);
        const rating = parseInt(ratings);
        const customization = "Yes";
        const stockStatus = status;

        const updatedData = {img,item_name,subcategory_name,short_description,price,rating,customization,stockStatus}
        console.log(updatedData);

        fetch(`http://localhost:5000/update/${id}`,{
            method:"PUT",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(updatedData)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
        .catch((err) => {
            console.log(err.message);
        });
        
    };

     

    return (
        <div className='max-w-[1000px] mx-auto  bg-white mt-6 '>
            <div className='border border-[#db2777] shadow-xl rounded mx-2'>
                <h2 className='text-3xl text-center font-bold bg-[#db2777] text-white p-3 '> Update Craft </h2>

                <form onSubmit={handleEdit} className='p-4 md:p-6 space-y-4' action="">
                    <div className='md:flex w-full gap-6'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input type="=text" defaultValue={oldData?.item_name} name='name'  placeholder="Name" className="p-3 outline-[#db2777] border rounded" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select
                                className="p-3  rounded border  outline-[#db2777]"
                                name=""
                                id=""
                                onChange={handleChangeCategory}
                            >
                                <option  value="Clary-made pottery">
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
                            <input type="url" defaultValue={oldData?.img} name='imgurl' placeholder="Photo URL" className="p-3 outline-[#db2777] border rounded" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input defaultValue={oldData?.short_description} type="=text" name='des' placeholder="Description" className="p-3 outline-[#db2777] border rounded" required />
                        </div>


                    </div>
                    <div className='md:flex w-full gap-6'>

                        
                        <div className='md:flex md:w-1/2 gap-2'>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" defaultValue={oldData?.price} name='price' placeholder="Price" className="p-3 outline-[#db2777] border rounded" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Status</span>
                                </label>
                                <select
                                defaultValue={oldData?.stockStatus}
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
                        <PrimaryButton  text={"Update"}></PrimaryButton>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default Edit;