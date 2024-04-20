import useFeaturedProduct from "../../Hooks/useFeaturedProduct";
import Loader from "../Loader/Loader";
import ProductCard from "../ProductCard/ProductCard";
import SectionTitle from "../SectionTitle";


const FeaturedProduct = () => {
    const [featuredProduct, isLoading]= useFeaturedProduct()
    if(isLoading) return <Loader></Loader>

    return (
        <div>
            <SectionTitle title={"Featured Product"}></SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center font-catamaran text-base font-semibold  md:pt-10 mx-auto">
                {featuredProduct?.map(products => <ProductCard key={products._id} products={products}></ProductCard>)}
            </div>

            
        </div>
    );
};

export default FeaturedProduct;