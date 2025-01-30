import React, { useEffect, useState } from 'react';
import Card from '../../../Component/Card';

const PopularProduct = () => {
    const [popularProduct,setPopularProduct] = useState([]);
    useEffect(() => {
        fetch('https://art-and-craft-server-one.vercel.app/all-craft')
        .then(res => res.json())
        .then(data => {
            setPopularProduct(data)
        })
        .catch((err) => {
            console.log(err.message);
        })
    },[])
    return (
        <div className='container px-2 mx-auto py-8'>
            
            <h2 className='text-2xl font-bold'><span className='dark:text-white'>Popular</span> <span className='text-[#db2777]'>Product</span></h2>

            {
                popularProduct.length<1&&<p className='py-24 text-center '><span className="loading loading-spinner  text-secondary"></span></p>
            }
           
            <div className='grid md:grid-cols-3 gap-6 py-4 lg:gap-8  lg:grid-cols-4'>
                {
                  popularProduct.slice(0,7).map((singleproduct,indx) =><Card product={singleproduct} key={indx}></Card> )
                }
            </div>
        </div>
    );
};

export default PopularProduct;