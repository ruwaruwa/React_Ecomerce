import React from 'react'

function Hero() {
  return (
    <div className=' h-[400px] bg- flex justify-between px-20'>
         {/* bg-[url(https://img.freepik.com/free-photo/concentrated-young-couple-standing-near-shelves-with-canned-goods_74855-3239.jpg?size=626&ext=jpg&uid=R117727527&ga=GA1.2.1324558945.1701195143&semt=sph)] */}
        
       
       
        <div  className='grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-10'>

        <div className='h-[500px]'>
        <h1 className='mt-10  text-3xl sm:text-5xl font-bold'>Best Place for shopping<br></br> in your area</h1>
<p className='sm:mt-8 sm:text-2xl'>Lorem ero tempora neque nobis, velit earum<br></br>
     accusamus tempore at perferendis iure debitis.</p>
<button className='sm:text-3xl rounded text-white bg-ruwaColor px-10 py-3 mt-4'>Explore More</button>
        </div>
<img className='rounded-xl sm:h-[350px] w-full sm:mt-10' src='https://img.freepik.com/free-photo/concentrated-young-couple-standing-near-shelves-with-canned-goods_74855-3239.jpg?size=626&ext=jpg&uid=R117727527&ga=GA1.2.1324558945.1701195143&semt=sph'></img>
     
        </div>
    </div>
  )
}

export default Hero