import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { TbSocial } from 'react-icons/tb'
import { MdCreate } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { BiLogOut } from 'react-icons/bi'
import { BsShop } from 'react-icons/bs'
import { BsChatLeftDotsFill } from "react-icons/bs";
import {RiDashboardFill} from 'react-icons/ri'
import { Tooltip } from 'flowbite-react'
import {UserAuth} from '../Hooks/AuthContext'
export default function Navigation() {
  const [theme, setTheme] = useState('')
  const [lan, setLan] = useState('english')
  const navigator = useNavigate()
  const {logout}=UserAuth()
  const changeTheme = () => {
    console.log("change")
    if (localStorage.getItem('color-theme') === 'light') {
      console.log("dark")
      localStorage.setItem('color-theme', 'dark')
      setTheme("dark")
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('color-theme', 'light')
      setTheme('light')
      document.documentElement.classList.remove('dark');
      console.log("light")
    }
  }
  const changeLanguage = () => {
    console.log("change")
    if (localStorage.getItem('language') === 'english') {
      console.log("bangla")
      localStorage.setItem('language', 'bangla')
      setLan("bangla")
      document.documentElement.classList.add('bangla');
    } else {
      localStorage.setItem('language', 'english')
      setLan('english')
      document.documentElement.classList.remove('bangla');
      console.log("english")
    }
    window.location.reload()
  }
  useEffect(() => {
  if (localStorage.getItem('color-theme') === 'light') {
  setTheme('dark')
  } else {
  setTheme('light')
  }
  }, [])

  const switchPath = (pathname) => {
    navigator(pathname)
  }
  return (
    <div>


      <aside id="default-sidebar" class="flex flex-row w-screen z-50 h-20 md:flex-col md:w-20 md:h-screen bg-gray-100 fixed bottom-0 md:top-0" style={{alignItems:"center",justifyContent:"space-between"}} aria-label="Sidenav">

        <div class="flex xs:flex-row md:flex-col items-center xs:justify-center overflow-x-scroll overflow-y-hidden md:overflow-y-auto md:overflow-x-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
           
          <img className="w-15 h-15 mb-20 hidden md:flex" src='https://i.postimg.cc/hGqFHfxB/Beige-Simple-One-Line-Butterfly-Events-Logo-removebg-preview.png' onClick={() => switchPath("/")}/>
            
       
          <ul class="md:space-y-10 flex xs:flex-row md:flex-col items-center justify-center">
            <li>
              <Tooltip content="Dashboard" placement="right">
              <a class="flex flex-col md:flex-row items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => switchPath("/dashboard")}>
                <RiDashboardFill size={24} color={theme === "dark" ? "white" : "grey"} />
                <span class="ml-3 text-xs flex md:hidden">Dashboard</span>
              </a>
              </Tooltip>
            </li>
            <li>
              <Tooltip content="Marketplace" placement="right">
              <a class="flex flex-col md:flex-row items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => switchPath("/marketplace")}>
                <BsShop size={24} color={theme === "dark" ? "white" : "grey"} />
                <span class="ml-3 text-xs flex md:hidden">Marketplace</span>
              </a>
              </Tooltip>
            </li>
            <li>
              <Tooltip content="Social" placement="right">
              <a href="#" class="flex flex-col md:flex-row items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => switchPath("/social")}>
                <TbSocial size={24} color={theme === "dark" ? "white" : "grey"} />
                <span class="ml-3 text-xs flex md:hidden">Social</span>
              </a>
              </Tooltip>
            </li>
            <li>
              <Tooltip content="Notes" placement="right">
              <a href="#" class="flex flex-col md:flex-row items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => switchPath("/notes")}>
                <MdCreate size={24} color={theme === "dark" ? "white" : "grey"} />
                <span class="ml-3 text-xs flex md:hidden">Notes</span>
              </a>
              </Tooltip>
            </li>
            <li onClick={()=>navigator("/chatbot")} className='md:hidden'>
              <Tooltip content="Chatbots" placement="right">
              <a class="flex flex-col items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <BsChatLeftDotsFill size={24} color={theme === "dark" ? "white" : "grey"}/>
                <span class="ml-3 text-xs flex md:hidden">Chatbots</span>
              </a>
              </Tooltip>
            </li>
            <li>
              <Tooltip content="Profile" placement="right">
              <a href="#" class="flex flex-col md:flex-row items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => switchPath("/profile")}>
                <CgProfile size={24} color={theme === "dark" ? "white" : "grey"} />
                <span class="ml-3 text-xs flex md:hidden">Profile</span>
              </a>
              </Tooltip>
            </li>

            <li onClick={()=>{}} className='md:hidden'>
              <Tooltip content="Logout" placement="right">
                <button onClick={changeLanguage} type="button" class="flex flex-col md:flex-row items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" style={{ alignItems: "center", justifyContent: "center" }}>
                  <BiLogOut size={24} color={theme === "dark" ? "white" : "grey"} />
                  <span class="ml-3 text-xs flex md:hidden dark:text-white">Logout</span>
                </button>
              </Tooltip>
            </li>
            
            
          </ul>
          <ul class="pt-5 mt-5 hidden md:flex space-y-10 border-t border-gray-200 dark:border-gray-700">
            <li onClick={()=>navigator("/chatbot")}>
              <Tooltip content="Chatbots" placement="right">
              <a class="flex flex-col items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <BsChatLeftDotsFill size={24} color={theme === "dark" ? "white" : "grey"}/>
                <span class="ml-3 text-xs flex md:hidden">Chatbots</span>
              </a>
              </Tooltip>
            </li>
          </ul>
          
        </div>

        {/** BOTTOM ICONS */}
        <div class="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full md:flex bg-white dark:bg-gray-800 z-20 border-r border-gray-200 dark:border-gray-700">
          <Tooltip content="Logout" placement="right">
            <button type="button" onClick={logout} class="flex w-20 h-20 text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm" style={{ alignItems: "center", justifyContent: "center" }}>
              <BiLogOut size={24} color={theme === "dark" ? "white" : "grey"} />
            </button>
          </Tooltip>
          


        </div>



      </aside>
    </div>
  )
}
