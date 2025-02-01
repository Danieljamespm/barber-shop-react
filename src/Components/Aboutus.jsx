import React from 'react'
import Faces from '../assets/about-us-image.png'
const Aboutus = () => {
  return (
    <div id='aboutus' className='w-full bg-white py-8 px-4 scroll-smooth'>
        <div className='maw-w-[1240px] mx-auto grid md:grid-cols-2 font-oswald md:px-16'>
            <div className='flex flex-col justify-center'>
 
            <p className='text-xl text-[#D19D64] pt-10 mb-2 md:py-2'>THE UNIQUE STORY</p>
            
            <h1 className='text-3xl sm:text-5xl font-bold'>52 YEARS OF EXPERIENCE</h1>
            <hr className='w-20 h-1 bg-[#D19D64] border-0 rounded mb-10 mt-8' />

          
            
            <p className='text-lg pb-8 text-balance tracking-widest uppercase text-clip'>Welcome to Vintage Cuts, where tradition meets precision. With over 52 years of expertise, we take pride in offering a timeless experience in men's grooming. Specializing in vintage haircuts and expert beard trims, our skilled barbers combine old-school techniques with a modern touch, ensuring every visit feels like stepping back into an era of refined craftsmanship.</p>
            
            <p className='text-md text-balance tracking-widest pb-10 font-Opensans font-light'>Since opening our doors, we’ve built a reputation not just for skill, but for an atmosphere where authenticity, attention to detail, and true craftsmanship reign supreme. Whether you're looking for a classic pompadour, a clean fade, or a beard that’s sharp and well-groomed, we’ve got you covered. Our barbers are passionate about their craft, trained in vintage styles while always staying current with the latest trends. At Vintage Cuts, we don’t just cut hair; we create lasting impressions.
            <br/>
            Join us for a grooming experience that’s more than just a haircut – it’s a tradition.</p>
            </div>
            <img className='w-[600px]  mx-auto mt-5 ' src={Faces} alt="two haircuts" />
        </div>
        
           


        <button className='bg-[#D19D64] text-black px-7 py-3 m-5 md:mx-32 text-xs font-oswald  hover:bg-black hover:text-[#D19D64] hover:duration-500 rounded-lg font-bold tracking-widest'>READ MORE</button>

        

    </div>
  )
}

export default Aboutus