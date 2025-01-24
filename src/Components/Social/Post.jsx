import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../Data/apiData'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useUserID } from '../../Hooks/userContext'
import { MdOutlineDelete } from 'react-icons/md'
import { BiSolidUpvote, BiUpvote } from 'react-icons/bi'
export default function Post({data}) {
  const navigator=useNavigate()
  const userID=useUserID()
  //console.log(data)
  const [user,setUser]=useState()
  const [loading,setLoading]=useState(true)
  const [voted,setVoted]=useState(false)
  const [votes,setVotes]=useState(data.votes)

  let endpoints = [
    BASE_URL+"/user/"+data.userID,
    BASE_URL+"/user/vote/"+userID+"/"+data.postID,
    //SCHOLAR_GETTER+user.scholar_id,
    //BASE_URL+"/post/social/"+id,
    //BASE_URL+"/notes-public/"+buldrUser
  ];
  const allRequests = async () => {
    axios.all(endpoints.map((promise) => axios.get(promise))).then(
      axios.spread((u,v) => {
        console.log(u.data)
        console.log(v.data)
        setUser(u.data)
        setVoted(v.data)
        setLoading(false)
        //setScholar(scholar.data)
        //setPosts(p.data)
        //setNotes(n.data)
        // axios.get(SCHOLAR_GETTER+u.scholar_id).then((res)=>{
        //   console.log(res)
        //   setLoading(false)
        // })

        
      })
    )
  }
  // const getUser=async()=>{
  //   const res=await axios.get(BASE_URL+"/user/"+data.userID)
  //   //console.log(res)
  //   await setUser(res.data)
  //   setLoading(false)
  //   console.log(user)
  // }
  const deletePost=async()=>{
    const res=await axios.delete(BASE_URL+"/post/"+data.postID)
    window.location.reload()
  }
  useEffect(()=>{
    console.log(data)
    allRequests()
  },[])
  const transformDate=(a)=>{
    a=parseInt(a)
    let dt=new Date(a)
    return dt.toDateString()
  }
  const updateUser = async () => {
    const res=await axios.put(BASE_URL+"/user",{
     
    })
    alert("User Updated!")
    
  }
  const upVote=async()=>{
    await axios.put("http://localhost:8081/post/votes/"+userID+"/"+data.postID)
    setVotes(votes=>votes+1)
    setVoted(true)
  }
  const downVote=()=>{
    setVoted(false)
  }
  return (
    <article class="p-6 bg-white max-w-xl mx-5 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img class="w-full mb-2 rounded-lg " src={data.image} alt="projectImage" />
      <div class="flex justify-between items-center mb-5 text-gray-500">
        {data.tags.length!=0 && <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
          {/* <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg> */}
          {data.tags[0]}
        </span>}
        <span class="text-sm">{transformDate(data.date)}</span>
      </div>
      {data.userID==userID && <button onClick={()=>deletePost()} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 mr-2 mt-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" ><MdOutlineDelete size={24}/></button>}
      <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">{data.title}</a></h2>
      <p class="mb-5 font-light text-gray-500 dark:text-gray-400">{data.subtitle}</p>
      <div className='flex mb-8 items-center'>
        {voted && <button onClick={downVote}><BiSolidUpvote size={24} color='orange'/></button>}
        {!voted && <button onClick={upVote}><BiUpvote size={24}/></button>}
        <p className='mx-2'>{votes} Upvotes</p>
        
      </div>
      <div class="flex flex-col justify-center items-start">
      {!loading && <div class="flex items-center mb-2 space-x-4">
          <img class="w-12 h-12 rounded-full" src={user.image} alt="Avatar" />
          <span class="font-medium dark:text-white">
            {user.name}
          </span> 
        </div>}
        <a href="#" class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline" onClick={()=>navigator('/post/'+data.postID)}>
          More
          <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </article>
  )
}