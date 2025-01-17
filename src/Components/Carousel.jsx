
import image1 from '../assets/special-service-1.png'
import image2 from '../assets/special-service-2.png'
import image3 from '../assets/special-service-3.png'
import image4 from '../assets/special-service-4.png'
import image5 from '../assets/special-service-5.png'
import image6 from '../assets/special-service-6.png'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'

const Carousel = () => {
 
const services = [
    { id: 1, image: image1, title: ' Classic Haircut', description: 'Professional haircut for all styles.' },
    { id: 2, image: image5, title: 'Razor Shave', description: 'Clean shave with razor precision.' },
    { id: 3, image: image3, title: 'Facial', description: 'Refreshing facial treatments.' },
    { id: 4, image: image2, title: 'Beard Trim', description: 'Perfect beard grooming services.' },
    { id: 5, image: image4, title: 'Custom Haircut', description: 'Change your style to something new.' },
    { id: 6, image: image6, title: 'Massage', description: 'Relaxing massage for the best experience.' },
  ];

  


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return(
    <div className='bg-[#EAEFF2] h-[650px]'>
      <h1 className='text-center pt-20 font-bold font-oswald text-4xl'>SPECIAL SERVICES</h1>
    <div className=' md:w-[850px] m-auto'>
      <div className='mt-20'>
        <Slider {...settings}>
        {services.map((card) => (
          <div className='bg-slate-200  md:h-[380px] border-[3px] border-black '>
            <div className='flex justify-center items-center'>
              <img src={card.image} alt='' className='px-2 pt-2'/>
            </div>

            <div className='flex flex-col items-center justify-center gap-4 p-5 px-2 mx-2 hover:bg-black hover:text-white'>
              <p className='text-[#D19D64] text-2xl font-oswald uppercase font-bold text-center px-2'>{card.title}</p>
              <p className='text-[10px] px-2'>{card.description}</p>
              <button className='bg-white border-[1px] border-black text-black px-10 py-2 m-5 md:mx-32 text-[8px] hover:bg-[#bb9e86] hover:text-white hover:duration-500 rounded-lg font-oswald font-bold tracking-widest text-nowrap'>READ MORE</button>
            </div>
          </div>
        ))}
        </Slider>
      </div>

    </div>
    </div>
  )
 
};

export default Carousel;
