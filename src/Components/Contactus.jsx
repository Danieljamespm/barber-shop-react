import React from 'react'
import { FaClock, FaEnvelopeOpen, FaMapMarkerAlt, FaPhone } from "react-icons/fa"

const Contactus = () => {
  return (
    <div id='contact' className='w-full h-[620px] sm:h-[300px] bg-contact-image bg-cover bg-center bg-black bg-blend-darken bg-opacity-70'>
        <h2 className='text-white font-oswald text-3xl font-bold text-center pt-10 pb-2'>CONTACT US</h2>
        <img className='w-[80px] mx-auto pb-7' src='./barber-scissors.png' />
        <div className='sm:flex justify-around'>
            <div  className='pb-8'>
                <div className='w-7 h-7 bg-white flex justify-center items-center rounded-xl m-auto'>
                <FaMapMarkerAlt className='' />
                </div>
                <div className='text-center'>
                <p className='text-[#d19d64] font-oswald text-sm pt-5'>LOCATION</p>
                <p className='text-white font-oswald text-sm'>125 BROOKLYN, NEW YORK</p>
                </div>
            </div>
            <div className='pb-8'>
                <div className='w-7 h-7 bg-white flex justify-center items-center rounded-xl m-auto'>
                <FaPhone className='' />
                </div>
                <div className='text-center'>
                <p className='text-[#d19d64] font-oswald text-sm pt-5'>CALL US</p>
                <p className='text-white font-oswald text-sm'>718.345.9009</p>
                </div>
            </div>
            <div className='pb-8'>
                <div className='w-7 h-7 bg-white flex justify-center items-center rounded-xl m-auto'>
                <FaEnvelopeOpen />
                </div>
                <div className='text-center'>
                <p className='text-[#d19d64] font-oswald text-sm pt-5'>EMAIL US</p>
                <p className='text-white font-oswald text-sm'>VINTAGECUTS@GMAIL.COM</p>
                </div>
            </div>
            <div>
                <div className='w-7 h-7 bg-white flex justify-center items-center rounded-xl m-auto'>
                <FaClock />
                </div>
                <div className='text-center'>
                <p className='text-[#d19d64] font-oswald text-sm pt-5'>HOURS</p>
                <p className='text-white font-oswald text-sm'>MON-FRI: 9AM TO 6PM </p>
                </div>
            </div>
        </div>
        
    
    
    </div>
  )
}

export default Contactus