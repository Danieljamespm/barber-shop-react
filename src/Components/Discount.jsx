import React from 'react'

const Discount = () => {
  
  
    return (
    <div className='bg-white h-[800px] sm:h-[700px] md:h-[700px] flex justify-center pt-24'>
        <div className='h-[42%] bg-[#EAEFF2] w-[92%] p-2  border-black border-2'>
        <div className='h-[100%] bg-black w-[100%] m-auto flex justify-center items-center flex-col '>
            <p className='text-[#D19D64] font-oswald text-3xl md:text-5xl lg:text-6xl font-bold'>GET 25% OFF DISCOUNT</p>
            <p className='text-white text-2xl md:text-5xl lg:text-6xl font-oswald font-light'>EVERY SUNDAY DURING DECEMBER</p>
            <p className='text-white font-oswald p-4 text-xl md:text-2xl lg:text-3xl'>USE PROMO CODE: <span className='text-[#d19d64]'>VINTAGEBARBER</span></p>
        </div>
        <div className=' font-oswald text-md lg:text-2xl w-full text-center pt-10'>
            <p className='md:text-xl lg:text-2xl font-bold'>We also do a drawing every month with the possibility of winning 25% off all services for a <span className='text-[#d19d64]'>WHOLE YEAR</span></p>
            <p className='md:text-xl lg:text-2xl font-bold'>There are 3 ways to enter and each one earns you 1 entry.</p>
            <div className='text-[#d19d64] w-full md:w-[35%] mx-auto pt-5'>
            <ul className='text-justify list-disc list-inside text-sm lg:text-lg'>
                <li className=''>Leave a 5 star review</li>
                <li>Share a photo of your haircut and tag us! #VINTAGECUTS</li>
                <li>Refer a friend <br></br> <span className='text-sm lg:text-lg'>(have them present a business card 
                    with your stylists signature)</span></li>
            </ul>
            </div>
        </div>
        <div className='flex justify-center'>
        <button className='bg-[#D19D64] p-4 md:p-3 md:m-6 m-10 mx-auto text-xs lg:text-md xl:text-lg hover:text-[#d19d64] hover:bg-black hover:duration-500 rounded-lg font-bold font-oswald tracking-wide'>MAKE AN APPOINTMENT NOW</button>
        </div>
        </div>
    </div>
  )
}

export default Discount