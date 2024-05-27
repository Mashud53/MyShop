import axiosSecure from "."

export const orderProduct = async orderInfo =>{
    const {data} = await axiosSecure.post('/orders', orderInfo)
    return data
}
export const cartOrderProduct = async orderInfo =>{
    const {data} = await axiosSecure.post('/cartOrders', orderInfo)
    return data
}