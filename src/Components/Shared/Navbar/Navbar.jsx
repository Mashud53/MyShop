import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { BiCartAlt, BiUser } from "react-icons/bi";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";
// import logo from '../../../assets/logo.png'
import logo from '../../../assets/logo1.png';

import useCart from "../../../Hooks/useCart";
import SubmenuDropdown from "../../SubmenuDropdown/SubmenuDropdown";
import { IoSearchOutline } from "react-icons/io5";



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart();

    const navOptions =
        <>
            {user ? <><li ><Link to={'/'} className="text-base font-semibold active:text-cyan-300" >Home</Link></li>
                {/* <div className="dropdown group">
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"> */}
                <SubmenuDropdown></SubmenuDropdown>

                {/* </ul>
                </div> */}
                <li><Link to={'/'} className="text-base font-semibold">Perfume</Link></li>
                <li><Link to={'/'} className="text-base font-semibold">Used Device</Link></li>
                <li><Link to={'/dashboard'} className="text-base font-semibold">Dashboard</Link></li>
                <div onClick={logOut} className="px-3 py-1 cursor-pointer text-base font-semibold hover:bg-neutral-200 rounded-lg">Logout</div></> :
                <>
                    <li><Link to={'/'} className="text-base font-semibold" >Home</Link></li>
                    <SubmenuDropdown></SubmenuDropdown>
                    <li><Link to={'/'} className="text-base font-semibold">Perfume</Link></li>
                    <li><Link to={'/'} className="text-base font-semibold">Used Device</Link></li>
                    <li><Link to={'/signup'} className="text-base font-semibold">Signup</Link></li>
                    <li><Link to={'/login'} className="text-base font-semibold">Login</Link></li>
                </>
            }


        </>


    return (
        <div className="max-w-screen-xl navbar fixed top-0 z-[20] flex flex-col font-catamaran px-0 py-0">
            <div className="w-full navbar bg-black">
                <div className="navbar-start">
                    {/* <a className=" font-bold uppercase">My Shop</a> */}
                    <Link><img className="w-[100px]" src={logo} alt="" /></Link>
                </div>
         {/* search bar  */}
                <div className="navbar-center">
                    <label className="ml-2 h-8 md:ml-0 input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <IoSearchOutline className="w-4 h-4 opacity-70 text-cyan-500 cursor-pointer"/>
                        
                    </label>
                </div>
                <div className="navbar-end flex items-center justify-end">

                    <Link to={'dashboard/my-cart'}>
                        <button className=" relative mx-4 p-1">
                            <BiCartAlt className="text-cyan-500 text-2xl" />
                            <div className="absolute -top-3 -right-2 text-white font-semibold">+{cart.length}</div>
                        </button>
                    </Link>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="">
                            <div className="flex items-center gap-2 border-2 bg-white border-neutral-100 rounded-lg">
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
            <div className="hidden md:block w-full bg-white py-2 px-2">
                <div className="w-full flex justify-center items-center gap-4">
                    <div className="dropdown dropdown-hover group">
                        <div tabIndex={0} role="button" className="m-1 font-semibold group-hover:text-cyan-500">Mobile</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Apple</a></li>
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Samsung</a></li>
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Google Pixel</a></li>
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Xiaomi</a></li>
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>One Plus</a></li>
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Oppo</a></li>
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Sony</a></li>
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Huwei</a></li>
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Realme</a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover group">
                        <div tabIndex={0} role="button" className="m-1 font-semibold group-hover:text-cyan-500">Laptop</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Apple</a></li>
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Hp</a></li>
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Dell</a></li>
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Lenovo</a></li>

                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover group">
                        <div tabIndex={0} role="button" className="m-1 font-semibold group-hover:text-cyan-500">Watch</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Classic Watch</a></li>
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Smart Watch</a></li>

                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover group">
                        <div tabIndex={0} role="button" className="m-1 font-semibold group-hover:text-cyan-500">Accessories</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Power Adapter</a></li>
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Power Bank</a></li>
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Wireless Charger</a></li>
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Airpods</a></li>
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Wirelesss Headphones</a></li>
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Speaker</a></li>

                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover group">
                        <div tabIndex={0} role="button" className="m-1 font-semibold group-hover:text-cyan-500">Cover & Glass</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Phone Cover</a></li>
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Phone Screen Protector</a></li>
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Phone Camera Protector</a></li>
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>MacBook Cover</a></li>
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>MacBook Screen Protector</a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover group">
                        <div tabIndex={0} role="button" className="m-1 font-semibold group-hover:text-cyan-500">Perfume</div>
                        {/* <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Phone Cover</a></li>
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Phone Screen Protector</a></li>
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Phone Camera Protector</a></li>
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>MacBook Cover</a></li>
                            <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>MacBook Screen Protector</a></li>
                        </ul> */}
                    </div>
                    <div className="dropdown dropdown-hover group">
                        <div tabIndex={0} role="button" className="m-1 font-semibold group-hover:text-cyan-500">Used Device</div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Navbar;