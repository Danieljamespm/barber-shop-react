import React, {useState} from 'react'
import Logo from "./Logo"
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    
    <nav className='bg-black fixed w-full bg-opacity-50 z-40'>
      <ul className='flex justify-between lg:justify-around items-center w-full text-slate-50 p-2 lg:px-32 text-[12px] font-light tracking-widest font-oswald mx-auto hover:duration-500'>
        <li className='hidden lg:flex hover:text-[#bb9e86] hover:duration-1000'><a href='#'>HOME</a></li>
        <li className='hidden lg:flex hover:text-[#bb9e86] hover:duration-1000'><a href='#aboutus'>ABOUT US</a></li>
        <li className='hidden lg:flex hover:text-[#bb9e86] hover:duration-1000'><a href='#services'>SERVICES</a></li>
        <li className='hidden lg:flex hover:text-[#bb9e86] hover:duration-1000'><a href='#reviews'>TESTIMONIALS</a></li>
        <li className='hidden lg:flex hover:text-[#bb9e86] hover:duration-1000'><a href='#team'>OUR TEAM</a></li>
        <li className='w-28'><Logo/></li>
        <li className='hidden lg:flex hover:text-[#bb9e86] hover:duration-1000'><a href='#pricing'>PRICING</a></li>
        <li className='hidden lg:flex hover:text-[#bb9e86] hover:duration-1000'><a href='#appointment'>APPOINTMENT</a></li>
        <li className='hidden lg:flex hover:text-[#bb9e86] hover:duration-1000'><a href='#gallery'>GALLERY</a></li>
        <li className='hidden lg:flex hover:text-[#bb9e86] hover:duration-1000'><a href='#joinus'>JOIN US</a></li>
        <li className='hidden lg:flex hover:text-[#bb9e86] hover:duration-1000'><a href='#contact'>CONTACT US</a></li>
        
        <div onClick={handleNav} className='lg:hidden'>
          
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} /> }
        
      </div>
      </ul>

      <div className={nav ? 'fixed left-2 top-20 w-[30%] border-r border-[#bb9e86] h-[48%] bg-[#bb9e86] text-[10px] font-oswald ease-in-out duration-500' : 'fixed left-[-100%]' }>
        <ul className='mx-4 text-white'>
        <li className='p-2 border-b border-gray-500 hover:text-gray-500 hover:duration-700'><a href='#'>HOME</a></li>
        <li className='p-2 border-b border-gray-500 hover:text-gray-500 hover:duration-700'><a href='#aboutus'>ABOUT US</a></li>
        <li className='p-2 border-b border-gray-500 hover:text-gray-500 hover:duration-700'><a href='#services'>SERVICES</a></li>
        <li className='p-2 border-b border-gray-500 hover:text-gray-500 hover:duration-700'><a href='#reviews'>TESTIMONIALS</a></li>
        <li className='p-2 border-b border-gray-500 hover:text-gray-500 hover:duration-700'><a href='#team'>OUR TEAM</a></li>
        <li className='p-2 border-b border-gray-500 hover:text-gray-500 hover:duration-700'><a href='#pricing'>PRICING</a></li>
        <li className='p-2 border-b border-gray-500 hover:text-gray-500 hover:duration-700'><a href='#appointment'>APPOINTMENT</a></li>
        <li className='p-2 border-b border-gray-500 hover:text-gray-500 hover:duration-700'><a href='#gallery'>GALLERY</a></li>
        <li className='p-2 border-b border-gray-500 hover:text-gray-500 hover:duration-700'><a href='#joinus'>JOIN US</a></li>
        <li className='p-2 hover:text-gray-500 hover:duration-700'><a href='#contact'>CONTACT US</a></li>
        </ul>
      </div>

    </nav>


  )
}

export default Navbar