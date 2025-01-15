import React from 'react'


const Hero = () => {
  return (
    <div className='bg-hero-image bg-cover bg-center h-[850px] flex justify-center items-center flex-col font-oswald '>
        <img className='w-[120px] sm:w-[160px] md:w-[220px] mx-auto' src="./barber-scissors.png" alt="" />
        <p className='text-xs md:text-sm text-white [word-spacing:0.16rem] p-2 tracking-widest'>WE ARE A UNIQUE</p>
        <h1 className='text-white font-bold text-3xl sm:text-6xl md:text-7xl '>BARBER SHOP</h1>
        <p className='text-white p-2 text-xs'>The best place for your hairstyle.</p>
        <button className='bg-[#bb9e86] p-3 m-4 text-[10px] hover:text-[#34567e] hover:duration-500 rounded-lg font-bold tracking-widest'>MAKE AN APPOINTMENT</button>
        <div>
            
        </div>
    </div>
    
    
  )
}

export default Hero