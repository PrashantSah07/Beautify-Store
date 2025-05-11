import React, { useContext } from 'react';
import { AddToCartContext } from '../context/addToCardContext';
import { Link } from 'react-router-dom';
import SubNavbar from '../components/SubNavbar';
import { AiOutlineDelete } from "react-icons/ai";
import Contact from '../components/Contact';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useContext(AddToCartContext);

    const total = cartItems.reduce(
        (acc, item) => acc + (parseFloat(item.price || 0) * item.quantity),
        0
    ).toFixed(2);

    if (cartItems.length === 0) {
        return (
            <div className='max-w-[2000px] mx-auto'>
                <SubNavbar />
                <div className="h-[40vh] flex flex-col justify-center items-center text-gray-700">
                    <h1 className="text-3xl font-bold mb-4 text-center">Your Cart is Empty 🛒</h1>
                    <Link to="/blush" className="text-blue-600 bg-blue-500 px-5 py-2 text-white font-semibold rounded-lg">Go Shopping</Link>
                </div>
                <Contact />
            </div>
        );
    }

    return (
        <div className='max-w-[2000px] mx-auto'>
            <SubNavbar />
            <div className="py-10 xl:mx-30 lg:mx-20 sm:mx-10 mx-5">
                <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
                <div className='md:flex hidden'>
                    <table className="min-w-full border border-gray-200 rounded overflow-hidden">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-left p-3">Image</th>
                                <th className="text-left p-3">Name</th>
                                <th className="text-left p-3">Brand</th>
                                <th className="text-left p-3">Category</th>
                                <th className="text-left p-3">Price</th>
                                <th className='text-left p-3'>Quantity</th>
                                <th className="text-left p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id} className="border-t">
                                    <td className="p-3">
                                        <img src={item.api_featured_image} alt={item.name} className="w-16 h-16 rounded object-cover" />
                                    </td>
                                    <td className="p-3">{item.name}</td>
                                    <td className="p-3 capitalize">{item.brand || 'N/A'}</td>
                                    <td className="p-3 capitalize">{item.category || 'N/A'}</td>
                                    <td className="p-3 font-semibold">  ${(parseFloat(item.price) * item.quantity).toFixed(2)}</td>
                                    <td className="p-3">
                                        <div className="flex items-center gap-2">
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-300">-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-300">+</button>
                                        </div>
                                    </td>
                                    <td className="p-3">
                                        <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" title='delete'>
                                            <AiOutlineDelete size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="md:hidden space-y-4">
                    {cartItems.map((item) => (
                        <div key={item.id} className="border border-gray-200 rounded p-3 shadow-sm">
                            <div className="flex gap-4 items-center">
                                <img src={item.api_featured_image} alt={item.name} className="w-16 h-16 rounded object-cover" />
                                <div>
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="capitalize text-sm text-gray-600">{item.brand || 'N/A'} • {item.category || 'N/A'}</p>
                                    <p className="text-sm font-medium mt-1">Price: ${(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                                <div className="flex items-center gap-2">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-300">-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-300">+</button>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" title="delete">
                                    <AiOutlineDelete size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 mt-20 justify-center gap-20">
                    <div className='flex flex-col gap-5 w-full'>
                        <h1 className='font-semibold text-3xl'>Cart Totals</h1>
                        <div className='w-full flex flex-col gap-5'>
                            <div className='flex justify-between items-center border-b-2 px-2 pb-3 border-[#00000077]'>
                                <p>Subtotal</p>
                                <p>${total}</p>
                            </div>
                            <div className='flex justify-between items-center border-b-2 px-2 pb-3 border-[#00000077]'>
                                <div className='flex justify-center items-center gap-3'>
                                    <p>Shipping Fee</p>
                                    {total < 30 && <span className='text-[12px]'>(*Free shipping on orders over $30)</span>}
                                </div>
                                {total >= 30 ? <p className='text-green-600 font-semibold'>Free</p> : '$5'}
                            </div>
                            <div className='flex justify-between items-center border-b-2 px-2 pb-3 border-[#00000077]'>
                                <p>10% Discount</p>
                                <p className=''>${(total / 10).toFixed(2)}</p>
                            </div>
                            <div className='flex justify-between items-center border-b-2 px-2 pb-3 border-[#00000077]'>
                                <p className='font-semibold'>Total Amount</p>
                                {total >= 30 ? <p className='font-bold'>${(total - total / 10).toFixed(2)}</p> : <p className='font-bold'>${((total - total / 10) + 5).toFixed(2)}</p>}
                            </div>
                            <button className='bg-red-500 px-5 py-2 text-white rounded-lg mt-10 hover:bg-red-600 duration-200'>PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                    <div className='flex flex-col md:gap-2 gap-5 md:w-full sm:w-[70%] w-[90%]'>
                        <h2 className=''>*if you have a promo code, Enter it here</h2>
                        <div className='flex sm:gap-0 gap-1 sm:flex-row flex-col  relative items-center'>
                            <input type="text" placeholder='Enter promo code' className='rounded-lg bg-gray-100 px-3 py-2 xl:pr-30 sm:pr-20 sm:max-w-[90%] max-w-[100%] w-full border focus:outline-none' />
                            <button className='bg-black text-white px-5 py-[9px] rounded-lg sm:w-fit w-full sm:absolute right-0 top-0'>Submit</button>
                        </div>
                    </div>

                </div>
            </div>
            <Contact />
        </div>
    );
};

export default Cart;
