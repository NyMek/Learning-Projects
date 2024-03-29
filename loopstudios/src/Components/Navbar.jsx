import React, { useState } from 'react'

const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState(true);
  return (
    <div id='home' className='flex justify-between items-center md:px-[162px] px-[40px]  pt-[75px]'>
        <div>
            <a href="#home">
                <img src="/images/logo.svg" alt="logo" className='w-[148px] sm:w-[192px]'/>
            </a> 
        </div>
        <img src="/images/icon-hamburger.svg" alt="hamburger" className='w-[27px] h-[19px] ss:hidden' onClick={()=>setActiveMenu((prev) => !prev)}/>
        <div className='text-white text-[14px] sm:text-[15px] ss:flex justify-between sm:w-[385px] ss:w-[320px] hidden '>
                        <a href="#" className='menu-item'>About</a>
                        <a href="#" className='menu-item'>Careers</a>
                        <a href="#" className='menu-item'>Events</a>
                        <a href="#" className='menu-item'>Products</a>
                        <a href="#" className='menu-item'>Support</a>
                </div>
        { 
            activeMenu 
            ? 
                ""
            : 
                <div className='bg-black absolute inset-x-0 inset-y-0 sm:hidden'>
                    <div className=' flex justify-between items-start px-[40px]  pt-[75px] '>
                        <img src="/images/logo.svg" alt="logo" className='w-[148px] sm:w-[192px]'/>
                        
                        <img src="/images/icon-close.svg" alt="close" className='w-[25px] h-[25px] ss:hidden' onClick={()=>setActiveMenu((prev) => !prev)}/>
                    </div>
                    <div className='text-white text-[40px] ml-[50px] mt-[250px] flex flex-col justify-between font-josefin '>
                        <a href="#">About</a>
                        <a href="#">Careers</a>
                        <a href="#">Events</a>
                        <a href="#">Products</a>
                        <a href="#">Support</a>
                </div>
              </div>  
        } 
    </div>
  )
}

export default Navbar
