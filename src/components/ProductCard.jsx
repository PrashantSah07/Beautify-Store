import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ id, image, category, name, desc, price, rating, product_colors }) => {
    return (
        <Link to={`/product/${id}`}>
            <div className='flex flex-col justify-center items-center gap-2 p-4 rounded shadow-md text-center bg-white text-black cursor-pointer' onClick={function () {
                window.scrollTo({ top: 0 });
            }}>
                <img className='max-w-[200px] max-h-[200px] rounded' src={image} alt={name} />
                <p>{category}</p>
                <p className='font-semibold'>{name}</p>
                <p className='text-sm text-gray-600 line-clamp-2'>{desc}</p>
                <span>$: {price}</span>
                {rating && <span>Rating: {rating}</span>}
                <div className='flex gap-1 flex-wrap'>
                    {product_colors.map(function (color, index) {
                        return <span
                            key={index}
                            style={{ backgroundColor: color.hex_value }}
                            className="h-[20px] w-[20px] rounded-full border border-[#0000002f]"
                            title={color.colour_name}>
                        </span>
                    })}
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
