import React, { useEffect,useState } from 'react'
import Navbar from '../Components/Navbar'
import Navigation from '../Components/Navigation'



import { MdAdd, MdAddCircleOutline, MdEditNote } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
export default function Dashboard() {
  const navigator=useNavigate()
  const [width,setWidth]=useState()
  useEffect(()=>{setWidth(window.innerWidth)},[])
  return (
    <div className="row ">
      <Navigation />
      <Navbar />

      <div class="w-full min-h-screen flex flex-col items-center justify-center bg-white bg-pink-200 md:px-24 dark:bg-gray-900">

        {/**Navigation */}
        <div className="w-full md:w-1/2 my-10 md:mt-20" >
          <h2 className='mt-4 text-xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white'>My <span className="text-primary-600 dark:text-primary-500">Plugins</span> </h2>
          <h2 className='mt-4 text-md font-medium text-center leading-none tracking-tight text-gray-600 dark:text-gray-600'>Plugins that are currently on my Dashboard </h2>
        </div>

        {/*<div className='grid grid-cols-1 mb-20 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div class="w-full m-4 min-w-xs max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
            <div className="w-full flex flex-col items-center justify-center">
                <h5 class="text-xl my-5 font-semibold tracking-tight text-gray-900 dark:text-gray-300">MarketPlace</h5>
                <MdEditNote size="200" className='text-gray-300 my-5 dark:text-gray-600'/>
            </div>
          </div>

        </div> */}
        {width <= 600 &&  <div className='flex z-10 md:hidden justify-center w-screen h-20 bg-gray-100 dark:bg-slate-800 fixed top-0' style={{alignItems:"center"}}>
          <img width="50px" height="50px" src='https://i.postimg.cc/hGqFHfxB/Beige-Simple-One-Line-Butterfly-Events-Logo-removebg-preview.png' onClick={() => navigator("/")}/>
          <h2 className='text-xl font-bold text-black font-title dark:text-gray-100'><span className='text-primary-500'>BULDR.</span> Dashboard</h2>
        </div>}
    

        
      </div>


    </div>
  )
}
