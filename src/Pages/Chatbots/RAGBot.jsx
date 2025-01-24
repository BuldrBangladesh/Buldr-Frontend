import React, { useEffect, useState } from "react";
import Navigation from "../../Components/Navigation";
import { RiUploadCloud2Line } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import ReactPDF, { PDFViewer } from '@react-pdf/renderer';
import { upload } from "@testing-library/user-event/dist/upload";
export default function RAGBot() {
  const [width, setWidth] = useState();
  const [height,setHeight]=useState()
  const [uploadedFile,setUploadedFile]=useState(null)
  const [showTeacherDrawer, setShowTeacherDrawer] = useState(false);
  const [showStudentDrawer, setShowStudentDrawer] = useState(false);
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight)
  }, []);
  return (
    <div>
      <Navigation />
    {/**CUSTOM NAVBAR */}
        <div
          className="flex z-10 justify-center w-screen h-20 bg-gray-100 dark:bg-slate-800 fixed top-0"
          style={{ alignItems: "center" }}
        >
          <img
            width="50px"
            height="50px"
            src="https://i.postimg.cc/hGqFHfxB/Beige-Simple-One-Line-Butterfly-Events-Logo-removebg-preview.png"
            onClick={() => navigator("/")}
          />
          <h2 className="text-xl font-bold text-black font-title dark:text-gray-100">
            <span className="text-primary-500">BULDR.</span> RAG-BOT
          </h2>
        </div>
      
      <div className="w-full h-screen pl-24 flex flex-col items-center justify-center">
        

        {/**FILE UPLOADER */}
        {uploadedFile==null && <div class="flex items-center justify-center h-full md:w-1/3">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-2/3 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 dark:hover:bg-blue-800 dark:bg-gray-700 hover:bg-blue-100 dark:border-blue-600 dark:hover:border-blue-500 dark:hover:bg-blue-600"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <RiUploadCloud2Line
                size={32}
                className="text-blue-500 dark:text-blue-400"
              />
              <p class="mb-2 text-sm text-blue-500 dark:text-blue-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                PDF, PPTX, CSV or TXT (MAX. 2MB)
              </p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" value={uploadedFile} onChange={(e)=>{
              console.log(e.target.files[0])
              setUploadedFile(e.target.files[0])}}/>
          </label>
        </div>}
        {uploadedFile!=null && 
          <div>
            <ReactPDF
                file={{
                  data: uploadedFile
                }}
              />
          </div>
        }
        {/**STUDENT BOT */}
        <div
          class={`fixed w-1/4 bg-white border-t border-x border-gray-200 rounded-t-lg dark:border-gray-700 dark:bg-gray-800 transition-transform left-24  ${showStudentDrawer? "-bottom-[640px]":"bottom-0"}`}
        >
          <div
            class="p-4 w-full rounded-t-lg cursor-pointer bg-blue-400 hover:bg-blue-400"
            onClick={() => setShowStudentDrawer(!showStudentDrawer)}
          >
            <span class="absolute w-8 h-1 -translate-x-1/2 bg-gray-100 rounded-lg top-3 left-1/2 dark:bg-gray-600"></span>
            <h5 class="inline-flex items-center text-base text-gray-100 dark:text-gray-400 font-medium">
              <FaChalkboardTeacher size={24} className="mx-2" /> Student Bot
            </h5>
          </div>

          <div class={`grid overflow-y-scroll grid-cols-3 h-[640px] gap-4 p-4 lg:grid-cols-4`}>
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
          </div>
        </div>
        {/**TEACHER BOT */}
        <div
          class={`fixed w-1/4 bg-white border-t border-x border-gray-200 rounded-t-lg dark:border-gray-700 dark:bg-gray-800 transition-transform right-24  ${showTeacherDrawer? "-bottom-[640px]":"bottom-0"}`}
        >
          <div
            class="p-4 w-full rounded-t-lg bg-primary-500 cursor-pointer hover:bg-primary-500 "
            onClick={() => setShowTeacherDrawer(!showTeacherDrawer)}
          >
            <span class="absolute w-8 h-1 -translate-x-1/2 bg-gray-100 rounded-lg top-3 left-1/2 dark:bg-gray-600"></span>
            <h5 class="inline-flex items-center text-base text-gray-100 dark:text-gray-400 font-medium">
              <FaChalkboardTeacher size={24} className="mx-2" /> Teacher Bot
            </h5>
          </div>

          <div class={`grid overflow-y-scroll grid-cols-3 h-[640px] gap-4 p-4 lg:grid-cols-4`}>
           Content
          </div>
        </div>
      </div>
    </div>
  );
}
