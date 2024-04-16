// import useProducts from "../../Hooks/useProducts";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useSearchParams } from "react-router-dom";
import { useEffect,} from "react";
import Heading from "../../Components/Heading/Heading";
import Loader from "../../Components/Loader/Loader";




const Products = ({allProducts,loading, setLoading, displayProducts, setDisplayProduct}) => {
    // const [allProducts, loading, setLoading] = useProducts()
    // const [displayProducts, setDisplayProduct] = useState()
    const [params, setParams] = useSearchParams()
    const categories = params.get('category')
    useEffect(() => {
        setLoading(true)
        if (categories === 'All') {
            setDisplayProduct(allProducts)

        }
        else if (categories) {
            setLoading(true)
            const categoryProduct = allProducts.filter(product => product.category === categories || product.type === categories || product.brand === categories)
            setDisplayProduct(categoryProduct)

        }
        else setDisplayProduct(allProducts)
        setLoading(false)
    }, [allProducts, categories, setDisplayProduct, setLoading])

    // if (loading) return <Loader></Loader>

    return (
        <div className="w-full mt-6 mx-auto">
            {
                loading ? <Loader></Loader> : displayProducts && displayProducts.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center font-catamaran text-base font-semibold  md:pt-10 mx-auto">
                {displayProducts?.map(products => <ProductCard key={products._id} products={products}></ProductCard>)}
            </div> :
                <div className="flex justify-center items-center min-h-[500px]">
                    <Heading title={"No Products are available"} center={true} subTitle={"Choose other category"}></Heading>
                </div>
            }
            
            {/* {displayProducts && displayProducts.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 font-catamaran text-base font-semibold pt-16 md:pt-10">
                {displayProducts?.map(products => <ProductCard key={products._id} products={products} loading={loading}></ProductCard>)}

            </div> :
                <div className="flex justify-center items-center min-h-[500px]">
                    <Heading title={"No Products are available"} center={true} subTitle={"Choose other category"}></Heading>
                </div>
            } */}
        </div>
    );
};

export default Products;