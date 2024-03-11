import axiosSecure from "."

export const addProduct = async productData =>{
    const {data} = await axiosSecure.post('/product', productData)
    return data
}