import React, { useEffect, useState } from 'react'
import Navigation from '../Components/Navigation'
import { useNavigate } from "react-router-dom";
import Post from '../Components/Social/Post'
import SocialFilter from '../Components/Social/SocialFilter'
import { BASE_URL, POSTS_URL } from '../Data/apiData'
import { Spinner } from 'flowbite-react'
import axios from 'axios'

export default function Social() {
    const navigator = useNavigate();
  const [width, setWidth] = useState(600)
  const [data,setData]=useState([])
  const [tags,setTags]=useState()
  const [loading,setLoading]=useState(true)
  const getData=async()=>{
    const res = await axios.get(BASE_URL+"/posts/social")
   // console.log(res.data)
    setData(res.data)
    setLoading(false)
  }
  const newFetch=async(items)=>{
    const param=[...items]
    setLoading(true)
    const res = await axios.get(BASE_URL+"/posts/tags?tags="+param)
    setData(res.data)
    setLoading(false)
  }
    const switchPath = (pathname) => {
      navigator(pathname);
    };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
    getData();
  }, []);
  //  console.log(data)
  return (
    <div className="pb-20 dark:bg-slate-900">
      {width > 600 && <Navigation />}
      {width > 600 && <SocialFilter newFetch={newFetch} />}
      {width <= 600 && <Navigation />}
      {width <= 600 && (
        <div
          className="flex z-10 md:hidden justify-center w-screen h-20 bg-gray-100 dark:bg-slate-800 fixed top-0"
          style={{ alignItems: "center" }}
        >
          <img
            width="50px"
            height="50px"
            src="https://i.postimg.cc/hGqFHfxB/Beige-Simple-One-Line-Butterfly-Events-Logo-removebg-preview.png"
            onClick={() => navigator("/")}
          />
          <h2 className="text-xl font-bold text-black font-title dark:text-gray-100">
            <span className="text-primary-500">BULDR.</span> Social
          </h2>
        </div>
      )}

      <div
        className="min-h-screen bg-base flex flex-wrap flex-col md:flex-row font-primary dark:bg-slate-900 mt-20 md:mt-0"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <article class="p-6 my-5 bg-white max-w-xl mx-5 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-gray-500">
            <a href="#">Want to show the world what you're working on?</a>
          </h2>
          <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
            You can create a project post and show it to the world
          </p>
          <div class="flex w-full justify-between items-center">
            <button
              type="button"
              class="px-3 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              onClick={() => switchPath("/create")}
            >
              Create
            </button>
          </div>
        </article>
        {loading && (
          <div>
            {" "}
            <Spinner /> Loading posts...{" "}
          </div>
        )}
        {console.log(data)}
        {!loading &&
          data.map((a) => (
            <div className="w-full flex items-center justify-center my-5">
              <Post data={a} />
            </div>
          ))}
      </div>
    </div>
  );
}
