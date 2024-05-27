import { Link } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import useOrder from "../../../Hooks/useOrder";
import Swal from "sweetalert2";
import axiosSecure from "../../../api";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useMyOrder from "../../../Hooks/useMyOrder";


const Order = () => {
    const [getOrder, isLoading, refetch] = useOrder()
    const [, , orderRefetch] = useMyOrder()
    const [displayOrders, setDisplayOrders] = useState([])
    // console.log(getOrder)



    useEffect(() => {

        const sortData = async (data) => {
            const orders = await data.sort((a, b) => new Date(b.date) - new Date(a.date))
            setDisplayOrders([...orders])

        }
        if (getOrder.length > 0) {
            sortData(getOrder)
        }

    }, [getOrder])
    console.log(displayOrders)

    const handleReceived = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You Received this Product!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Received"
        }).then((result) => {

            if (result.isConfirmed) {
                axiosSecure.patch(`/order/${id}`, { status: 'received' })
                    .then(res => {

                        if (res.data.matchedCount > 0) {
                            Swal.fire({
                                title: "Done!",
                                text: "Received Successful.",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                          orderRefetch();
                        refetch()
                      
                    })

            }
        });

    }
    const handleDelivery = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You Delevered this Product!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delevered"
        }).then((result) => {

            if (result.isConfirmed) {
                axiosSecure.patch(`/order/${id}`, { status: 'delevered' })
                    .then(res => {

                        if (res.data.matchedCount > 0) {
                            Swal.fire({
                                title: "Done!",
                                text: "Delevered Successful.",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                        orderRefetch();
                        refetch()
                        
                    })

            }
        });

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

                        {displayOrders.map((order, index) =>
                            <tr key={order._id} className="hover">
                                <th>{index + 1}</th>
                                <td>
                                    {
                                        Array.isArray(order.productId) ? <><div>
                                            {
                                                Array.isArray(order?.title) ?
                                                    <>

                                                        <div className="flex items-center gap-2">

                                                            <p>
                                                                {order?.title?.map((item, i) => <tr key={i}><Link to={`/product/${order.productId[i]}`} className="hover:text-cyan-400"> {item}</Link></tr>)}

                                                            </p>
                                                            <p>
                                                                {order?.storage?.map((item, i) => <tr key={i} className="text-xs"> {item}</tr>)}
                                                            </p>

                                                            <p className="font-bold text-red-500">{order?.quantity?.map((item, i) => <tr key={i}>Qty: {item}</tr>)}</p>
                                                            <p >{order?.selectedColor &&
                                                                order?.selectedColor?.map((item, i) => <tr key={i}>Color: {item}</tr>)
                                                            }</p>
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
                                        </div></> :
                                            <>
                                                <Link to={`/product/${order.productId}`}>
                                                    <div>
                                                        <p>{order?.title}</p>
                                                        <p>Qt: {order?.quantity}</p>
                                                        <p>Price: {order?.totalPrice}</p>
                                                        <p>Color: {order?.selectedColor}</p>
                                                    </div>
                                                </Link>
                                            </>
                                    }

                                </td>
                                <td>
                                    <div>Name: {order?.buyer}</div>
                                    <div>email: {order?.email}</div>
                                    <div>Phone: {order?.phone}</div>
                                    <div>City: {order?.city}</div>
                                    <div>Street: {order?.street}</div>
                                    <div>Street: {order?.appartment}</div>
                                    <div>Order Date: {new Date(order?.date).toLocaleString()}</div>
                                    <div className="text-red-500 font-semibold">Delivery Date: {new Date(new Date(order?.date).setDate(new Date(order?.date).getDate() + 3)).toLocaleString()}</div>
                                </td>
                                <td>{order?.status === "pending" ? 
                                <button onClick={() => { handleReceived(order._id) }} className="btn text-rose-500 hover:text-white bg-cyan-400 hover:bg-rose-500 btn-sm">Pending</button> :
                                order?.status === "received" ? <button onClick={() => { handleDelivery(order._id) }} className="btn text-rose-500 hover:text-white bg-cyan-400 hover:bg-rose-500 btn-sm">Received</button>:"Delivered"
                                 
                                 }

                                </td>
                            </tr>)}



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Order;