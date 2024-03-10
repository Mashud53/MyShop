
// import { useState } from 'react';


import { categories } from './CategoriesData';
import { useNavigate, useSearchParams } from 'react-router-dom';
import qs from 'query-string'



const Category = () => {

    
    const [params, setParams] = useSearchParams();

    const navigate = useNavigate()
    // params.get('category')
    const selected = params.get('category')

    const handleClik = (label) => {

        let currnetQuery = {}
        if (params) {
            currnetQuery = qs.parse(params.toString())
            console.log(currnetQuery)
            const updatedQuery = { ...currnetQuery, category: label }
            const url = qs.stringifyUrl({
                url: '/',
                query: updatedQuery
            })
            navigate(url)
        }
    }

   

    return (
        <div className="w-full grid grid-cols-3 md:grid-cols-6 lg:grid-cols-11 items-center justify-center md:gap-4 font-catamaran text-center text-xs md:sm font-semibold pt-16 md:pt-10 px-4 lg:px-0 overflow-x-auto">
            {categories?.map(category =>
                <div
                    onClick={() => handleClik(category.label)}
                    className={` text-neutral-400 hover:text-neutral-800 transition cursor-pointer`}
                    key={category.label}>
                    <div className=''>
                        <li  className={`border-b-2 border-b-neutral-400 list-none ${selected === category.label ? "bg-cyan-400 rounded-lg text-white px-2 py-1 " : "border-b-neutral-400 text-netural-400"} `}>{category.label}</li>
                    </div>
                </div>)}

        </div>

    );
};

export default Category;