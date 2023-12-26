import React from 'react'
import product_1 from "../assest/img/hmi.jpg"
import product_2 from "../assest/img/him.jpg"
import product_3 from '../assest/img/jame.png'


function TopProduct() {
  return (
    <div className='flex justify-center items-center md:mt-5'>
        <div className=''>
        <h1 className='text-lg mb-5 text-green-500 font-semibold'>Our Product</h1>
        <div className='md:grid grid-cols-4 gap-8'>
            <div className='col-2 w-64 h-64 p-10 bg-white hover:shadow-lg hover:border-green-200 hover:delay-75 rounded-sm border-gray-100 border-2 object-contain overflow-hidden content-center flex justify-center items-center'>
                <img src={product_2} className='object-fill'/>
            </div>
            <div className='col-2 w-64 h-64 p-10 bg-white hover:shadow-lg hover:border-green-200 hover:delay-75 rounded-sm border-gray-100 border-2 object-contain overflow-hidden content-center flex justify-center items-center'>
                <img src={product_1} className='object-fill'/>
            </div>
            <div className='col-2 w-64 h-64 p-10 bg-white hover:shadow-lg hover:border-green-200 hover:delay-75 rounded-sm border-gray-100 border-2 object-contain overflow-hidden content-center flex justify-center items-center'>
                <img src={product_3} className='object-fill'/>
            </div>
            <div className='col-2 w-64 h-64 p-10 bg-white hover:shadow-lg hover:border-green-200 hover:delay-75 rounded-sm border-gray-100 border-2 object-contain overflow-hidden content-center flex justify-center items-center'>
                <img src={product_2} className='object-fill'/>
            </div>
            <div className='col-2 w-64 h-64 p-10 bg-white hover:shadow-lg hover:border-green-200 hover:delay-75 rounded-sm border-gray-100 border-2 object-contain overflow-hidden content-center flex justify-center items-center'>
                <img src={product_2} className='object-fill'/>
            </div>
            <div className='col-2 w-64 h-64 p-10 bg-white hover:shadow-lg hover:border-green-200 hover:delay-75 rounded-sm border-gray-100 border-2 object-contain overflow-hidden content-center flex justify-center items-center'>
                <img src={product_1} className='object-fill'/>
            </div>
            <div className='col-2 w-64 h-64 p-10 bg-white hover:shadow-lg hover:border-green-200 hover:delay-75 rounded-sm border-gray-100 border-2 object-contain overflow-hidden content-center flex justify-center items-center'>
                <img src={product_3} className='object-fill'/>
            </div>
            <div className='col-2 w-64 h-64 p-10 bg-white hover:shadow-lg hover:border-green-200 hover:delay-75 rounded-sm border-gray-100 border-2 object-contain overflow-hidden content-center flex justify-center items-center'>
                <img src={product_2} className='object-fill'/>
            </div>
            
            
           
        </div>
        </div>
    </div>
  )
}

export default TopProduct