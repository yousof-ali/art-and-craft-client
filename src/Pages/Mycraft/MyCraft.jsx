import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../ContextApi/AuthProvider';
import MyCard from '../../Component/MyCard';

const MyCraft = () => {
    const [mycraft,setMycraft] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/my-craft?email=${user?.email}`)
        .then(res => res.json())
        .then(result => {
            setMycraft(result);
        })
        .catch((err) => {
            console.log(err.message)
        });
    },[]);
    return (
        <div className='container mx-auto'>
            <div>
                <h2 className='text-center py-4 text-3xl font-bold text-white bg-[#db2777]'>My Art & Craft</h2>
                <div className='grid grid-cols-1 my-4 gap-4 lg:grid-cols-2'>
                    {
                        mycraft.map(single => <MyCard key={single._id} data={single}></MyCard>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default MyCraft;