import React, { useContext, useState } from 'react'

import { useNavigate } from 'react-router-dom'
// import { UserIDContext, UserIDUpdateContext, UserTypeContext, UserTypeUpdateContext } from '../Context/UserContext'
import { Spinner } from 'flowbite-react'
import axios from "axios"
import { API_ENDPOINT, BASE_URL } from '../../Data/apiData'

// import info from '../data/MainText'
export default function UpdateUser({ data }) {

    const [openModal, setOpenModal] = useState(false)
    const [name, setName] = useState(data.name)
    const [bio, setBio] = useState(data.bio)
    const [image, setImage] = useState(data.image)
    const [designation, setDesignation] = useState(data.designation)
    const [company, setCompany] = useState(data.company)
    const [phone, setPhone] = useState(data.phoneNo)
    const [addr, setAddr] = useState(data.address)
    const [portfolio, setPortfolio] = useState(data.portfolio)
    const [github, setGithub] = useState(data.github)
    const [linkedin, setLinkedin] = useState(data.linkedin)
    const [city, setCity] = useState(data.city)
    const [country, setCountry] = useState(data.country)
    const [scholarID, setScholarID] = useState(data.scholar_id)
    const updateUser = async () => {
        setLogggingIn(true)
        const res = await axios.put(BASE_URL +"/user/"+data.userID, {
            userID:data.userID,
            name,
            designation,
            company,
            "email": data.email,
            "phoneNo": phone,
            "address": addr,
            portfolio,
            github,
            linkedin,
            "buldr": "https://buldr-bangladesh.web.app/portfolio/" + data.userID,
            city,
            country,
            image,
            bio,
            scholar_id:scholarID
        })
        console.log(res.data)
        setLogggingIn(false)
        alert("User Updated")
        window.location.reload()
        
    }

    const [loggingIn, setLogggingIn] = useState(false)



    return (
        <div className='h-full mt-8 w-full bg-gray-50 dark:bg-gray-700'>
            <section class="bg-gray-50 w-full dark:bg-gray-700">
                <div class="flex flex-col w-full items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">


                    <form class="space-y-4 mt-20 w-full md:space-y-6" action="#">
                        
                        <input type="text"  value={name} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e => setName(e.target.value)} />
                        <label className='dark:text-white font-semibold'>Full Name</label>
                         
                        <input type="text" value={bio} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e => setBio(e.target.value)} />
                        <label className='dark:text-white font-semibold'>Bio</label>
                         
                        <input type="text" value={image} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e => setImage(e.target.value)} />
                        <label className='dark:text-white font-semibold'>Image URL</label>
                         
                        <input type="text" value={designation} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e => setDesignation(e.target.value)} />
                        <label className='dark:text-white font-semibold'>Designation</label>
                         
                        <input type="text" value={company} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e => setCompany(e.target.value)} />
                        <label className='dark:text-white font-semibold'>Company</label>
                         
                        <input type="text" value={phone} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e => setPhone(e.target.value)} />
                        <label className='dark:text-white font-semibold'>Phone No</label>
                         
                        <input type="text" value={addr} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e => setAddr(e.target.value)} />
                        <label className='dark:text-white font-semibold'>Address</label>
                         
                        <input type="text" value={portfolio} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e => setPortfolio(e.target.value)} />
                        <label className='dark:text-white font-semibold'>Portfolio</label>
                         
                        <input type="text" value={github} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e => setGithub(e.target.value)} />
                        <label className='dark:text-white font-semibold'>Github</label>
                         
                        <input type="text" value={linkedin} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e => setLinkedin(e.target.value)} />
                        <label className='dark:text-white font-semibold'>Linkedin</label>
                        
                        <input type="text" value={scholarID} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e => setScholarID(e.target.value)} />
                        <label className='dark:text-white font-semibold'>Google Scholar User ID</label>
                         
                        <input type="text" value={city} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e => setCity(e.target.value)} />
                        <label className='dark:text-white font-semibold'>City</label>
                         
                        <input type="text" value={country} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e => setCountry(e.target.value)} />
                        <label className='dark:text-white font-semibold '>Country</label>
                        <div className='mb-8'>
                        {!loggingIn && <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5  text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={updateUser}>Update Account</button>}
                        {loggingIn && <div style={{ display: "flex", alignItems: 'center' }}><Spinner /><h2 sx={{ marginLeft: "10px" }}>  Updating Account</h2></div>}
                        </div>

                    </form>

                </div>
            </section>
        </div>
    )
}