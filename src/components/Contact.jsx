import React from 'react'
import '../App.css'
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import img from '../assets/img.png'
import img2 from '../assets/img2.png'
import leaves from '../assets/leaves.png'

const Contact = () => {
    return (
        <div id='contact' className=' flex flex-col gap-20 lg:px-20 md:px-10 px-5 sm:pt-20 pt-10 sm:pb-10 pb-20 bg-gradient-to-r from-[#A0ADCD] to-[#D4DCF0] lg:mt-35 mt-20 relative'>

            <div className='flex flex-col sm:flex-row justify-between sm:gap-0 gap-5'>
                <h1 className='beautify text-4xl font-bold'>Beautify</h1>
                <div className='flex sm:justify-center items-center gap-8'>
                    <h3 className='text-[18px] font-medium'>Follow us</h3>
                    <div className='flex justify-center items-center gap-3'>
                        <button><FaFacebook size={25} /></button>
                        <button><FaPinterest size={25} /></button>
                        <button><IoLogoWhatsapp size={25} /></button>
                        <button><AiFillInstagram size={25} /></button>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-0 gap-20 justify-between list-none max-w-[100%]'>
                <div className='flex flex-col gap-3 font-medium text-gray-800'>
                    <h2 className='text-2xl font-semibold'>Explore</h2>
                    <a href="#"><button>Home</button></a>
                    <a href="#about"><button>About</button></a>
                    <a href="#services"><button>Services</button></a>
                    <a href="#contact"><button>Contact Us</button></a>
                </div>
                <div className='flex flex-col gap-3 font-medium text-gray-800'>
                    <h2 className='text-2xl font-semibold '>About US</h2>
                    <li>(456) 789-12301</li>
                    <li>inf0@modrino.co.uk</li>
                    <li>South 13th street</li>
                    <li>New york America</li>
                </div>
                <div className='flex flex-col gap-3 font-medium text-gray-800'>
                    <h2 className='text-2xl font-semibold'>Recent News</h2>
                    <div className='flex items-start gap-3'>
                        <img className='max-w-[70px] w-full' src={img} alt="" />
                        <div className='flex flex-col'>
                            <span>June 14,2024</span>
                            <span className='font-semibold'>Anti-Aging Cream</span>
                        </div>
                    </div>
                    <div className='flex items-start gap-3'>
                        <img className='max-w-[70px] w-full' src={img2} alt="" />
                        <div className='flex flex-col'>
                            <span>June 14,2024</span>
                            <span className='font-semibold'>Night Cream</span>
                        </div>
                    </div>
                </div>
            </div>

            <p className='text-center text-[18px] text-gray-800 font-medium relative z-1'>&copy; 2024 Bake House. All rights reserved</p>
            <img className='md:max-w-[300px] max-w-[200px] absolute right-0 bottom-0' src={leaves} alt="leaves" />

        </div>
    )
}

export default Contact
