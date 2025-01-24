import React, { useEffect } from 'react'
import {MdOutlineDelete} from 'react-icons/md'
import MDEditor from '@uiw/react-md-editor'
import { Carousel } from 'flowbite-react'
export default function PostShowBlock({type,heading,content,idx,rmvFunc}) {
  useEffect(()=>{
    if(type=="image"){
      console.log(content.split(","))
    }
  },[])
  return (
    <div>
        {type=='text'&& 
        <div class="block w-full mb-5 p-3 ">
            
            {heading!=null && <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{heading}{idx}</h5>}
            <p class="font-normal text-gray-700 dark:text-gray-400">{content}</p>
            
        </div>
        }

      {type=='image'&& 
        <div class="block h-full mb-2 p-3">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" onClick={()=>console.log({content})}>{heading}</h5>
            <div className="h-full flex flex-col md:flex-row gap-3 items-center" style={{overflowX:"scroll"}}>
              {content.split(",").map(a => (
                 <img src={a} style={{objectFit:"contain"}}/>)
                )}
                
            </div>
            
        </div>
        }
        {type=='video'&& 
        <div class="block w-full my-2 p-3">
          
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{heading}</h5>
            <div class="w-full h-full">
              <iframe src={content} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            
        </div>
        }
        {type=='code'&& 
        <div class="block w-full mb-5 p-3 ">
            <div class="w-full">
              <MDEditor.Markdown source={`\`\`\`${heading}\n${content}\n\`\`\``} />
            </div>
            
        </div>
        }
        {/* {<MDEditor.Markdown source={value} style={{width:"80vw"}}/>} */}


    </div>
  )
}

