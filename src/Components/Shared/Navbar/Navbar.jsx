import { Link, useNavigate } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext, useState } from "react";
import logo from '../../../assets/logo.png'

import SubmenuDropdown from "../../SubmenuDropdown/SubmenuDropdown";
import { IoSearchOutline } from "react-icons/io5";
import NavCrtOrd from "../../NavCrtOrd/NavCrtOrd";
import useCart from "../../../Hooks/useCart";
import useRole from "../../../Hooks/useRole";
import useOrder from "../../../Hooks/useOrder";
import useMenus from "../../../Hooks/useMenus";
import useSubmenus from "../../../Hooks/useSubmenus";



const Navbar = () => {

    const [allMenus] = useMenus()
    const [subMenus] = useSubmenus()
    const { user, logOut } = useContext(AuthContext)
    const [userRole] = useRole();
    const [cart] = useCart();
    const [getOrder] = useOrder();
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();


    const navOptions =
        <>
            {user ? <><li ><Link to={'/'} className="text-base font-semibold active:text-cyan-300" >Home</Link></li>

                <li><Link to={'/perfume'} className="text-base font-semibold">Perfume</Link></li>
                <SubmenuDropdown allMenus={allMenus} subMenus={subMenus}></SubmenuDropdown>

                <li><Link to={'/dashboard'} className="text-base font-semibold">Dashboard</Link></li>
                <div onClick={logOut} className="px-3 py-1 cursor-pointer text-base font-semibold hover:bg-neutral-200 rounded-lg">Logout</div></> :
                <>
                    <li><Link to={'/'} className="text-base font-semibold" >Home</Link></li>
                    <SubmenuDropdown allMenus={allMenus} subMenus={subMenus}></SubmenuDropdown>
                    <li><Link to={'/perfume'} className="text-base font-semibold">Perfume</Link></li>

                    <li><Link to={'/signup'} className="text-base font-semibold">Signup</Link></li>
                    <li><Link to={'/login'} className="text-base font-semibold">Login</Link></li>
                </>
            }


        </>

    const handleSearch = (e) => {
        e.preventDefault()
        const search = e.target.search.value;
        setSearchValue(search)

        if (searchValue.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchValue)}`)
        }
    }


    return (
        <>
            <div className="max-w-screen-xl navbar fixed top-0 z-[30] flex flex-col font-catamaran px-0 py-0">
                <div className="w-full navbar bg-cyan-400">
                    <div className="navbar-start">
                        {/* <a className=" font-bold uppercase">My Shop</a> */}
                        <Link><img className="w-[150px] md:w-[200px]" src={logo} alt="" /></Link>
                    </div>
                    {/* search bar  */}
                    <div className="navbar-center hidden md:block">
                        <form onSubmit={handleSearch} action="">
                            <label className="relative h-8 input input-bordered flex items-center gap-2">
                                <input type="text" className="" name="search" placeholder="Search" />
                                <button type="submit" className="absolute -right-1 w-8 h-8 flex justify-center items-center bg-cyan-500 rounded-r-lg">
                                    <IoSearchOutline className="  w-4 h-4 opacity-70  text-white " />
                                </button>
                            </label>
                        </form>
                    </div>
                    <div className="navbar-end flex items-center justify-end">
                        <NavCrtOrd user={user} userRole={userRole} getOrder={getOrder} cart={cart}></NavCrtOrd>


                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="">
                                <div className="flex items-center gap-2 border-2 bg-white border-neutral-100 rounded-lg">
                                    <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full">
                                        {/* {user ? <><img className="h-full w-full rounded-full" src={user?.photoURL} alt="" /></> : <BiUser></BiUser>} */}
                                        {user ? <p className="font-serif text-sm uppercase">{user?.displayName.slice(0, 2)}</p> : <BiUser></BiUser>}
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
                {/* search bar  */}
                <div className="md:hidden w-full flex justify-center items-center py-2 bg-white border-0">
                    <form onSubmit={handleSearch} action="">
                        <label className="relative h-8 input input-bordered flex items-center gap-2">
                            <input type="text" className="" name="search" placeholder="Search" />
                            <button type="submit" className="absolute -right-1 w-8 h-8 flex justify-center items-center bg-cyan-500 rounded-r-lg">
                                <IoSearchOutline className="  w-4 h-4 opacity-70  text-white " />
                            </button>
                        </label>
                    </form>
                </div>
                <div className="hidden md:block w-full bg-white py-2 px-2">
                    <div className="w-full flex justify-center items-center gap-4">

                        {
                            allMenus.map(menu =>
                                <div key={menu._id}
                                    className="dropdown dropdown-hover group">
                                    <div tabIndex={0} role="button" className="m-1 font-semibold group-hover:text-cyan-500">{menu.menu}</div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">

                                        {subMenus && subMenus.filter(item => item.menu.toLowerCase() === menu.menu.toLowerCase())
                                            .map(filterItem => <div key={filterItem._id}>
                                                <Link to={`/${filterItem.name}`}>
                                                    <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">{filterItem.name}</li>
                                                </Link>
                                            </div>)

                                        }


                                    </ul>

                                </div>)
                        }
                        {/* -----------------------------------------    
                        <div className="dropdown dropdown-hover group">
                            <div tabIndex={0} role="button" className="m-1 font-semibold group-hover:text-cyan-500">
                                <Link to={'/allProducts'}>All Products</Link>
                            </div>

                        </div>
                        <div className="dropdown dropdown-hover group">

                            <div tabIndex={0} role="button" className="m-1 font-semibold group-hover:text-cyan-500">Mobile</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <Link to={'mobile-apple'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Apple</li></Link>
                                <Link to={'mobile-samsung'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Samsung</li></Link>
                                <Link to={'mobile-googlePixel'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Google Pixel</li></Link>
                                <Link to={'mobile-xiaomi'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Xiaomi</li></Link>
                                <Link to={'mobile-oneplus'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">One Plus</li></Link>
                                <Link to={'mobile-oppo'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Oppo</li></Link>
                                <Link to={'mobile-sony'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Sony</li></Link>
                                <Link to={'mobile-huawei'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Huwei</li></Link>
                                <Link to={'mobile-realme'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Realme</li></Link>
                                <Link to={'Vivo'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Vivo</li></Link>
                                <Link to={'Honor'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Honor</li></Link>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover group">
                            <div tabIndex={0} role="button" className="m-1 font-semibold group-hover:text-cyan-500">Laptop</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <Link to={'macbook'}> <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Apple</li></Link>
                                <Link to={'laptop-hp'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Hp</li></Link>
                                <Link to={'laptop-dell'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Dell</li></Link>
                                <Link to={'laptop-lenovo'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Lenovo</li></Link>

                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover group">
                            <div tabIndex={0} role="button" className="m-1 font-semibold group-hover:text-cyan-500">
                                <Link to={'watch'}> Watch</Link>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <Link to={'classic-watch'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Classic Watch</li></Link>
                                <Link to={'smart-watch'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Smart Watch</li></Link>

                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover group">
                            <div tabIndex={0} role="button" className="m-1 font-semibold group-hover:text-cyan-500">Accessories</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <Link to={'accessory-powerAdapter'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Power Adapter</li></Link>
                                <Link to={'accessory-powerbank'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Power Bank</li></Link>
                                <Link to={'accessory-WirelessCharger'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Wireless Charger</li></Link>
                                <Link to={'accessory-airpods'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Airpods</li></Link>
                                <Link to={'accessory-headphone'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Headphone</li></Link>
                                <Link to={'accessory-Wirelessheadphone'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Wirelesss Headphones</li></Link>
                                <Link to={'accessory-speaker'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Speaker</li></Link>

                            </ul>
                        </div> */}

                        {/* cover and galss ------------- */}
                        {/* <div className="dropdown dropdown-hover group">
                            <div tabIndex={0} role="button" className="m-1 font-semibold group-hover:text-cyan-500">Cover & Glass</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Phone Cover</li>
                                <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Phone Screen Protector</li>
                                <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Phone Camera Protector</li>
                                <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">MacBook Cover</li>
                                <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">MacBook Screen Protector</li>
                            </ul>
                        </div> */}
                        {/* <div className="dropdown dropdown-hover group">
                            <Link to={'/perfume'}><div tabIndex={0} role="button" className="m-1 font-semibold group-hover:text-cyan-500">Perfume</div></Link>
                            
                        </div>
                        <div className="dropdown dropdown-hover group">
                            <div tabIndex={0} role="button" className="m-1 font-semibold group-hover:text-cyan-500">
                                <Link to={'/usedDevice'}>Used Device</Link>
                            </div>

                        </div>
                        ------------------------------------------ */}
                    </div>

                </div>

            </div>
            {/* navbar bottom ------------------------------------------------------------ */}
            {/* <div className="md:hidden max-w-screen-xl navbar fixed bottom-0 z-[20] flex flex-col font-catamaran px-0 py-0">
                <div className="w-full navbar bg-white bg-opacity-10">
                    <div className="navbar-start">

                        <Link><MdHome className="text-cyan-500" /> </Link>
                    </div>
                  
                    <div className="navbar-center">
                        <h2 className="text-cyan-500">order</h2>
                    </div>

                    <div className="navbar-end flex items-center justify-end">

                        <Link to={'dashboard/my-cart'}>
                            <button className=" relative mx-4 p-1">
                                <BiCartAlt className="text-cyan-500 text-2xl" />
                                <div className="absolute -top-3 -right-2 text-white font-semibold">+{cart.length}</div>
                            </button>
                        </Link>



                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Navbar;