import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { BiCartAlt, BiUser } from "react-icons/bi";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    
    const navOptions =
        <>
            {user ? <><li><Link to={'/'} >Home</Link></li>
                <li><Link to={'/dashboard'} >Dashboard</Link></li>
                <div onClick={logOut} className="px-3 py-1 cursor-pointer hover:bg-neutral-200 rounded-lg">Logout</div></> : <>
                <li><Link to={'/'} >Home</Link></li>
                <li><Link to={'/signup'} >Signup</Link></li>
                <li><Link to={'/login'} >Login</Link></li></>
            }


        </>


    return (
        <div className="max-w-screen-xl fixed navbar z-[20] bg-base-100 bg-opacity-75 font-catamaran">
            <div className="navbar-start">
                <a className=" font-bold uppercase">My Shop</a>
            </div>

            {/* <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div> */}
            <div className="navbar-end">

                <button className=" flex justify-center items-center mx-4 border border-1 rounded-lg p-1">
                    <BiCartAlt />
                    <div className="badge bg-gray-500 text-white ml-2">+99</div>
                </button>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="">
                        <div className="flex items-center gap-2 border-2 border-neutral-100 rounded-lg">
                            <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full">
                                {user ? <><img className="h-full w-full rounded-full" src={user?.photoURL} alt="" /></> : <BiUser></BiUser>}
                            </div>
                            <div>
                                <FiAlignJustify className="text-2xl"></FiAlignJustify>
                            </div>
                        </div>
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