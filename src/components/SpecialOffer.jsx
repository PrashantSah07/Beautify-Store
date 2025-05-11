import React from 'react'
import specialoffer from '../assets/special-offer.png'
import { FaArrowRight } from "react-icons/fa6";
import leafs from '../assets/leafs.png'

const SpecialOffer = () => {
    return (
        <div className='bg-no-repeat bg-cover' style={{ backgroundImage: `url(${specialoffer})` }}>
            <div className='flex flex-col justify-between lg:px-20 md:px-10 px-5 md:py-20 py-10 md:min-h-[780px] min-h-[600px] relative overflow-hidden'>
                <div className='flex flex-col gap-5'>
                    <h1 className='md:text-7xl sm:text-6xl text-[45px] font-semibold'>Special Offer!</h1>
                    <h2 className='md:text-5xl text-4xl font-medium'>30% Discount</h2>
                </div>
                <img className='md:max-w-[500px] max-w-[300px] absolute md:-left-50 -left-20 md:bottom-40 bottom-40 -rotate-5' src={leafs} alt="leafs" />
                <button className='w-fit text-2xl font-medium flex justify-center items-center gap-2'>Order Now <FaArrowRight /></button>
            </div>
        </div>
    )
}

export default SpecialOffer
