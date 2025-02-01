import React, {useState} from 'react'




const galleryTabs = [
  { id: "tab1", label: "HAIRCUT" },
  { id: "tab2", label: "SHAVE" },
];

const images = {
  tab1: ["haircut-1", "haircut-2", "haircut-3", "haircut-4", "haircut-5", "haircut-6", "haircut-7", "haircut-8"],
  tab2: ["shave-1", "shave-2", "shave-3", "shave-4", "shave-5", "shave-6", "shave-7", "shave-8"],
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [selectedImage, setSelectedImage]= useState(null)

  return (
    <div id="gallery" className="bg-[#EAEFF2] mb-10 md:mb-20 w-full max-w-screen">
      <h2 className="text-4xl text-center font-oswald font-bold pt-10 pb-2">GALLERY</h2>
      <img className="w-[80px] mx-auto pb-10" src="./barber-scissors.png" alt="Barber Scissors" />
      <div className="w-[90%] m-auto">
        <div className="text-center pb-5">
          {galleryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-oswald px-4 mx-2 mt-2 font-light ${
                activeTab === tab.id ? "bg-black text-white" : "bg-white text-black"
              }`}
              aria-selected={activeTab === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-4 grid-rows-2 gap-2 w-full max-w-screen-lg mx-auto border">
          {images[activeTab].map((img, index) => (
            <div
              key={index}
              className={`aspect-square bg-${img} bg-cover bg-center scale-100 hover:scale-105 hover:border-4 hover:border-[#d19d64] hover:bg-black hover:bg-blend-darken hover:bg-opacity-50`}
              onClick={() => setSelectedImage(img)}
            ></div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="relative p-4 max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-white text-3xl" onClick={() => setSelectedImage(null)}>
              &times;
            </button>
            <div className={`bg-${selectedImage} bg-cover bg-center w-full h-[90vh] rounded-lg`}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;