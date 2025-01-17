import React from 'react'
import Slider from 'react-slick'


const Reviews = () => {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
      };


  return (
    <div className='bg-review-image h-[500px] bg-cover bg-center opacity-90 pt-10 ' >
        <p className='text-white text-center'>1000+ HAPPY CLIENTS</p>
        <Slider {...settings}>


        </Slider>

    </div>
  )
}

export default Reviews