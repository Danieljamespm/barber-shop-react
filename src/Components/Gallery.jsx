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
        <div className='w-[100%] h-[100%]'>
            <div className='bg-gray-500 width[100%] h-[50%] m-2 flex justify-center items-center gap-2'>
                <div className='bg-white w-[23%] h-[90%] bg-haircut-1 bg-cover bg-center hover:opacity-50'>
                </div>
                <div className='bg-white w-[23%] h-[90%]'></div>
                <div className='bg-white w-[23%] h-[90%]'></div>
                <div className='bg-white w-[23%] h-[90%]'></div>

            </div>
            <div className='bg-gray-500 width[100%] h-[50%] m-2 flex justify-center items-center gap-2'>
            <div className='bg-white w-[23%] h-[90%]'></div>
                <div className='bg-white w-[23%] h-[90%]'></div>
                <div className='bg-white w-[23%] h-[90%]'></div>
                <div className='bg-white w-[23%] h-[90%]'></div>
            </div>
        </div>
    ),
    tab2: (
        <div className=' pt-4 flex flex-wrap justify-center items-center gap-4'>
            <div className='border-[#d19d64] bg-[#d19d64] '>
            <img className='w-[250px] h-[250px] object-cover hover:scale-95 hover:duration-500 hover:opacity-50 ' src={image9} alt='' />
            </div>
            <div className='border-[#d19d64] bg-[#d19d64] '>
            <img className='w-[250px] h-[250px] object-cover hover:scale-95 hover:duration-500 hover:opacity-50 ' src={image10} alt='' />
            </div>
            <div className='border-[#d19d64] bg-[#d19d64] '>
            <img className='w-[250px] h-[250px] object-cover hover:scale-95 hover:duration-500 hover:opacity-50 ' src={image11} alt='' />
            </div>
            <div className='border-[#d19d64] bg-[#d19d64] '>
            <img className='w-[250px] h-[250px] object-cover hover:scale-95 hover:duration-500 hover:opacity-50 ' src={image12} alt='' />
            </div>
            <div className='border-[#d19d64] bg-[#d19d64] '>
            <img className='w-[250px] h-[250px] object-cover hover:scale-95 hover:duration-500 hover:opacity-50 ' src={image13} alt='' />
            </div>
            <div className='border-[#d19d64] bg-[#d19d64] '>
            <img className='w-[250px] h-[250px] object-cover hover:scale-95 hover:duration-500 hover:opacity-50 ' src={image14} alt='' />
            </div>
            <div className='border-[#d19d64] bg-[#d19d64] '>
            <img className='w-[250px] h-[250px] object-cover hover:scale-95 hover:duration-500 hover:opacity-50 ' src={image15} alt='' />
            </div>
            <div className='border-[#d19d64] bg-[#d19d64] '>
            <img className='w-[250px] h-[250px] object-cover hover:scale-95 hover:duration-500 hover:opacity-50 ' src={image16} alt='' />
            </div>
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
        <div className='bg-white w-[100%] h-[100%]'>
            {tabContent[activeTab]}
        </div>
        </div>
       
      </div>
    );
  }
export default Gallery