import React,{useState,useEffect} from 'react'
import Lottie from 'lottie-react'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import iotAnimation from '../assets/iot.json'
import engineersAnimation from '../assets/engineers.json'
import ReactTypingEffect from 'react-typing-effect'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const [lan, setLan] = useState('bangla')
    const navigator=useNavigate()
    useEffect(() => {
        if (localStorage.getItem('language') === 'english') {
            setLan('english')
        } else {
            setLan('bangla')
        }
    }, [])
    return (
        <div className="row ">

        <Navbar />

        <div class="bg-white bg-pink-200 dark:bg-gray-900">
            <div class="gap-8 h-screen items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <Lottie animationData={engineersAnimation} />
                <div class="mt-4 md:mt-0">
                    {lan === 'english' && <h2 class="mb-4 text-center md:text-left text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"> A platform for <span class="text-amber-600 dark:text-amber-500">Engineering Students </span> and <span class="text-amber-600 dark:text-amber-500">professionals</span> around the country </h2>}
                    {lan === 'bangla' && <h2 class="mb-4 text-center md:text-left text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">লক্ষাধিক  <span class="text-amber-600 dark:text-amber-500"> বাংলাদেশি ইঞ্জিনিয়রদের জন্য </span> একটি প্লাটফর্ম  </h2>}
                    {lan == "english" && <p class="mb-6 text-center md:text-left  font-light text-gray-500 md:text-lg dark:text-gray-400">Buldr is a platform for  Bangladeshi engineering students and professionals around the country. We work with engineers to make them work-ready through training, showcasing, monetizing and provide them placements in companies nationwide</p>}
                    {lan == "bangla" && <p class="mb-6 text-center md:text-left  font-light text-gray-500 md:text-lg dark:text-gray-400">বিল্ডার হল সারা দেশে ইঞ্জিনিয়ারিং ছাত্র ও প্রফেশনালদের একটি প্ল্যাটফর্ম। আমরা ইঞ্জিনিয়ারদের নিয়ে কাজ করি যাতে তারা প্রশিক্ষণের এবং প্রজেক্ট শোকেসএর মাধ্যমে কাজ করার জন্য প্রস্তুত করা হয় এবং তাদের দেশব্যাপী কোম্পানিতে নিয়োগ নিশিত করা হয়  </p>}
                    {lan == "english" && <a href="#" class="inline-flex text-center items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900" onClick={()=>navigator("/dashboard")}>
                        Get started
                        <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>}
                    {lan == "bangla" && <a href="#" class="inline-flex text-center items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900" onClick={()=>navigator("/dashboard")}>
                        শুরু করো
                        <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>}
                </div>
            </div>
        </div>
        <div class="bg-gray-200 dark:bg-slate-700">
            <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img class="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image" />
                <img class="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image" />
                <div class="mt-4 md:mt-0">
                    {lan == "english" && <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We teach and connect you with companies</h2>}
                    {lan == "english" && <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">You can follow our learning tracks online and offline to get placed into companies</p>}
                    {lan == "bangla" && <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">আমরা আপনাকে শিক্ষার মাধ্যমে কর্মসংস্থান গড়ে তুলতে সাহায্য করি</h2>}
                    {lan == "bangla" && <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">আপনি শেখা শুরু করতে এবং আমাদের সাথে সংযুক্ত সংস্থাগুলিতে চাকরি পেতে আমাদের ট্র্যাকগুলি অনুসরণ করতে পারেন</p>}
                </div>
            </div>
        </div>
        <div class="max-w-screen px-4 py-8 bg-amber-200  mx-auto text-center lg:py-16 lg:px-6 dark:bg-amber-700">
           {lan=="english" && <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl md:text-4xl font-extrabold">4+</dt>
                    <dd class="font-light text-gray-500 dark:text-gray-400">Course Tracks</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl md:text-4xl font-extrabold">525</dt>
                    <dd class="font-light text-gray-500 dark:text-gray-400">Reached</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl md:text-4xl font-extrabold">7+</dt>
                    <dd class="font-light text-gray-500 dark:text-gray-400">Organizations</dd>
                </div>
            </dl>}
           {lan=="bangla" && <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl md:text-4xl font-extrabold">4+</dt>
                    <dd class="font-light text-gray-500 dark:text-gray-400">কোর্স ট্র্যাক</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl md:text-4xl font-extrabold">500+</dt>
                    <dd class="font-light text-gray-500 dark:text-gray-400">পৌঁছেছে</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl md:text-4xl font-extrabold">50+</dt>
                    <dd class="font-light text-gray-500 dark:text-gray-400">সংস্থাগুলি</dd>
                </div>
            </dl>}
        </div>

        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                {lan=="english" && <div class="mx-auto max-w-screen-sm">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Testimonials</h2>
                    <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Listen about us from our users themselves</p>
                </div>}
                {lan=="bangla" && <div class="mx-auto max-w-screen-sm">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">আমাদের সম্পর্কে মতামত </h2>
                    <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">আমাদের ব্যবহারকারীদের নিজেদের কাছ থেকে আমাদের সম্পর্কে শুনুন</p>
                </div>}
                <div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
                    <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                        {lan == "english" && <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <p class="my-4">"As an intersex individual in Bangladesh, I was struggling to find my identity and purpose until I discovered Mukti's courses. Their inclusive and supportive environment empowered me to embrace my uniqueness and develop my lifestyle. Thanks to Mukti, I now feel confident and equipped to navigate life with newfound clarity."</p>
                        </blockquote>}
                        {lan == "bangla" && <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <p class="my-4">"বাংলাদেশে একজন আন্তঃলিঙ্গ ব্যক্তি হিসাবে, আমি মুক্তির কোর্সগুলি আবিষ্কার না হওয়া পর্যন্ত আমার পরিচয় এবং উদ্দেশ্য খুঁজে পেতে সংগ্রাম করছিলাম। তাদের অন্তর্ভুক্তিমূলক এবং সহায়ক পরিবেশ আমাকে আমার স্বতন্ত্রতা গ্রহণ করতে এবং আমার জীবনযাত্রার বিকাশ করতে সক্ষম করেছে। মুক্তিকে ধন্যবাদ, আমি এখন আত্মবিশ্বাসী বোধ করছি এবং নতুন স্বচ্ছতার সাথে জীবন নেভিগেট করতে সজ্জিত।"</p>
                        </blockquote>}
                        <figcaption class="flex justify-center items-center space-x-3">
                            <img class="w-9 h-9 rounded-full" src="https://i.postimg.cc/Jhzkj5cj/image.png" alt="profile picture" />
                            <div class="space-y-0.5 font-medium dark:text-white text-left">
                                {lan == "english" && <div>Anonymous</div>}
                                {lan == "english" && <div class="text-sm font-light text-gray-500 dark:text-gray-400"> Bangladesh</div>}
                                {lan == "bangla" && <div>বেনামী</div>}
                                {lan == "bangla" && <div class="text-sm font-light text-gray-500 dark:text-gray-400"> বাংলাদেশ</div>}
                            </div>
                        </figcaption>
                    </figure>
                    <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                        {lan == "english" && <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <p class="my-4">"Mukti has been a life-changing experience for me as an intersex person in Bangladesh. Their courses not only provided valuable knowledge but also fostered a sense of belonging and acceptance. Through Mukti, I've grown both personally and professionally, and I'm grateful for the positive impact they've had on my life." </p>
                        </blockquote>}
                        {lan == "bangla" && <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <p class="my-4">"মুক্তি বাংলাদেশে একজন আন্তঃলিঙ্গ ব্যক্তি হিসাবে আমার জন্য একটি জীবন-পরিবর্তনকারী অভিজ্ঞতা। তাদের কোর্সগুলি শুধুমাত্র মূল্যবান জ্ঞানই প্রদান করেনি, সেই সাথে আত্মীয়তা ও গ্রহণযোগ্যতার বোধও গড়ে তুলেছে। মুক্তির মাধ্যমে, আমি ব্যক্তিগতভাবে এবং পেশাগতভাবে বেড়ে উঠেছি, এবং তারা আমার জীবনে যে ইতিবাচক প্রভাব ফেলেছে তার জন্য আমি কৃতজ্ঞ।"</p>
                        </blockquote>}
                        <figcaption class="flex justify-center items-center space-x-3">
                            <img class="w-9 h-9 rounded-full" src="https://i.postimg.cc/X7Pmn07P/image.png" alt="profile picture" />
                            <div class="space-y-0.5 font-medium dark:text-white text-left">
                                {lan == "english" && <div>Ayesha Rahman</div>}
                                {lan == "english" && <div class="text-sm font-light text-gray-500 dark:text-gray-400"> Dhaka, Bangladesh</div>}
                                {lan == "bangla" && <div>আয়েশা রহমান</div>}
                                {lan == "bangla" && <div class="text-sm font-light text-gray-500 dark:text-gray-400"> ঢাকা, বাংলাদেশ</div>}
                            </div>
                        </figcaption>
                    </figure>
                   

                </div>
                <div class="text-center">
                    <a href="#" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Show more...</a>
                </div>
            </div>
        </section>

        {/* <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    {lan == "english" && <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>}
                    {lan == "bangla" && <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">আমাদের দল</h2>}
                    {lan == "english" && <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Meet our dynamic team who are here to help you at each step of your journey</p>}
                    {lan == "bangla" && <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">আমাদের প্রগতিশীল দলের সাথে পরিচিত হোন, যারা আপনার যাত্রার প্রতিটি ধাপে আপনাকে সাহায্য করার জন্য এখানে রয়েছে</p>}
                </div>
                <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" style={{ width: "200px" }} src="https://i.postimg.cc/9F3DY251/image.png" alt="Nashia Alam Liana" />
                        </a>
                        <div class="p-5">
                            <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {lan == "english" && <a href="#">Nashia Alam Liana</a>}
                                {lan == "bangla" && <a href="#">নাশিয়া আলম লিয়ানা </a>}
                            </h3>
                            {lan == "english" && <span class="text-gray-500 dark:text-gray-400">CEO and Marketing Head</span>}
                            {lan == "bangla" && <span class="text-gray-500 dark:text-gray-400">সিইও</span>}
                            {lan == "english" && <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Managing the marketing, financial and overall business of the company</p>}
                            {lan == "bangla" && <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">মার্কেটিং, ফিনান্স ও সর্বোপরি ব্যবসা পরিচালনা </p>}
                            <ul class="flex space-x-4 sm:mt-0">
                                <li>
                                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" style={{ width: "200px" }} src="https://i.postimg.cc/50rg9jdK/image.png" alt="Salman Sayeed" />
                        </a>
                        <div class="p-5">
                            <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {lan == "english" && <a href="#">Salman Sayeed</a>}
                                {lan == "bangla" && <a href="#">সালমান সাঈদ</a>}
                            </h3>
                            {lan == "english" && <span class="text-gray-500 dark:text-gray-400">Software Development and Operations Head</span>}
                            {lan == "bangla" && <span class="text-gray-500 dark:text-gray-400">সিটিও</span>}
                            {lan == "english" && <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Developing with industry standard protocols to create the best possible experience</p>}
                            {lan == "bangla" && <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">সফটওয়্যার নির্মান, রক্ষণাবেক্ষণ ও অপারেশনস  পরিচালনার দায়িত্বে </p>}
                            <ul class="flex space-x-4 sm:mt-0">
                                <li>
                                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                         <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                 

                </div>
            </div>
        </section> */}

        <Footer />
    </div>

    )
}
