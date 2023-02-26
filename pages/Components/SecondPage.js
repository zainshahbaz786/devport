import React from 'react'




const SecondPage = () => {
  return (
    <>


   <div className='font-serif text-green-400 text-3xl bg-blue-200 justify-center text-center font-medium'>
    Things I Love
    </div>
    {/* main div */}
        <div  className='bg-layers flex p-1/5 justify-evenly w4/5' > 

{/* first div */}
                


<div className="block p-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Front End</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400"> I&apos;m more front end focused and love to work with React JS as well as pure HTML, CSS.
                                        Also pretty good in Angular components as well </p>
</div>



{/* second div */}
                    

<div className="block p-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">JavaScript</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400"> I just extremely love javascript, I cant even express how much I love javascript with just a few lines.
                                  </p>
</div>

{/* 3rd div */}
                    

                    

                    <div className="block p-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Creative Coding</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">  I love creative coding because I do both coding & designing. making beautiful art with code is very satisfying to me.
                                  </p>
</div>


        </div>
    
    <br/>
    <br/>
    <br/>
    
    
    
    
    
    </>
  )
}

export default SecondPage