import { useState } from "react";
import Swal from "sweetalert2";
import { addShopByCategory } from "../../../api/banner";
import { TbFidgetSpinner } from "react-icons/tb";
import { imageUpload } from "../../../api/utils";


const CategoryBanner = () => {
    const [loading, setLoading] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image')
    const [uploadImg, setUploadimg] = useState("");

    const handleImageChange = image => {
        setUploadButtonText(image?.name)
    }
    const handleCategoryBAnner = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const image = form.image.files[0];
        const imgLink = form.imgLink.value;
        const category = form.category.value;
        setLoading(true)
        const imgUrl = image && await imageUpload(image)
        if (!imgUrl?.data?.display_url) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `Tray again`,
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            setUploadimg(imgUrl.data.display_url)

        }
        console.log('image upload link====', uploadImg)

        const uploadData = {
            title: title,
            image: uploadImg,
            imgLink: imgLink,
            category:category
        }


        try {
            if (uploadImg.length <= 0 && imgLink.length <= 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: `Please Select Photo to upload`,
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                const data = await addShopByCategory(uploadData)
                setUploadButtonText('Upload Image')

                setLoading(false)
                if (data.insertedId) {
                    console.log(data)
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${title} upload successful`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            }

        } catch (err) {
            console.log(err)
        }





    }
    return (
        <div className="mt-8 bg-slate-100 py-8">
            <h2 className="text-lg font-semibold text-center">Shop By Category Banner</h2>

            <form onSubmit={handleCategoryBAnner}>
                <div className='grid grid-cols-1  gap-10'>

                    <div className='space-y-1 text-sm'>
                        <label htmlFor='title' className='block text-gray-600'>
                            Title
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                            name='title'
                            id='title'
                            type='text'
                            placeholder='Title'
                            required
                        />
                    </div>



                    {/* image uploade  */}
                    <div className='bg-white p-4  grid grid-cols-1 md:grid-cols-2 gap-4  w-full  m-auto rounded-lg'>

                        <div className='file_upload py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                            <div className='flex flex-col items-center justify-center w-max mx-auto text-center'>
                                <label>
                                    <input
                                        onChange={e => handleImageChange(e.target.files[0])}
                                        className='text-sm cursor-pointer w-36 hidden'
                                        type='file'
                                        name='image'
                                        id='image'
                                        accept='image/*'
                                        hidden
                                    />
                                    <div className='bg-rose-500 text-xs text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                        {uploadButtonText}
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='imgUrl' className='block text-gray-600'>
                                Image URL
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='imgLink'
                                id='imgLink'
                                type='text'
                                placeholder='Image URL'

                            />
                        </div>


                    </div>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='type' className='block text-gray-600'>
                            Category
                        </label>
                        <select
                            required
                            className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                            name='category'
                            defaultValue=""
                        >
                            <option value={'Smartphone'}>Smartphone</option>
                            <option value={'Laptop'}>Laptop</option>
                            <option value={'iPad'}>iPad</option>
                            <option value={'Cloth'}>Cloth</option>
                            <option value={'Headphone'}>Headphone</option>
                            <option value={'Men'}>Men</option>
                            <option value={'Router'}>Router</option>
                            <option value={'Charger'}>Charger</option>
                            <option value={'Power_Bank'}>Power Bank</option>
                            <option value={'Wireless_Charger'}>Wireless Charger</option>
                            <option value={'Airpod'}>Airpod</option>
                            <option value={'Wirelesss_Headphone'}>Wirelesss Headphone</option>
                            <option value={'Speaker'}>Speaker</option>
                            <option value={'Smart_Watch'}>Smart Watch</option>
                            <option value={'Classic_Watch'}>Classic Watch</option>
                            <option value={'Other'}>Fashion</option>
                            <option value={'Other'}>Other</option>

                        </select>
                    </div>






                </div>

                <button
                    type='submit'
                    className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
                >
                    {loading ?
                        <TbFidgetSpinner className='animate-spin m-auto' />
                        : 'Save & Continue'}
                </button>
            </form>

        </div>
    );
};

export default CategoryBanner;