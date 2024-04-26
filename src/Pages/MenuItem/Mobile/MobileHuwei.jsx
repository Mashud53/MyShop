import { useEffect, useState } from "react";
import useProducts from "../../../Hooks/useProducts";
import Loader from "../../../Components/Loader/Loader";
import Heading from "../../../Components/Heading/Heading";
import ProductCard from "../../../Components/ProductCard/ProductCard";


const MobileHuwei = () => {
    const [allProducts, isLoading,] = useProducts();

    const [huweiProduct, setHuweiProduct] = useState([]);

    useEffect(() => {
        if(allProducts.length>0){
            const huwei = allProducts.filter(item => item.brand == 'Huwei' && item.category == "Mobile")
        setHuweiProduct(huwei)
        }
    }, [allProducts])

    if (isLoading) return <Loader></Loader>
    return (
        <div className="pt-28 pb-10">
            Huwei
            
            {
                huweiProduct?.length > 0 ?
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center font-catamaran text-base font-semibold  md:pt-10 mx-auto">
                        {
                            huweiProduct.map(products => <ProductCard key={products._id} products={products}></ProductCard>)
                        }
                    </div> :
                    <div className="w-full flex justify-center items-center min-h-[500px]">
                        <Heading title={"No Products are available"} center={true} subTitle={"Choose other category"}></Heading>
                    </div>
            }


        </div>
        )
};

export default MobileHuwei;