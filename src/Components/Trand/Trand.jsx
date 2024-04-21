import useProductBySell from "../../Hooks/useProductBySell";
import Loader from "../Loader/Loader";
import SectionTitle from "../SectionTitle";
import TrandsCard from "./TrandsCard";


const Trand = () => {
    const [trand, isLoading, ] = useProductBySell()
    const filter = trand.slice(1, 13)
    console.log(filter)
    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div>
            <SectionTitle title={"Trands"}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center font-catamaran text-base font-semibold  md:pt-10 mx-auto">
                {filter?.map(products => <TrandsCard key={products._id} products={products}></TrandsCard>)}
            </div>

        </div>
    );
};

export default Trand;