
import { useEffect, useState } from "react";


const useProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        fetch('http://localhost:5000/product')
        .then (res => res.json())
        .then (data => {
            setAllProducts(data)
            setLoading(false);
        })
    },[])
    return[allProducts, loading, setLoading]
    
};

export default useProducts;