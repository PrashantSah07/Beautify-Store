import React, { useContext } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { AddToCartContext } from '../context/addToCardContext';

const SubNavbar = () => {
    const { cartItems } = useContext(AddToCartContext);
    return (
        <div className='flex justify-between  items-center sticky top-0 bg-black text-white lg:px-20 sm:px-10 px-5 py-3 z-100'>
            <h1 className='beautify text-4xl font-bold'>Beautify</h1>
            <div className='flex justify-centeri items-center sm:gap-5 gap-2.5'>
                <Link to='/'><button className='bg-blue-500 px-3 py-1.5 rounded-sm'>Home</button></Link>
                <Link to='/cart' className='relative'>
                    <button className='bg-blue-500 px-3 py-1.5 rounded-sm flex justify-center items-center gap-3'><FiShoppingCart /> Cart</button>
                    {cartItems.length > 0 &&
                        <span className='absolute -right-3 -top-1 bg-white text-black rounded-full w-[20px] h-[20px] text-[14px] font-semibold flex justify-center items-center'>{cartItems.length}</span>}
                </Link>
            </div>
        </div>
    )
}

export default SubNavbar
