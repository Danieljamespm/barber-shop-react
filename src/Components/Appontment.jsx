import React from 'react'

const Appontment = () => {
  return (
    <div className=' w-[100%] h-[700px] bg-black text-white'>
        <h2 className='text-center pt-20 pb-2 text-4xl font-oswald font-bold '>MAKE AN APPOINTMENT</h2>
        <img className='w-[80px] mx-auto' src='./barber-scissors.png' />
        <div className=' w-[100%] h-[60%] flex justify-center pt-7'>
        <div className='w-[25%]'>
            <p className='font-oswald font-bold text-xl text-[#d19d64] pb-6'>OPENING HOURS</p>
            <p className='font-oswald text-xs pb-9 font-light'>MONDAY..............................................................9AM-6PM</p>
            <p className='font-oswald text-xs pb-9 font-light'>TUESDAY..............................................................9AM-6PM</p>
            <p className='font-oswald text-xs pb-9 font-light'>WEDNESDAY.......................................................9AM-6PM</p>
            <p className='font-oswald text-xs pb-9 font-light'>THURSDAY..........................................................9AM-6PM</p>
            <p className='font-oswald text-xs pb-9 font-light'>FRIDAY.................................................................9AM-6PM</p>
            <p className='font-oswald text-xs pb-9 font-light'>SATURDAY...........................................................10AM-4PM</p>
            <p className='font-oswald text-xs'>SUNDAY................................................................CLOSED</p>
        </div>
        <div className='bg-[#d19d64] w-[25%] h-[95%]'>
            <h3 className='font-oswald text-center pt-6 text-xl font-bold'>BOOK NOW</h3>
            <img className='w-[40px] mx-auto' src='./barber-scissors.png' />

        </div>
        </div>
    </div>
  )
}

export default Appontment