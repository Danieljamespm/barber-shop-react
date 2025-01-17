import React, {useState} from 'react'

const Carousel = () => {
  const[currentIndex, setCurrentIndex] = useState(0)
  const cards = [
    {id: 1, image: '../assets/special-service-1.png', text: 'CLASSIC HAIR CUT'},
    {id: 2, image: '../assets/special-service-2.png', text: 'BEARD AND HAIR TRIM'},
    {id: 3, image: '../assets/special-service-3.png', text: 'BEARD STYLING'},
    {id: 4, image: '../assets/special-service-4.png', text: 'CUSTOM HAIR CUT'},
    {id: 5, image: '../assets/special-service-5.png', text: 'RAZOR SHAVE'},
    {id: 6, image: '../assets/special-service-6.png', text: 'HAIR AND BEARD TRIM WITH STYLING'},
  ]
  
  
  
  
  
  
  return (
    <div>Carousel</div>
  )
}

export default Carousel