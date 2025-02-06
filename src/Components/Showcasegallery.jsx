import React, {useState} from 'react'
import haircut1 from "../assets/haircut-1.jpg";
import haircut2 from "../assets/haircut-2.jpg";
import haircut3 from "../assets/haircut-3.jpg";
import haircut4 from "../assets/haircut-4.jpg";
import haircut5 from "../assets/haircut-5.jpg";
import haircut6 from "../assets/haircut-6.jpg";
import haircut7 from "../assets/haircut-7.jpg";
import haircut8 from "../assets/haircut-8.jpg";

import shave1 from "../assets/shave-1.jpg";
import shave2 from "../assets/shave-2.jpg";
import shave3 from "../assets/shave-3.jpg";
import shave4 from "../assets/shave-4.jpg";
import shave5 from "../assets/shave-5.jpg";
import shave6 from "../assets/shave-6.jpg";
import shave7 from "../assets/shave-7.jpg";
import shave8 from "../assets/shave-8.jpg";

const galleryTabs= [
    {id:'haircut', label:'HAIRCUT'},
    {id:'shave', label:'SHAVE'}
];

const images= {
    haircut: [haircut1, haircut2, haircut3, haircut4, haircut5, haircut6, haircut7, haircut8],
    shave: [shave1, shave2, shave3, shave4, shave5, shave6, shave7, shave8]
}

const ImageGrid = ({ imageSources, openLightbox }) => (
    <div className="grid grid-cols-4 grid-rows-2 gap-2 w-full max-w-screen-xl mx-auto p-2">
        {imageSources.map((src, index) => (
            <div key={index}  
            className="w-full h-40 md:h-52 lg:h-64 overflow-hidden rounded-lg hover:cursor-pointer hover:scale-105 transition-transform duration-500 border border-transparent hover:border-[#d19d64]"
            onClick={() => {
                
                openLightbox(src)
            }}
            >
                <img
                    src={src}
                    className="w-full h-full object-cover hover:opacity-50 transition-opacity duration-500"
                />
            </div>
        ))}
    </div>
)

const Lightbox = ({ src, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          
          <button
            className="absolute top-6 right-6 text-white text-4xl font-bold bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-80 transition"
            onClick={onClose}
          >
            ✕
          </button>

          <img
        src={src}
        alt="Expanded view"
        className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-lg"
      />
    </div>
  );
};








const Testgallery = () => {

    const [activeTab, setActiveTab]= useState('haircut')
    const [lightboxImage, setLightboxImage]= useState(null)

    const openLightbox = (image) => {
        setLightboxImage(image)
    }

    const closeLightbox = () => {
        setLightboxImage(null)
    }

  return (
    <div id='gallery' className='bg-[#EAEFF2] mb-10 md:mb-20 w-full max-w-screen'>
        <h2 className="text-6xl text-center font-oswald font-bold pt-10 pb-2">GALLERY</h2>
        <img className="w-[80px] mx-auto pb-10" src="./barber-scissors.png" alt="Scissors" />
    <div className='text-center pb-5'>
        {galleryTabs.map((tab) => (
            <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-oswald px-4 mx-2 mt-2 font-light text-2xl ${
                    activeTab === tab.id ? "bg-black text-white" : "bg-white text-black"
                }`}
            >

                {tab.label}
            </button>
        ))}
    </div>

        <ImageGrid imageSources={images[activeTab]} openLightbox={openLightbox} />

        {lightboxImage && <Lightbox src={lightboxImage} onClose={closeLightbox}/>}
    </div>
  )
}

export default Testgallery