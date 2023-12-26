import React from 'react'
import Heor_img from "../assest/img/White Green Shadow Minimalist Natural Skincare Beauty Product Features Instagram Post.png"
import ImageGallery from "react-image-gallery";


const images = [
    {
      original: Heor_img,
      thumbnail: Heor_img,
    },
    {
        original: Heor_img,
        thumbnail: Heor_img,
      }

]
function Hero() {
  return (
        // {/* <ImageGallery items={images} /> */}
    <div className='w-full  mb-10 pb-10 md:flex overflow-hidden justify-between items-center h-[60vh] bg-gradient-to-r from-lime-200 to-lime-50 ... '>
        <div className='md:w-1/2'>
        {/* <ImageGallery items={images} /> */}
            <img src={Heor_img} alt="heroImag" className='object-cover bg-blend-multiply rounded-br-full' />
        </div>
        <div className='md:w-1/2 text-4xl text-amber-800 sepia-0 tracking-wide leading-relaxed font-extrabold align-middle p-10 from-stone-700 text'>
            <div className='text-brown-200 '>
                <h1 className='text-3xl text-lime-900'>30% discount</h1>
            <h1>We belive their is a <span className="underline decoration-green-500 p-2">Better</span> Way.</h1>
            <p>We believe you deserve  <span className="underline decoration-green-500 p-2">Better.</span></p>
            </div>
        </div>
    </div>
  )
}

export default Hero