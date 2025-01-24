import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { TbSocial } from 'react-icons/tb'
import { MdCreate } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { BiLogOut } from 'react-icons/bi'
import { BsShop } from 'react-icons/bs'
import SocialTags from './SocialTags'
import axios from 'axios'
import { TAGS_URL } from '../../Data/apiData'
export default function SocialFilter({newFetch}) {
    const navigator = useNavigate()
    const [currentTags,setCurrentTags]=useState([])
    const [allTags,setAllTags]=useState([])
    const [loading,setLoading]=useState(true)
    function removeItem(item){
        let newItems=[]
        currentTags.forEach(a=>{
            if(a!=item) {newItems.push(a)}
        })
        setCurrentTags(newItems)
    }
    let endpoints = [
        TAGS_URL,
      ];
      const allRequests = async () => {
        axios.all(endpoints.map((promise) => axios.get(promise))).then(
          axios.spread((tagsRes) => {
            const tags = tagsRes.data
            setAllTags(tags)
            setLoading(false)

          })
        )
      }
    useEffect(() => {
      allRequests()
    }, [])
    useEffect(() => {
        if(currentTags.length!=0){
            newFetch(currentTags)
            //console.log(currentTags)
        }
      
    }, [currentTags])
    
    const switchPath = (pathname) => {
        navigator(pathname)
    }
    return (
        <div>
            <aside id="default-sidebar" class="fixed top-0 right-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidenav">

                <div class="overflow-y-auto py-5  px-3 h-full overflow-y-scroll noscrollbar  bg-white border-l border-gray-200 dark:bg-gray-800 dark:border-gray-700" >
                    <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 " onClick={()=>switchPath("/create")}>
                        <a href="#">
                            <img class="rounded-lg" src="https://i.postimg.cc/ydxrgctv/image.png" alt="marketplace" />
                        </a>
                        <figcaption class="absolute px-4 text-md text-white bottom-6">
                            <p className='bg-white px-2 my-2 text-primary-500 font-semibold'>Add new project</p>
                            <p className='w-full text-sm bg-primary-500 px-2 rounded-full'>Create Now</p>
                        </figcaption>
                
                    </figure>
                    <h5 id="drawer-label "
                        class="inline-flex items-center mb-4 mt-8 text-base font-semibold text-gray-500 dark:text-gray-400">
                        View By Tags
                    </h5>
                    

                   {!loading && allTags.map(a=> <div class="flex items-center my-2" >
                        <input type="checkbox" value={a.name} onChange={(e)=>{
                            removeItem(e.target.value)
                            if(e.target.checked==true){
                                setCurrentTags((currentTags)=>[...currentTags,e.target.value])
                            }
                        }}
                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            <span className={`bg-${a.color}-100 text-${a.color}-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-${a.color}-200 dark:text-${a.color}-800`}>

                                {a.name}
                            </span>
                        </label>
                    </div>)}
                    
                    
                </div>




            </aside>
        </div>
    )
}
