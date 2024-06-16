import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";


const useUsedDevice = () => {
    const {data:usedDevice =[], isLoading, refetch} = useQuery({
        queryKey:['usedDevice'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/usedDevice`)
            return res.data
        }
    
        })
       
       return[usedDevice, isLoading, refetch]
};

export default useUsedDevice;