import { Helmet } from "react-helmet-async";
import Loader from "../../Components/Loader/Loader";
import ProductCard from "../../Components/ProductCard/ProductCard";
import useProducts from "../../Hooks/useProducts";


const AllProducts = () => {
    const [allProducts, isLoading, ]= useProducts();

    if(isLoading) return <Loader></Loader>
    return (
        <div className="pt-28 pb-10">
            <Helmet><title>All Products</title></Helmet>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center font-catamaran text-base font-semibold px-4 md:px-0  md:pt-10 mx-auto">
                {allProducts?.map(products => <ProductCard key={products._id} products={products}></ProductCard>)}
            </div>
            
        </div>
    );
};

export default AllProducts;