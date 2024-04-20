import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


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
                <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Apple</a></li>
                <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Samsung</a></li>
                <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Google Pixel</a></li>
                <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Xiaomi</a></li>
                <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>One Plus</a></li>
                <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Oppo</a></li>
                <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Sony</a></li>
                <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Huwei</a></li>
                <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Realme</a></li>
            </ul>}

            <ul onClick={handleLaptop} className="w-full cursor-pointer flex justify-between items-center text-base font-semibold hover:bg-neutral-200 active:text-cyan-300 p-1 rounded-lg px-3">
                Laptop
                {laptopOpen == true ? <IoIosArrowUp></IoIosArrowUp> : <IoIosArrowDown></IoIosArrowDown>}

            </ul>
            {laptopOpen == true && <ul className="mx-2 font-semibold">
                <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Apple</a></li>
                <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Hp</a></li>
                <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Dell</a></li>
                <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Lenovo</a></li>

            </ul>}

            <ul onClick={handleWatch} className="w-full cursor-pointer flex justify-between items-center text-base font-semibold hover:bg-neutral-200 active:text-cyan-300 p-1 rounded-lg px-3">
                Watch
                {watchOpen == true ? <IoIosArrowUp></IoIosArrowUp> : <IoIosArrowDown></IoIosArrowDown>}

            </ul>
            {watchOpen == true && <ul className="mx-2 font-semibold">
                <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Classic Watch</a></li>
                <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Smart Watch</a></li>


            </ul>}
            <ul onClick={handleAccessories} className="w-full cursor-pointer flex justify-between items-center text-base font-semibold hover:bg-neutral-200 active:text-cyan-300 p-1 rounded-lg px-3">
                Accessories
                {accessoriesOpen == true ? <IoIosArrowUp></IoIosArrowUp> : <IoIosArrowDown></IoIosArrowDown>}

            </ul>
            {accessoriesOpen == true &&
                <ul className="mx-2 font-semibold">
                    <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Power Adapter</a></li>
                    <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Power Bank</a></li>
                    <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Wireless Charger</a></li>
                    <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Airpods</a></li>
                    <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Headphone</a></li>
                    <li className="hover:bg-cyan-400 hover:rounded-lg hover:text-white"><a>Speaker</a></li>


                </ul>}

        </div>
    );
};

export default SubmenuDropdown;