import React from 'react'

const Discount = () => {
  
  
    return (
    <div className='bg-white h-[700px] flex items-center'>
        <div className='h-[42%] bg-[#EAEFF2] w-[92%] p-2 m-auto border-black border-2'>
        <div className='h-[100%] bg-black w-[100%] m-auto flex justify-center items-center flex-col '>
            <p className='text-[#D19D64] font-oswald text-5xl font-bold'>GET FLAT 25% DISCOUNT</p>
            <p className='text-white text-5xl font-oswald font-light'>ON EVERY SUNDAY OF DECEMBER</p>
            <p className='text-white font-oswald p-4 text-xl'>USE PROMO CODE: <span className='text-[#d19d64]'>VINTAGEBARBER</span></p>
        </div>
        <div>
            <p>We also do a drawing every month with the possibility of winning 50% off all services for a <span>WHOLE YEAR</span></p>
            <p>There are 3 ways to enter and each one earns you 1 entry.</p>
        </div>
        </div>
    </div>
  )
}

export default Discount