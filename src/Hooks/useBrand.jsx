import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";


const useBrand = ({brandName}) => {
    const {data:brandProduct =[], isLoading, refetch} = useQuery({
        queryKey:['brandProduct'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/products/${brandName}`)
            return res.data
        }
    
        })
       
       return[brandProduct, isLoading, refetch]
};

export default useBrand;