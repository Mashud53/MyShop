import { BiCartAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

import { FaBell } from "react-icons/fa6";
import { useEffect, useState } from "react";


const NavCrtOrd = ({ userRole, getOrder, cart }) => {


    const [order, setOrder] = useState({});

    useEffect(() => {
        if (getOrder && getOrder.length > 0) {
            const filterOrder = getOrder.filter(item => item.status == 'pending')
            setOrder(filterOrder)
        }
    }, [getOrder])


    return (
        <>
            {
                userRole && userRole == 'admin' || userRole == 'host' ? <Link to={'dashboard/order'}>
                    <button className=" relative mx-4 p-1">
                        <FaBell className="text-rose-500 text-2xl" />
                        <div className="absolute -top-3 -right-2 text-rose-500 font-semibold">+{order ? order.length : '0'}</div>
                    </button>
                </Link> : <Link to={'dashboard/my-cart'}>
                    <button className=" relative mx-4 p-1">
                        <BiCartAlt className="text-cyan-500 text-2xl" />
                        <div className="absolute -top-3 -right-2 text-white font-semibold">+{cart ? cart.length : '0'}</div>
                    </button>
                </Link>
            }

        </>

    );
};

export default NavCrtOrd;