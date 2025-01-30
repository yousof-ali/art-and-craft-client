import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '../../Component/Card';
import PrimaryButton from '../../Component/PrimaryButton'

const Category = () => {
    const { id } = useParams()
    const [query, setQuery] = useState('');
    const [data,setData] =  useState([]);
    const [loading,setLoading] = useState(true);
    const [categories,setCategories] = useState([])
    // useEffect(() => {
    //     const categories = {
    //         '1': 'Clary-made pottery',
    //         '2': 'Stoneware',
    //         '3': 'Porcelain',
    //         '4': 'Terra Cotta',
    //         '5': 'Ceramics and Architectural',
    //         '6': 'Home decor pottery',
    //     };
    //     setQuery(categories[id] || 'Unknown category');
    // }, [id]);


    useEffect(() => {
        fetch('/category.json')
        .then(res => res.json())
        .then(result => {
            setCategories(result);
            const filtered = result.find(single => single.id == id)
            setQuery(filtered.category);
        })
        .catch((err) => {
            console.log(err.message);
        })
    },[id]);

    useEffect(() => {
        if (query && query !== 'Unknown category') {
            setLoading(true);
            fetch(`https://art-and-craft-server-one.vercel.app/category?category=${query}`)
                .then((res) => res.json())
                .then((result) => {
                    setData(result);
                    setLoading(false); 
                })
                .catch((err) => {
                    console.error(err.message);
                    setLoading(false); 
                });
        }
    }, [query]);

   

    return (
        <div className='container mx-auto mb-4'>
            <h2 className='text-2xl font-bold text-[#db2777] my-4'>
                {query}
            </h2>
            {
                loading&&<p className='text-center text-2xl pt-24'><span class="loading loading-spinner text-secondary"></span> </p>
            }
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 lg:gap-8'>
                {
                   data?.map(single => <Card product={single} key={single._id}></Card>)
                }
            </div>
            <div className='divider'></div>
            <h2 className='text-2xl font-bold text-[#db2777] mt-6 mb-4'>More Categories</h2>
            <div className=''>
                {
                   categories?.filter(single => single.id !== id).map((single,indx) => <Link to={`/category/${single.id}`} className='mx-4'><PrimaryButton className={'mb-4'} text={single.category}></PrimaryButton></Link>)
                }
            </div>
            
        </div>
    );
};

export default Category;
