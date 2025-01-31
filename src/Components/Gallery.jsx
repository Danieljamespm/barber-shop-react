import React, {useState} from 'react'




const galleryTabs = [
    {id:'tab1', label:'HAIRCUT'},
    {id:'tab2', label:'SHAVE'}
]

const tabContent = {
    tab1: (
       <div className=' grid grid-cols-4 grid-rows-2 gap-2 w-full max-w-screen-lg mx-auto border '>
        <div className='aspect-square bg-haircut-1 bg-cover bg-center hover:border-4 hover:border-[#d19d64] hover:bg-black hover:bg-blend-darken hover:bg-opacity-50 hover:duration-500 hover:scale-105'></div>
        <div className='aspect-square bg-haircut-2 bg-cover bg-center hover:border-4 hover:border-[#d19d64] hover:bg-black hover:bg-blend-darken hover:bg-opacity-50 hover:duration-500 hover:scale-105'></div>
        <div className='aspect-square bg-haircut-3 bg-cover bg-center hover:border-4 hover:border-[#d19d64] hover:bg-black hover:bg-blend-darken hover:bg-opacity-50 hover:duration-500 hover:scale-105'></div>
        <div className='aspect-square bg-haircut-4 bg-cover bg-center hover:border-4 hover:border-[#d19d64] hover:bg-black hover:bg-blend-darken hover:bg-opacity-50 hover:duration-500 hover:scale-105'></div>
        <div className='aspect-square bg-haircut-5 bg-cover bg-center hover:border-4 hover:border-[#d19d64] hover:bg-black hover:bg-blend-darken hover:bg-opacity-50 hover:duration-500 hover:scale-105'></div>
        <div className='aspect-square bg-haircut-6 bg-cover bg-center hover:border-4 hover:border-[#d19d64] hover:bg-black hover:bg-blend-darken hover:bg-opacity-50 hover:duration-500 hover:scale-105'></div>
        <div className='aspect-square bg-haircut-7 bg-cover bg-center hover:border-4 hover:border-[#d19d64] hover:bg-black hover:bg-blend-darken hover:bg-opacity-50 hover:duration-500 hover:scale-105'></div>
        <div className='aspect-square bg-haircut-8 bg-cover bg-center hover:border-4 hover:border-[#d19d64] hover:bg-black hover:bg-blend-darken hover:bg-opacity-50 hover:duration-500 hover:scale-105'></div>

       </div>
    ),
    tab2: (
        <div className=' grid grid-cols-4 gap-2 w-full max-w-screen-lg mx-auto border '>
        <div className='aspect-square bg-shave-1 bg-cover bg-center hover:border-4 hover:border-[#d19d64] hover:bg-black hover:bg-blend-darken hover:bg-opacity-50 hover:duration-500 hover:scale-105'></div>
        <div className='aspect-square bg-shave-2 bg-cover bg-center hover:border-4 hover:border-[#d19d64] hover:bg-black hover:bg-blend-darken hover:bg-opacity-50 hover:duration-500 hover:scale-105'></div>
        <div className='aspect-square bg-shave-3 bg-cover bg-center hover:border-4 hover:border-[#d19d64] hover:bg-black hover:bg-blend-darken hover:bg-opacity-50 hover:duration-500 hover:scale-105'></div>
        <div className='aspect-square bg-shave-4 bg-cover bg-center hover:border-4 hover:border-[#d19d64] hover:bg-black hover:bg-blend-darken hover:bg-opacity-50 hover:duration-500 hover:scale-105'></div>
        <div className='aspect-square bg-shave-5 bg-cover bg-center hover:border-4 hover:border-[#d19d64] hover:bg-black hover:bg-blend-darken hover:bg-opacity-50 hover:duration-500 hover:scale-105'></div>
        <div className='aspect-square bg-shave-6 bg-cover bg-center hover:border-4 hover:border-[#d19d64] hover:bg-black hover:bg-blend-darken hover:bg-opacity-50 hover:duration-500 hover:scale-105'></div>
        <div className='aspect-square bg-shave-7 bg-cover bg-center hover:border-4 hover:border-[#d19d64] hover:bg-black hover:bg-blend-darken hover:bg-opacity-50 hover:duration-500 hover:scale-105'></div>
        <div className='aspect-square bg-shave-8 bg-cover bg-center hover:border-4 hover:border-[#d19d64] hover:bg-black hover:bg-blend-darken hover:bg-opacity-50 hover:duration-500 hover:scale-105'></div>

       </div>
    )
}


const Gallery = () => {
    
  const [activeTab, setActiveTab] = useState("tab1")


    return (
      <div id='gallery' className='bg-[#EAEFF2] mb-10 md:mb-20 w-full max-w-screen'>
        <h2 className='text-4xl text-center font-oswald font-bold pt-20 pb-2 '>GALLERY</h2>
        <img className='w-[80px] mx-auto pb-10' src='./barber-scissors.png' />
        <div className='  w-[90%] m-auto'>
        <div className='text-center pb-5'>
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