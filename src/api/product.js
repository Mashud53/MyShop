import axiosSecure from "."

export const addProduct = async roomData =>{
    const {data} = await axiosSecure.post('/product', roomData)
    return data
}