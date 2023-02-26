import React from 'react'
import Image from 'next/image'
import Aims from './Aims'





const Projects = () => {
  return (
    <>
 
    <div className="pt-10 text-sm text-slate-400">
            <a href="#" className="">
              03---Some Highlighted Projects
            </a>
          </div>
          <div className="text-3xl font-serif text-green-400 w-1/4">
            Programming Projects
            <br/>
            <br/>
          </div>

          {/* cards of project */}
    <div  className='flex order-3 justify-evenly'>
{/* start of 1st card */}

<div className="max-w-sm w-1/3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-300 select-none"> 
    <a href="#">
        {/* <Image className="rounded-t-lg" src="/images/zaindp.jpeg" width="150px" height="150px" alt=""/> */}
    </a>
    <div className="p-3">
       
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  text-center">
                All Essentials</h5>
        
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Final Year Project based on MERN based technology.Here registered users are stored using MogoDB.Static data is diplayed on the website.As Backend is used for data synchonizing</p>
        <div className='text-center justify-center'>
        <a href="https://github.com/zainshahbaz786/All-Essentials-FYP" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Github Repo Link
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>

        {/* for viewing video */}
   
        </div>
    </div>
</div>


{/* end of first card */}



<div className="max-w-sm w-1/3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-300 select-none ">
    <a href="#">
        {/* <Image className="rounded-t-lg" src="/images/zaindp.jpeg" width="150px" height="150px" alt=""/> */}
    </a>
    <div className="p-3">
        
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Restaurant App on React JS</h5>
        
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 select-none">This React App show the static data of meal of Breakfast , Lunch , Dinner and All with details with an attractive User Interface. As this website is responsive as well </p>
        <div className='text-center justify-center'>
        <a href="https://github.com/zainshahbaz786/Resturant-App-on-React" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Github Repo Link
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
          {/* for viewing video */}
      
        </div>
    </div>
</div>

{/* end of second card */}

<div className="max-w-sm w-1/3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-300 select-none">
    <a href="#">
        {/* <Image className="rounded-t-lg" src="/images/zaindp.jpeg" width="150px" height="150px" alt=""/> */}
    </a>
    <div className="p-3">
        
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Virtual Doctor</h5>
        
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">It is desktop application based on .NET technology that contain database of doctors. This desktop application also used ML  for predicting the disease from the symptoms.</p>
        <div className='text-center justify-center'>
        <a href="https://github.com/zainshahbaz786/Virtual-Doctor" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Github Repo Link
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
      
          {/* for viewing video */}
    
        </div>
    </div>
</div>

{/* end of 3rd card */}


    </div>
<br/>
<br/>
    <div  className='flex order-3 justify-evenly'>
{/* Second Row 1st card */}

<div className="max-w-sm w-1/3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-300 select-none">
    <a href="#">
        {/* <Image className="rounded-t-lg" src="/images/zaindp.jpeg" width="150px" height="150px" alt=""/> */}
    </a>
    <div className="p-3">
        
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Customize It </h5>
        
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Interior Designing App  based on superimposing feature on the Image with the store of home accessories.It provide facility of taking pic of room and try it by superimposing it</p>
        <div className='text-center justify-center'>
        <a href="https://github.com/zainshahbaz786/Customize-It" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Github Repo Link
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
          {/* for viewing video */}
     
        </div>
    </div>
</div>

{/* Second Row 2nd card */}

<div className="max-w-sm w-1/3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-300 select-none">
    <a href="#">
        {/* <Image className="rounded-t-lg" src="/images/zaindp.jpeg" width="150px" height="150px" alt=""/> */}
    </a>
    <div className="p-3">
        
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Quote Fetcher </h5>
        
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A Quote Fetching App using Next JS that randomly suggest quote on the screen as for the pupose of showing something mood changing and creative act.</p>
      <div className='text-center justify-center'>
        <a href="https://github.com/zainshahbaz786/quote-fetcher" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Github Repo Link
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
          {/* for viewing video */}
 
        </div>
    </div>
</div>


{/* Second Row 3rd card */}

<div className="max-w-sm w-1/3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-300 select-none">
    <a href="#">
        {/* <Image className="rounded-t-lg" src="/images/zaindp.jpeg" width="150px" height="150px" alt=""/> */}
    </a>
    <div className="p-3">
        
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Developer Portfolio  </h5>
        
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A developer Portfolio website developed using Next JS and TailwindCSS with details of github repo and infromation.</p>
      <div className='text-center justify-center'>
        <a href="https://github.com/zainshahbaz786/devport" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Github Repo Link
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
          {/* for viewing video */}
    
        </div>
    </div>
</div>

</div>
          
    {/* <Aims/> */}
   
    </>
  )
}

export default Projects