import React, { useState } from 'react'

function Header() {
    const[isOpen,setISopen]=useState(false)
    const handleISopen=()=>{
setISopen(true)
    }
    const handanleClose=()=>{
        setISopen(false)
            }
  return (
    <div className='bg-ruwaColor p-5 flex justify-between text-white'>
        <h1 className='font-bold text-lg sm:text-4xl'>E-commerce</h1>
        <i style={{display:isOpen === true ? "none" :""}} onClick={handleISopen} class="fa-solid fa-bars text-3xl absolute right-2  sm:hidden"></i>
        <i style={{display:isOpen ===true ? 'block' :'none'}} onClick={handanleClose} class="fa-solid fa-x text-2xl text-white absolute right-2 hidden"></i>
        <div className=''>
<ul style={{display:isOpen===true ? 'block' :''}} className='hidden  sm:flex sm:flex-row sm:gap-20 gap-20 sm:mt-0 mt-10  text-3xl sm:text-4xl flex-col sm:space-y-0 space-y-6'>
<li>Home</li>
<li>About</li>
<li>Contact Us</li>
</ul>
        </div>
        <ol className='mr-10'> 
            <li className='text-3xl '>
            <i class="fa-solid fa-cart-shopping"></i>
            </li>
        </ol>
    </div>
  )
}

export default Header