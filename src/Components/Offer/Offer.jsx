import useCategoryShop from "../../Hooks/useCategoryShop";
import Counter from "./Counter";


const Offer = () => {
    const [categoryItems] = useCategoryShop();
    const banner = categoryItems.filter(item => item.category === "Other")
    console.log(categoryItems)
    console.log(banner)
    return (
        <div className="flex items-center justify-center gap-2 max-h-24 mt-32">
            <div className="md:w-3/4">

                {
                    banner && banner.map(item => <div key={item._id} className="w-full ">
                        <div
                            className="hero min-h-screen"
                            style={{ backgroundImage: `url(${item.imgLink})` }}>
                            <div className="hero-overlay bg-opacity-30"></div>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">UP To <span className="text-6xl text-cyan-400 font-bold">50%</span> OFF</h1>
                                    <p className="mb-5">
                                        
                                    </p>
                                    <button className="px-3 py-2 border-2 rounded-md border-cyan-400 hover:bg-cyan-400 font-semibold">Shop Now</button>
                                </div>
                            </div>
                        </div>

                    </div>)
                }

            </div>
            <div>
                <Counter />
            </div>


        </div>
    );
};

export default Offer;