import React from 'react'
import FeaturedProductsBox from './FeaturedProductsBox'
import leafs from '../assets/leafs.png'
import blush from '../assets/blush.webp'
import bronzer from '../assets/bronzer.png'
import eyebrow from '../assets/eyebrow.png'
import eyeliner from '../assets/eyeliner.webp'
import eyeshadow from '../assets/eyeshadow.webp'
import foundation from '../assets/foundation.jpeg'
import lip_liner from '../assets/lip_liner.png'
import lipstick from '../assets/lipstick.webp'
import mascara from '../assets/mascara.webp'
import nailpolish from '../assets/nailpolish.webp'
import { Link } from 'react-router-dom'

const FeaturedProducts = () => {

  const product = [
    {
      imgsrc: blush,
      product_type: 'Blush',
      description: 'Blush is a cosmetic product used to add color and warmth to the cheeks, enhancing facial features and giving a healthy, radiant look.',
      route: 'blush',
    },
    {
      imgsrc: bronzer,
      product_type: 'Bronzer',
      description: 'Bronzer adds warmth and a sun-kissed glow to the face. It enhances natural contours and gives a radiant, sculpted look.',
      route: 'bronzer',
    },
    {
      imgsrc: eyebrow,
      product_type: 'Eyebrow',
      description: 'Eyebrow products define and shape the eyebrows, enhancing facial features. They come in various forms like pencils, powders, and gels.',
      route: 'eyebrow',
    },
    {
      imgsrc: eyeliner,
      product_type: 'Eyeliner',
      description: 'Eyeliner defines the eyes by applying color along the eyelash line. It enhances eye shape and adds intensity to the look.',
      route: 'eyeliner',
    },
    {
      imgsrc: eyeshadow,
      product_type: 'Eyeshadow',
      description: 'Eyeshadow is a cosmetic applied on the eyelids to add color, depth, and dimension. It comes in various textures like powder, cream, and gel.',
      route: 'eyeshadow',
    },
    {
      imgsrc: foundation,
      product_type: 'Foundation',
      description: 'Foundation is a makeup product used to create an even skin tone, covering imperfections and providing a smooth base for other makeup. It comes in various forms like liquid, powder, and cream.',
      route: 'foundation',
    },
    {
      imgsrc: lip_liner,
      product_type: 'Lipliner',
      description: 'Lip liner is used to define and shape the lips, preventing lipstick from feathering and enhancing lip contours for a more defined look.',
      route: 'lipliner',
    },
    {
      imgsrc: lipstick,
      product_type: 'Lipstick',
      description: 'Lipstick adds color and texture to the lips, available in various finishes like matte, gloss, and satin, enhancing overall makeup.',
      route: 'lipstick',
    },
    {
      imgsrc: mascara,
      product_type: 'Mascara',
      description: 'Mascara is applied to eyelashes to darken, lengthen, and volumize them, enhancing the eyes for a more dramatic look.',
      route: 'mascara',
    },
    {
      imgsrc: nailpolish,
      product_type: 'Nail polish',
      description: 'Nail polish is applied to nails to add color, shine, and protection, available in various finishes like glossy, matte, and glitter.',
      route: 'nailpolish',
    }
  ]

  return (
    <div className='lg:px-20 md:px-10 px-5 flex flex-col justify-center items-center gap-20 lg:pt-30 pt-15 pb-20 relative overflow-hidden'>

      <h1 className='text-4xl font-bold relative z-1 text-center'>Our Featured Products</h1>
      <img className='lg:w-[450px] sm:w-[300px] w-[250px] absolute -left-15 lg:-top-10 -top-5 ' src={leafs} alt="leafs" />
      <div className='grid grid-cols-2 gap-5 '>
        {product.map(function (e, i) {
          return <Link to={`${e.route}`} key={i}><FeaturedProductsBox imgsrc={e.imgsrc} productType={e.product_type} description={e.description} /></Link>
        })}


      </div>

    </div>
  )
}

export default FeaturedProducts
