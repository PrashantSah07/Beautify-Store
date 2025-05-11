import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './global.css'
import App from './App.jsx'
import Blush from './Pages/Blush.jsx'
import Bronzer from './Pages/Bronzer.jsx'
import Eyebrow from './Pages/Eyebrow.jsx'
import Eyeliner from './Pages/Eyeliner.jsx'
import Eyeshadow from './Pages/Eyeshadow.jsx'
import Foundation from './Pages/Foundation.jsx'
import Lipliner from './Pages/Lipliner.jsx'
import Lipstick from './Pages/Lipstick.jsx'
import Mascara from './Pages/Mascara.jsx'
import Nailpolish from './Pages/Nailpolish.jsx'
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx';
import { AddToCartProvider } from "./context/addToCardContext.jsx";

createRoot(document.getElementById('root')).render(
  <AddToCartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blush" element={<Blush />} />
        <Route path="/bronzer" element={<Bronzer />} />
        <Route path="/eyebrow" element={<Eyebrow />} />
        <Route path="/eyeliner" element={<Eyeliner />} />
        <Route path="/eyeshadow" element={<Eyeshadow />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/lipliner" element={<Lipliner />} />
        <Route path="/lipstick" element={<Lipstick />} />
        <Route path="/mascara" element={<Mascara />} />
        <Route path="/nailpolish" element={<Nailpolish />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </AddToCartProvider>
)

