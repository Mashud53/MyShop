import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axiosSecure from "../../../api";
import Heading from "../../../Components/Heading/Heading";
import BuyNowModal from "../../../Components/Modal/BuyNowModal";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

import { quantityMinus, quantityPlus} from "../../../api/cartQuantity";
import Loader from "../../../Components/Loader/Loader";



const MyCart = () => {
    const [cart,isLoading , refetch] = useCart();
    
    let [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }

    const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)
    
    
    const handleMinus = async(id) => {
        console.log(id)
        const qty= 1;
        await quantityMinus(id, {quantity:qty})
        refetch()
    }
    const handlePlus = async(id) => {
        const qty= 1
        await quantityPlus(id, {quantity:qty})
        refetch()
    }

    const handleDelete = async (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete it!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                        refetch()
                    })

            }
        });
    }
    const handlebuy = async () => {
        setIsOpen(true);
    }


    if(isLoading){ return <Loader></Loader>}
    return (
        <div className="font-catamaran">
            <Helmet><title>Delux mart | Cart</title></Helmet>
            <h2 className="text-3xl font-bold text-center">My Cart</h2>
            {cart?.length > 0 ?
                <div className="flex flex-col md:flex-row justify-between items-start">

                    <div className="overflow-x-auto w-full md:w-3/5 pt-10 shadow-md">

                        <div className="overflow-x-auto">

                            <table className="table">

                                <thead>
                                    <tr>
                                        <th>

                                        </th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {cart?.map((item, index) => <tr key={item._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <Link to={`/product/${item.productId}`}>
                                                        <div className="mask mask-square w-12 h-12">
                                                            <img src={item.image} alt="Product Photo" />
                                                        </div>
                                                    </Link>
                                                </div>

                                            </div>
                                        </td>
                                        <td>
                                            <Link to={`/product/${item.productId}`}>{item.name}</Link>
                                        </td>
                                        <td>{item.price} <span className="ml-1">&#x62f;&#x2e;&#x625;</span></td>
                                        <td>
                                            <div className="flex flex-col justify-center items-start">
                                                
                                                <div className="flex justify-center items-center">
                                                    <div onClick={()=>handleMinus(item._id)} className="bg-cyan-300 hover:bg-cyan-500 text-base h-[30px] w-[40px] rounded-l-lg flex justify-center items-center"><FaMinus className=" text-white" /></div>
                                                    <div className="border-2 w-[40px] h-[30px] flex justify-center items-center">{item?.quantity ? item?.quantity : <p>1</p>}</div>
                                                    <div onClick={()=>handlePlus(item._id)} className="bg-cyan-300 hover:bg-cyan-500 text-base h-[30px] w-[40px] rounded-r-lg flex justify-center items-center"><FaPlus className="text-white" /></div>
                                                </div>

                                            </div>
                                        </td>

                                        <th>
                                            <button onClick={() => handleDelete(item._id)} className="btn text-rose-500 hover:text-white bg-cyan-400 hover:bg-rose-500 btn-xs"><MdOutlineDelete className=""></MdOutlineDelete></button>
                                        </th>
                                    </tr>)}


                                </tbody>


                            </table>
                        </div>
                    </div>

                    <div className="mt-10 w-full md:mt-0 md:w-2/6  shadow-md px-4 py-8 rounded-md">

                        <div className="flex justify-between gap-6">
                            <p>Sub total:</p>
                            <p className="font-bold"> {totalPrice} <span className="ml-1">&#x62f;&#x2e;&#x625;</span></p>
                        </div>
                        <div className="flex justify-between gap-6">
                            <p>Shipping Fee:  </p>
                            <p className="font-bold">0.00 <span className="ml-1">&#x62f;&#x2e;&#x625;</span></p>
                        </div>
                        <div className="flex justify-between gap-6">
                            <p>Total: </p>
                            <p className="font-bold"> {totalPrice} <span className="ml-1">&#x62f;&#x2e;&#x625;</span></p>

                        </div>
                        <div className="w-full bg-gray-300 pb-1 rounded-lg my-4"></div>




                        <button onClick={handlebuy} className="btn w-full hover:text-white bg-cyan-400 hover:bg-cyan-500 btn-md uppercase">proceed to checkout</button>
                    </div>
                </div> :
                <div className="w-full flex flex-col justify-center items-center min-h-[500px]">
                    <Heading title={"This Cart is empty"} center={true} ></Heading>
                    <Link to={'/'}><button className="hover:text-white bg-cyan-400 hover:bg-cyan-500 py-2 px-3 rounded-lg font-semibold">Continue Shopping</button></Link>
                </div>
            }
            <BuyNowModal
                isOpen={isOpen}
                closeModal={closeModal}
            // orderInfo={orderInfo}
            // qt={qt}
            // _id={_id}
            >

            </BuyNowModal>

        </div>
    );
};

export default MyCart;