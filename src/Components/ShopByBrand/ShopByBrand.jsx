import { Link} from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiOneplus, } from "react-icons/si";
import huawei from '../../assets/navIcons/Huawei.png';
import hp from '../../assets/navIcons/Hp.png';
import dell from '../../assets/navIcons/Dell.png';
import xiaomi from '../../assets/navIcons/Xiaomi.png';



const ShopByBrand = () => {
    
    const handleProducts = name=>{
        console.log(name)
       
        
    }

    return (
        <div className="px-8 lg:px-0 mt-24 md:mt-0">
            <h2 className="font-catamaran text-base md:text-2xl font-bold text-center uppercase py-8">----Shop by brand----</h2>
            <div className=" w-full grid grid-cols-4 gap-4">
                <Link to={'/Apple'}><div onClick={()=>handleProducts('Apple')} className="h-[30px] md:h-[55px] flex justify-center items-center border-2 border-gray-200 rounded-xl hover:border-cyan-300">
                    <FaApple className=" text-xl md:text-3xl " />
                    <p className="hidden md:flex text-lg font-semibold  ml-2">Apple</p>
                </div></Link>
                <Link to={'/Samsung'}><div className="h-[30px] md:h-[55px] flex justify-center items-center border-2 border-gray-200 rounded-xl hover:border-cyan-300">
                    <p className="font-OpenSans font-bold text-sm md:text-xl">SAMSUNG</p>

                </div></Link>
                <Link to={'/GooglePixel'}><div className="h-[30px] md:h-[55px] flex justify-center items-center border-2 border-gray-200 rounded-xl hover:border-cyan-300">
                    <FcGoogle className="text-xl md:text-3xl " />
                    <p className="hidden md:flex test-lg font-semibold ml-2">Google Pixel</p>
                </div></Link>
                <Link><div className="h-[30px] md:h-[55px] flex justify-center items-center border-2 border-gray-200 rounded-xl hover:border-cyan-300">
                    {/* <SiXiaomi className="text-xl md:text-5xl " /> */}
                    <img className="w-[24px] md:w-[40px]" src={xiaomi} alt="" />
                    <p className="hidden md:flex test-lg font-semibold ml-2">Xiaomi</p>
                </div></Link>
                <Link><div className="h-[30px] md:h-[55px] flex justify-center items-center border-2 border-gray-200 rounded-xl hover:border-cyan-300">
                    <SiOneplus className="text-xl md:text-4xl " />
                    <p className="hidden md:flex test-lg font-semibold ml-2">One Plus</p>
                </div></Link>
                <Link><div className="h-[30px] md:h-[55px] flex justify-center items-center border-2 border-gray-200 rounded-xl hover:border-cyan-300">
                    <p className="text-sm md:text-2xl font-Krona">oppo</p>
                </div></Link>
                <Link><div className="h-[30px] md:h-[55px] flex justify-center items-center border-2 border-gray-200 rounded-xl hover:border-cyan-300">
                    <p className="font-Lora font-semibold text-sm md:text-2xl uppercase">Sony</p>
                    {/* <SiSony className="text-2xl md:text-7xl " /> */}
                </div></Link>
                <Link><div className="h-[30px] md:h-[55px] flex justify-center items-center border-2 border-gray-200 rounded-xl hover:border-cyan-300">
                    <img className="w-[24px] md:w-[40px]" src={huawei} alt="" />
                    <p className="hidden md:flex test-lg font-semibold ml-2">Huawei</p>
                </div></Link>
                <Link><div className="h-[30px] md:h-[55px] flex justify-center items-center border-2 border-gray-200 rounded-xl hover:border-cyan-300">
                    <p className="font-Poppins font-semibold text-sm md:text-2xl">realme</p>
                </div></Link>
                <Link><div className="h-[30px] md:h-[55px] flex justify-center items-center border-2 border-gray-200 rounded-xl hover:border-cyan-300">
                    <img className="w-[24px] md:w-[40px]" src={hp} alt="" />
                </div></Link>
                <Link><div className="h-[30px] md:h-[55px] flex justify-center items-center border-2 border-gray-200 rounded-xl hover:border-cyan-300">
                    <img className="w-[24px] md:w-[40px]" src={dell} alt="" />
                </div></Link>


            </div>
        </div>
    );
};

export default ShopByBrand;