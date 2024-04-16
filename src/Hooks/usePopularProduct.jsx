import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";


const usePopularProduct = () => {
    const {data:popularProducts =[], isLoading, refetch} = useQuery({
        queryKey:['popularProducts'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/popularProduct`)
            return res.data
        }
    
        })
       axiosSecure.get()
       return[popularProducts, isLoading, refetch]
};

export default usePopularProduct;