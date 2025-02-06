import React from 'react'

const Appointment = () => {
  return (
    <div  id='appointment' className=' w-full h-[1100px] lg:h-[900px] bg-black text-white'>
        <h2 className='text-center pt-20 pb-2 text-4xl lg:text-6xl font-oswald font-bold '>MAKE AN APPOINTMENT</h2>
        <img className='w-[80px] lg:w-[100px] mx-auto' src='./barber-scissors.png' />
        <div className=' w-full pt-7 lg:pt-20 sm:flex sm:justify-around lg:justify-evenly px-4'>
        <div className='pb-4 w-full sm:w-[300px] lg:w-[500px] '>
            <p className='font-oswald font-bold text-xl lg:text-4xl text-[#d19d64] pb-8'>OPENING HOURS</p>
            <div className='flex justify-between'>
            <p className='font-oswald text-xs lg:text-xl font-light'>MONDAY</p>
            <div className=' w-[200px] sm:w-[70%] border-b border-dotted pt-2 lg:border-b-2'></div>
            <p className='font-oswald text-xs lg:text-xl font-light'>9AM-6PM</p>
            </div>
            <div className='flex justify-between'>
            <p className='font-oswald text-xs pt-9 lg:text-xl font-light '>TUESDAY</p>
            <div className='w-[200px] sm:w-[70%] border-b border-dotted lg:border-b-2'></div>
            <p className='font-oswald text-xs lg:text-xl font-light pt-9'>9AM-6PM</p>
            </div>
            <div className='flex justify-between'>
            <p className='font-oswald text-xs pt-9 lg:text-xl font-light '>WEDNESDAY</p>
            <div className='w-[200px]  sm:w-[65%] border-b border-dotted lg:border-b-2'></div>
            <p className='font-oswald text-xs lg:text-xl font-light pt-9'>9AM-6PM</p>
            </div>
            <div className='flex justify-between'>
            <p className='font-oswald text-xs pt-9 lg:text-xl font-light '>THURSDAY</p>
            <div className='w-[200px] sm:w-[65%] border-b border-dotted lg:border-b-2'></div>
            <p className='font-oswald text-xs lg:text-xl font-light  pt-9'>9AM-6PM</p>
            </div>
            <div className='flex justify-between'>
            <p className='font-oswald text-xs pt-9 lg:text-xl font-light '>FRIDAY</p>
            <div className='w-[200px] sm:w-[70%] border-b border-dotted lg:border-b-2'></div>
            <p className='font-oswald text-xs lg:text-xl font-light  pt-9'>9AM-6PM</p>
            </div>
            <div className='flex justify-between'>
            <p className='font-oswald text-xs pt-9 lg:text-xl font-light '>SATURDAY</p>
            <div className='w-[200px] sm:w-[65%] border-b border-dotted lg:border-b-2'></div>
            <p className='font-oswald text-xs lg:text-xl font-light  pt-9'>10AM-4PM</p>
            </div>
            <div className='flex justify-between'>
            <p className='font-oswald text-xs pt-9 lg:text-xl font-light '>SUNDAY</p>
            <div className='w-[200px] lg:w-[400px] border-b border-dotted lg:border-b-2'></div>
            <p className='font-oswald text-xs lg:text-xl font-light  pt-9'>CLOSED</p>
            </div>
        </div>
        <div className='bg-[#d19d64] w-full sm:w-[300px] md:w-[400px] lg:w-[500px] lg:h-[500px] pb-10'>
            <h3 className='font-oswald text-center pt-6 text-2xl lg:text-4xl font-bold'>BOOK NOW</h3>
            <img className='w-[50px] lg:w-[80px] mx-auto' src='./barber-scissors.png' />
            <div>
                <form className='flex flex-col text-gray-600 items-center pt-4 lg:pt-10'>
                    <input  className='bg-[#d19d64] border border-white w-[80%] mb-2 text-md font-oswald py-1 placeholder-gray-600 indent-2 font-light focus:outline-none'type='text' name='name' placeholder='Name' />
                    <input  className='bg-[#d19d64] border border-white w-[80%] mb-2 text-md font-oswald py-1 indent-2 placeholder-gray-600  focus:outline-none'type='email' name='email' placeholder='Email'  />
                    <input  className='bg-[#d19d64] border border-white w-[80%] mb-2 text-md font-oswald py-1 indent-2 placeholder-gray-600 focus:outline-none'type='number' name='phone-number' placeholder='Phone'/>
                    <select className='bg-[#d19d64] border border-white w-[80%] mb-2 text-md font-oswald py-1 indent-1 focus:outline-none'>
                        <option className='bg-white'>Choose Service</option>
                        <option className='bg-white'>Haircut</option>
                        <option className='bg-white'>Shave</option>
                        <option className='bg-white'>Massage</option>
                        <option className='bg-white'>Pedicure</option>
                    </select>
                    <input  className='bg-[#d19d64] border border-white w-[80%] mb-2 text-md font-oswald py-1 indent-1 focus:outline-none placeholder-gray-600'type='number' name='date' placeholder='Enter Date MM/DD/YYYY' />
                    <select className='bg-[#d19d64] border border-white w-[80%] text-md font-oswald py-1 indent-1 focus:outline-none'>
                        <option className='bg-white'>Choose Time</option>
                        <option className='bg-white'>9:00 to 9:30</option>
                        <option className='bg-white'>9:30 to 10:00</option>
                        <option className='bg-white'>10:00 to 11:00</option>
                        <option className='bg-white'>11:00 to 11:30</option>
                    </select>
                    <input className='bg-black w-[80%] mt-10 py-2 font-oswald text-[#d19d64] text-sm font-bold hover:cursor-pointer hover:bg-white hover:text-black hover:duration-500' type='submit' value='MAKE AN APPOINTMENT NOW' />
                </form>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Appointment