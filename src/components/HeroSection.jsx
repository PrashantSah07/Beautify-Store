import React from 'react'
import '../App.css'
import Navbar from './Navbar'
import Ellipse from '../assets/Ellipse.png'
import facewash from '../assets/facewash.png'
import ringcircle from '../assets/ring-circle.png'
import facewashbottle from '../assets/facewash-bottle.png'
import facewashbottle2 from '../assets/facewash-bottle2.png'
import flower from '../assets/flower.png'
import flower2 from '../assets/flower2.png'
import Ball from '../assets/3dBall.png'
import whiteBall from '../assets/whiteBall.png'
import goldenBall from '../assets/goldenBall.png'

const HeroSection = () => {
    return (
        <div className='bg-gradient-to-r from-[#a0adcd] to-[#d0d7e9] py-6 sm:px-10 px-5 flex flex-col gap-32 relative pb-50 lg:overflow-hidden overflow-x-hidden'>
            <Navbar />
            <div className='flex justify-between'>
                <div className='flex flex-col lg:gap-20 gap-15 w-[50%] relative z-10 lg:top-0 sm:top-160 top-110'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='lg:text-8xl sm:text-7xl text-6xl font-light'>Enhance</h1>
                        <h1 className='lg:text-8xl sm:text-7xl text-6xl font-semibold'>Your Natural</h1>
                        <h1 className='lg:text-8xl sm:text-7xl text-6xl font-semibold'>Radience</h1>
                    </div>
                    <button className='bg-black w-fit text-white px-4 py-2 rounded-sm text-[17px]'>Order Now</button>
                    <img className='max-w-[40px] absolute sm:-left-8 left-0 -top-20 z-1' src={goldenBall} alt="3DBall" />
                    <img className='max-w-[100px] absolute -left-10 -bottom-20 z-1' src={whiteBall} alt="3DBall" />
                </div>

                <div className='absolute top-0 right-0 w-[50%] h-[100%] bg-no-repeat bg-cover' style={{ backgroundImage: `url(${Ellipse})` }}>
                    <img className='sm:max-w-[1000px] max-w-[800px]  absolute -right-50 bottom-30' src={ringcircle} alt="ringcircle" />
                    <img className='sm:max-w-[600px]  max-w-[450px] absolute right-20 sm:bottom-10 bottom-50 z-1' src={facewash} alt="facewash" />
                    <img className='sm:max-w-[130px]  max-w-[90px] absolute sm:right-55 right-50 sm:bottom-10 bottom-50 z-1' src={facewashbottle} alt="facewashbottle" />
                    <img className='sm:max-w-[450px]  max-w-[300px] absolute  sm:right-10 right-20 sm:-bottom-5 bottom-45' src={facewashbottle2} alt="facewashbottle2" />
                    <img className='sm:max-w-[200px]  max-w-[150px] absolute right-0 sm:-bottom-20 bottom-20 z-1' src={flower} alt="flower" />
                    <img className='sm:max-w-[200px]  max-w-[90px] absolute sm:right-80 right-68 sm:bottom-30 bottom-60 z-1' src={flower2} alt="flower" />
                    <img className='sm:w-[130px] w-[100px] absolute right-117 top-10' src={Ball} alt="3DBall" />
                    <img className='sm:w-[130px] w-[100px] absolute right-5 top-5' src={whiteBall} alt="3DBall" />
                    <img className='sm:w-[130px] w-[100px] absolute right-5 top-5' src={whiteBall} alt="3DBall" />
                    <img className='w-[70px] absolute right-117 sm:bottom-15 bottom-50 z-1' src={Ball} alt="3DBall" />
                    <img className='sm:max-w-[120px] w-[100px] absolute right-170 bottom-20 z-1' src={goldenBall} alt="3DBall" />
                </div>

            </div>

        </div>
    )
}

export default HeroSection
