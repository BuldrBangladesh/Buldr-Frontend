import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { TbSocial } from 'react-icons/tb'
import { MdCreate } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { BiLogOut } from 'react-icons/bi'
import { BsShop } from 'react-icons/bs'
import {BsChatLeftDotsFill} from 'react-icons/bs'
import {RiDashboardFill} from 'react-icons/ri'
import { UserAuth } from '../Hooks/AuthContext'
export default function NavigationWide() {
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
      setTheme('light')
    } else {
      setTheme('dark')
    }
    if(localStorage.getItem('language')==='english'){
      setLan('english')
    }else{
        setLan('bangla')
    }
  }, [])

  const switchPath = (pathname) => {
    navigator(pathname)
  }
  return (
    <div>


      <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidenav">

        <div class="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700" >
          <div className='flex items-center mb-5 justify-start w-full' onClick={() => switchPath("/")}>
            <img className='w-16 h-16' src='https://i.postimg.cc/hGqFHfxB/Beige-Simple-One-Line-Butterfly-Events-Logo-removebg-preview.png' />
            <h2 className='text-xl font-bold text-black font-title dark:text-gray-100'>BULDR.</h2>
          </div>
          <div className="divider"></div>
          <ul class="space-y-2">
            <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => switchPath("/dashboard")}>
                <RiDashboardFill size={24} color={theme === "dark" ? "white" : "grey"} />
                <span class="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => switchPath("/marketplace")}>
                <BsShop size={24} color={theme === "dark" ? "white" : "grey"} />
                <span class="ml-3">Marketplace</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => switchPath("/social")}>
                <TbSocial size={24} color={theme === "dark" ? "white" : "grey"} />
                <span class="ml-3">Social</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => switchPath("/notes")}>
                <MdCreate size={24} color={theme === "dark" ? "white" : "grey"} />
                <span class="ml-3">Notes</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => switchPath("/profile")}>
                <CgProfile size={24} color={theme === "dark" ? "white" : "grey"} />
                <span class="ml-3">Profile</span>
              </a>
            </li>
          </ul>
          <ul class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
    
            <li onClick={()=>navigator("/chatbot")}>
              <a class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <BsChatLeftDotsFill size={24} color={theme === "dark" ? "white" : "grey"}/>
                <span class="ml-3">Chatbots</span>
              </a>
            </li>
          </ul>
          <figure class="absolute bottom-32 px-4 max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" onClick={() => switchPath("/chatbot")}>
            <a href="#">
              <img class="rounded-lg" src="https://i.postimg.cc/Kjc1P7t3/31283901-7814561.jpg" alt="marketplace" />
            </a>
            <figcaption class="absolute px-4 text-md text-white bottom-6">
              <p className='bg-white px-2 my-2 text-primary-500 font-semibold'>Chat with buldr bots</p>
            </figcaption>

          </figure>
        </div>

        {/** BOTTOM ICONS */}
        <div class="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20 border-r border-gray-200 dark:border-gray-700">
          <button onClick={logout} type="button" class="flex w-20 h-20 text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm" style={{ alignItems: "center", justifyContent: "center" }}>
            <BiLogOut size={24} color={theme === "dark" ? "white" : "grey"} />
          </button>
          <button onClick={changeTheme} type="button" class="text-gray-500 flex items-center justify-center w-20 h-20 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg ">
            {theme === 'light' && <svg id="theme-toggle-dark-icon" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>}
            {theme === 'dark' && <svg id="theme-toggle-light-icon" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>}
          </button>
          <button onClick={changeLanguage} type="button" class="flex w-20 h-20 text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm" style={{ alignItems: "center", justifyContent: "center" }}>
            {lan === 'bangla' && <img src="https://i.postimg.cc/63QDL1YV/england-4854979.png" width="20px" />}
            {lan === 'english' && <img src="https://i.postimg.cc/gkRkZnwz/bangladesh-9993444.png" width="20px" />}
          </button>


        </div>



      </aside>
    </div>
  )
}
