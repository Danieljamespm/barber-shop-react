import React from 'react'
import Slider from 'react-slick'
import image1 from "../assets/special-service-2.png"
import portrait1 from '../assets/review-portrait-1.jpg'
import portrait2 from '../assets/review-portrait-2.jpg'
import portrait3 from '../assets/review-portrait-3.jpg'


const Reviews = () => {

    const settings = {
        dots: true,
        
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      };


  return (
    <div className='bg-review-image h-[500px] bg-cover bg-center opacity-90 pt-10 flex flex-col items-center px-20 mx-20' >
        <p className='text-white text-center text-4xl font-oswald font-bold'>1000+ HAPPY CLIENTS</p>
        <img className='w-[80px] mx-auto' src='./barber-scissors.png' />
        <div className=' w-[50%] h-[75%]'>
        <Slider {...settings}>
            <div>
                <div className='flex flex-col justify-center items-center mx-auto pt-10'>
                <img className=' w-[100px] h-[100px] rounded-full' src={portrait1}/>
                </div>

                <div className=' flex flex-col justify-center items-center p-10 text-center'>
                    <p className='text-sm font-Opensans text-white'>Vintage Cuts is a top-notch barbershop with a retro vibe that blends classic style and modern precision. The barbers are skilled, attentive, and always deliver a sharp, tailored haircut. The welcoming atmosphere makes each visit a pleasure. Whether it’s a trim or a full grooming, highly recommended for quality service.</p>
                    <p className='font-oswald text-2xl font-bold pt-3 text-[#D19D64]'>Don Reese</p>
                </div>
            </div>  

             <div>
                <div className='flex flex-col justify-center items-center mx-auto pt-10'>
                <img className='w-[100px] h-[100px] rounded-full' src={portrait2}/>
                </div>

                <div className=' flex flex-col justify-center items-center p-10 text-center'>
                    <p className='text-sm font-Opensans text-white'>Vintage Cuts is a top-notch barbershop with a retro vibe that blends classic style and modern precision. The barbers are skilled, attentive, and always deliver a sharp, tailored haircut. The welcoming atmosphere makes each visit a pleasure. Whether it’s a trim or a full grooming, highly recommended for quality service.</p>
                    <p className='font-oswald text-2xl font-bold pt-3 text-[#D19D64]'>Don Reese</p>
                </div>
            </div>  

             <div>
                <div className='flex flex-col justify-center items-center mx-auto pt-10'>
                <img className='w-[100px] h-[100px] rounded-full' src={portrait3}/>
                </div>

                <div className=' flex flex-col justify-center items-center p-10 text-center'>
                    <p className='text-sm font-Opensans text-white'>Vintage Cuts is a top-notch barbershop with a retro vibe that blends classic style and modern precision. The barbers are skilled, attentive, and always deliver a sharp, tailored haircut. The welcoming atmosphere makes each visit a pleasure. Whether it’s a trim or a full grooming, highly recommended for quality service.</p>
                    <p className='font-oswald text-2xl font-bold pt-3 text-[#D19D64]'>Don Reese</p>
                </div>
            </div>   

        </Slider>
        </div>
    </div>
  )
}

export default Reviews