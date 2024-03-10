import { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";


const DeliveryAddress = ({ closeModal, orderInfo }) => {
    const [loading, setLoading] = useState(false)
    console.log(orderInfo)
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        console.log('click')
        closeModal()
    }
    return (
        <div className='w-full  text-gray-800 rounded-xl bg-gray-50 font-catamaran'>

            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-around items-start gap-10">
                <div className='w-1/2'>
                    <h2 className="my-4 text-lg font-bold">Delivery Address</h2>
                    <div className="my-6">
                        <h2 className="font-semibold">Country / Region</h2>
                        <h2 className="">United Arab Emirates</h2>
                    </div>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='street' className='block text-gray-600'>
                            Street Address
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md '
                            name='street'
                            id='street'
                            type='text'
                            placeholder='House number and street name'
                            required
                        />
                    </div>
                    <div className='space-y-1 text-sm mt-4'>

                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md '
                            name='apartment'
                            id='apartment'
                            type='text'
                            placeholder='apartment, suite, unite ets (optional)'

                        />
                    </div>
                    <div className='space-y-1 text-sm mt-6'>
                        <label htmlFor='city' className='block text-gray-600'>
                            Town / City
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md '
                            name='city'
                            id='city'
                            type='text'
                            placeholder=''
                            required
                        />
                    </div>

                    <div className='space-y-1 text-sm'>
                        <label htmlFor='description' className='block text-gray-600'>
                            Description
                        </label>

                        <textarea
                            id='description'
                            className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-cyan-300 focus:outline-cyan-500 '
                            name='description'
                        ></textarea>
                    </div>




                </div>
                <div className="w-2/5">
                    <div className='mt-10 bg-white border-2 p-6'>
                        <div className='mt-2'>
                            <p className='text-sm text-gray-500'>
                                Total Price: $ {orderInfo?.totalPrice}
                            </p>
                        </div>
                        <hr className='mt-8 ' />
                        <h2 className='font-semibold'>Payment Method</h2>
                        <h2>Cash on delivery</h2>
                    </div>

                    <button
                        type='submit'
                        className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
                    >
                        {loading ?
                            <TbFidgetSpinner className='animate-spin m-auto' />
                            : 'Place Order'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DeliveryAddress;