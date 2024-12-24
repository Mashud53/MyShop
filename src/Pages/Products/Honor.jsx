import Heading from "../../Components/Heading/Heading";
import Loader from "../../Components/Loader/Loader";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Whatsapp from "../../Components/Shared/Whatsapp/Whatsapp";
import useBrand from "../../Hooks/useBrand";


const Honor = () => {
    const [brandProduct, isLoading,] = useBrand({ brandName: 'Honor' });
    console.log(brandProduct.length)
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <>
            <div className="mt-32 pb-10">
                
                <div >
                    {brandProduct?.length > 0 ?
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center font-catamaran text-base font-semibold  md:pt-10 mx-auto">
                            {brandProduct?.map((products,) => <ProductCard key={products._id} products={products}></ProductCard>)}
                        </div> :
                        <div className="w-full flex justify-center items-center min-h-[500px]">
                            <Heading title={"No Products are available"} center={true} subTitle={"Choose other category"}></Heading>
                        </div>
                    }
                </div>


            </div>
            <Whatsapp></Whatsapp>

        </>

    );
};

export default Honor;