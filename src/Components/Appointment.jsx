import React from 'react'

const Appointment = () => {
  return (
    <div  id='appointment' className=' w-[100%] h-[700px] bg-black text-white'>
        <h2 className='text-center pt-20 pb-2 text-4xl font-oswald font-bold '>MAKE AN APPOINTMENT</h2>
        <img className='w-[80px] mx-auto' src='./barber-scissors.png' />
        <div className=' w-[100%] h-[60%] flex justify-center pt-7'>
        <div className='w-[25%]'>
            <p className='font-oswald font-bold text-xl text-[#d19d64] pb-8'>OPENING HOURS</p>
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
            <img className='w-[30px] mx-auto' src='./barber-scissors.png' />
            <div>
                <form className='flex flex-col text-gray-600 items-center pt-4'>
                    <input  className='bg-[#d19d64] border border-white w-[80%] mb-2 text-xs font-oswald py-1 placeholder-gray-600 indent-2 font-light focus:outline-none'type='text' name='name' placeholder='Name' />
                    <input  className='bg-[#d19d64] border border-white w-[80%] mb-2 text-xs font-oswald py-1 indent-2 placeholder-gray-600  focus:outline-none'type='email' name='email' placeholder='Email'  />
                    <input  className='bg-[#d19d64] border border-white w-[80%] mb-2 text-xs font-oswald py-1 indent-2 placeholder-gray-600 focus:outline-none'type='number' name='phone-number' placeholder='Phone'/>
                    <select className='bg-[#d19d64] border border-white w-[80%] mb-2 text-xs font-oswald py-1 indent-1 focus:outline-none'>
                        <option className='bg-white'>Choose Service</option>
                        <option className='bg-white'>Haircut</option>
                        <option className='bg-white'>Shave</option>
                        <option className='bg-white'>Massage</option>
                        <option className='bg-white'>Pedicure</option>
                    </select>
                    <input  className='bg-[#d19d64] border border-white w-[80%] mb-2 text-xs font-oswald py-1 indent-1 focus:outline-none'type='date' name='date' placeholder='Date' />
                    <select className='bg-[#d19d64] border border-white w-[80%] text-xs font-oswald py-1 indent-1 focus:outline-none'>
                        <option className='bg-white'>Choose Time</option>
                        <option className='bg-white'>9:00 to 9:30</option>
                        <option className='bg-white'>9:30 to 10:00</option>
                        <option className='bg-white'>10:00 to 11:00</option>
                        <option className='bg-white'>11:00 to 11:30</option>
                    </select>
                    <input className='bg-black w-[80%] mt-6 py-2 font-oswald text-[#d19d64] text-[10px] font-bold hover:cursor-pointer hover:bg-white hover:text-black hover:duration-500' type='submit' value='MAKE AN APPOINTMENT NOW' />
                </form>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Appointment