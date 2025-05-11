import React, { useState } from 'react'
import leaves from '../assets/leaves.png'

const Navbar = () => {
    const [show, setShow] = useState(false);
    return (
        <div className='flex justify-between sticky top-0 z-20 bg-transparent'>
            <h1 className='beautify text-4xl font-bold'>Beautify</h1>
            <ul className='hidden md:flex gap-6 font-semibold text-[18px] relative z-20'>
                <a className='h-fit' href="#"><li><button className='text-white'>Home</button></li></a>
                <a className='h-fit' href="#about"><li><button className=''>About</button></li></a>
                <a className='h-fit' href="#services"><li><button className=''>Services</button></li></a>
                <a className='h-fit' href="#contact"><li><button className=''>Contact Us</button></li></a>
            </ul>
            <div className={`flex flex-col ${show ? 'gap-0' : 'gap-1'} w-fit p-1 z-40`} onClick={function () {
                setShow(!show);
            }}>
                <span className={`bg-black h-1 w-5 md:hidden flex duration-75 ${show && 'rotate-45 absolute'}`}></span>
                {!show && <span className='bg-black h-1 w-5 md:hidden flex'></span>}
                <span className={`bg-black h-1 w-5 md:hidden flex duration-75 ${show && '-rotate-45'}`}></span>
            </div>

            <div className={`flex md:hidden h-[100vh] w-[100vw] justify-end items-center fixed top-0 right-0 ${show ? 'translate-x-[0%]' : 'translate-x-[100%]'} duration-300`} onClick={function () {
                setShow(false);
            }}>
                <ul className='flex flex-col justify-center items-center gap-6 font-semibold text-[18px] relative z-20 border w-[80%] h-full bg-gradient-to-r from-[#a0adcd] to-[#b0bcd8] shadow-2xl' onClick={function (e) {
                    e.stopPropagation();
                }}>
                    <img className='absolute max-w-[200px] right-0 bottom-0' src={leaves} alt="leaves" />
                      <img className='absolute max-w-[200px] left-0 top-0 rotate-180' src={leaves} alt="leaves" />
                    <a className='h-fit' href="#" onClick={function () {
                        setShow(false);
                    }}><li><button className='text-white text-[20px]'>Home</button></li></a>
                    <a className='h-fit' href="#about" onClick={function () {
                        setShow(false);
                    }}><li><button className=' text-[20px]'>About</button></li></a>
                    <a className='h-fit' href="#services" onClick={function () {
                        setShow(false);
                    }}><li><button className=' text-[20px]'>Services</button></li></a>
                    <a className='h-fit' href="#contact" onClick={function () {
                        setShow(false);
                    }}><li><button className=' text-[20px]'>Contact Us</button></li></a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
