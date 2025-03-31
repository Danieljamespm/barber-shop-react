import React from 'react'


const Hero = () => {
  return (
    <div className='bg-hero-image bg-cover bg-center h-[400px] sm:h-[800px] lg:h-[1200px] xl:h-[1400px] bg-black bg-blend-darken bg-opacity-30 flex justify-center items-center flex-col font-oswald '>
 
        <img className=' w-[100px] pt-20 md:w-[180px] lg:w-[220px] mx-auto' src="./barber-scissors.png" alt="" />
        <p className='text-lg md:text-3xl text-white [word-spacing:0.16rem] p-2 tracking-widest font-light'>WE ARE A UNIQUE</p>
        <h1 className='text-white font-bold text-6xl sm:text-6xl md:text-7xl lg:text-9xl '>BARBER SHOP</h1>
        <p className='text-white p-2 text-md md:text-xl font-light tracking-widest font-Opensans'>The best place for your hairstyle.</p>
        <button className='bg-[#D19D64] p-3 m-4 text-xs sm:text-md md:text-lg hover:text-[#34567e] hover:duration-500 rounded-lg font-bold tracking-widest'>MAKE AN APPOINTMENT</button>

       
        <div>
            
        </div>
    </div>
    
    
  )
}

export default Hero