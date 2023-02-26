import React from "react";
import Image from "next/image";
import dp from "./images/zaindp2.jpg";
//import useDownloader from "react-use-downloader";
 //import myPDF from './Zain_Shahbaz.pdf';
 //import myCL from './Zain_CoverLetter.pdf';

const IntroPage = () => {
  

const fileUrl = "/Zain_Shahbaz.pdf";
const filename = "Zain_Shahbaz.pdf";



  function downldfile() {
    console.log("working...")
     download(fileUrl, filename)
  }
  return (
    <>

    

      <div className="justify-center relative   mt-10 flex  ">
        Hello, I&apos;m <br />
      </div>
      <div className="text-5xl  font-sans font-semibold  justify-center relative    flex">
        {" "}
        Zain Shahbaz
      </div>

      <div className="text-2xl  font-serif  justify-center   relative    flex">
        {" "}
        Front End Developer
        
      </div>
      <div className="justify-center flex pt-3 p-8">
        <a
          type="button" 
          className=" justify-center ring-offset-2 ring relative flex text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-500 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center "  download="Zain_Shahbaz.pdf" href="./Zain_Shahbaz.pdf"  >
        
          Download Resume
         
        </a>

        {/* <a
          type="button" 
          className="pr-10 justify-center ring-offset-2 ring relative flex text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-500 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center "  download="Zain_CoverLetter.pdf" href="./Zain_CoverLetter.pdf"  >
        
          Download Resume
         
        </a> */}

{/* 
        <a
          type="button"
          className=" justify-center ring-offset-2 ring relative flex text-gray-900 bg-gradient-to-r from-orange-400 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-green-400 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center "  download="Zain_CoverLetter.pdf" href={myCL} >
        
          Download Cover Letter
         
        </a> */}
      </div>


      {/* half page div */}
      <div className="flex  mb-5 ">
        <div className="w=1/2">
          <div className="pt-10 text-sm text-slate-400">
            <a href="#" className="">
              01---Welcome
            </a>
          </div>
          <div className="text-3xl font-serif text-green-400">
            Greetings Everyone,
          </div>
          <div className="font-serif text-neutral-600  ">
            Hi there, Im a self-taught passionate FrontEnd Web developer from
            Paksitan.
            <br />
            I know I&apos;m not successful enough, but I&apos;m passionate
            enough not to worry about success
            <br />
            Highly motivated to constantly develop my skills and grow
            professionally.
            <br />I am confident in my ability to come upwith innovative ideas
            for professional excellence.
          </div>
        </div>

        {/* second half page div */}
        <div className="flex justify-end w-1/2 ">
          <Image 
            src={dp}
            alt="Landscape picture"
            width={300}
            height={300}
            className="rounded-full border-double  object-contain"
          />
          
        </div>
      </div>

     
    </>
  );
};

export default IntroPage;
