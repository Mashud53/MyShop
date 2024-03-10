// import { Link } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { SiWhatsapp } from "react-icons/si";
import facebook36 from '../../../assets/icon/facebook36.png'
import instagram from '../../../assets/icon/instagram.png'
import tiktok from '../../../assets/icon/tiktokround.png'
import youtube from '../../../assets/icon/youtube.png'


const Footer = () => {
    return (
        <footer className="bg-[#232F3E] footer p-10 w-full mx-auto flex flex-col md:flex-row md:justify-between justify-center items-start font-catamaran text-neutral-content">
            <nav>
                <h6 className=" text-white text-lg font-bold">Follow Us</h6>
                <div className="flex justify-start items-center gap-4">
                    <img className="cursor-pointer" src={facebook36} alt="" />
                    <img className="cursor-pointer" src={instagram} alt="" />
                    <img className="cursor-pointer" src={tiktok} alt="" />
                    <img className="cursor-pointer" src={youtube} alt="" />
                    
                </div>
                
                <div className="mt-4">
                <h6 className=" text-white text-lg font-bold">Any Query</h6>
                    <div className=" flex justify-start items-center gap-2 font-semibold mt-3">
                        <FaRegEnvelope className="text-lg text-white"></FaRegEnvelope>
                        <p className="">myshop@gmail.com</p>
                    </div>
                    <div className=" flex justify-start items-center gap-2 py-2 font-semibold">
                        <IoCall className="text-lg text-white"></IoCall>
                        <p className="">01235468</p>
                    </div>
                    <div className=" flex justify-start items-center gap-2 font-semibold">
                        <SiWhatsapp className="text-lg text-green-500"></SiWhatsapp>
                        <p className="">01235468</p>
                    </div>

                </div>
            </nav>
           
            <nav className="text-white">
                <h6 className=" text-white text-lg font-bold">Shopping with us</h6>
                <a className="link link-hover">Cash On Delivery</a>
                <a className="link link-hover">Delivery Option</a>
                <a className="link link-hover">Product Protection</a>
                
            </nav>
            <nav>
                <h6 className=" text-white text-lg font-bold">Delux Mart</h6>
                <a className="link link-hover">All Product</a>
                <a className="link link-hover">About Us</a>
                
            </nav>
            
        </footer>
    );
};

export default Footer;