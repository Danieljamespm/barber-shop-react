import React from 'react'
import Slider from 'react-slick'

import portrait1 from '../assets/review-photo-1.jpg'
import portrait2 from '../assets/review-photo-2.jpg'
import portrait3 from '../assets/review-photo-3.jpg'


const Reviews = () => {

    const settings = {
        dots: true,
        
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      };


  return (
    <div className='bg-black bg-blend-darken bg-opacity-70 bg-review-image h-[500px] bg-cover bg-center md:pt-10 flex flex-col items-center sm:px-20 xl:mx-20' >
        <p className='text-white text-center text-4xl font-oswald font-bold'>1000+ HAPPY CLIENTS</p>
        <img className='w-[80px] mx-auto' src='./barber-scissors.png' />
        <div className=' w-[80%] md:w-[75%] h-[50%] p-4'>
        <Slider {...settings}>
            <div>
                <div className='flex flex-col justify-center items-center mx-auto pb-16'>
                <img className= 'w-[70px] h-[70px] rounded-full object-cover' src={portrait1}/>
                </div>

                <div className=' flex flex-col justify-center items-center text-center'>
                    <p className='text-[10px] sm:text-sm font-Opensans text-white'>Vintage Cuts is a top-notch barbershop with a retro vibe that blends classic style and modern precision. The barbers are skilled, attentive, and always deliver a sharp, tailored haircut. The welcoming atmosphere makes each visit a pleasure. Whether it’s a trim or a full grooming, highly recommended for quality service.</p>
                    <p className='font-oswald text-2xl font-bold pt-3 text-[#D19D64]'>Don Reese</p>
                </div>
            </div>  

             <div>
             <div className='flex flex-col justify-center items-center mx-auto pb-16'>
                <img className='w-[70px] h-[70px] rounded-full object-cover' src={portrait2}/>
                </div>

                <div className=' flex flex-col justify-center items-center  text-center'>
                    <p className='text-[10px] sm:text-sm font-Opensans text-white'>Vintage Cuts has a great vibe with a mix of old-school charm and modern skill. The barbers really know their stuff and take the time to make sure you leave looking sharp. It’s a chill spot to get a fresh cut, and I’ll definitely be back</p>
                    <p className='font-oswald text-2xl font-bold pt-3 text-[#D19D64]'>Rick Owens</p>
                </div>
            </div>  

             <div>
             <div className='flex flex-col justify-center items-center mx-auto pb-16'>
                <img className='w-[70px] h-[70px] rounded-full object-cover' src={portrait3}/>
                </div>

                <div className=' flex flex-col justify-center items-center  text-center'>
                    <p className='text-[10px] sm:text-sm font-Opensans text-white'>If you’re looking for a solid haircut in a cool, laid-back atmosphere, Vintage Cuts is the place. The barbers are friendly and do an awesome job, paying attention to every detail. The vintage decor gives it a relaxed feel, making the whole experience really enjoyable.</p>
                    <p className='font-oswald text-2xl font-bold pt-3 text-[#D19D64]'>Luke Brush</p>
                </div>
            </div>   

        </Slider>
        </div>
    </div>
  )
}

export default Reviews