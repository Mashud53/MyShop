
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
// import { Pagination } from 'swiper/modules';
// import required modules
import { Navigation } from 'swiper/modules';
import Loader from '../Loader/Loader';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useCart from '../../Hooks/useCart';
import Swal from 'sweetalert2';
import { addToCart } from '../../api/cart';
import { FaCartArrowDown } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { updateViews } from '../../api/product';
import SectionTitle from '../SectionTitle';
import usePopularProduct from '../../Hooks/usePopularProduct';

const PopularProduct = () => {

    const [popularProducts, isLoading] = usePopularProduct();
    const { user } = useAuth();
    const [, , refetch] = useCart()
    const navigate = useNavigate();
    const location = useLocation();
    const [slidePreview, setSlidePreview] = useState(4);
    const [view, setView] = useState(0)
    const percent = 100;
    // console.log(popularProducts)


    useEffect(() => {
        const updateSlidePreview = () => {
            if (window.innerWidth < 640) {
                setSlidePreview(2)

            } else if (window.innerWidth < 1280) {
                setSlidePreview(3)
            }
            else {
                setSlidePreview(4)
            }
        };

        updateSlidePreview();
        window.addEventListener('resize', updateSlidePreview);
    }, [])

    const handleView = async (id) => {
        const currentView = (view + 1)
        setView(currentView)
        console.log(id, currentView)
        const data = await updateViews(id, { views: currentView })

        console.log(data)

    }

    const handleAddtoCart = async item => {

        if (user && user.email) {
            // send data to cart database
            const cartItem = {
                productId: item._id,
                name: item.name,
                image: item.image1 ? item?.image1 : item?.imageURL1,
                price:  item?.currentPrice1 > 0 ? item.currentPrice1 : item.price1,
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
    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='py-10'>
            <SectionTitle title={'Popular Product'}></SectionTitle>
            <Swiper watchSlidesProgress={true}
                navigation={true}
                modules={[Navigation]}
                slidesPerView={slidePreview}

                className="mySwiper">
                {
                    popularProducts.map(item => <SwiperSlide className='py-4' key={item._id}>
                        <div
                            onClick={() => handleView(item._id)}
                            className="md:w-[250px] lg:w-[300px]  card card-compact bg-base-100 shadow-xl font-catamaran rounded-lg mx-2 md:mx-auto group">
                            <Link to={`/product/${item._id}`}>
                                <figure className=" relative pt-2">
                                    <img className="h-[120px] md:h-[200px]" src={item.image1 || item.imageURL1} alt={item.name} />
                                    {
                        item.currentPrice1 && item.currentPrice1 >0 && <p className="absolute top-0 right-0 bg-rose-500 px-2 rounded-tr-lg rounded-bl-lg text-white">{(((parseFloat(item.price1)-parseFloat(item.currentPrice1))/parseFloat(item.price1))*percent).toFixed(2)}%</p>
                    }
                                </figure>
                                <div className=" card-body relative text-center md:text-left ">
                                    <h2 className="hidden md:block card-title md:text-left text-sm md:text-base lg:text-lg">{item.name?.length > 20 ? <>{item.name?.slice(0, 20) + '...'}</> : <>{item.name}</>}</h2>
                                    <h2 className="md:hidden card-title text-center text-sm md:text-base lg:text-lg">{item.name?.length > 15 ? <p className="text-center">{item.name?.slice(0, 15) + '...'}</p> : <p className='text-center'>{item.name}</p>}</h2>
                                    <div className="hidden md:block rating rating-xs">
                                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    {/* <p className="md:text-left lg:text-lg text-sm">Price: <span className="ml-1">&#x62f;&#x2e;&#x625;</span> {item.price1}</p> */}
                                    {
                                        item.currentPrice1 && item.currentPrice1 > 0 ?
                                            <div className="flex justify-around items-center">
                                                <p className="md:text-left lg:text-lg text-sm text-cyan-500"><span className="ml-1">&#x62f;&#x2e;&#x625;</span> {item.currentPrice1}</p>
                                                <p className="md:text-left lg:text-xs text-xs "><span className="ml-1">&#x62f;&#x2e;&#x625;</span> <span className="line-through">{item.price1}</span> </p>

                                            </div> :
                                            <p className="md:text-left lg:text-lg text-sm"><span className="ml-1">&#x62f;&#x2e;&#x625;</span> {item.price1}</p>

                                    }

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