import Heading from "../../Components/Heading/Heading";
import Loader from "../../Components/Loader/Loader";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Footer from "../../Components/Shared/Footer/Footer";
import useBrand from "../../Hooks/useBrand";




const Apple = () => {
    // const brandName = Apple;
    const [brandProduct, isLoading]= useBrand({brandName:'Apple'});
    console.log(brandProduct)
    
    return (
        <>
        <div className="mt-32 pb-10">
            <h2>Apple</h2>
            <div >
                {isLoading ? <Loader></Loader> : brandProduct && brandProduct.length <= 0 ?<div className="w-full flex justify-center items-center min-h-[500px]">
                    <Heading title={"No Products are available"} center={true} subTitle={"Choose other category"}></Heading>
                </div>: 
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center font-catamaran text-base font-semibold  md:pt-10 mx-auto">
                    {brandProduct?.map ((products, ) =><ProductCard key={products._id} products={products}></ProductCard>)}
                    </div>}
            </div>
            
        </div>
        <Footer></Footer>
        </>
    );
};

export default Apple;