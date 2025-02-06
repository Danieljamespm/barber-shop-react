import React from 'react'
import Logo from '../assets/barber-shop-logo-2.png'
import {FaEnvelopeOpen} from "react-icons/fa"
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter, TiSocialYoutube, TiSocialGooglePlus } from "react-icons/ti"

const Footer = () => {
  return (
    <div className='w-full h-[670px] bg-[#191919]'>
        <img src={Logo} alt='barbershop logo' className='w-32 md:w-48 mx-auto pt-10 pb-4' />
        <div className='sm:flex justify-center'>
            <ul className='text-white font-oswald text-sm md:text-md font-light text-center pt-5 sm:flex sm:justify-between sm:w-[700px]'>
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
        <div className='pt-8 md:pt-12'>
            <p className='text-center font-oswald text-white text-sm md:text-xl pb-2'>SUBSCRIBE TO US</p>
            <img className='w-[50px] md:w-[70px] mx-auto pb-2' src="./barber-scissors.png" alt="" />
            <p className='text-center text-xs md:text-lg text-gray-500 pb-4'>Subscribe to our Newsletter to get a Gift Voucher</p>
            <div className='flex flex-row border border-gray-500 w-[350px] mx-auto '>
            <input type='email' placeholder='Enter your email' className='flex-grow bg-[#191919] text-xs py-2 indent-2 focus:outline-none caret-white font-Opensans' />
            <button className='bg-[#d19d64] w-[25px] pl-1 hover:bg-gray-500 hover:text-white'><FaEnvelopeOpen/></button>
            </div>
        </div>
        <div className='flex justify-evenly pt-5 w-[300px] mx-auto'>
            <div className='w-10 h-10 bg-[#191919] border border-white rounded-full flex justify-center items-center hover:bg-[#d19d64] cursor-pointer text-white'>
                <TiSocialFacebook/>
            </div>
            <div className='w-10 h-10 bg-[#191919] border border-white rounded-full flex justify-center items-center hover:bg-[#d19d64] cursor-pointer text-white'>
                <TiSocialInstagram/>
            </div>
            <div className='w-10 h-10 bg-[#191919] border border-white rounded-full flex justify-center items-center hover:bg-[#d19d64] cursor-pointer text-white'>
                <TiSocialTwitter/>
            </div>
            <div className='w-10 h-10 bg-[#191919] border border-white rounded-full flex justify-center items-center hover:bg-[#d19d64] cursor-pointer text-white'>
                <TiSocialGooglePlus/>
            </div>
            <div className='w-10 h-10 bg-[#191919] border border-white rounded-full flex justify-center items-center hover:bg-[#d19d64] cursor-pointer text-white'>
                <TiSocialYoutube/>
            </div>
        </div>

        <p className='text-center pt-5 font-oswald text-[10px] text-gray-500'>&copy; 2025 Made by<span className='text-[#d19d64]'> Danny Mettler</span></p>
        
    </div>
  )
}

export default Footer