import axiosSecure from "."

export const orderProduct = async orderInfo =>{
    const {data} = await axiosSecure.post('/orders', orderInfo)
    return data
}