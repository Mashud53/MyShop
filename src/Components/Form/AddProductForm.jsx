
import { TbFidgetSpinner } from 'react-icons/tb'

const AddProductForm = ({
    handleSubmit,
    loading = false,
    handleImageChange1,
    handleImageChange2,
    handleImageChange3,
    handleImageChange4,
    handleImageChange5,
    uploadButtonText1,
    uploadButtonText2,
    uploadButtonText3,
    uploadButtonText4,
    uploadButtonText5,

}) => {
    return (
        <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
            <form onSubmit={handleSubmit}>
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

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='category' className='block text-gray-600'>
                                Category
                            </label>
                            <select
                                required
                                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                                name='category'
                            >
                                <option value={'Mobile'}>Mobile</option>
                                <option value={'Laptop'}>Laptop</option>
                                <option value={'Women'}>Women</option>
                                <option value={'Accessories'}>Accessories</option>
                                <option value={'Watch'}>Watch</option>
                                <option value={'Shoe'}>Shoe</option>
                                <option value={'Toy'}>Toy</option>

                                {/* {categories.map(category => (
                                    <option value={category.label} key={category.label}>
                                        {category.label}
                                    </option>
                                ))} */}
                            </select>
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='type' className='block text-gray-600'>
                                Type
                            </label>
                            <select
                                required
                                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                                name='type'
                            >
                                <option value={'Smartphone'}>Smartphone</option>
                                <option value={'Laptop'}>Laptop</option>
                                <option value={'Cloth'}>Cloth</option>
                                <option value={'Headphone'}>Headphone</option>
                                <option value={'Men'}>Men</option>

                            </select>
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='brand' className='block text-gray-600'>
                                Brand Name
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='brand'
                                id='brand'
                                type='text'
                                placeholder='Brand Name'

                            />
                        </div>
                    </div>


                    {/* image uploade  */}
                    <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 bg-white w-full  m-auto rounded-lg'>
                        <div className='file_upload py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                            <div className='flex flex-col items-center justify-center w-max mx-auto text-center'>
                                <label>
                                    <input
                                        onChange={e => handleImageChange1(e.target.files[0])}
                                        className='text-sm cursor-pointer w-36 hidden'
                                        type='file'
                                        name='image1'
                                        id='image1'
                                        accept='image/*'
                                        hidden
                                    />
                                    <div className='bg-rose-500 text-xs text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                        {uploadButtonText1}
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className='file_upload py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                            <div className='flex flex-col w-max mx-auto text-center'>
                                <label>
                                    <input
                                        onChange={e => handleImageChange2(e.target.files[0])}
                                        className='text-sm cursor-pointer w-36 hidden'
                                        type='file'
                                        name='image2'
                                        id='image'
                                        accept='image/*'
                                        hidden
                                    />
                                    <div className='bg-rose-500 text-xs text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                        {uploadButtonText2}
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className='file_upload py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                            <div className='flex flex-col w-max mx-auto text-center'>
                                <label>
                                    <input
                                        onChange={e => handleImageChange3(e.target.files[0])}
                                        className='text-sm cursor-pointer w-36 hidden'
                                        type='file'
                                        name='image3'
                                        id='image'
                                        accept='image/*'
                                        hidden
                                    />
                                    <div className='bg-rose-500 text-xs text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                        {uploadButtonText3}
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className='file_upload py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                            <div className='flex flex-col w-max mx-auto text-center'>
                                <label>
                                    <input
                                        onChange={e => handleImageChange4(e.target.files[0])}
                                        className='text-sm cursor-pointer w-36 hidden'
                                        type='file'
                                        name='image4'
                                        id='image'
                                        accept='image/*'
                                        hidden
                                    />
                                    <div className='bg-rose-500 text-xs text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                        {uploadButtonText4}
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className='file_upload py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                            <div className='flex flex-col w-max mx-auto text-center'>
                                <label>
                                    <input
                                        onChange={e => handleImageChange5(e.target.files[0])}
                                        className='text-sm cursor-pointer w-36 hidden'
                                        type='file'
                                        name='image5'
                                        id='image'
                                        accept='image/*'
                                        hidden
                                    />
                                    <div className='bg-rose-500 text-xs text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-600'>
                                        {uploadButtonText5}
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between gap-2'>
                        <div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='price' className='block text-gray-600'>
                                    Price-1
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='price1'
                                    id='price'
                                    type='number'
                                    placeholder='Price-1'
                                    required
                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='price' className='block text-gray-600'>
                                    Price-2
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='price2'
                                    id='price'
                                    type='number'
                                    placeholder='Price-2'

                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='price' className='block text-gray-600'>
                                    Price-3
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='price3'
                                    id='price'
                                    type='number'
                                    placeholder='Price-3'

                                />
                            </div>
                        </div>

                        <div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='storage' className='block text-gray-600'>
                                    Storage-1
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='storage1'
                                    id='storage'
                                    type='text'
                                    placeholder='Storage-1'

                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='storage' className='block text-gray-600'>
                                    Storage-2
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='storage2'
                                    id='storage'
                                    type='text'
                                    placeholder='Storage-2'

                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='storage' className='block text-gray-600'>
                                    Storage-3
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='storage3'
                                    id='storage'
                                    type='text'
                                    placeholder='Storage -3'

                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='storageType' className='block text-gray-600'>
                                    Storage Type
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='storageType'
                                    id='storageType'
                                    type='text'
                                    placeholder='Storage Type'

                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between gap-2'>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='colors' className='block text-gray-600'>
                                Color-1
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='color1'
                                id='color'
                                type='text'
                                placeholder='Color-1'

                            />
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='colors' className='block text-gray-600'>
                                Color-2
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='color2'
                                id='color'
                                type='text'
                                placeholder='Color-2'

                            />
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='colors' className='block text-gray-600'>
                                Color-3
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='color3'
                                id='color'
                                type='text'
                                placeholder='Color-3'

                            />
                        </div>


                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                        <div className='space-y-1 text-sm'>
                            <label htmlFor='operating_system' className='block text-gray-600'>
                                Operating System
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='operatingSystem'
                                id='operatingSystem'
                                type='text'
                                placeholder='Operating System'

                            />
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='network' className='block text-gray-600'>
                                Network
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='network'
                                id='network'
                                type='text'
                                placeholder='Network'

                            />
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='wireless_network' className='block text-gray-600'>
                                Wireless Network
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='wirelessNetwork'
                                id='wirelessNetwork'
                                type='text'
                                placeholder='Wireless Network'

                            />
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='screen' className='block text-gray-600'>
                                Screen
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='screen'
                                id='screen'
                                type='text'
                                placeholder='Screen'

                            />
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='screenSize' className='block text-gray-600'>
                                Screen Size
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='screenSize'
                                id='screenSize'
                                type='text'
                                placeholder='Screen Size'

                            />
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='connector' className='block text-gray-600'>
                                Connector
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='connector'
                                id='connector'
                                type='text'
                                placeholder='Connector'

                            />
                        </div>


                    </div>

                    <div className='space-y-1 text-sm'>
                        <label htmlFor='description' className='block text-gray-600'>
                            Description
                        </label>

                        <textarea
                            id='description'
                            className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                            name='description'
                        ></textarea>
                    </div>



                    {/* <div className='space-y-6'>
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

                        <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
                            <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                <div className='flex flex-col w-max mx-auto text-center'>
                                    <label>
                                        <input
                                            className='text-sm cursor-pointer w-36 hidden'
                                            type='file'
                                            name='image'
                                            id='image'
                                            accept='image/*'
                                            hidden
                                        />
                                        <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                            Upload Image
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between gap-2'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='price' className='block text-gray-600'>
                                    Price
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='price'
                                    id='price'
                                    type='number'
                                    placeholder='Price'
                                    required
                                />
                            </div>

                            <div className='space-y-1 text-sm'>
                                <label htmlFor='guest' className='block text-gray-600'>
                                    Total guest
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='total_guest'
                                    id='guest'
                                    type='number'
                                    placeholder='Total guest'
                                    required
                                />
                            </div>
                        </div>

                        <div className='flex justify-between gap-2'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='bedrooms' className='block text-gray-600'>
                                    Bedrooms
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='bedrooms'
                                    id='bedrooms'
                                    type='number'
                                    placeholder='Bedrooms'
                                    required
                                />
                            </div>

                            <div className='space-y-1 text-sm'>
                                <label htmlFor='bathrooms' className='block text-gray-600'>
                                    Bathrooms
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='bathrooms'
                                    id='bathrooms'
                                    type='number'
                                    placeholder='Bathrooms'
                                    required
                                />
                            </div>
                        </div>

                        <div className='space-y-1 text-sm'>
                            <label htmlFor='description' className='block text-gray-600'>
                                Description
                            </label>

                            <textarea
                                id='description'
                                className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                                name='description'
                            ></textarea>
                        </div>
                    </div> */}
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
    )
}

export default AddProductForm