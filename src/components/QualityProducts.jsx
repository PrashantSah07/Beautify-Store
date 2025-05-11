import React from 'react'
import qualityproducts from '../assets/quality-products.png'
import aloevera from '../assets/aloevera.png'
import organic from '../assets/organic.png'
import jojobaExtract from '../assets/jojoba-extract.png'

const QualityProducts = () => {
    return (
        <div id='services' className='bg-no-repeat bg-cover lg:px-20 md:px-10 px-5 lg:py-20 py-10' style={{ backgroundImage: `url(${qualityproducts})` }}>
            <div className='xl:w-[50%] md:w-[70%] w-full  flex flex-col justify-center items-center gap-7 text-center lg:min-h-[600px] min-h-[500px]'>
                <div className='flex flex-col gap-2'>
                    <h1 className='lg:text-6xl text-5xl font-normal'>Premium</h1>
                    <h1 className='lg:text-6xl text-5xl font-semibold'>Quality Products</h1>
                </div>
                <p className='lg:w-[60%] w-[80%] font-medium text-gray-700 text-[18px]'>It is a long established fact that a reader will be distracted by the readable content of a pagek like readable English.</p>
                <p className='text-[20px]'>What's in it?</p>
                <div className='flex lg:gap-20 sm:gap-10 gap-5'>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <img className='sm:max-w-[60px] max-w-[40px] w-full' src={aloevera} alt="aloevera" />
                        <span className='text-[18px] text-gray-800'>Aloe Vera</span>
                    </div>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <img className='sm:max-w-[60px] max-w-[40px] w-full' src={organic} alt="organic" />
                        <span className='text-[18px] text-gray-800'>Organic</span>
                    </div>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <img className='sm:max-w-[60px] max-w-[40px] w-full' src={jojobaExtract} alt="jojoba-extract" />
                        <span className='text-[18px] text-gray-800'>Jojoba Extract</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QualityProducts
