import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import image1 from '../assets/employee-1.jpg'
import image2 from '../assets/employee-2.jpg'
import image3 from '../assets/employee-3.jpg'
import image4 from '../assets/employee-4.jpg'
import image5 from '../assets/employee-5.jpg'
import image6 from '../assets/employee-6.jpg'

const Employees = () => {

    const employees = [
        {id:1, image: image6, Name: 'Mario Lopez', title: 'Barber' },
        {id:2, image: image5, Name: 'Freddy Prince Jr.', title: 'Shaver'},
        {id:3, image: image3, Name: 'Mike Vegas', title: 'Hair Cutter'},
        {id:4, image: image4, Name: 'Petey Johnson', title: 'Barber' },
        {id:5, image: image2, Name: 'George Lucas', title: 'Shaver'},
        {id:6, image: image1, Name: 'Wayne Carter', title: 'Hair Cutter'},
    ]

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


  return (
    <div id='team' className='bg-[#EAEFF2] h-[740px]'>
        <h1 className='text-center pt-10 font-bold font-oswald text-5xl pb-2'>OUR TEAM</h1>
        <img className='w-[80px] mx-auto' src="./barber-scissors.png" alt="" />
        <div className='md:w-[1100px] m-auto'>
            <div className='mt-20'>
                <Slider {...settings}>
                    {employees.map((card) => (
                        <div key={card.id} className='bg-slate-200  md:h-[470px] border-[3px] border-black' >
                            <div className='flex justify-center items-center'>
                                <img src={card.image} alt=''className='h-[395px] w-[400px] object-cover '/>
                            </div>


                            <div className='bg-black h-[70px]'>
                                <p className='text-white text-2xl font-oswald uppercase font-bold text-center px-2 pt-2'>{card.Name}</p>
                                <p className='text-center font-oswald text-[#D19D64]'>{card.title}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Employees