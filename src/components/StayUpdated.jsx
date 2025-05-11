import React from 'react'
import beautyCream from '../assets/beauty-cream.png'

const StayUpdated = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row justify-between items-center lg:px-20 md:px-10 px-5 lg:py-20 py-10 lg:gap-0 gap-10'>
            <div className='flex flex-col gap-7 lg:w-[50%]'>
                <h1 className='sm:text-5xl text-[45px] font-semibold leading-15'>Stay Updated</h1>
                <p className='text-[18px] text-gray-800 font-medium'>Subscribe to our newsletter for latest news and blogs and for important information, stay tuned.</p>
                <div className='flex text-[18px] justify-between'>
                    <input className='w-full px-5 focus:outline-none bg-[#efefef] placeholder-gray-800' type="email" placeholder='Enter Your E-mail' />
                    <button className='bg-[#111633] text-white font-medium  px-5 py-3'>Subscribe</button>
                </div>
            </div>
            <div className=''>
                <img src={beautyCream} alt="beauty-cream" />
            </div>
        </div>
    )
}

export default StayUpdated
