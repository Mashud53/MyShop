
// import { useState } from 'react';

import useProducts from '../../Hooks/useProducts';
import { categories } from './CategoriesData';
import { useNavigate, useSearchParams } from 'react-router-dom';
import qs from 'query-string'



const Category = () => {

    const [allProducts, loading] = useProducts()
    const [params, setParams] = useSearchParams();

    const navigate = useNavigate()
    // params.get('category')
    const selected = params.get('category')

    const handleClik = (label) => {

        let currnetQuery = {}
        if (params) {
            currnetQuery = qs.parse(params.toString())
            const updatedQuery = { ...currnetQuery, category: label }
            const url = qs.stringifyUrl({
                url: '/',
                query: updatedQuery
            })
            navigate(url)
        }
    }


    // const mobile = allProducts.filter(product => product.category === "Mobile")
    // const laptop = allProducts.filter(product => product.category === 'Laptop')
    // const watch = allProducts.filter(product => product.category === 'Watch')
    // const man = allProducts.filter(product => product.type === 'Men')
    // const women = allProducts.filter(product => product.type === 'Women')
    // const accessories = allProducts.filter(product => product.category === 'Accessories')
    // const shoe = allProducts.filter(product => product.category === 'Shoe')
    // const toy = allProducts.filter(product => product.category === 'Toy')

    // console.log(mobile, laptop, watch, man, women, accessories, shoe, toy)

    return (
        <div className="w-full flex items-center justify-between font-catamaran text-base font-semibold pt-16 md:pt-10 px-4 lg:px-0 overflow-x-auto">
            {categories?.map(category =>
                <div
                    onClick={() => handleClik(category.label)}
                    className={` text-neutral-400 hover:text-neutral-800 transition cursor-pointer `}
                    key={category.label}>
                    <div className='p-3'>
                        <li  className={`border-b-2 border-b-neutral-400 list-none  ${selected === category.label ? "border-b-neutral-800 text-neutral-800 " : "border-b-neutral-400 text-netural-400"} `}>{category.label}</li>
                    </div>
                </div>)}

        </div>

    );
};

export default Category;