import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";


const UpdateProduct = () => {

    const product = useLoaderData()
    const {_id, name,  image1, image2, image3,image4, image5, imageURL1, imageURL2, imageURL3, imageURL4, imageURL5, category, type, brand, price1, price2, price3, storage, storage2, storage3, color, color2, color3, color4, color5, storageType, operatingSystem, network, wirelessNetwork, screen, connector, screenSize, productType, desc, desc1, desc2, desc3, desc4, desc5 } = product;
    console.log(product)
    return (
        <div>
            <Helmet><title>Dashboard | Update Product</title></Helmet>
            <div className="text-center py-8 border-b-2 font-bold text-xl"><h2>Update Pruduct</h2></div>
            <h2>{product?.name}</h2>
            

        </div>
    );
};

export default UpdateProduct;