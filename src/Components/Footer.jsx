import React from 'react'
import Logo from '../assets/barber-shop-logo-2.png'
import {FaEnvelopeOpen} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='w-full h-[600px] bg-[#191919]'>
        <img src={Logo} alt='barbershop logo' className='w-32 mx-auto pt-10' />
        <div>
            <ul className='text-white font-oswald text-[10px] font-light text-center pt-5 '>
                <li className='pb-2 hover:text-[#d19d64] hover:duration-500 hover:underline'><a href='#'>HOME</a></li>
                <li className='pb-2 hover:text-[#d19d64] hover:duration-500 hover:underline'><a href='#aboutus'>ABOUT US</a></li>
                <li className='pb-2 hover:text-[#d19d64] hover:duration-500 hover:underline'><a href='#services'>SERVICES</a></li>
                <li className='pb-2 hover:text-[#d19d64] hover:duration-500 hover:underline'><a href='#reviews'>TESTIMONIALS</a></li>
                <li className='pb-2 hover:text-[#d19d64] hover:duration-500 hover:underline'><a href='#team'>OUR TEAM</a></li>
                <li className='pb-2 hover:text-[#d19d64] hover:duration-500 hover:underline'><a href='#pricing'>PRICING</a></li>
                <li className='pb-2 hover:text-[#d19d64] hover:duration-500 hover:underline'><a href='#appointment'>APPOINTMENT</a></li>
                <li className='pb-2 hover:text-[#d19d64] hover:duration-500 hover:underline'><a href='#gallery'>GALLERY</a></li>
                <li className='pb-2 hover:text-[#d19d64] hover:duration-500 hover:underline'><a href='#joinus'>JOIN US</a></li>
                <li className='hover:text-[#d19d64] hover:duration-500 hover:underline'><a href='#contact'>CONTACT US</a></li>
            </ul>
        </div>
        <div className='pt-8'>
            <p className='text-center font-oswald text-white text-sm '>SUBSCRIBE TO US</p>
            <img className='w-[50px] mx-auto' src="./barber-scissors.png" alt="" />
            <p className='text-center text-[10px] text-gray-500'>Subscribe to our Newsletter to get a Gift Voucher</p>
            <div className='flex flex-row border border-white w-[320px] mx-auto '>
            <input type='email' placeholder='Enter your email' className='flex-grow ' />
            <button className='bg-[#d19d64] w-[25px] pl-1 hover:bg-gray-500 hover:text-white'><FaEnvelopeOpen/></button>
            </div>
        </div>
        
    </div>
  )
}

export default Footer