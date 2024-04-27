import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";


const SubmenuDropdown = () => {
    const [mobileOpen, setMobileopen] = useState(false)
    const [laptopOpen, setLaptopopen] = useState(false)
    const [watchOpen, setWatchopen] = useState(false)
    const [accessoriesOpen, setAccessoriesOpen] = useState(false)
    const handleMobile = () => {
        setMobileopen(!mobileOpen);
        setLaptopopen(false)
        setWatchopen(false)
        setAccessoriesOpen(false)
    }
    const handleLaptop = () => {
        setLaptopopen(!laptopOpen)
        setMobileopen(false);
        setWatchopen(false);
        setAccessoriesOpen(false)
    }
    const handleWatch = () => {
        setWatchopen(!watchOpen)
        setMobileopen(false);
        setLaptopopen(false);
        setAccessoriesOpen(false)
    }
    const handleAccessories = () => {
        setAccessoriesOpen(!accessoriesOpen)
        setMobileopen(false);
        setLaptopopen(false);
        setWatchopen(false)

    }

    return (
        <div className="md:hidden">
            <ul onClick={handleMobile} className="w-full cursor-pointer flex justify-between items-center text-base font-semibold hover:bg-neutral-200 active:text-cyan-300 p-1 rounded-lg px-3">
                Mobile
                {mobileOpen == true ? <IoIosArrowUp></IoIosArrowUp> : <IoIosArrowDown></IoIosArrowDown>}

            </ul>
            {mobileOpen == true && <ul className="mx-2 font-semibold">
                <Link to={"mobile-apple"}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Apple</li></Link>
                <Link to={'mobile-samsung'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Samsung</li></Link>
                <Link to={'mobile-googlepixel'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Google Pixel</li></Link>
                <Link to={'mobile-xiaomi'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Xiaomi</li></Link>
                <Link to={'mobile-oneplus'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">One Plus</li></Link>
                <Link to={'mobile-oppo'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Oppo</li></Link>
                <Link to={'mobile-sony'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Sony</li></Link>
                <Link to={'mobile-huawei'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Huwei</li></Link>
                <Link to={'mobile-realme'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Realme</li></Link>
            </ul>}

            <ul onClick={handleLaptop} className="w-full cursor-pointer flex justify-between items-center text-base font-semibold hover:bg-neutral-200 active:text-cyan-300 p-1 rounded-lg px-3">
                Laptop
                {laptopOpen == true ? <IoIosArrowUp></IoIosArrowUp> : <IoIosArrowDown></IoIosArrowDown>}

            </ul>
            {laptopOpen == true && <ul className="mx-2 font-semibold">
                <Link to={'macbook'}> <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Apple</li></Link>
                <Link to={'laptop-hp'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Hp</li></Link>
                <Link to={'laptop-dell'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Dell</li></Link>
                <Link to={'laptop-lenovo'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Lenovo</li></Link>

            </ul>}

            <ul onClick={handleWatch} className="w-full cursor-pointer flex justify-between items-center text-base font-semibold hover:bg-neutral-200 active:text-cyan-300 p-1 rounded-lg px-3">
                <Link to={'watch'}> Watch</Link>
                {watchOpen == true ? <IoIosArrowUp></IoIosArrowUp> : <IoIosArrowDown></IoIosArrowDown>}

            </ul>
            {watchOpen == true && <ul className="mx-2 font-semibold">
                <Link to={'classic-watch'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Classic Watch</li></Link>
                <Link to={'smart-watch'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Smart Watch</li></Link>


            </ul>}
            <ul onClick={handleAccessories} className="w-full cursor-pointer flex justify-between items-center text-base font-semibold hover:bg-neutral-200 active:text-cyan-300 p-1 rounded-lg px-3">
                Accessories
                {accessoriesOpen == true ? <IoIosArrowUp></IoIosArrowUp> : <IoIosArrowDown></IoIosArrowDown>}

            </ul>
            {accessoriesOpen == true &&
                <ul className="mx-2 font-semibold">
                    <Link to={'accessory-powerAdapter'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Power Adapter</li></Link>
                    <Link to={'accessory-powerbank'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Power Bank</li></Link>
                    <Link to={'accessory-WirelessCharger'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Wireless Charger</li></Link>
                    <Link to={'accessory-airpods'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Airpods</li></Link>
                    <Link to={'accessory-Wirelessheadphone'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Wirelesss Headphones</li></Link>
                    <Link to={'accessory-speaker'}><li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white">Speaker</li></Link>


                </ul>}

        </div>
    );
};

export default SubmenuDropdown;