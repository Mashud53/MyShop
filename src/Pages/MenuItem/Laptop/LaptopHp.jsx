import { useEffect, useState } from "react";
import useProducts from "../../../Hooks/useProducts";
import Loader from "../../../Components/Loader/Loader";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import Heading from "../../../Components/Heading/Heading";
import { Helmet } from "react-helmet-async";


const LaptopHp = () => {
    const [allProducts, isLoading,] = useProducts();

    const [hpProduct, setHpProduct] = useState([]);

    useEffect(() => {
        if(allProducts.length>0){
            const hp = allProducts.filter(item => item.brand == 'Hp' && item.category == "Laptop")
        setHpProduct(hp)
        }
    }, [allProducts])

    if(isLoading)return <Loader></Loader>
    return (
        <div className="pt-28 pb-10">
            <Helmet><title>Delux Mart | Laptop</title></Helmet>
            
            {
                hpProduct?.length > 0 ?
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center font-catamaran text-base font-semibold  md:pt-10 mx-auto">
                        {
                            hpProduct.map(products => <ProductCard key={products._id} products={products}></ProductCard>)
                        }
                    </div> :
                    <div className="w-full flex justify-center items-center min-h-[500px]">
                        <Heading title={"No Products are available"} center={true} subTitle={"Choose other category"}></Heading>
                    </div>
            }


        </div>
    );
};

export default LaptopHp;