import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from "react-router";
import Navigation from '../Components/Navigation'
import { useUserID } from "../Hooks/userContext";
import { AiTwotoneEdit } from 'react-icons/ai'
import { CgRemove } from 'react-icons/cg'
import { BsTextParagraph, BsFillImageFill, BsFillCameraVideoFill, BsCodeSquare } from 'react-icons/bs'
import Block from '../Components/Create/Block'
import { Modal, Label, TextInput, Checkbox, Button, Textarea, ToggleSwitch, Spinner } from 'flowbite-react'
import { current } from 'tailwindcss/colors'
import { ModalFooter } from 'flowbite-react/lib/esm/components/Modal/ModalFooter'
import { TAGS_URL, BASE_URL,PARAPHRASER_API } from '../Data/apiData'

export default function Create() {
    const navigate = useNavigate();

  const [type, setType] = useState("text")
  const buldrUser = useUserID();
  const [width, setWidth] = useState()
  const [titleDone, setTitleDone] = useState(false)
  const [subDone, setSubDone] = useState(false)
  const [backdropDone, setBackdropDone] = useState(false)
  const [title, setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")
  const [backdrop, setBackdrop] = useState()


  const [openImageModal, setOpenImageModal] = useState(false)
  const [openCodeModal, setOpenCodeModal] = useState(false)
  const [openTextModal, setOpenTextModal] = useState(false)
  const [openVideoModal, setOpenVideoModal] = useState(false)
  const [currentBlocks, setCurrentBlocks] = useState([])

  const [blockTitle, setBlockTitle] = useState("")
  const [blockContent, setBlockContent] = useState("")

  const [addPostToMarketplace, setAddPostToMarketplace] = useState(true)
  const [addPostToSocial, setAddPostToSocial] = useState(true)

  const [allTags, setAllTags] = useState([])
  const [tags, setTags] = useState([])
  const [loadingTags,setLoadingTags]=useState(true)

  const [loading,setLoading]=useState(false)
  const [generatedTexts,setGeneratedTexts]=useState([])
  const [generated,setGenerated]=useState([])
  const removeBlock = (idx) => {
    currentBlocks.splice(idx, 1)
    setCurrentBlocks([...currentBlocks])
  }
  const addBlock = (title, content, type) => {
    const obj = { title, content, type }
    setCurrentBlocks([...currentBlocks])
  }
  const getAllTags = async () => {
    const res = await axios.get(TAGS_URL)
   // console.log(res.data)
    setAllTags(res.data)

  }
  const RemoveAllTag = (index) => {
    delete allTags[index]
    let newTags = []
    allTags.forEach(a => {
      if (a) { newTags.push(a) }
    })
    setAllTags(newTags)
  }
  const RemoveTag = (index) => {
    delete tags[index]
    let newTags = []
    tags.forEach(a => {
      if (a) { newTags.push(a) }
    })
    setTags(newTags)
  }
  const uploadPost = async () => {
    const tgs=[]
    tags.forEach(a=>tgs.push(a.name))
    console.log(tgs)
    const res = await axios.post(BASE_URL+'/post',{
      "userID": buldrUser,
      "date": Date.now(),
      "title": title,
      "subtitle": subtitle,
      "image": backdrop,
      "marketplace": addPostToMarketplace,
      "social": addPostToSocial,
      "tags": tgs
    })
    

    const pid=await res.data.postID
    currentBlocks.forEach(async(a,idx)=>{
      const res = await axios.post(BASE_URL+'/postblock/'+pid,{
        "postID": pid,
        "type": a.type,
        "title":a.heading,
        "content": a.content,
        "serial": idx,
        "marketplace": true,
        "social": true
      })

    })
    alert("Post Uploaded")
    navigate('/social')
    
  }

  let endpoints = [
    TAGS_URL,
    'https://api.github.com/users/ejirocodes/repos',
    'https://api.github.com/users/ejirocodes/followers',
    'https://api.github.com/users/ejirocodes/following'
  ];

  const allRequests = async () => {
    axios.all(endpoints.map((promise) => axios.get(promise))).then(
      axios.spread((tagsRes, repos, followers, following) => {
        const tags = tagsRes.data
        setAllTags(tags)
        setLoadingTags(false)
        //console.log(tags)
       // console.log({ repos, followers, following });
      })
    )
  }
  const paraphraseText = async (value) => {
    setLoading(true)
    setGenerated(false)
    console.log(value)
    const res=await axios.get(`${PARAPHRASER_API}/prompt?prompt=${value}`)
    setGeneratedTexts(res.data.answer)
    console.log(res.data)
    setLoading(false)
    setGenerated(true)
}
  useEffect(() => {
    allRequests()
    setWidth(window.innerWidth)
  }, [])
  return (
    <div>
      <div className='w-screen dark:bg-slate-900'>
        <Navigation />
        {width <= 600 && <div className='flex z-10 md:hidden justify-center w-screen h-20 bg-gray-100 dark:bg-slate-800 fixed top-0' style={{ alignItems: "center" }}>
          <img width="50px" height="50px" src='https://i.postimg.cc/hGqFHfxB/Beige-Simple-One-Line-Butterfly-Events-Logo-removebg-preview.png' onClick={() => navigator("/")} />
          <h2 className='text-xl font-bold text-black font-title dark:text-gray-100'><span className='text-primary-500'>BULDR.</span> Create</h2>
        </div>}
        <div className="min-h-screen pl-4 mt-20 md:mx-24 md:mt-0 md:pl-24 pt-5 bg-base flex flex-col md:flex-col font-primary dark:bg-slate-900">
          <h2 className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white'>Create Project </h2>
          {/** Title */}
          <div class="md:mb-6 md:pr-20 pr-4">
            {!titleDone && <form>
              <div class="relative">
                <input type="search" id="search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder='Project Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={() => setTitleDone(true)}>Set</button>
              </div>
            </form>}
            {
              titleDone &&
              <div className="w-full flex flex-row gap-3 pr-20">
                <h2 className=' text-xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl dark:text-white'>{title}</h2>
                <AiTwotoneEdit size={24} onClick={() => setTitleDone(false)} />
              </div>
            }
          </div>
          {/** Subtitle */}
          <div class="md:mb-6 md:pr-20 pr-4">
            {!subDone && <form>
              <div class="relative">
                <input type="search" id="search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder='Project Subtitle' value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={() => setSubDone(true)}>Set</button>
              </div>
            </form>}
            {
              subDone &&
              <div className="w-full flex flex-row gap-3 pr-20">
                <h2 className='mb-4 text-md text-left font-normal leading-none tracking-tight text-gray-900  dark:text-white'>{subtitle}</h2>
                <AiTwotoneEdit size={24} onClick={() => setSubDone(false)} />
              </div>
            }
          </div>
          {/** Backdrop */}
          <div class="md:mb-6 md:pr-20 pr-4">
            {!backdropDone && <form>
              <div class="relative">
                <input type="search" id="search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder='Project backdrop' value={backdrop} onChange={(e) => setBackdrop(e.target.value)} />
                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={() => setSubDone(true)}>Set</button>
              </div>
            </form>}
            {
              backdropDone &&
              <div className="w-full flex flex-row gap-3 pr-20">
                <h2 className='mb-4 text-md text-left font-normal leading-none tracking-tight text-gray-900  dark:text-white'>{backdrop}</h2>
                <AiTwotoneEdit size={24} onClick={() => setBackdrop(false)} />
              </div>
            }
          </div>


          {/** Blocks */}
          {/* <div className="blocks mr-20">
              <Block type="text" heading="This is a heading" content={"Hello this is content. Hello this is content. Hello this is content. Hello this is content"}/>
              <Block type="video" heading="This is a heading" content={"https://www.youtube.com/embed/yAQqeRh0b3Y?autoplay=1&mute=1"}/>
              <Block type="code" heading="This is a heading" content={code}/>
              <Block type="image" heading="This is a heading" content={["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQp7sriUPfpF3LLtR7G1M2aLnyCnygm8FeMg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQp7sriUPfpF3LLtR7G1M2aLnyCnygm8FeMg&usqp=CAU"]}/>
            </div> */}


          {/** Buttons & Button Groups */}
          <div className="w-full flex items-center">
            <div class="inline-flex rounded-md shadow-sm" role="group">
              <button onClick={() => setOpenTextModal(true)} type="button" class="inline-flex gap-1 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-primary-500 dark:focus:text-white">
                <BsTextParagraph size={16} /> Text<span className='hidden md:flex'> Block</span>
              </button>
              <button onClick={() => setOpenImageModal(true)} type="button" class="inline-flex gap-1 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-primary-500 dark:focus:text-white">
                <BsFillImageFill size={16} /> Image<span className='hidden md:flex'> Block</span>
              </button>
              <button onClick={() => setOpenVideoModal(true)} type="button" class="inline-flex gap-1 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200  hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-primary-500 dark:focus:text-white">
                <BsFillCameraVideoFill size={16} /> Video<span className='hidden md:flex'> Block</span>
              </button>

              <button onClick={() => setOpenCodeModal(true)} type="button" class="inline-flex gap-1 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-primary-500 dark:focus:text-white">
                <BsCodeSquare size={16} /> Code<span className='hidden md:flex'> Block</span>
              </button>
            </div>

          </div>
          <div className="flex flex-col mb-4 mt-4">
            <label>Available Tags</label>
            <div className='flex my-2'>
              {!loadingTags && allTags.map((a, idx) => (
                <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  <span onClick={()=>{
                    setTags(tags=>[...tags,a])
                    RemoveAllTag(idx)
                  }} className={`bg-${a.color.color}-100 text-${a.color}-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-${a.color}-200 dark:text-${a.color}-800`}>
                    {a.name}

                  </span>
                </label>
              ))}
              {loadingTags && <div><Spinner/>Loading Tags...</div>}
            </div>
            <label>Set Tags</label>
            <div className='flex my-2'>
              {tags.map((a, idx) => (
                <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  <span className={`bg-${a.color.color}-100 text-${a.color}-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-${a.color}-200 dark:text-${a.color}-800`}>
                    {a.name}
                    <CgRemove onClick={()=>{
                      setAllTags(allTags=>[...allTags,a])
                      RemoveTag(idx)
                      }} className='dark:text-gray ml-1 dark:hover:text-white' />
                  </span>
                </label>
              ))}
            </div>
           
            <div className="flex flex-col md:flex-row">
              <ToggleSwitch className='md:mx-4 md:my-4 my-2' label="Add to marketplace" checked={addPostToMarketplace} onChange={() => setAddPostToMarketplace(!addPostToMarketplace)} />
              <ToggleSwitch className='md:mx-4 md:my-4 my-2' label="Add to social" checked={addPostToSocial} onChange={() => setAddPostToSocial(!addPostToSocial)} />
            </div>

             {/**BLOCKS */}
            {currentBlocks.map((a, idx) => (
              <Block idx={idx} type={a.type} heading={a.heading} content={a.content} rmvFunc={removeBlock} />
            ))}
            <div className="flex">
              <button type="button" onClick={async()=>{
                await uploadPost()
              }} class="text-white my-4 bg-primary-700 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create Project</button>
            </div>


          </div>
          



        </div>


        {/**Text MODAL */}
        <Modal show={openTextModal} aria-hidden="true" size="7xl" dismissible onClose={() => setOpenTextModal(false)}>
          <Modal.Header>Create Text Block ✍️</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <TextInput placeholder="Block Title" id="block-title-text" />
              <Textarea placeholder="Block Content" id="block-content-text" className='p-2' />
              {!loading && generated && <div className="">
                  {generatedTexts.map(a=>(
                    <div className='p-4 shadow-sm rounded-lg bg-gray-200 dark:bg-slate-800 mb-2'><p className='dark:text-white'>{a}</p></div>
                  ))}
              </div>}
              {loading && !generated && <div className="dark:text-white">
                  <Spinner/> Loading Texts
              </div>}
              <div className="flex">
              <Button className='mr-2' onClick={() => {paraphraseText(document.getElementById("block-content-text").value)}}>Paraphrase</Button>
              <Button onClick={() => {
                setCurrentBlocks(currentBlocks => [...currentBlocks, { type: "text", heading: document.getElementById("block-title-text").value, content: document.getElementById("block-content-text").value }])
                setOpenTextModal(false)
              }}>Save Block
              </Button>
              
              </div>
            </div>
          </Modal.Body>
        </Modal>


        {/**Image MODAL */}
        <Modal show={openImageModal} size="7xl" dismissible onClose={() => setOpenImageModal(false)}>
          <Modal.Header>Create Image Block 🌁</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <TextInput placeholder="Block Title" id="block-title-image" />
              <Textarea placeholder="Images (Comma Seperated)" id="block-content-image" className='p-2' />
              <Button onClick={() => {
                setCurrentBlocks(currentBlocks => [...currentBlocks, { type: "image", heading: document.getElementById("block-title-image").value, content: document.getElementById("block-content-image").value }])
                setOpenImageModal(false)
              }}>Save Block
              </Button>
            </div>
          </Modal.Body>
        </Modal>

        {/**Video MODAL */}
        <Modal show={openVideoModal} size="7xl" dismissible onClose={() => setOpenVideoModal(false)}>
          <Modal.Header>Create Video Block 📹</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <TextInput placeholder="Block Title" id="block-title-video" />
              <Textarea placeholder="Block Content" id="block-content-video" className='p-2' />
              <Button onClick={() => {
                setCurrentBlocks(currentBlocks => [...currentBlocks, { type: "video", heading: document.getElementById("block-title-video").value, content: document.getElementById("block-content-video").value }])
                setOpenVideoModal(false)
              }}>Save Block
              </Button>
            </div>
          </Modal.Body>
        </Modal>

        {/**Code MODAL */}
        <Modal show={openCodeModal} size="7xl" dismissible onClose={() => setOpenCodeModal(false)}>
          <Modal.Header>Create Code Block 💻</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <select id="block-title-code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option selected>Choose a language</option>
                <option value="cpp">C++</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="javascript">Javascript</option>
              </select>
              <Textarea placeholder="Block Content" id="block-content-code" className='p-2' />

              <Button onClick={() => {
                setCurrentBlocks(currentBlocks => [...currentBlocks, { type: "code", heading: document.getElementById("block-title-code").value, content: document.getElementById("block-content-code").value }])
                setOpenCodeModal(false)
              }}>Save Block
              </Button>
            </div>
          </Modal.Body>
        </Modal>



      </div>
    </div>
  )
}

