import React, { useEffect } from 'react'
import {MdOutlineDelete} from 'react-icons/md'
import MDEditor from '@uiw/react-md-editor'
import { Carousel } from 'flowbite-react'
export default function Block({type,heading,content,idx,rmvFunc}) {
  useEffect(()=>{
    if(type=="image"){
      console.log(content.split(","))
    }
  },[])
  return (
    <div>
        {type=='text'&& 
        <div class="block w-full mb-5 p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            
            {heading!=null && <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{heading}{idx}</h5>}
            <p class="font-normal text-gray-700 dark:text-gray-400">{content}</p>
            <div className=" flex flex-row gap-3 items-end">
              <button onClick={()=>rmvFunc(idx)} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 mr-2 mt-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" ><MdOutlineDelete size={24}/></button> 
            </div>
        </div>
        }

      {type=='image'&& 
        <div  class="block w-full mb-5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className=" flex flex-row gap-3 items-end">
            <button onClick={()=>rmvFunc(idx)} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 mr-2 mt-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" ><MdOutlineDelete size={24}/></button> 
            </div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" onClick={()=>console.log({content})}>{heading}</h5>
          
            <div className="w-full flex flex-col md:flex-row gap-3 items-center" style={{height:"300px",overflowX:"scroll"}}>
              {content.split(",").map(a => (
                 <img src={a} style={{objectFit:"contain"}}/>)
                )}
                
            </div>
            
        </div>
        }
        {type=='video'&& 
        <div class="block w-full mb-5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className=" flex flex-row gap-3 items-end">
            <button onClick={()=>rmvFunc(idx)} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 mr-2 mt-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" ><MdOutlineDelete size={24}/></button> 
            </div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{heading}</h5>
            <div class="aspect-w-16 aspect-h-9 md:aspect-h-5 md:w-1/2 ">
              <iframe src={content} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            
        </div>
        }
        {type=='code'&& 
        <div class="block w-full mb-5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className=" flex flex-row gap-3 items-end">
            <button onClick={()=>rmvFunc(idx)} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 mr-2 mt-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" ><MdOutlineDelete size={24}/></button> 
            </div>
            <div class=" md:w-1/2 ">
              <MDEditor.Markdown source={`\`\`\`${heading}\n${content}\n\`\`\``} />
            </div>
            
        </div>
        }
        {/* {<MDEditor.Markdown source={value} style={{width:"80vw"}}/>} */}


    </div>
  )
}
