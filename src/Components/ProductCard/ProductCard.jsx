import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";


const ProductCard = ({ products }) => {
    const { _id,image1, name, price1 } = products;



    return (
        <div className="card card-compact bg-base-100 shadow-xl font-catamaran rounded-lg mx-3 md:mx-0 group">
            <Link to={`/product/${_id}`}>
                <figure className="">
                    <img className="h-[200px]" src={image1} alt={name} />
                </figure>
                <div className="card-body relative">
                    <h2 className="card-title text-left text-base lg:text-lg">{name.length >20 ? <>{name.slice(0, 20)+'...' }</>:<>{name}</>}</h2>
                    <div className="rating rating-xs">
                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className="text-left lg:text-lg text-sm"><span className="ml-1">&#x62f;&#x2e;&#x625;</span> {price1}</p>
                    <div className=" card-actions justify-end">
                        <button className="w-full flex justify-center items-center px-3 py-2  border-cyan-500 group-hover:bg-cyan-500 group-hover:border-0 group-hover:text-white">Add to Cart <FaCartArrowDown className="ml-2"></FaCartArrowDown></button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;