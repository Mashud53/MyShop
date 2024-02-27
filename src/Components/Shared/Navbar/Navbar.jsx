import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { BiCartAlt } from "react-icons/bi";


const Navbar = () => {
    const navOptions =
        <>
            <li><Link to={'/'} >Home</Link></li>
            <li><Link >ALL Products</Link></li>
            <li><Link >Home</Link></li>
        </>


    return (
        <div className="fixed navbar z-[20] bg-base-100 bg-opacity-75 font-catamaran">
            <div className="navbar-start">
                <a className=" font-bold uppercase">My Shop</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <li className="list-none ml-4">Dashboard</li>
                <button className=" flex justify-center items-center mx-4 border border-1 rounded-lg p-1">
                    <BiCartAlt />
                    <div className="badge bg-gray-500 text-white ml-2">+99</div>
                </button>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className=" lg:hidden">
                        <FiAlignJustify className="text-2xl"></FiAlignJustify>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Navbar;