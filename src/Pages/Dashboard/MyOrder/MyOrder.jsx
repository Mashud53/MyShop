import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import useMyOrder from "../../../Hooks/useMyOrder";
import Loader from "../../../Components/Loader/Loader";
import ReviewModal from "../../../Components/Modal/ReviewModal";


const MyOrder = () => {
    const [getOrder, isLoading,] = useMyOrder();
    const [product, setProduct] = useState({})
    console.log(typeof getOrder)
    let [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }

    const hanndleReview = (title, productId) => {
        setProduct({ productId, title })
        setIsOpen(true)
    }


    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className="font-catamaran py-10">
            <Helmet><title>Dashboard | My Orders</title></Helmet>
            <h2 className="text-xl text-center font-bold uppercase py-8">My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-cyan-400">
                        <tr className="font-semibold">
                            <th>#</th>
                            <th>Product</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {getOrder.map((order, index) =>
                            <tr key={order._id} className="hover">
                                <th>{index + 1}</th>
                                <td>
                                    {
                                        Array.isArray(order?.productId) ? <>
                                            <div>
                                                {
                                                    Array.isArray(order?.title) ?
                                                        <>
                                                            
                                                                <div className="flex items-center gap-2">
                                                                    
                                                                    <p>{order?.title?.map((item, i) => <tr key={i}><Link to={`/product/${order.productId[i]}`} className="hover:text-cyan-400"> {item}</Link></tr>)}</p>
                                                                    
                                                                    <p className="font-bold text-red-500">{order?.quantity?.map((item, i) => <tr key={i}>Qty: {item}</tr>)}</p>
                                                                    <p >{order?.selectedColor?.map((item, i) => <tr key={i}>Color: {item}</tr>)}</p>
                                                                </div>
                                                            
                                                        </> :
                                                        <p>{order?.title}</p>

                                                }
                                                {
                                                    Array.isArray(order?.quantity) ? <></> :
                                                        <p>Qty: {order?.quantity}</p>
                                                }
                                                <p>Price: {order?.totalPrice}</p>
                                                {
                                                    Array.isArray(order?.selectedColor) ?
                                                        <>
                                                        </> :
                                                        <p>Color: {order?.selectedColor}</p>
                                                }
                                            </div>
                                        </> :
                                            <>
                                                <Link to={`/product/${order.productId}`}>
                                                    <div>
                                                        {
                                                            Array.isArray(order?.title) ?
                                                                <div className="flex items-center gap-2">
                                                                    <p>{order?.title?.map((item, i) => <tr key={i}>{item}</tr>)}</p>
                                                                    <p className="font-bold text-red-500">{order?.quantity?.map((item, i) => <tr key={i}>Qty: {item}</tr>)}</p>
                                                                    <p className="font-bold text-red-500">{order?.selectedColor?.map((item, i) => <tr key={i}>Color: {item}</tr>)}</p>
                                                                </div> :
                                                                <p>{order?.title}</p>

                                                        }
                                                        {
                                                            Array.isArray(order?.quantity) ? <></> :
                                                                <p>Qty: {order?.quantity}</p>
                                                        }
                                                        <p>Price: {order?.totalPrice}</p>
                                                        {
                                                            Array.isArray(order?.selectedColor) ?
                                                                <>
                                                                </> :
                                                                <p>Color: {order?.selectedColor}</p>
                                                        }
                                                    </div>
                                                </Link>
                                            </>
                                    }

                                </td>
                                <td>
                                    {order.status}
                                </td>
                                <td>
                                    {
                                        !Array.isArray(order?.productId) && order?.status == "delevered" &&
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