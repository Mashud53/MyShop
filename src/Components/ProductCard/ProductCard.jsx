import { Link } from "react-router-dom";


const ProductCard = ({ products }) => {
    const { _id,image1, name, price1 } = products;



    return (
        <div className="card card-compact bg-base-100 shadow-xl font-catamaran rounded-lg mx-3 md:mx-0">
            <Link to={`/product/${_id}`}>
                <figure className="">
                    <img className="h-[200px]" src={image1} alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-left text-lg">{name}</h2>
                    <div className="rating rating-xs">
                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className="text-left text-lg text-">$ {price1}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;