import React from 'react'
import '../pages/Login.css'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div className='w-full md:flex flex-row'>
      <div className='md:w-2/3 h-[100vh] bg-gray-200 flex flex-col justify-center items-center md:p-10'>
      <Link to="/" className='mb-10 text-4xl align-middle'><span className='text-green-400'>m</span>izan.com</Link>
        <form className='bg-white shadow-sm p-10 mt-50 md:w-1/2 w-full'>
         
          
          <div className='mb-10'>
            <label htmlFor="accountID" className='mb-2 text-gray-800'>Account ID: </label><br />
            <input type="text" name="accountID"  placeholder='account ID' className='p-2 ring-1 ring-green-500 rounded-sm w-full'/>
          </div>

          <div>
            <label htmlFor="accountID" className='mb-2 text-gray-800'>Password: </label><br />
            <input type="text" name="accountID"  placeholder='*********' className='p-2 ring-1 ring-green-500 rounded-sm w-full'/>
          </div>

          <div>
            <button className='bg-green-400 pl-10 pr-10 pt-5 pb-5 w-full mt-10 rounded-lg hover:ring-2 ring-green-500 hover:bg-green-300'>Submit</button>
          </div>

          <p className='text-gray-400 mt-10'>Not yet register? <Link to="/register" className='text-green-400'>register here</Link></p>
        </form>
      </div>
      <div className='md:w-1/3 bg-green-700 pattern  h-[100vh] '>

      </div>
      
    </div>
  ) 
}

export default Login