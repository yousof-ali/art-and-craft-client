
import React, { useEffect, useState } from 'react';
import Card from '../../Component/Card';

const AllCraft = () => {
    const [alldata,setAllData] = useState([]);

    useEffect(() => {
        fetch('https://art-and-craft-server-one.vercel.app/all-craft')
        .then(res => res.json())
        .then(result => {
            setAllData(result);
        })
        .catch((err) => {
            console.log(err.message);
        });
    },[]);
    return (
        <div className='container mx-auto'>
            <h2 className='text-center font-bold text-2xl py-6 text-[#db2777]'>Find Your Best Art & Craft</h2>
            {
                alldata.length<1&&<p className='py-24 text-center '><span className="loading loading-spinner  text-secondary"></span></p>
            }
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 lg:gap-8'>
                {
                  alldata.map(singleData => <Card key={singleData._id} product={singleData}></Card> )
                }
            </div>
            
        </div>
    );
};

export default AllCraft;