import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";
import useAuth from "./useAuth";


const useCart = () => {
    const {user}= useAuth()
    console.log(user?.email)
    const {data:cart =[], isLoading, refetch} = useQuery({
    queryKey:['cart', user?.email],
    queryFn: async()=>{
        const res = await axiosSecure.get(`/carts?email=${ user?.email}`)
        return res.data
    }

    })
   axiosSecure.get()
   return[cart, isLoading, refetch]
};

export default useCart;