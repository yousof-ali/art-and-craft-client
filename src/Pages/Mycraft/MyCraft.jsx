import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../ContextApi/AuthProvider';
import MyCard from '../../Component/MyCard';


const MyCraft = () => {
    const [allCraft, setAllCraft] = useState([]);
    const [mycraft, setMycraft] = useState([]);
    const { user } = useContext(AuthContext);
    const [customization, setCustomization] = useState('all');

    useEffect(() => {
        fetch(`http://localhost:5000/my-craft?email=${user?.email}`)
            .then(res => res.json())
            .then(result => {
                setAllCraft(result);
                setMycraft(result);
                console.log(customization);
            })
            .catch((err) => {
                console.log(err.message)
            });
    }, [user?.email]);

    const handleFilter = (query) => {
        let filteredCrafts = [...allCraft]

        if (query === "all") {
            setMycraft(filteredCrafts);

        }
        if (query === 'customize') {
            filteredCrafts = filteredCrafts.filter(single => single.customization === "Yes");
            setMycraft(filteredCrafts);

        }
        if (query === 'not customize') {
            filteredCrafts = filteredCrafts.filter(single => single.customization === "No");
            setMycraft(filteredCrafts);

        }


    }


    return (
        <div className='container mx-auto'>
            <div>
                <h2 className='text-center py-4 text-3xl font-bold text-white bg-[#db2777]'>My Art & Craft</h2>
                <div className='flex justify-end my-6'>
                    <div className="dropdown dropdown-bottom justify-end dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1 text-white hover:text-black bg-[#db2777]">Filter By </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li onClick={() => handleFilter("all")}><a>All</a></li>
                            <li onClick={() => handleFilter("customize")}><a>Customize</a></li>
                            <li onClick={() => handleFilter("not customize")} ><a>Not Customize</a></li>
                        </ul>
                    </div>
                </div>
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