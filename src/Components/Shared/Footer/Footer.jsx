// import { Link } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { SiWhatsapp } from "react-icons/si";
import facebook36 from '../../../assets/icon/facebook36.png'
import instagram from '../../../assets/icon/instagram.png'
import tiktok from '../../../assets/icon/tiktokround.png'
import youtube from '../../../assets/icon/youtube.png'
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="bg-[#232F3E] footer p-10 w-full mx-auto flex flex-col justify-center items-center font-catamaran text-neutral-content">
            <div className="w-full flex flex-col md:flex-row md:justify-between justify-center items-start0">
                <nav>
                    <h6 className=" text-white text-lg font-bold">Follow Us</h6>
                    <div className="flex justify-start items-center gap-4">
                        <Link to={'https://web.facebook.com/deluxmart'}><img className="cursor-pointer" src={facebook36} alt="" /></Link>
                        <Link to={'https://www.instagram.com/deluxmart1/'}><img className="cursor-pointer" src={instagram} alt="" /></Link>
                        <Link to={'/'}><img className="cursor-pointer" src={tiktok} alt="" /></Link> 
                        <Link to={'https://www.youtube.com/@deluxmart1'}><img className="cursor-pointer" src={youtube} alt="" /></Link>
                        

                    </div>

                    <div className="mt-4">
                        <h6 className=" text-white text-lg font-bold">Any Query</h6>
                        <div className=" flex justify-start items-center gap-2 font-semibold mt-3">
                            <FaRegEnvelope className="text-lg text-white"></FaRegEnvelope>
                            <p className="">info@deluxmart.com</p>
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

                <nav className="text-white flex flex-col">
                    <h6 className=" text-white text-lg font-bold">Shopping with us</h6>
                    <a className="link link-hover">Cash On Delivery</a>
                    <a className="link link-hover">Delivery Option</a>
                    <a className="link link-hover">Product Protection</a>
                    <Link to={'/returnPolicy'}><p className="link link-hover">Return & Refund Policy </p></Link>
                    

                </nav>
                <nav className="flex flex-col">
                    <h6 className=" text-white text-lg font-bold">Delux Mart</h6>
                    <a className="link link-hover">All Product</a>
                    <Link to={'/aboutUs'}><p className="link link-hover">About Us</p></Link>

                </nav>
            </div>
            <div>
                COPYRIGHT © 2024 Delux Mart ALL RIGHTS RESERVED
            </div>

        </footer>
    );
};

export default Footer;