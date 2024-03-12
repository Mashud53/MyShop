import { Helmet } from "react-helmet-async";
import AddProductForm from "../../../Components/Form/AddProductForm";
import { imageUpload } from "../../../api/utils";
import { useState } from "react";
import { addProduct } from "../../../api/product";
import Swal from "sweetalert2";



const AddProduct = () => {
    const [loading, setLoading] = useState(false)
    const [uploadButtonText1, setUploadButtonText1] = useState('Upload Image')
    const [uploadButtonText2, setUploadButtonText2] = useState('Upload Image')
    const [uploadButtonText3, setUploadButtonText3] = useState('Upload Image')
    const [uploadButtonText4, setUploadButtonText4] = useState('Upload Image')
    const [uploadButtonText5, setUploadButtonText5] = useState('Upload Image')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const type = form.type.value;
        const image1 = form.image1.files[0];
        const image2 = form.image2.files[0];
        const image3 = form.image3.files[0];
        const image4 = form.image4.files[0];
        const image5 = form.image5.files[0];
        const price1 = form.price1.value;
        const price2 = form.price2.value;
        const price3 = form.price3.value;
        const storage1=form.storage1.value;
        const storage2=form.storage2.value;
        const storage3=form.storage3.value;
        const color1 = form.color1.value;
        const color2 = form.color2.value;
        const color3 = form.color3.value;
        const productType = form.productType.value;
        const operatingSystem = form.operatingSystem.value;
        const network = form.network.value;
        const wirelessNetwork = form.wirelessNetwork.value;
        const screen = form.screen.value;
        const screenSize = form.screenSize.value;
        const connector = form.connector.value;
        const desc = form.description.value;
        const desc1 = form.description1.value;
        const desc2 = form.description2.value;
        const desc3 = form.description3.value;
        const desc4 = form.description4.value;
        const desc5 = form.description5.value;

        const image1Url = image1 && await  imageUpload(image1)
        const image2Url = image2 &&  await imageUpload(image2)
        const image3Url = image3 && await imageUpload(image3)
        const image4Url = image4 && await imageUpload(image4)
        const image5Url = image5 && await  imageUpload(image5)
        console.log(image1Url)

        const productData = {
            name:title,brand, category, type, price1, price2, price3,
            storage1, storage2, storage3, color1, color2, color3, operatingSystem, 
            network, wirelessNetwork, screen, screenSize, connector, desc, desc1, desc2, desc3, desc4, desc5, productType,
            image1: image1Url?.data?.display_url,
            image2: image2Url?.data?.display_url,
            image3: image3Url?.data?.display_url,
            image4: image4Url?.data?.display_url,
            image5: image5Url?.data?.display_url,
        }
        try{
            setLoading(true)
            const data = await addProduct(productData)
            setUploadButtonText1('Upload Image')
            setUploadButtonText2('Upload Image')
            setUploadButtonText3('Upload Image')
            setUploadButtonText4('Upload Image')
            setUploadButtonText5('Upload Image')
            setLoading(false)
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${title} upload successful`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }catch(err){
            console.log(err)
        }  



    }
    const handleImageChange1 = image=>{
        setUploadButtonText1(image.name)
    }
    const handleImageChange2 = image=>{
        setUploadButtonText2(image.name)
    }
    const handleImageChange3 = image=>{
        setUploadButtonText3(image.name)
    }
    const handleImageChange4 = image=>{
        setUploadButtonText4(image.name)
    }
    const handleImageChange5 = image=>{
        setUploadButtonText5(image.name)
    }
    return (
        <div>
            <Helmet><title>My Shop || Add Room</title></Helmet>
            <AddProductForm handleSubmit={handleSubmit} 
            handleImageChange1={handleImageChange1}
            handleImageChange2={handleImageChange2}
            handleImageChange3={handleImageChange3}
            handleImageChange4={handleImageChange4}
            handleImageChange5={handleImageChange5}
            uploadButtonText1={uploadButtonText1}
            uploadButtonText2={uploadButtonText2}
            uploadButtonText3={uploadButtonText3}
            uploadButtonText4={uploadButtonText4}
            uploadButtonText5={uploadButtonText5}
            loading={loading}></AddProductForm>

        </div>
    );
};

export default AddProduct;