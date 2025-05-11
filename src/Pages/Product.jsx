import React, { useContext, useRef, useState } from 'react';
import SubNavbar from '../components/SubNavbar';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import Contact from '../components/Contact';
import { BsSearch } from "react-icons/bs";
import { MdCancelPresentation } from "react-icons/md";
import ProductCard from '../components/ProductCard';
import LoadingEffect from '../components/LoadingEffect';
import LoadingEffect2 from '../components/LoadingEffect2';
import { useNavigate } from 'react-router-dom';
import { AddToCartContext } from '../context/addToCardContext';

const Product = () => {
    const navigate = useNavigate();
    const { addToCart, isInCart } = useContext(AddToCartContext);
    const [zoom, setZoom] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const imgRef = useRef(null);
    const { id } = useParams();
    const { data, loading, error } = useFetch(
        `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
    );

    const product_type = data.product_type;

    const { data: relatedProducts, loading: relatedLoading } = useFetch(
        `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product_type}`
    );

    const limitedRelatedProducts = relatedProducts ? relatedProducts.slice(0, 8) : [];

    const isDataValid = data && Object.keys(data).length > 0;

    return (
        <div className="max-w-[2000px] mx-auto font-sans bg-white min-h-screen">
            <SubNavbar />

            {loading ? (
                <LoadingEffect2 />
            ) : error ? (
                <div className='flex flex-col pt-10 gap-5'>
                    <h2 className="text-center text-red-600 font-bold text-3xl">{error.message}</h2>
                    <div className="relative flex justify-center items-center w-fit mx-auto">
                        <BsSearch size={150} className="text-gray-500 text-6xl " />
                        <MdCancelPresentation size={70} className="text-red-500 text-4xl absolute top-0 right-0 bg-white" />
                    </div>
                </div>
            ) : !isDataValid ? (
                <h1 className="text-center text-2xl font-semibold text-gray-600 py-10">
                    Umm, Product Not Found :(
                </h1>
            ) : (
                <div className="grid md:grid-cols-2 gap-12 lg:px-20 sm:px-10 px-5 md:py-20 py-10 bg-gray-50 rounded-lg">
                    <div className="flex justify-center items-center">
                        <img
                            onMouseEnter={function () {

                            }}
                            src={data.api_featured_image}
                            alt={data.name}
                            className="rounded-xl object-cover w-full max-w-md shadow-md flex lg:hidden"
                        />
                        <div className="relative lg:flex justify-center items-center hidden ">
                            <img
                                ref={imgRef}
                                src={data.api_featured_image}
                                alt={data.name}
                                className="rounded-xl object-cover w-full max-w-md shadow-md"
                                onMouseEnter={() => setZoom(true)}
                                onMouseLeave={() => setZoom(false)}
                                onMouseMove={(e) => {
                                    const rect = imgRef.current.getBoundingClientRect();
                                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                                    setPos({ x, y });
                                }}
                            />
                            {zoom && (
                                <div
                                    className="absolute left-full ml-4 max-w-96 max-h-96 w-full h-full rounded-lg z-50 bg-white shadow-sm"
                                    style={{
                                        backgroundImage: `url(${data.api_featured_image})`,
                                        backgroundSize: '250% 250%',
                                        backgroundPosition: `${pos.x}% ${pos.y}%`,
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                ></div>
                            )}
                        </div>

                    </div>

                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>
                        <p className="text-gray-600 leading-relaxed">
                            {data.description || 'No description available.'}
                        </p>

                        <div className="text-gray-700 space-y-1">
                            <p>
                                <span className="font-semibold">Brand:</span> {data.brand}
                            </p>
                            <p>
                                <span className="font-semibold">Type:</span> {data.product_type}
                            </p>
                            <p>
                                <span className="font-semibold">Category:</span> {data.category || 'No category available'}
                            </p>
                            {data.price && (
                                <p>
                                    <span className="font-semibold">Price:</span> ${data.price}
                                </p>
                            )}
                            {data.rating && (
                                <p>
                                    <span className="font-semibold">Rating:</span> {data.rating}⭐
                                </p>
                            )}
                        </div>

                        <div className='flex gap-1 flex-wrap'>
                            {data.tag_list.map(function (tag, i) {
                                return <span key={i} className='bg-gray-200 px-2 py-1 rounded-lg border text-[14px]'>{tag}</span>
                            })}
                        </div>

                        {data.product_colors?.length > 0 && (
                            <div className="mt-4">
                                <h3 className="font-semibold mb-2">Available Colors:</h3>
                                <div className="flex gap-2 flex-wrap">
                                    {data.product_colors.map((c, i) => (
                                        <div
                                            key={i}
                                            className="tooltip flex"
                                            title={c.colour_name || 'Color'}
                                        >
                                            <span
                                                style={{ backgroundColor: c.hex_value }}
                                                className="h-6 w-6 rounded-full border border-gray-300"
                                            ></span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <button className="bg-blue-500 text-white font-medium text-[18px] px-5 py-2 rounded-sm" onClick={() =>
                            isInCart(data.id) ? navigate('/cart') : addToCart(data)}>
                            {isInCart(data.id) ? "Go to Cart" : "Add to Cart"}
                        </button>
                    </div>
                </div>
            )}

            {relatedProducts && <div className='lg:px-20 sm:px-10 px-5 my-10 flex flex-col gap-10'>
                <h1 className='text-3xl font-semibold'>Related Products</h1>
                {relatedLoading && <LoadingEffect loopCount={8} />}
                <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                    {limitedRelatedProducts.map(function (e) {
                        return <ProductCard key={e.id} id={e.id} image={e.api_featured_image} category={e.category} name={e.name} desc={e.description} price={e.price} rating={e.rating} product_colors={e.product_colors} />
                    })}
                </div>
            </div>}

            <Contact />
        </div>
    );
};

export default Product;
