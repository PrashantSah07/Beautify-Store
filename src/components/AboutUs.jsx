import React from 'react'
import twocream from '../assets/two-cream.png'
import girl from '../assets/girl.png'
import goldenBall from '../assets/goldenBall.png'
import ball from '../assets/3dBall.png'
import whiteBall from '../assets/whiteBall.png'
import minimalistGoldLeaves from '../assets/minimalist-gold-leaves.png'

const AboutUs = () => {
    return (
        <div id='about' className='flex sm:flex-row flex-col gap-10 sm:gap-0 justify-center items-center lg:px-20 md:px-10 px-5 lg:py-43 md:py-30 sm:py-20 pt-20 bg-gradient-to-r from-[#A0ADCD] to-[#D4DCF0] relative lg:mt-20 mt-30 '>
            <img className='max-w-[450px] absolute left-0 lg:flex hidden' src={twocream} alt="two-cream" />
            <div className='flex flex-col justify-center lg:items-center sm:items-start items-center  gap-10 lg:w-[35%] w-[100%] relative z-1'>
                <div className='relative'>
                    <h1 className='md:text-6xl sm:text-[55px] text-5xl font-semibold text-center relative z-1'>About Us</h1>
                    <img className='absolute max-w-[90px] -left-10 top-2' src={whiteBall} alt="whiteBall" />
                </div>
                <p className='text-gray-800 font-medium text-[18px] lg:text-center sm:text-left text-center lg:w-full sm:w-[60%] w-[90%]'>
                    It is a long established fact that a reader will be distracted by the readable content nf a nano whan Innkinn at ite launtlt Tho point of using.
                </p>
                <button className='bg-[#111633] text-white font-medium px-5 py-2 rounded-sm'>Read More</button>
            </div>
            <img className='lg:max-w-[400px] md:max-w-[350px] sm:max-w-[300px] max-w-[200px] sm:absolute sm:right-0 bottom-0' src={girl} alt="girl" />
            <img className='absolute max-w-[60px] md:left-90 left-50 lg:top-30 md:top-10 top-5' src={goldenBall} alt="golden-ball" />
            <img className='absolute lg:max-w-[140px] max-w-[70px] w-full lg:left-125 left-10 lg:bottom-5 bottom-10' src={ball} alt="3dball" />
            <img className='absolute lg:max-w-[180px] max-w-[120px] right-0 lg:-top-50 -top-30' src={minimalistGoldLeaves} alt="minimalist-gold-leaves" />
        </div>
    )
}

export default AboutUs
