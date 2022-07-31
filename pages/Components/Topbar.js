import Link from 'next/link'
import React from 'react'

const Topbar = () => {
  return (
<>
  <div className="bg-sky-200 sm:justify-evenly container flex justify-evenly p-2 sm:bg-purple-300 md:bg-green-300 ">
            
     {/* effect 2 */}
          <div className="btn relative pl-1/4  select-none inline-flex items-center justify-start  transition-all  rounded  group ">
          {/* purple box */}
          <span className="w-0 h-0 rounded bg-purple-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
          <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
            <Link href="/#Introduction">Home Page</Link>
          </span>
          </div>

{/* 2nd elem */}

          <div className="btn relative pl-1/4   select-none inline-flex items-center justify-start  transition-all  rounded  group" >
          {/* purple box */}
          <span className="w-0 h-0 rounded bg-purple-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
          <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
          <Link href="/#Expertise">Expertise</Link>
          </span>
          </div>


          <div className="btn relative pl-1/4  select-none inline-flex items-center justify-start  transition-all  rounded  group" >
          {/* purple box */}
          <span className="w-0 h-0 rounded bg-purple-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
          <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
          <Link href="/#Projects">My Projects</Link>
          </span>
          </div>


          <div className="btn relative pl-1/4  select-none inline-flex items-center justify-start  transition-all  rounded  group" >
          {/* purple box */}
          <span className="w-0 h-0 rounded bg-purple-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
          <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
          <Link href="/#ContactUs">Contact Us</Link>
          </span>
          </div>





       
    </div>
    
    
    
    </>
  )
}

export default Topbar

// You have to use npm run dev

//  These scripts refer to the different stages of developing an application:

// dev - Runs next dev which starts Next.js in development mode

//  build - Runs next build which builds the application for production usage

//  start - Runs next start which starts a Next.js production server

//                  ----------use npm run build  then npm run start------------