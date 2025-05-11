import React from 'react'

const FeaturedProductsBox = ({ imgsrc, productType, description }) => {
    return (
        <div className='flex flex-col sm:flex-row lg:items-start items-center lg:gap-2 gap-1 cursor-pointer lg:p-5 p-3 rounded-xl shadow' onClick={function () {
            window.scrollTo({ top: 0 });
        }}>

            <img className='lg:w-[200px] w-[150px] lg:h-[150px] h-[100px] object-contain px-5 py-2' src={imgsrc} alt="" />
            <div className='flex flex-col'>
                <p className='font-semibold'>{productType}</p>
                <p className='text-gray-600 hidden lg:flex'>{description}</p>
            </div>

        </div>
    )
}

export default FeaturedProductsBox
