import React,{useState,useEffect} from 'react'
import {CgWebsite} from 'react-icons/cg'
import {BsGithub} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import { SiGooglescholar } from "react-icons/si";

export default function SocialsBox({data}) {
    const [theme,setTheme]=useState('')
    const [width,setWidth]=useState()
    useEffect(()=>{
        setWidth(window.innerWidth)
        if(localStorage.getItem('color-theme')==='light'){
            setTheme('light')
        }else{
            setTheme('dark')
        }
      },[])
  return (
    <div>
    {width<=600 && 
    <div className='p-4'>
    <div class="w-full px-5 pb-5 pt-5 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700" style={{justifyContent:"center",alignItems:"center"}}>
       
        <div class="flex flex-col md:flex-row mb-5" style={{justifyContent:"space-between"}}>
            <span className='flex flex-row' style={{alignItems:"center"}}>
                <CgWebsite size={24} color={theme==="dark"?"white":"gray"}/>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white pl-3">Portfolio</h5>
            </span>
            <span>
                <a class="text-md md:text-lg text-right  tracking-tight text-gray-900 dark:text-white" href={data.portfolio} target='_blank'>{data.portfolio}</a>
            </span>
        </div>
        <div class="flex flex-col md:flex-row mb-5" style={{justifyContent:"space-between"}}>
            <span className='flex flex-row' style={{alignItems:"center"}}>
                <BsGithub size={24} color={theme==="dark"?"white":"gray"}/>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white pl-3">Github</h5>
            </span>
            <span>
                <a class="text-md md:text-lg text-right  tracking-tight text-gray-900 dark:text-white" href={data.github} target='_blank'>{data.github}</a>
            </span>
        </div>
        <div class="flex flex-col md:flex-row mb-5" style={{justifyContent:"space-between"}}>
            <span className='flex flex-row' style={{alignItems:"center"}}>
                <AiFillLinkedin size={24} color={theme==="dark"?"white":"gray"}/>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white pl-3">LinkedIn</h5>
            </span>
            <span>
                <a class="text-md md:text-lg text-right  tracking-tight text-gray-900 dark:text-white" href={data.linkedin} target='_blank'>{data.linkedin}</a>
            </span>
        </div>
        <div class="flex flex-col md:flex-row mb-5" style={{justifyContent:"space-between"}}>
            <span className='flex flex-row' style={{alignItems:"center"}}>
                <BiUserCircle size={24} color={theme==="dark"?"white":"gray"}/>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white pl-3">Buldr</h5>
            </span>
            <span>
                <a class="text-md md:text-lg text-right  tracking-tight text-gray-900 dark:text-white" href={data.buldr} target='_blank'>{data.buldr}</a>
            </span>
        </div>

       
        </div>
    </div>}
    {width>600 && <div class="w-full px-5 pb-5 pt-5 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700" style={{justifyContent:"center",alignItems:"center"}}>
       
        <div class="flex flex-col md:flex-row mb-5" style={{justifyContent:"space-between"}}>
            <span className='flex flex-row' style={{alignItems:"center"}}>
                <CgWebsite size={24} color={theme==="dark"?"white":"gray"}/>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white pl-3">Portfolio</h5>
            </span>
            <span>
                <a class="text-md md:text-lg text-right  tracking-tight text-gray-900 dark:text-white" href={data.portfolio} target='_blank'>{data.portfolio}</a>
            </span>
        </div>
        <div class="flex flex-col md:flex-row mb-5" style={{justifyContent:"space-between"}}>
            <span className='flex flex-row' style={{alignItems:"center"}}>
                <BsGithub size={24} color={theme==="dark"?"white":"gray"}/>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white pl-3">Github</h5>
            </span>
            <span>
                <a class="text-md md:text-lg text-right  tracking-tight text-gray-900 dark:text-white" href={data.github} target='_blank'>{data.github}</a>
            </span>
        </div>
        <div class="flex flex-col md:flex-row mb-5" style={{justifyContent:"space-between"}}>
            <span className='flex flex-row' style={{alignItems:"center"}}>
                <AiFillLinkedin size={24} color={theme==="dark"?"white":"gray"}/>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white pl-3">LinkedIn</h5>
            </span>
            <span>
                <a class="text-md md:text-lg text-right  tracking-tight text-gray-900 dark:text-white" href={data.linkedin} target='_blank'>{data.linkedin}</a>
            </span>
        </div>
        <div class="flex flex-col md:flex-row mb-5" style={{justifyContent:"space-between"}}>
            <span className='flex flex-row' style={{alignItems:"center"}}>
                <BiUserCircle size={24} color={theme==="dark"?"white":"gray"}/>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white pl-3">Buldr</h5>
            </span>
            <span>
                <a class="text-md md:text-lg text-right  tracking-tight text-gray-900 dark:text-white" href={data.buldr} target='_blank'>{data.buldr}</a>
            </span>
        </div>
        <div class="flex flex-col md:flex-row mb-5" style={{justifyContent:"space-between"}}>
            <span className='flex flex-row' style={{alignItems:"center"}}>
                <SiGooglescholar size={24} color={theme==="dark"?"white":"gray"}/>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white pl-3">Google Scholar</h5>
            </span>
            <span>
                {data.scholar_id!=null && <a class="text-md md:text-lg text-right  tracking-tight text-gray-900 dark:text-white" href={"https://scholar.google.com/citations?user="+data.scholar_id} target='_blank'>https://scholar.google.com/citations?user={data.scholar_id}</a>}
            </span>
        </div>

       
        
    </div>}
    </div>
  )
}