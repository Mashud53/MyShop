import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";


const ProductCard = ({ products }) => {
    const { _id,image1, name, price1, imageURL1} = products;



    return (
        <div className="w-28 md:w-64 lg:w-[260px] card card-compact bg-base-100 shadow-xl font-catamaran rounded-lg mx-1 md:mx-auto group">
            <Link to={`/product/${_id}`}>
                <figure className="">
                    <img className="h-[100px] md:h-[200px]" src={image1 || imageURL1} alt={name} />
                </figure>
                <div className="card-body relative">
                    <h2 className="hidden md:block card-title text-left text-sm md:text-base lg:text-lg">{name.length >20 ? <>{name.slice(0, 20)+'...' }</>:<>{name}</>}</h2>
                    <h2 className="md:hidden card-title text-left text-sm md:text-base lg:text-lg">{name.length >8 ? <>{name.slice(0, 8)+'...' }</>:<>{name}</>}</h2>
                    <div className="hidden md:block rating rating-xs">
                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className="text-left lg:text-lg text-sm">Price: <span className="ml-1">&#x62f;&#x2e;&#x625;</span> {price1}</p>
                    <div className=" card-actions justify-end">
                        <button className="hidden w-full md:flex justify-center items-center px-3 py-2  border-cyan-500 group-hover:bg-cyan-500 group-hover:border-0 group-hover:text-white">Add to Cart <FaCartArrowDown className="ml-2"></FaCartArrowDown></button>
                        <button className="w-full md:hidden flex justify-center items-center px-3 py-2 border-cyan-500 group-hover:bg-cyan-500 group-hover:border-0 group-hover:text-white"><FaCartArrowDown className=""></FaCartArrowDown></button>
                        
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;