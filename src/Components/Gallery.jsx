import React, {useState} from 'react'

import image2 from '../assets/haircut-2.jpg'
import image3 from '../assets/haircut-3.jpg'
import image4 from '../assets/haircut-4.jpg'
import image5 from '../assets/haircut-5.jpg'
import image6 from '../assets/haircut-6.jpg'
import image7 from '../assets/haircut-7.jpg'
import image8 from '../assets/haircut-8.jpg'
import image9 from '../assets/shave-1.jpg'
import image10 from '../assets/shave-2.jpg'
import image11 from '../assets/shave-3.jpg'
import image12 from '../assets/shave-4.jpg'
import image13 from '../assets/shave-5.jpg'
import image14 from '../assets/shave-6.jpg'
import image15 from '../assets/shave-7.jpg'
import image16 from '../assets/shave-8.jpg'


const galleryTabs = [
    {id:'tab1', label:'HAIRCUT'},
    {id:'tab2', label:'SHAVE'}
]

const tabContent = {
    tab1: (
       <div className=' grid grid-cols-4 grid-rows-2 gap-2 w-full max-w-screen-lg mx-auto border border-gray-400'>
        <div className='aspect-square bg-haircut-1 bg-cover bg-center'></div>
        <div className='aspect-square bg-haircut-2 bg-cover bg-center'></div>
        <div className='aspect-square bg-haircut-3 bg-cover bg-center'></div>
        <div className='aspect-square bg-haircut-4 bg-cover bg-center'></div>
        <div className='aspect-square bg-haircut-5 bg-cover bg-center'></div>
        <div className='aspect-square bg-haircut-6 bg-cover bg-center'></div>
        <div className='aspect-square bg-haircut-7 bg-cover bg-center'></div>
        <div className='aspect-square bg-haircut-8 bg-cover bg-center'></div>

       </div>
    ),
    tab2: (
        <div className='bg-gray-500 grid grid-cols-4 w-full max-w-screen-lg mx-auto border border-gray-400'>
        <div className='aspect-square bg-haircut-5 bg-cover bg-center'></div>
        <div className='aspect-square bg-haircut-6 bg-cover bg-center'></div>
        <div className='aspect-square bg-haircut-7 bg-cover bg-center'></div>
        <div className='aspect-square bg-haircut-8 bg-cover bg-center'></div>

       </div>
    )
}


const Gallery = () => {
    
  const [activeTab, setActiveTab] = useState("tab1")


    return (
      <div className='bg-[#EAEFF2] h-[750px] w-full'>
        <h2 className='text-4xl text-center font-oswald font-bold pt-20 pb-2 '>GALLERY</h2>
        <img className='w-[80px] mx-auto pb-10' src='./barber-scissors.png' />
        <div className='  w-[90%] h-[80%] m-auto'>
        <div className='text-center'>
            {galleryTabs.map((tab)=> (
                <button key={tab.id} onClick={()=> setActiveTab(tab.id)} className={`font-oswald px-4 mx-2 mt-2 font-light ${
                    activeTab === tab.id ? 'bg-black text-white' : 'bg-white text-black'
                }`}>
                    {tab.label}
                    </button>
            ))}
        </div>
        <div className=''>
            {tabContent[activeTab]}
        </div>
        </div>
       
      </div>
    );
  }
export default Gallery