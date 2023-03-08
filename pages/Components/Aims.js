import React from "react";
import Image from 'next/image'
import Hobbies from './images/hobbies.png'
const Aims = () => {
  return (
    <>
      <br />
      <br />
      <div className="text-3xl font-serif  text-green-400 w-1/4">
        My Aims & Objectives
        
      </div>

{/* making it main div */}
      <div className="flex justify-between ">
        {/* 1st div */}
        <div className="font-serif text-neutral-600 w-1/2 ">
          I am a passionate developer who always look to work with new
          technologies and love to contribute for some betterment in the world.Also
          I have a versatile personality as because of my experiences in life
          and diverse hobbies that make me diverse.
        
        {/* main div div */}
       
        <div className="text-xl font-serif text-green-400 pt-8 ">
          <div className="text-3xl ">-- My hobbies are:</div>
          <ul className="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400 ">
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>
                Book Reading{" "}
                <span className="font-semibold text-gray-900">
                  (Self Help Books)
                </span>
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>
                Volunteering{" "}
                <span className="font-semibold text-gray-900">
                  (Social Activities)
                </span>
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>
                Cellphone Photography{" "}
                <span className="font-semibold text-gray-900 "> (Editing)</span>
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>
                Writing{" "}
                <span className="font-semibold text-gray-900 dark:text-white"></span>
              </span>
            </li>

          
          </ul>
        </div>
        </div>


        <div className="  w-1/3 pr-16">

          <Image className="" src={Hobbies} style={{width:"40px",height:"40px"}} alt="Picture of the author"
         
      layout="responsive"  />
        </div>
        

      
      </div>




    </>
  );
};

export default Aims;
