import React,{useState,useEffect} from 'react'

export default function InfoBox({data}) {
  const [width, setWidth] = useState(600)
  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])
  return (
    <div>
    {width<=600 && 
    <div className='p-4'>
    <div class="w-full px-5 pb-5 pt-5 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700" style={{justifyContent:"center",alignItems:"center"}}>
       
        <div class="flex flex-col md:flex-row " style={{justifyContent:"space-between"}}>
            <span>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white">Full Name</h5>
            </span>
            <span>
                <p class="text-lg text-left md:text-right tracking-tight text-gray-900 dark:text-white">{data.name}</p>
            </span>
        </div>
        <div class="mt-5 flex flex-col md:flex-row " style={{justifyContent:"space-between"}}>
            <span>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white">Current Designation</h5>
            </span>
            <span>
                <p class="text-lg text-left md:text-right tracking-tight text-gray-900 dark:text-white">{data.designation}</p>
            </span>
        </div>
        <div class="mt-5 flex flex-col md:flex-row " style={{justifyContent:"space-between"}}>
            <span>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white">Current Company</h5>
            </span>
            <span>
                <p class="text-lg text-left md:text-right tracking-tight text-gray-900 dark:text-white">{data.company}</p>
            </span>
        </div>
        <div class="mt-5 flex flex-col md:flex-row " style={{justifyContent:"space-between"}}>
            <span>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white">Email</h5>
            </span>
            <span>
                <p class="text-lg text-left md:text-right tracking-tight text-gray-900 dark:text-white">{data.email}</p>
            </span>
        </div>
        <div class="mt-5 flex flex-col md:flex-row " style={{justifyContent:"space-between"}}>
            <span>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white">Phone Number</h5>
            </span>
            <span>
                <p class="text-lg text-left md:text-right tracking-tight text-gray-900 dark:text-white">{data.phoneNo}</p>
            </span>
        </div>
        <div class="mt-5 flex flex-col md:flex-row " style={{justifyContent:"space-between"}}>
            <span>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white">Address</h5>
            </span>
            <span>
                <p class="text-lg text-left md:text-right tracking-tight text-gray-900 dark:text-white">{data.address}</p>
            </span>
        </div>
    </div>
    </div>}
    {width>600 && <div class="w-full px-5 pb-5 pt-5 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700" style={{justifyContent:"center",alignItems:"center"}}>
       
        <div class="flex flex-col md:flex-row " style={{justifyContent:"space-between"}}>
            <span>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white">Full Name</h5>
            </span>
            <span>
                <p class="text-lg text-left md:text-right tracking-tight text-gray-900 dark:text-white">{data.name}</p>
            </span>
        </div>
        <div class="mt-5 flex flex-col md:flex-row " style={{justifyContent:"space-between"}}>
            <span>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white">Current Designation</h5>
            </span>
            <span>
                <p class="text-lg text-left md:text-right tracking-tight text-gray-900 dark:text-white">{data.designation}</p>
            </span>
        </div>
        <div class="mt-5 flex flex-col md:flex-row " style={{justifyContent:"space-between"}}>
            <span>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white">Current Company</h5>
            </span>
            <span>
                <p class="text-lg text-left md:text-right tracking-tight text-gray-900 dark:text-white">{data.company}</p>
            </span>
        </div>
        <div class="mt-5 flex flex-col md:flex-row " style={{justifyContent:"space-between"}}>
            <span>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white">Email</h5>
            </span>
            <span>
                <p class="text-lg text-left md:text-right tracking-tight text-gray-900 dark:text-white">{data.email}</p>
            </span>
        </div>
        <div class="mt-5 flex flex-col md:flex-row " style={{justifyContent:"space-between"}}>
            <span>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white">Phone Number</h5>
            </span>
            <span>
                <p class="text-lg text-left md:text-right tracking-tight text-gray-900 dark:text-white">{data.phoneNo}</p>
            </span>
        </div>
        <div class="mt-5 flex flex-col md:flex-row " style={{justifyContent:"space-between"}}>
            <span>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white">Address</h5>
            </span>
            <span>
                <p class="text-lg text-left md:text-right tracking-tight text-gray-900 dark:text-white">{data.address}</p>
            </span>
        </div>
    </div>}
    </div>
  )
}