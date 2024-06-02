
import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import axiosSecure from "../api";


const useProducts = () => {
    // const [allProducts, setAllProducts] = useState([]);
    // const [loading, setLoading]=useState(false)
    // useEffect(()=>{
    //     setLoading(true)
    //     fetch('https://api.deluxmart.com/product')
    //     .then (res => res.json())
    //     .then (data => {
    //         setAllProducts(data)
    //         setLoading(false);
    //     })
    // },[])
    // return[allProducts, loading, setLoading]

    const {data:allProducts =[], isLoading, refetch} = useQuery({
        queryKey:['allProducts'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/product`)
            return res.data
        }
    
        })
       
       return[allProducts, isLoading, refetch]
    
};

export default useProducts;