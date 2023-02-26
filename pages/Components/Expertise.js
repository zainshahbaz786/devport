import React from 'react'



const Expertise = () => {
  return (
    <>
    <div className="pt-10 text-sm text-slate-400">
            <a href="#" className="">
              02---Expertise
            </a>
          </div>
          <div className="text-3xl font-serif text-green-400">
            Things I&apos;m Good at.
          </div>


          <div className='font-serif text-neutral-600 w-1/3 '>
          I am a creative, enthusiastic, and ambitious developer with expertise in user interface design. 
          I am passionate about creating simple and elegant solutions that make complex tasks easy for users to execute.
          </div>


{/* div of language, frameworks and platforms */}
<div className='flex justify-evenly mt-4' >

{/* 1st div */}
    <div className=' w-1/4  '>
        <div className='text-lg font-medium border-4 border-indigo-200 border-l-indigo-500 '>Languages</div>
        <div className='font-serif text-neutral-600  '>
        I mostly work with Javascript and feel myself quite good at web technologies like HTML/CSS, TailwindCSS, TypeScript and Javascript.
         But, I also have worked with Python(In Artificial Intelligence), Java(In Mobile Computing), C++ and C#(For .NET Applications).



        </div>


    </div>
   
{/* second div */}
    <div className='w-1/4 '>
      <div className='text-lg font-medium border-4 border-indigo-500/50'>Frameworks</div>
      <div className='font-serif text-neutral-600'>
      I look at frameworks as just a tool to get things done and thats why I am always open to different
       frameworks. Some of the technologies 
      I have worked with include, Angular, React JS, TailwindCSS, Bootstrap, JQuery, .NET ,Next JS and ASP.NET.


      </div>

    </div>
    {/* 3rd div */}
    <div className='w-1/4 '>
        <div className='text-lg font-medium border-4 border-indigo-200 border-r-indigo-500'>Platforms & Tools</div>
        <div className='font-serif text-neutral-600'>Some of the platforms & tools I use regularly 
        include Figma, Git, Github, VsCode,Visual Studio. I use Windows as primary OS but had been a great 
        admirer of Ubuntu OS as 
        for long time.</div>

    </div>



</div>

<br/>
<br/>
<br/>
{/* <div className="text-2xl font-serif text-green-400 w-1/3">
            Additional Skillsets I worked with.
</div>

    */}
    
    
    
    
    
    
    </>
  )
}

export default Expertise