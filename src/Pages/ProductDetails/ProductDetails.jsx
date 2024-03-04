

import { useLoaderData } from "react-router-dom";
import DetailsPagePhoto from "../../Components/DetailsPagePhoto/DetailsPagePhoto";
import ProductRating from "../../Components/Rating/ProductRating";
import ProductStorage from "../../Components/ProductStorage/ProductStorage";
import { useState } from "react";
import DescDevice from "../../Components/DescDevice/DescDevice";
import ProductColor from "../../Components/ProductColor/ProductColor";



const ProductDetails = () => {
    const product = useLoaderData();
    const { image1, image2, image3, image4, image5, name, brand, price1, price2, price3, storage1, storage2, storage3, storage_Type, operating_system, network, color1, color2, color3, screen, screenSize, wireless_network, desc, } = product;

    const [price, setPrice] = useState(price1);
    const [color, setColor] = useState(color1);
    const [storage, setStorage] = useState(storage1);





    return (
        <div className="pt-24 px-10 lg:px-0">
            <div className=" grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-6 font-catamaran  pb-10 border-b-2 ">
                <div className="row-span-1 md:col-span-1">
                    <DetailsPagePhoto image1={image1} image2={image2} image3={image3} image4={image4} image5={image5}></DetailsPagePhoto>
                </div>
                <div className="row-span-1 md:col-span-1">
                    <div className="text-xl font-bold">{name}</div>
                    {/* rating  */}
                    <div className="mt-4">
                        <ProductRating />
                    </div>
                    {/* price  */}
                    <div className="flex justify-start gap-2 items-center mt-4">
                        {
                            price1 > 0 && <h2 className="font-semibold text-xl">$ {price}</h2>
                        }
                        {/* {
                        price2 > 0 && <h2 className="font-semibold text-xl">$ {price}</h2>
                    }
                    {
                        price3 > 0 && <h2 className="font-semibold text-xl">$ {price}</h2>
                    } */}

                    </div>
                    {/* Color  */}
                    <ProductColor color1={color1} color2={color2} color3={color3} color={color} setColor={setColor}/>

                    {/* storage  */}
                    <ProductStorage storage1={storage1} storage2={storage2} storage3={storage3} price1={price1} price2={price2} price3={price3} setPrice={setPrice} storage={storage} setStorage={setStorage}></ProductStorage>
                    {
                        storage_Type?.length > 0 && <h2 className="mt-2 w-36 border-2 border-neutral-300 font-semibold p-1 rounded-lg">Storage Type: {storage_Type}</h2>
                    }
                    {
                        brand?.length > 0 && <h2 className="mt-2 font-semibold">Brand: {brand}</h2>
                    }
                    <div className="flex flex-row justify-start items-end lg:items-end gap-4 mt-8">
                        <div className="flex flex-col">
                            <label >Quantity</label>
                            <input type="number" className="px-2 py-1 w-[70px] border-2 border-neutral-300" />
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="border-2 px-3 py-2 font-semibold rounded-lg hover:text-white hover:bg-cyan-500 hover:border-cyan-500">Buy Now</button>
                            <button className="border-2 px-3 py-2 font-semibold rounded-lg hover:text-white hover:bg-cyan-500 hover:border-cyan-500">Add to Cart</button>
                        </div>
                    </div>
                </div>

            </div>
            {/* description  */}
            <div>
               
                    <h2 className="mt-8 font-bold text-xl">About This Item</h2>
                    <DescDevice operating_system={operating_system} screen={screen} screenSize={screenSize} wireless_network={wireless_network} network={network}/>
                    {/* normal product desc  */}
                    {
                        desc ? <h2>{desc}</h2> : 
                        desc?.length>0 &&  <div className="flex flex-col gap-1 mt-2 border-b-2 pb-6">
                            {desc?.map((item, index )=><div key={index}><h2>{item}</h2></div>)}
                        </div> 
                    }
                    
            </div>
            {/* display rating  */}
            <div className="font-bold text-3xl">
               add dispaly Ratting
            </div>

            {/* add you may like product */}
            <div className="text-3xl font-bold">
                add you may like similar product
            </div>
        </div>
    );
};

export default ProductDetails;