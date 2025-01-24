import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, TAGS_URL } from "../Data/apiData";
import { Spinner } from "flowbite-react";
import axios from "axios";
import PostShowBlock from "../Components/Social/PostShowBlock";
import { MdArrowBackIosNew } from "react-icons/md";
export default function Post() {
  const params = useParams();
  const pid = params.id;
  const [width, setWidth] = useState(600);
  const [allTags, setAllTags] = useState();
  const [post, setPost] = useState();
  const [postBlocks, setPostBlocks] = useState();
  const [loading, setLoading] = useState(true);
  let goBack = () => {
    window.history.back();
  };
  let endpoints = [
    TAGS_URL,
    BASE_URL + "/post" + "/" + pid,
    BASE_URL + "/postblocks" + "/" + pid,
  ];

  const allRequests = async () => {
    axios.all(endpoints.map((promise) => axios.get(promise))).then(
      axios.spread((tags, post, postblocks) => {
        setAllTags(tags.data);
        setPost(post.data);
        setPostBlocks(postblocks.data);
        console.log(tags.data);
        setLoading(false);
      })
    );
  };

  useEffect(() => {
    allRequests();
  }, []);
    return (
        <div className="md:pt-20 pb-20 md:pb-0 h-screen w-screen bg-gray-50 flex justify-center dark:bg-slate-900">
            <div
                className="fixed top-10 left-10 p-4 rounded-full bg-gray-200 hover:bg-gray-300 shadow-md dark:bg-slate-700 dark:hover:bg-slate-600 cursor-pointer"
                onClick={goBack}
            >
                <MdArrowBackIosNew size={24} className="dark:text-white" />
            </div>
            {!loading && (
                <div
                    className="w-full dark:bg-slate-700 bg-white p-4 shadow-md rounded-xl noscrollbar flex flex-col items-center overflow-y-scroll"
                    style={{ width: "80vw" }}
                >
                    <img
                        src={post.image}
                        className="rounded-xl"
                        style={{ objectFit: "contain" }}
                    />
                    <h2 className="mt-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
                        {post.title}{" "}
                    </h2>
                    <h2 className="mb-4 p-2 text-center text-lg  leading-none tracking-tight text-gray-900 md:text-lg lg:text-lg dark:text-white">
                        {post.subtitle}{" "}
                    </h2>

                    {/* {allTags.map((a) =>{
                if(post.tags.includes(a.name)) return(
                <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  <span className={`bg-${a.color}-100 text-${a.color}-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-${a.color}-200 dark:text-${a.color}-800`}>
                    {a}
                  </span>
                </label>
              )})} */}
                    {postBlocks.map((a) => (
                        <div className="w-full">
                            <PostShowBlock
                                type={a.type}
                                heading={a.title}
                                content={a.content}
                            />
                        </div>
                    ))}
                </div>
            )}
            {loading && (
                <div>
                    <Spinner />
                    Loading Post...
                </div>
            )}
        </div>
    );
}
