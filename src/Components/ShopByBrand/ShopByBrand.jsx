import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiOneplus, } from "react-icons/si";
import huawei from '../../assets/navIcons/Huawei.png';
import hp from '../../assets/navIcons/Hp.png';
import dell from '../../assets/navIcons/Dell.png';
import xiaomi from '../../assets/navIcons/Xiaomi.png';
import lenovo from '../../assets/navIcons/lenovo.png';
import vivo from '../../assets/navIcons/vivo.png';
import honor from '../../assets/navIcons/honor.png';
import SectionTitle from "../SectionTitle";



const ShopByBrand = () => {

    const handleProducts = name => {
        console.log(name)


    }

    return (
        <div className="px-8 lg:px-0 md:mt-10 mt-4">
            <SectionTitle title={'Shop by brand'}></SectionTitle>
            {/* <h2 className="font-catamaran text-base md:text-2xl font-bold text-center uppercase py-8">----Shop by brand----</h2> */}
            <div className=" w-full grid grid-cols-3 md:grid-cols-4 gap-4">
                <Link to={'/Apple'}><div onClick={() => handleProducts('Apple')} className="h-[30px] md:h-[55px] flex justify-center items-center bg-base-100 border-2 border-gray-200 rounded-xl hover:border-cyan-300 shadow-sm">
                    <FaApple className=" text-xl md:text-3xl " />
                    <p className="hidden md:flex text-sm md:text-lg font-semibold  ml-2">Apple</p>
                </div></Link>
                <Link to={'/Samsung'}><div className="h-[30px] md:h-[55px] flex justify-center items-center bg-base-100 border-2 border-gray-200 rounded-xl hover:border-cyan-300 shadow-sm">
                    <p className="font-OpenSans font-bold text-sm md:text-xl">SAMSUNG</p>

                </div></Link>
                <Link to={'/GooglePixel'}><div className="h-[30px] md:h-[55px] flex justify-center items-center bg-base-100 border-2 border-gray-200 rounded-xl hover:border-cyan-300 shadow-sm">
                    <FcGoogle className="text-xl md:text-3xl " />
                    <p className="hidden md:flex test-lg font-semibold ml-2">Google Pixel</p>
                </div></Link>
                <Link to={"/Xiaomi"}><div className="h-[30px] md:h-[55px] flex justify-center items-center bg-base-100 border-2 border-gray-200 rounded-xl hover:border-cyan-300 shadow-sm">
                    {/* <SiXiaomi className="text-xl md:text-5xl " /> */}
                    <img className="w-[24px] md:w-[40px]" src={xiaomi} alt="" />
                    <p className="hidden md:flex test-lg font-semibold ml-2">Xiaomi</p>
                </div></Link>
                <Link to={'OnePlus'}><div className="h-[30px] md:h-[55px] flex justify-center items-center bg-base-100 border-2 border-gray-200 rounded-xl hover:border-cyan-300 shadow-sm">
                    <SiOneplus className="text-xl md:text-4xl " />
                    <p className="hidden md:flex test-lg font-semibold ml-2">One Plus</p>
                </div></Link>
                <Link to={"Oppo"}><div className="h-[30px] md:h-[55px] flex justify-center items-center bg-base-100 border-2 border-gray-200 rounded-xl hover:border-cyan-300 shadow-sm">
                    <p className="text-xs md:text-2xl font-Krona">oppo</p>
                </div></Link>
                <Link to={"Sony"}><div className="h-[30px] md:h-[55px] flex justify-center items-center bg-base-100 border-2 border-gray-200 rounded-xl hover:border-cyan-300 shadow-sm">
                    <p className="font-Lora font-semibold text-sm md:text-2xl uppercase">Sony</p>
                    {/* <SiSony className="text-2xl md:text-7xl " /> */}
                </div></Link>
                <Link to={"Huawei"}><div className="h-[30px] md:h-[55px] flex justify-center items-center bg-base-100 border-2 border-gray-200 rounded-xl hover:border-cyan-300 shadow-sm">
                    <img className="w-[24px] md:w-[40px]" src={huawei} alt="" />
                    <p className="hidden md:flex test-lg font-semibold ml-2">Huawei</p>
                </div></Link>
                <Link to={"Realme"}><div className="h-[30px] md:h-[55px] flex justify-center items-center bg-base-100 border-2 border-gray-200 rounded-xl hover:border-cyan-300 shadow-sm">
                    <p className="font-Poppins font-semibold text-sm md:text-2xl">realme</p>
                </div></Link>
                <Link to={"Vivo"}><div className="h-[30px] md:h-[55px] flex justify-center items-center bg-base-100 border-2 border-gray-200 rounded-xl hover:border-cyan-300 shadow-sm">

                    <img className="w-[35px] md:w-[60px]" src={vivo} alt="" />
                </div></Link>
                <Link to={"Vivo"}><div className="h-[30px] md:h-[55px] flex justify-center items-center bg-base-100 border-2 border-gray-200 rounded-xl hover:border-cyan-300 shadow-sm">

                    <img className="w-[45px] md:w-[70px]" src={honor} alt="honor" />
                </div></Link>
                <Link to={"Hp"}><div className="h-[30px] md:h-[55px] flex justify-center items-center bg-base-100 border-2 border-gray-200 rounded-xl hover:border-cyan-300 shadow-sm">
                    <img className="w-[24px] md:w-[40px]" src={hp} alt="" />
                </div></Link>
                <Link to={"Dell"}><div className="h-[30px] md:h-[55px] flex justify-center items-center bg-base-100 border-2 border-gray-200 rounded-xl hover:border-cyan-300 shadow-sm">
                    <img className="w-[24px] md:w-[40px]" src={dell} alt="" />
                </div></Link>
                <Link to={"Lenovo"}><div className="h-[30px] md:h-[55px] flex justify-center items-center bg-base-100 border-2 border-gray-200 rounded-xl hover:border-cyan-300 shadow-sm">
                    <img className="w-[50px] md:w-[70px]" src={lenovo} alt="" />
                </div></Link>


            </div>
        </div>
    );
};

export default ShopByBrand;