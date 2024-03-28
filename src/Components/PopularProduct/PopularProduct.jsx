
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
// import { Pagination } from 'swiper/modules';
// import required modules
import { Navigation } from 'swiper/modules';



import useProducts from '../../Hooks/useProducts';

import Loader from '../Loader/Loader';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useCart from '../../Hooks/useCart';
import Swal from 'sweetalert2';
import { addToCart } from '../../api/cart';
import { FaCartArrowDown } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

const PopularProduct = () => {
    const [allProducts, loading] = useProducts();

    const { user } = useAuth();
    const [, , refetch] = useCart()
    const navigate = useNavigate();
    const location = useLocation();
    const [slidePreview, setSlidePreview] = useState(4);

    useEffect(()=>{
        const updateSlidePreview=()=>{
            if(window.innerWidth<640){
                setSlidePreview(2)
            
            }else if(window.innerWidth<1280){
                setSlidePreview(3)
            }
            else{
                setSlidePreview(4)
            }
        };

        updateSlidePreview();
        window.addEventListener('resize', updateSlidePreview);
    },[])

    const handleAddtoCart = async item => {

        if (user && user.email) {
            // send data to cart database
            const cartItem = {
                productId: item._id,
                name: item.name,
                image: item.image1 ? item?.image1 : item?.imageURL1,
                price: item.price1,
                userEmail: user.email,

            }
            const data = await addToCart(cartItem)

            if (data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${item.name} added to cart`,
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
    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div className='py-10'>
            <h2 className='text-center font-catamaran font-bold text-3xl uppercase py-8'>---Popular Product---</h2>
            
            <Swiper watchSlidesProgress={true} 
            navigation={true} 
            modules={[Navigation]}
            slidesPerView={slidePreview}
             
            className="mySwiper">
            {
                    allProducts.map(item => <SwiperSlide key={item._id}>
                        <div className="md:w-[250px] lg:w-[300px]  card card-compact bg-base-100 shadow-xl font-catamaran rounded-lg mx-2 md:mx-auto group">
                            <Link to={`/product/${item._id}`}>
                                <figure className="pt-2">
                                    <img className="h-[120px] md:h-[200px]" src={item.image1 || item.imageURL1} alt={item.name} />
                                </figure>
                                <div className=" card-body relative text-center md:text-left ">
                                    <h2 className="hidden md:block card-title md:text-left text-sm md:text-base lg:text-lg">{item.name?.length > 20 ? <>{item.name?.slice(0, 20) + '...'}</> : <>{item.name}</>}</h2>
                                    <h2 className="md:hidden card-title text-center text-sm md:text-base lg:text-lg">{item.name.length > 15 ? <p className="text-center">{item.name.slice(0, 15) + '...'}</p> : <>{name}</>}</h2>
                                    <div className="hidden md:block rating rating-xs">
                                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <p className="md:text-left lg:text-lg text-sm">Price: <span className="ml-1">&#x62f;&#x2e;&#x625;</span> {item.price1}</p>

                                </div>
                            </Link>
                            <div className=" card-actions mt-4 justify-end">
                                <button onClick={() => handleAddtoCart(item)} className="hidden w-full md:flex justify-center items-center px-3 py-2  border-cyan-500 bg-cyan-400 group-hover:border-0 group-hover:text-white">Add to Cart <FaCartArrowDown className="ml-2"></FaCartArrowDown></button>
                                <button onClick={() => handleAddtoCart(item)} className="w-full md:hidden flex justify-center items-center px-3 py-2 border-cyan-500 group-hover:bg-cyan-500 group-hover:border-0 group-hover:text-white"><FaCartArrowDown className=""></FaCartArrowDown></button>
                                {/* <button onClick={() => handleAddtoCart(item)} className="w-full md:hidden flex justify-center items-center px-3 py-2 border-cyan-500 group-hover:bg-cyan-500 group-hover:border-0 group-hover:text-white">Buy Now</button> */}

                            </div>
                        </div>

                    </SwiperSlide>)
                }
        
      </Swiper>
        </div>
    );
};

export default PopularProduct;