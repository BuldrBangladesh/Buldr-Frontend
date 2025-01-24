import React,{useState,useEffect} from 'react'
import { BASE_URL } from '../../Data/apiData'
import {Modal} from 'flowbite-react'
import axios from 'axios'
import { Label } from 'flowbite-react'
import UpdateUser from './UpdateUser'
export default function AvatarBox({data}) {
  const [width, setWidth] = useState(600)
    const [openModal,setOpenModal]=useState(false)
  const [name,setName]=useState(data.name)
  const [bio,setBio]=useState(data.bio)
  const [image,setImage]=useState(data.image)
  const [designation,setDesignation]=useState(data.designation)
  const [company,setCompany]=useState(data.company)
  const [phone,setPhone]=useState(data.phone)
  const [addr,setAddr]=useState(data.addr)
  const [portfolio,setPortfolio]=useState(data.portfolio)
  const [github,setGithub]=useState(data.github)
  const [linkedin,setLinkedin]=useState(data.linkedin)
  const [city,setCity]=useState(data.city)
  const [country,setCountry]=useState(data.country)
  const updateUser = async () => {
    const res=await axios.put(BASE_URL+"/user",{
        name,
        designation,
        company,
        "email": data.email,
        "phoneNo": phone,
        "address": addr,
        portfolio,
        github,
        linkedin,
        "buldr": "https://buldr-bangladesh.web.app/portfolio/"+data.userID,
        city,
        country,
        image,
        bio
    })
    alert("User Updated!")
    
  }
  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  return (
    <div >
    {width<=600 && 
    <div className='p-4'>
    <div class="w-full p-10 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700" style={{justifyContent:"center",alignItems:"center"}}>
        <a href="#">
            <img class="p-8 rounded-full" src={data.image} alt="user image" />
        </a>
        <div class="px-5 pb-5">
            <a href="#">
                <h5 class="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
            </a>
            <div class="flex items-center text-gray-900 mt-2.5 mb-5 text-center dark:text-gray-500">
                {data.bio}
            </div>
            <div class=" text-md text-center font-semibold text-gray-900 dark:text-white">
            {data.city}, {data.country}
            </div>
           
        </div>
        <button type="button" class="focus:outline-none text-white font-semibold bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" onClick={()=>{setOpenModal(true)}}>Edit</button>
    </div>
    </div>}
    {width>600 && <div class="w-full h-full max-w-sm  bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700" style={{justifyContent:"center",alignItems:"center"}}>
        <a href="#">
            <img class="p-8 rounded-full" src={data.image} alt="user image" />
        </a>
        <div class="px-5 pb-5 flex flex-col items-center justify-center">
            <a href="#">
                <h5 class="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
            </a>
            <div class="flex items-center text-center text-gray-900 mt-2.5 mb-5 text-center dark:text-gray-500">
               {data.bio}
            </div>
            <div class=" text-md text-center font-semibold text-gray-900 dark:text-white">
                {data.city}, {data.country}
            </div>
            <button type="button" class="mt-4 focus:outline-none text-white font-semibold bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" onClick={()=>{setOpenModal(true)}}>Edit</button>
        </div>
        
    </div>}
    <Modal show={openModal} size="7xl" dismissible onClose={() => setOpenModal(false)}>
          <Modal.Header>Update User Information</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
               <UpdateUser data={data}/>
            </div>
          </Modal.Body>
        </Modal>
    </div>
  )
}