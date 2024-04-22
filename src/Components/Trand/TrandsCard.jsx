import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateViews } from "../../api/product";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { addToCart } from "../../api/cart";
import { FaCartArrowDown } from "react-icons/fa";


const TrandsCard = ({products}) => {
    const { _id, image1, name, price1, imageURL1, totalSales } = products;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [, , refetch] = useCart()
    const [view, setView] = useState(0)
    const handleView = async (id) => {
        const currentView = (view + 1)
        setView(currentView)
        console.log(id, currentView)
        const data = await updateViews(id, { views: currentView })

        console.log(data)

    }
    const handleAddtoCart = async product => {

        if (user && user.email) {
            // send data to cart database
            const cartItem = {
                productId: product._id,
                name: product.name,
                image: product.image1 ? product?.image1 : product?.imageURL1,
                price: price1,
                userEmail: user.email,

            }
            const data = await addToCart(cartItem)

            if (data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${product.name} added to cart`,
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch();
            }
        }
        else {
            Swal.fire({
                title: "You are not Login",
                text: "Please Login to add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })

                }
            });
        }
    }
    return (
        <div onClick={() => handleView(_id)} className="md:w-[280px] lg:w-[300px]  card card-compact bg-base-100 shadow-xl font-catamaran rounded-lg mx-2 md:mx-auto group">
            <Link to={`/product/${_id}`}>
                <figure className="pt-2">
                    <img className="h-[120px] md:h-[200px]" src={image1 || imageURL1} alt={name} />
                </figure>
                <div className=" card-body relative text-center md:text-left ">
                    <h2 className="hidden md:block card-title md:text-left text-sm md:text-base lg:text-lg">{name.length > 20 ? <>{name.slice(0, 20) + '...'}</> : <>{name}</>}</h2>
                    <h2 className="md:hidden card-title text-center text-sm md:text-base lg:text-lg">{name.length > 15 ? <p className="text-center">{name.slice(0, 15) + '...'}</p> : <p className="text-center">{name}</p>}</h2>
                    {totalSales>0 && <p className="text-xs">Sales: {totalSales}</p>}
                    <div className="flex items-center justify-center md:justify-start">
                        <div className=" rating rating-xs">
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <p className="md:text-left lg:text-lg text-sm">Price: <span className="ml-1">&#x62f;&#x2e;&#x625;</span> {price1}</p>

                </div>
            </Link>
            <div className=" card-actions mt-4 justify-end">
                <button onClick={() => handleAddtoCart(products)} className="hidden w-full md:flex justify-center items-center px-3 py-2  border-cyan-500 bg-cyan-400 group-hover:border-0 group-hover:text-white">Add to Cart <FaCartArrowDown className="ml-2"></FaCartArrowDown></button>
                <button onClick={() => handleAddtoCart(products)} className="w-full md:hidden flex justify-center items-center px-3 py-2 border-cyan-500 group-hover:bg-cyan-500 group-hover:border-0 group-hover:text-white"><FaCartArrowDown className=""></FaCartArrowDown></button>
                {/* <button onClick={() => handleAddtoCart(products)} className="w-full md:hidden flex justify-center items-center px-3 py-2 border-cyan-500 group-hover:bg-cyan-500 group-hover:border-0 group-hover:text-white">Buy Now</button> */}

            </div>
        </div>
    );
};

export default TrandsCard;