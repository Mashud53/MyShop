import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import useMyOrder from "../../../Hooks/useMyOrder";
import Loader from "../../../Components/Loader/Loader";
import ReviewModal from "../../../Components/Modal/ReviewModal";


const MyOrder = () => {
    const [getOrder, isLoading,] = useMyOrder();
    const [product, setProduct] = useState({})
    let [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }

    const hanndleReview = (title, productId) => {
        setProduct({productId, title})
        setIsOpen(true)
    }


    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className="font-catamaran py-10">
            <Helmet><title>Dashboard | Manage Order</title></Helmet>
            <h2 className="text-xl text-center font-bold uppercase py-8">Manage Orders</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-cyan-400">
                        <tr className="font-semibold">
                            <th>#</th>
                            <th>Product</th>
                            <th>Buyer</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {getOrder.map((order, index) =>
                            <tr key={order._id} className="hover">
                                <th>{index + 1}</th>
                                <td>
                                    <Link to={`/product/${order.productId}`}> <div>
                                        <p>{order?.title}</p>
                                        <p>Qt: {order?.quantity}</p>
                                        <p>Price: {order?.totalPrice}</p>
                                        <p>Color: {order?.selectedColor}</p>
                                    </div></Link>
                                </td>
                                <td>
                                    {order.status}
                                </td>
                                <td>
                                    {
                                        order?.status=="delevered" && 
                                        <p onClick={() => hanndleReview(order.title, order.productId)} className="cursor-pointer text-cyan-400  hover:text-white hover:bg-cyan-400 px-2 py-1 rounded-md text-center">Review</p>
                                    }
                                </td>
                            </tr>)}

                    </tbody>
                </table>
            </div>
            <ReviewModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                closeModal={closeModal}
                product={product}
            ></ReviewModal>

        </div>
    );
};

export default MyOrder;