import React from 'react'
import Logo from '../assets/barber-shop-logo-2.png'

const Footer = () => {
  return (
    <div className='w-full h-[600px] bg-[#191919]'>
        <img src={Logo} alt='barbershop logo' className='w-32 mx-auto pt-10' />
        <div>
            <ul className='text-white'>
                <li><a href='#'>HOME</a></li>
                <li><a href='#aboutus'>ABOUT US</a></li>
                <li><a href='#services'>SERVICES</a></li>
                <li><a href='#reviews'>TESTIMONIALS</a></li>
                <li><a href='#team'>OUR TEAM</a></li>
                <li><a href='#pricing'>PRICING</a></li>
                <li><a href='#appointment'>APPOINTMENT</a></li>
                <li><a href='#gallery'>GALLERY</a></li>
                <li><a href='#joinus'>JOIN US</a></li>
                <li><a href='#contact'>CONTACT US</a></li>
            </ul>
        </div>
        
    </div>
  )
}

export default Footer