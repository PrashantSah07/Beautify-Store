import React from 'react'

const LoadingEffect = ({ loopCount }) => {
    let card = new Array(loopCount).fill(null);
    return (
        <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
            {card.map(function (e, i) {
                return <div key={i} className='flex flex-col justify-center items-center p-5 gap-3 shadow-sm '>
                    <div className='bg-gray-200 h-50 w-50 animate-pulse'></div>
                    <p className='bg-gray-200 w-[40%] h-3 animate-pulse' ></p>
                    <p className='bg-gray-200 w-[80%] h-3 animate-pulse' ></p>
                    <div className='flex flex-col gap-1 w-full justify-center items-center'>
                        <p className='bg-gray-200 w-[70%] h-3 animate-pulse' ></p>
                        <p className='bg-gray-200 w-[50%] h-3 animate-pulse' ></p>
                    </div>
                    <span className='bg-gray-200 w-[20%] h-3 animate-pulse' ></span>
                    <div className='flex gap-2 w-full justify-center items-center'>
                        <span className='bg-gray-200 w-[20px] h-5 rounded-full animate-pulse' ></span>
                        <span className='bg-gray-200 w-[20px] h-5 rounded-full animate-pulse' ></span>
                        <span className='bg-gray-200 w-[20px] h-5 rounded-full animate-pulse' ></span>
                        <span className='bg-gray-200 w-[20px] h-5 rounded-full animate-pulse' ></span>
                        <span className='bg-gray-200 w-[20px] h-5 rounded-full animate-pulse' ></span>
                    </div>
                </div>
            })}
        </div>
    )
}

export default LoadingEffect
