import React from 'react'


const Joinus = () => {
  return (
    <div id='joinus' className='w-full bg-black h-[200px] flex flex-col justify-center md:justify-evenly md:flex-row items-center font-oswald text-xl md:text-3xl'>
        <img className='w-[80px] md:w-[150px] mx-auto md:mx-0 pb-5 md:p-0 md:pr-3' src={'./barber-scissors.png'} />
        <p className='text-white'>WANT TO BE A MEMBER? JOIN OUR CREW</p>
        <div>
        <button className='bg-[#D19D64] p-0 px-4 m-4 text-[12px] hover:bg-white hover:text-black hover:duration-500 rounded-lg font-oswald font-bold tracking-widest'>JOIN US</button>

        </div>
    </div>
    
  )
}

export default Joinus