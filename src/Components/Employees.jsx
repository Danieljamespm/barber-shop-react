import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import image1 from '../assets/employee-1.jpg'
import image2 from '../assets/employee-2.jpg'
import image3 from '../assets/employee-3.png'

const Employees = () => {

    const employees = [
        {id:1, image: image1, Name: 'Mario Lopez', title: 'Barber' },
        {id:2, image: image2, Name: 'Freddy Prince Jr.', title: 'Shaver'},
        {id:3, image: image3, Name: 'Mike Vegas', title: 'Hair Cutter'},
        {id:4, image: image1, Name: 'Petey "The Snips" Johnson', title: 'Barber' },
        {id:5, image: image2, Name: 'George Lucas', title: 'Shaver'},
        {id:6, image: image3, Name: 'Wayne Carter', title: 'Hair Cutter'},
    ]


  return (
    <div>Employees</div>
  )
}

export default Employees