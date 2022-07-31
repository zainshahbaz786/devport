import React from "react";
import Image from "next/image";
import dp from "./images/zaindp2.jpg";
// import myPDF from './Zain Shahbaz.pdf';

const IntroPage = () => {
  return (
    <>
      <div className="justify-center relative mx-96  mt-10 flex  ">
        Hello, I&apos;m <br />
      </div>
      <div className="text-5xl  font-sans font-semibold justify-center relative mx-20   flex">
        {" "}
        Zain Shahbaz
      </div>

      <div className="text-2xl  font-serif  justify-center relative mx-20   flex">
        {" "}
        Front End Developer
        
      </div>
      <div className="justify-center flex pt-3">
        <button
          type="button"
          className=" justify-center ring-offset-2 ring relative flex text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Download Resume
          {/* <a href={myPDF} download="Zain_Shahbaz.pdf"> 
          Download Resume
          </a> */}
        </button>
      </div>
      {/* half page div */}
      <div className="flex ">
        <div>
          <div className="pt-10 text-sm text-slate-400">
            <a href="#" className="">
              01---Welcome
            </a>
          </div>
          <div className="text-3xl font-serif text-green-400">
            Greetings Everyone,
          </div>
          <div className="font-serif text-neutral-600">
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
        <div className="ml-40 mt-16">
          <Image
            src={dp}
            alt="Landscape picture"
            width={200}
            height={200}
            className="rounded-full"
          />
          {/* https://media-exp2.licdn.com/dms/image/C4D1BAQGBsG1LtBbBbA/company-background_10000/0/1579099145734?e=2147483647&v=beta&t=jB_90Bu2kMC6DDAP7cTuwG5P_U7eAPFJEbLxBMzXwas */}
        </div>
      </div>

     
    </>
  );
};

export default IntroPage;
