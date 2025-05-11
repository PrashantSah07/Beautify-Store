import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import antiAgingCream from '../assets/anti-aging-cream.png'
import leafs from '../assets/leafs.png'

const AntiAgingCream = () => {
    return (
        <div className='flex lg:flex-row flex-col justify-between items-center lg:px-20 md:px-10 px-5 py-10 text-center relative overflow-hidden'>

            <div className='lg:w-[40%] sm:w-[60%] w-[80%]'>
                <img src={antiAgingCream} className='' alt="anti-aging-cream" />
            </div>
            <div className='lg:w-[50%] sm:w-[80%] w-[100%] flex flex-col justify-between items-center gap-10'>
                <h1 className='text-[40px] font-bold'>Anti-Aging Cream</h1>
                <div className='flex flex-col gap-3 font-medium'>
                    <p>
                        It is a long established fact that a reader will bedistracted by the readable content of a page whenlooking at its layout. The point of using LoremIpsum is that it has a more-or-less
                    </p>
                    <p>
                        It isa ong esta is e act t ata rea erwi eistracted by the readable content of a page whenlooking at its layout. The point of
                    </p>
                </div>
                <button className='flex justify-center items-center font-medium bg-black text-white px-5 py-2 rounded-sm gap-2'>Read More <FaArrowRight /></button>
            </div>
            <img className='absolute top-0 -right-10 md:max-w-[250px] sm:max-w-[200px] max-w-[150px] rotate-180' src={leafs} alt="leafs" />

        </div>
    )
}

export default AntiAgingCream
