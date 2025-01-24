//Production_portfolio
import React, { useEffect, useState } from "react";

import { useUserID } from "../Hooks/userContext";
import { BASE_URL } from "../Data/apiData";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { LiaLinkedinIn } from "react-icons/lia";
import { BiUserCircle } from "react-icons/bi";
import { PiGithubLogo, PiListFill } from "react-icons/pi";
import { Tooltip } from "flowbite-react";
import Footer from "../Components/Footer";

export default function Portfolio() {
  const params = useParams();
  const navigator = useNavigate();
  const id = params.id;
  const buldrUser = useUserID();
  const [width, setWidth] = useState();
  const [user, setUser] = useState();
  const [posts, setPosts] = useState();
  const [notes, setNotes] = useState();
  const [loading, setLoading] = useState(true);
  const buldruser = useUserID();
  const [theme, setTheme] = useState("");
  const [lan, setLan] = useState("english");
  const [gridView, setGridView] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("color-theme") === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    if (localStorage.getItem("language") === "english") {
      setLan("english");
    } else {
      setLan("bangla");
    }
  }, []);
  const changeTheme = () => {
    console.log("change");
    if (localStorage.getItem("color-theme") === "light") {
      console.log("dark");
      localStorage.setItem("color-theme", "dark");
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("color-theme", "light");
      setTheme("light");
      document.documentElement.classList.remove("dark");
      console.log("light");
    }
  };

  let endpoints = [
    BASE_URL + "/user/" + id,
    //BASE_URL+"/post/social/"+id,
    //BASE_URL+"/notes-public/"+buldrUser
  ];
  const allRequests = async () => {
    axios.all(endpoints.map((promise) => axios.get(promise))).then(
      axios.spread((u) => {
        setUser(u.data);
        //setPosts(p.data)
        //setNotes(n.data)
        setLoading(false);
      })
    );
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    allRequests();
  }, []);
  return (
    <div className="md:pt-20 pb-20 md:pb-0">
      <div
        className="z-10 flex w-screen h-20 bg-gray-100 dark:bg-gray-800 fixed top-0"
        id="home"
        style={{ alignItems: "center", justifyContent: "space-between" }}
      >
        {!loading && (
          <h2 className="text-xl font-bold ml-4 text-black font-title dark:text-gray-100">
            {user.name}
          </h2>
        )}
        <li className="hidden md:flex md:w-1/3 items-center justify-around">
          <a href="#home">
            <ul className="font-bold text-gray-600 hover:text-black dark:text-gray-300 hover:dark:text-white cursor-pointer">
              Home
            </ul>
          </a>
          <a href="#connect">
            <ul className="font-bold text-gray-600 hover:text-black dark:text-gray-300 hover:dark:text-white cursor-pointer">
              Connect
            </ul>
          </a>
          <a href="#projects">
            <ul className="font-bold text-gray-600 hover:text-black dark:text-gray-300 hover:dark:text-white cursor-pointer">
              Projects
            </ul>
          </a>
          <a href="#blogs">
            <ul className="font-bold text-gray-600 hover:text-black dark:text-gray-300 hover:dark:text-white cursor-pointer">
              Blogs
            </ul>
          </a>
        </li>
        <div className="flex flex-row mr-10">
          {/* <input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" /> */}
          <button
            onClick={changeTheme}
            type="button"
            class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
          >
            {theme === "light" && (
              <svg
                id="theme-toggle-dark-icon"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            )}
            {theme === "dark" && (
              <svg
                id="theme-toggle-light-icon"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            )}
          </button>

          {/* <button className="btn btn-primary font-primary">Get Started</button> */}
        </div>
      </div>

      {/**CONNECT */}
      {!loading && (
        <div
          className="min-h-screen mt-20 md:m-0 bg-white flex flex-col gap-5 font-primary dark:bg-slate-900"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <div className="min-h-screen w-full flex flex-col-reverse md:flex-row items-center md:justify-around justify-center">
            <img
              class="p-8 md:w-1/3"
              src={user.image}
              style={{ objectFit: "contain" }}
              alt="user image"
            />
            <div className="">
              <h2 className="mt-4 text-3xl font-extrabold text-primary-500 leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
                {user.name}{" "}
              </h2>
              <h2 className="mb-4 p-2 text-center text-lg  leading-none tracking-tight text-gray-900 md:text-lg lg:text-lg dark:text-white">
                {user.bio}{" "}
              </h2>
            </div>
          </div>
          {!loading && (
            <div
              className=" w-full flex flex-col items-center justify-around bg-gray-100 dark:bg-slate-800"
              id="connect"
            >
              <h2 className="mt-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl text-primary-500">
                Connect With Me{" "}
              </h2>
              <h2 className="mb-4 p-2 text-center text-lg  leading-none tracking-tight text-gray-900 md:text-lg lg:text-lg dark:text-white">
                Get my socials{" "}
              </h2>
              <div className="flex flex-col my-24  items-center justify-around w-full md:flex-row">
                <Tooltip content="Portfolio" placement="bottom">
                  <div className="bg-gray-300 dark:bg-slate-700 my-4 hover:dark:bg-slate-600 p-4 rounded-full">
                    <a href={user.portfolio} target="_blank">
                      <BiUserCircle size={72} className="dark:text-white" />
                    </a>
                  </div>
                </Tooltip>
                <Tooltip content="Linked In" placement="bottom">
                  <div className="bg-gray-300 dark:bg-slate-700 my-4 hover:dark:bg-slate-600 p-4 rounded-full">
                    <a href={user.linkedin} target="_blank">
                      <LiaLinkedinIn size={72} className="dark:text-white" />
                    </a>
                  </div>
                </Tooltip>
                <Tooltip content="Github" placement="bottom">
                  <div className="bg-gray-300 dark:bg-slate-700 my-4 hover:dark:bg-slate-600 p-4 rounded-full">
                    <a href={user.github} target="_blank">
                      <PiGithubLogo size={72} className="dark:text-white" />
                    </a>
                  </div>
                </Tooltip>
                <Tooltip content="Buldr Profile" placement="bottom">
                  <div className="bg-gray-300 dark:bg-slate-700 my-4 hover:dark:bg-slate-600 p-4 rounded-full">
                    <a href={user.buldr} target="_blank">
                      <img
                        className="w-16 h-16"
                        src="https://i.postimg.cc/hGqFHfxB/Beige-Simple-One-Line-Butterfly-Events-Logo-removebg-preview.png"
                      />
                    </a>
                  </div>
                </Tooltip>
              </div>
            </div>
          )}

          {/**FOOTER */}
          <div
            className="w-full flex flex-col items-center justify-around dark:bg-slate-800"
            id="footer"
          >
            <div className="divider"></div>
            <h2 className="mt-4 text-md text-white leading-none tracking-tight text-gray-900 md:text-md lg:text-md">
              Buldr generated portfolio{" "}
            </h2>
            <h2 className="mb-4 p-2 text-center text-lg  leading-none tracking-tight text-gray-900 md:text-lg lg:text-lg dark:text-white">
              Made with &#9829; by{" "}
              <a href="https://buldr-bangladesh.web.app">Buldr Bangladesh </a>
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}
