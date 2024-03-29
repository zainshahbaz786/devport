import React from 'react'
import handshake from './images/shake.svg'





import linkedin from './images/linkedin2.png'
import gmail from './images/gmail2.png'
import github from './images/github2.png'
import Image from 'next/image'
const Connect = () => {

  function sendingMail(){
console.log("sending data.....")
const name = document.querySelector('#username').value
    const mail = document.querySelector('#email').value
    const msg = document.querySelector('#message').value
    // alert(`${name} ${mail} ${msg}`)
    window.open('mailto:zainjatt.zj@gmail.com?subject='+ `${name}` + '&body='+  `${msg}`+" For Further Contact, Mail is: "+`${mail}`);


  }


  return (
    
    <>


    
    <div className="pt-10 text-sm text-slate-400">
            <a href="#" className="">
              04---Contact Me
            </a>
    </div>

    <div className="text-3xl font-serif text-green-400 w-1/4">
            Let&apos;s Build Something Incredible Together.
          </div>
    
    <div className=' w-1/2 font-serif text-neutral-600'>Feel free to reach out if you&apos;re looking for a developer, have a question, or just want to connect.
    <br/>
    I always appreciate passionate developer who always look to work with new technologies 
    and love to contribute some betterment in the world.  
    </div>
    
   
    {/* <div className="text-2xl  font-serif  justify-center relative mx-20  flex ">
       
        Feel Free to Contact
      </div> */}
    
    {/* main divs of two divs */}
    
    <div className='flex justify-center  ' >
        {/* 1st div */}
      <div className=' sm:w-1/2 '>
      <Image className='object-contain'
      src={handshake}
      alt="Picture of the author"
      width="300px"
      height="300px"
      
    />
      </div>

<br/>
<br/>
{/* 2nd div */}
      <div className=' w-1/2   justify-center  text-center '>
        






<form onSubmit={sendingMail}>
<div className="mb-6 justify-center   ">
  <label htmlFor="username-success" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Your Name</label>
  <input type="text" id="username" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500  sm:w-1/2 p-2.5 dark:bg-green-100 dark:border-green-400 justify-center " placeholder="" />
  
 
</div>


<label htmlFor="email" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Your Email</label>
<input type="email" id="email" aria-describedby="helper-text-explanation" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500  sm:w-1/2 p-2.5 dark:bg-green-100 dark:border-green-400 justify-center" placeholder="" />



<br/>
<br/>
<label htmlFor="message" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Your Message</label>


{/* <textarea id="message" rows="4" className="block p-2.5 w-full block mb-2 text-sm font-medium text-green-700 dark:text-green-500" placeholder="Leave a comment..."></textarea> */}


<textarea type="text" id="email" aria-describedby="helper-text-explanation" className="w-full  bg-green-50 border border-green-500 text-green-900 placeholder-green-300 text-sm rounded-lg focus:ring-green-500 focus:border-green-500  sm:w-1/2 p-2.5 dark:bg-green-100 dark:border-green-400 justify-center" placeholder="" />


<br/>

<button  type="Submit"  className="text-white bg-green-400 border-black hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-black-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
  Send Message</button>


</form>



      </div>


    </div>
    
    
    
  {/* footer */}

  <div className='Footer bg-slate-100'>
  <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
    <div className="flex items-center justify-between">

    <div className="w-1/3  text-sm text-gray-500 sm:text-center md:text-center lg:text-center dark:text-gray-400 hover:text-green-600 hover:underline   ">Develop with 💚 by Zain Shahbaz
        </div>

       

        <div className="flex mt-2 space-x-0   w-1/3 justify-around mb-5">
            <a href="mailto:zainjatt.zj@gmail.com"  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"  rel="noopener noreferrer" target={"_blank"}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
            </a>


          
             <a href="https://www.instagram.com/zain__shahbaz/" rel="noopener noreferrer" target={"_blank"} className="text-gray-500 hover:text-gray-900 dark:hover:text-white" >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
            </a> 





            <a href="https://twitter.com/Pure_Banter007" rel="noopener noreferrer" target={"_blank"} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
            </a>
            <a href="https://github.com/zainshahbaz786" rel="noopener noreferrer" target={"_blank"}  className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </a>

            
           
        </div>
    </div>
    </div>
    

    
  
    
    </>
  )
}

export default Connect
