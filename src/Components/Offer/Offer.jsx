import useBanners from "../../Hooks/useBanners";

import Counter from "./Counter";


const Offer = () => {
    const [banners] = useBanners();
    const banner = banners.filter(item => item.type === "offers")
    console.log(banners)
    console.log(banner)
    return (
        <> {
            banner && banner?.length > 0 ? <>
                <div className="pb-8">
                <div className="flex items-center justify-center gap-2 max-h-36 mt-16">
                    
                    {
                        banner && banner.map(item => <div key={item._id} className="w-full ">
                            <div
                                className="hero"
                                style={{ backgroundImage: `url(${item.image1 || item.imageURL1})` }}>
                                <div className="hero-overlay bg-opacity-40"></div>
                                <div className="hero-content grid grid-cols-1 text-neutral-content text-center">
                                    <div>
                                        <Counter item={item} />
                                    </div>
                                    <div className="max-w-md mt-2">
                                        {
                                            item?.title && <h1 className="mb-5 text-5xl font-bold">UP To <span className="text-6xl text-cyan-400 font-bold">{item.title}</span> OFF</h1>
                                        }

                                        <button className="px-3 py-2 border-2 rounded-md border-cyan-400 hover:bg-cyan-400 font-semibold">Shop Now</button>
                                    </div>
                                </div>
                            </div>

                        </div>)
                    }

                
                
            </div>
                </div>
            </> : <></>
        }

        </>

    );
};

export default Offer;