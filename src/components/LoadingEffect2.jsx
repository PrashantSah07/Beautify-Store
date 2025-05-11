import React from 'react'

const LoadingEffect2 = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 xl:px-50 md:px-20 px-10 py-20 xl:gap-20 gap-10 '>

            <div className='bg-gray-200 xl:w-[90%] sm:w-[80%] w-full h-[400px] rounded-xl animate-pulse mx-auto'>

            </div>
            <div className='flex flex-col gap-2.5 '>
                <h1 className='bg-gray-200 w-[50%] h-[30px] animate-pulse'></h1>
                <p className='bg-gray-200 w-[100%] h-[20px] animate-pulse' ></p>
                <p className='bg-gray-200 w-[100%] h-[20px] animate-pulse' ></p>
                <p className='bg-gray-200 w-[80%] h-[20px] animate-pulse' ></p>
                <p className='bg-gray-200 w-[40%] h-[15px] animate-pulse' ></p>
                <p className='bg-gray-200 w-[30%] h-[15px] animate-pulse' ></p>
                <p className='bg-gray-200 w-[35%] h-[15px] animate-pulse' ></p>
                <p className='bg-gray-200 w-[25%] h-[15px] animate-pulse' ></p>
                <div className='flex flex-col gap-2 mt-5'>
                    <p className='bg-gray-200 w-[20%] h-[15px] animate-pulse' ></p>
                    <div className='flex gap-2'>
                        <p className='bg-gray-200 w-[25px] h-[25px] rounded-full animate-pulse' ></p>
                        <p className='bg-gray-200 w-[25px] h-[25px] rounded-full animate-pulse' ></p>
                        <p className='bg-gray-200 w-[25px] h-[25px] rounded-full animate-pulse' ></p>
                        <p className='bg-gray-200 w-[25px] h-[25px] rounded-full animate-pulse' ></p>
                    </div>
                </div>
                <div className='bg-gray-200 w-[150px] h-[40px] mt-10'>

                </div>
            </div>

        </div>
    )
}

export default LoadingEffect2
