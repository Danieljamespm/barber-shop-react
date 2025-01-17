
import image1 from '../assets/special-service-1.png'
import image2 from '../assets/special-service-2.png'
import image3 from '../assets/special-service-3.png'
import image4 from '../assets/special-service-4.png'
import image5 from '../assets/special-service-5.png'
import image6 from '../assets/special-service-6.png'

import React, { useState, useEffect } from 'react';

const Carousel = () => {
 

  const services = [
    { id: 1, image: image1, title: 'Haircut', description: 'Professional haircut for all styles.' },
    { id: 2, image: image2, title: 'Shave', description: 'Clean shave with razor precision.' },
    { id: 3, image: image3, title: 'Facial', description: 'Refreshing facial treatments.' },
    { id: 4, image: image4, title: 'Beard Trim', description: 'Perfect beard grooming services.' },
    { id: 5, image: image5, title: 'Hair Color', description: 'Hair coloring with premium products.' },
    { id: 6, image: image6, title: 'Massage', description: 'Relaxing massage for the best experience.' },
  ];

  return(
    <></>
  )
 
};

export default Carousel;
