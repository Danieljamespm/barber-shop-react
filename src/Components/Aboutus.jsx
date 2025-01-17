import React from 'react'
import Faces from '../assets/about-us-image.png'
const Aboutus = () => {
  return (
    <div id='aboutus' className='w-full bg-white py-10 px-4 scroll-smooth'>
        <div className='maw-w-[1240px] mx-auto grid md:grid-cols-2 font-oswald md:px-32'>
            <div className='flex flex-col justify-center'>
            <p className='text-[10px] text-[#D19D64] py-2'>THE UNIQUE STORY</p>
            
            <h1 className='text-md sm:text-4xl font-bold'>52 YEARS OF EXPERIENCE</h1>
            <hr className='w-20 h-1 bg-[#D19D64] border-0 rounded mb-10 mt-8' />
            
            <p className='text-xs pb-8 text-balance tracking-wider uppercase text-clip'>Welcome to Vintage Cuts, where tradition meets precision. With over 52 years of expertise, we take pride in offering a timeless experience in men's grooming. Specializing in vintage haircuts and expert beard trims, our skilled barbers combine old-school techniques with a modern touch, ensuring every visit feels like stepping back into an era of refined craftsmanship.</p>
            
            <p className='text-[12px] text-balance tracking-wide pb-10'>Since opening our doors, we’ve built a reputation not just for skill, but for an atmosphere where authenticity, attention to detail, and true craftsmanship reign supreme. Whether you're looking for a classic pompadour, a clean fade, or a beard that’s sharp and well-groomed, we’ve got you covered. Our barbers are passionate about their craft, trained in vintage styles while always staying current with the latest trends. At Vintage Cuts, we don’t just cut hair; we create lasting impressions.
            <br/>
            Join us for a grooming experience that’s more than just a haircut – it’s a tradition.</p>
            </div>
            <img className='w-[400px]  mx-auto mt-5 ' src={Faces} alt="two haircuts" />
        </div>
        
           

        <button className='bg-[#D19D64] text-black px-4 py-3 m-5 md:mx-32 text-[10px] hover:bg-black hover:text-[#D19D64] hover:duration-500 rounded-lg font-bold tracking-widest'>READ MORE</button>

    </div>
  )
}

export default Aboutus