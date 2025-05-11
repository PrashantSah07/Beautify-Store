import React, { useState, useEffect, useRef } from 'react';
import useFetch from '../Hooks/useFetch';
import ProductCard from '../components/ProductCard';
import SubNavbar from '../components/SubNavbar';
import Contact from '../components/Contact'
import LoadingEffect from '../components/LoadingEffect';
import Accordion from '../components/Accordion';
import { GoSearch } from "react-icons/go";

const Eyeshadow = () => {

    const images = [
        { src: 'https://img.freepik.com/premium-vector/product-with-its-powder-texture-3d-illustration_317810-588.jpg?uid=R167577231&ga=GA1.1.25709270.1745646915&semt=ais_hybrid&w=740' },
        { src: 'https://img.freepik.com/free-vector/eyeshadow-kit-mockup-case-with-paint-samples-vinous-pink-brown-vanilla_33099-1680.jpg?uid=R167577231&ga=GA1.1.25709270.1745646915&semt=ais_hybrid&w=740' },
        { src: 'https://img.freepik.com/premium-photo/set-multicolored-eyeshadow-pink-background-copy-space-text_528985-7621.jpg?uid=R167577231&ga=GA1.1.25709270.1745646915&semt=ais_hybrid&w=740' },
        { src: 'https://img.freepik.com/free-photo/flat-lay-palettes-lipsticks-plain-background_23-2148306694.jpg?uid=R167577231&ga=GA1.1.25709270.1745646915&semt=ais_hybrid&w=740' },
        { src: 'https://img.freepik.com/free-photo/close-up-hand-holding-brush_23-2148978131.jpg?uid=R167577231&ga=GA1.1.25709270.1745646915&semt=ais_hybrid&w=740' }
    ]

    const [found, setFound] = useState(false);
    const inputRef = useRef(null);
    const brandRef = useRef(null);
    const categoryRef = useRef(null);
    const tagListRef = useRef(null);
    const [priceRange, setPriceRange] = useState(65);
    const [eyeshadow, setEyeshadow] = useState([]);
    const { data, loading, error } = useFetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow');

    useEffect(() => {
        setEyeshadow(data)
    }, [data]);

    const brands = ["sally b's skin yummies", 'zorah biocosmetiques', 'alva', 'rejuva minerals', 'marienatie', 'lotus cosmetics usa', 'nyx', 'clinique', 'dior', 'iman', 'smashbox', 'covergirl', 'cargo cosmetics', 'maybelline', 'sante', 'physicians formula', 'e.l.f.', 'revlon', 'almay', "l'oreal", 'pure anada', 'milani', 'marcelle', 'pacifica', 'dr. hauschka', 'wet n wild', 'mistura'];

    const category = ['palette', 'cream', 'pencil'];

    const tag_list = ['Canadian', 'Vegan', 'Non-GMO', 'Gluten Free', 'Natural', 'purpicks', 'Organic', 'USDA Organic', 'EWG Verified', 'Hypoallergenic', 'No Talc', 'EcoCert'];

    function filterByName() {
        setEyeshadow(
            data.filter(e =>
                e.name.toLowerCase().includes(String(inputRef.current.value).toLowerCase())
            )
        );
        if (eyeshadow.length == 0) {
            setFound(true);
        } else {
            setFound(false);
        }
    }

    function searchFilter() {
        const filtered = data.filter(item => {
            const matchBrand = brandRef.current.value ? item.brand?.toLowerCase() === brandRef.current.value.toLowerCase() : true;
            const matchCategory = categoryRef.current.value ? item.category?.toLowerCase() === categoryRef.current.value.toLowerCase() : true;
            const matchTagList = tagListRef.current.value
                ? item.tag_list?.some(tl => tl.toLowerCase() === tagListRef.current.value.toLowerCase())
                : true;
            const matchPrice = item.price <= priceRange;
            return matchBrand && matchCategory && matchTagList && matchPrice;
        });

        setEyeshadow(filtered);

        if (filtered.length == 0) {
            setFound(true);
        } else {
            setFound(false);
        }
    }

    function clearFilter() {
        setEyeshadow(data);
        setFound(false);
        inputRef.current.value = '';
        brandRef.current.value = '';
        categoryRef.current.value = '';
        tagListRef.current.value = '';
        setPriceRange(65);
    }

    return (
        <div className='max-w-[2000px] mx-auto '>
            <SubNavbar />
            <Accordion accordionCount={5} image={images} />
            <div className='lg:px-20 sm:px-10 px-5 py-10 flex flex-col gap-10'>
                <h2 className='text-3xl font-semibold'>Eyeshadow Products</h2>

                <div className='flex justify-center items-center gap-3 flex-wrap'>
                    <div className='flex justify-center items-center relative'>
                        <input className='px-2 py-2 pr-13 rounded-lg w-[300px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400' ref={inputRef} type="search" placeholder='Search Product By Name' onChange={filterByName} />
                        <button className='absolute right-[0px] p-[7px] px-[10px] border-[#0000003d] rounded-tr-lg rounded-br-lg bg-gray-100'><GoSearch size={25} /></button>
                    </div>
                    <select className='px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400' ref={brandRef}>
                        <option value="" disabled selected hidden >Search by brands</option>
                        <option value="">All</option>
                        {brands.map(function (e, i) {
                            return <option key={i} value={e}>{e}</option>
                        })}
                    </select>
                    <select className='px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400' ref={categoryRef}>
                        <option value="" disabled selected hidden >Search by category</option>
                        <option value="">All</option>
                        {category.map(function (e, i) {
                            return <option key={i} value={e}>{e}</option>
                        })}
                    </select>
                    <div className='flex justify-center items-center px-2 py-2 rounded-lg shadow-sm'>
                        <input type="range" min="0" max="65.0" value={priceRange} onChange={(e) => setPriceRange(Number(e.target.value))} />
                        <span className="ml-2">$0.0 - ${priceRange}.0</span>
                    </div>
                    <select className='px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400' ref={tagListRef}>
                        <option value="" disabled selected hidden >Search by tag list</option>
                        <option value="">All</option>
                        {tag_list.map(function (e, i) {
                            return <option key={i} value={e}>{e}</option>
                        })}
                    </select>
                    <div className='flex gap-3' >
                        <button className='px-5 py-2 bg-blue-500 text-white rounded-lg' onClick={searchFilter}>Filter</button>
                        <button className='px-5 py-2 bg-gray-400 text-white rounded-lg' onClick={clearFilter}>Clear</button>
                    </div>
                </div>

                {found && <h1 className='text-4xl text-red-500 text-center font-semibold'>Not Found</h1>}

                {loading && <LoadingEffect loopCount={20} />}
                {error && <h2 className='text-center text-red-500 font-medium text-4xl'>{error.message}</h2>}
                <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center gap-7'>
                    {eyeshadow.map(function (e) {
                        return <ProductCard key={e.id} id={e.id} image={e.api_featured_image} category={e.category} name={e.name} desc={e.description} price={e.price} rating={e.rating} product_colors={e.product_colors} />
                    })}
                </div>
            </div>
            <Contact />
        </div>
    );
};

export default Eyeshadow;
