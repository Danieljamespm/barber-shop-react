import React, {useState} from 'react'

const Pricing = () => {

    const [activeTab, setActiveTab] = useState("tab1")

    const tabs = [
        {id:"tab1", label: "HAIR"},
        {id:"tab2", label: "SHAVE"},
        {id:"tab3", label: "OTHER"}
    ];

    const tabContent = {
        tab1: (
            <div className='flex justify-around flex-col md:flex-row'>
                <div className=' w-[100%] md:w-[45%]'>
                    
                    <div className='flex justify-between pb-3'>
                    <p className='text-white font-oswald border-b w-full border-gray-400 md:pt-10'>VINTAGE HAIRCUT </p>
                    <p className='text-[#d19d64] border-b md:pt-10 border-gray-400 font-oswald '>$12</p>
                    </div>
                    <div className='flex justify-between pb-3'>
                    <p className='text-white font-oswald border-b w-full border-gray-400 md:pt-10'>CLASSIC HAIRCUT</p>
                    <p className='text-[#d19d64] md:pt-10 font-oswald border-b border-gray-400 '>$25</p>
                    </div>
                    <div className='flex justify-between pb-3'>
                    <p className='text-white font-oswald border-b w-full border-gray-400 md:pt-10'>STYLISH HAIRCUT</p>
                    <p className='text-[#d19d64] md:pt-10 font-oswald border-b border-gray-400 '>$34</p>
                    </div>
                    <div className='flex justify-between pb-3'>
                    <p className='text-white font-oswald border-b w-full border-gray-400 md:pt-10'>TRADITIONAL HAIRCUT</p>
                    <p className='text-[#d19d64] md:pt-10 font-oswald border-b border-gray-400 '>$44</p>
                    </div>
                </div>
                <div className=' w-[100%] md:w-[45%]'>
                    <div className='flex justify-between pb-3'>
                    <p className='text-white font-oswald border-b w-full border-gray-400 md:pt-10'>HAIR WASH</p>
                    <p className='text-[#d19d64] md:pt-10 font-oswald border-b border-gray-400 '>$12</p>
                    </div>
                    <div className='flex justify-between pb-3'>
                    <p className='text-white font-oswald border-b w-full border-gray-400 md:pt-10'>HAIR COLOR</p>
                    <p className='text-[#d19d64] md:pt-10 font-oswald border-b border-gray-400 '>$75</p>
                    </div>
                    <div className='flex justify-between pb-3'>
                    <p className='text-white font-oswald border-b w-full border-gray-400 md:pt-10'>HIGHLIGHT</p>
                    <p className='text-[#d19d64] md:pt-10 font-oswald border-b border-gray-400 '>$49</p>
                    </div>
                    <div className='flex justify-between'>
                    <p className='text-white font-oswald border-b w-full border-gray-400 md:pt-10'>HAIR RESTORATION/REPLACEMENT</p>
                    <p className='text-[#d19d64] md:pt-10  font-oswald border-b border-gray-400 '>$99</p>
                    </div>
                </div>
            </div>
        ),
        tab2: (
            <div className='flex justify-around flex-col md:flex-row'>
            <div className=' w-[100%] md:w-[45%]'>
                
                <div className='flex justify-between pb-3'>
                <p className='text-white font-oswald border-b w-full border-gray-400 md:pt-10'>BEAR TRIM </p>
                <p className='text-[#d19d64] border-b md:pt-10 border-gray-400 font-oswald'>$10</p>
                </div>
                <div className='flex justify-between pb-3'>
                <p className='text-white font-oswald border-b w-full border-gray-400 md:pt-10'>FULL BEARD SHAPING</p>
                <p className='text-[#d19d64] md:pt-10 font-oswald border-b border-gray-400'>$30</p>
                </div>
                <div className='flex justify-between pb-3'>
                <p className='text-white font-oswald border-b w-full border-gray-400 md:pt-10'>HOT TOWEL SHAVE</p>
                <p className='text-[#d19d64] md:pt-10 font-oswald border-b border-gray-400'>$25</p>
                </div>
                <div className='flex justify-between pb-3'>
                <p className='text-white font-oswald border-b w-full border-gray-400 md:pt-10'>CLASSIC SHAVE</p>
                <p className='text-[#d19d64] md:pt-10 font-oswald border-b border-gray-400'>$15</p>
                </div>
            </div>
            <div className=' w-[100%] md:w-[45%]'>
                <div className='flex justify-between pb-3'>
                <p className='text-white font-oswald border-b w-full border-gray-400 md:pt-10'>BEARD LINE-UP</p>
                <p className='text-[#d19d64] md:pt-10 font-oswald border-b border-gray-400'>$20</p>
                </div>
                <div className='flex justify-between pb-3'>
                <p className='text-white font-oswald border-b w-full border-gray-400 md:pt-10'>MUSTACHE TRIM</p>
                <p className='text-[#d19d64] md:pt-10 font-oswald border-b border-gray-400'>$20</p>
                </div>
                <div className='flex justify-between pb-3'>
                <p className='text-white font-oswald border-b w-full border-gray-400 md:pt-10'>FACIAL HAIR TINTING</p>
                <p className='text-[#d19d64] md:pt-10 font-oswald border-b border-gray-400'>$40</p>
                </div>
                <div className='flex justify-between'>
                <p className='text-white font-oswald border-b w-full border-gray-400 md:pt-10'>SKIN TREATMENTS</p>
                <p className='text-[#d19d64] md:pt-10  font-oswald border-b border-gray-400'>$15</p>
                </div>
            </div>
        </div>
        ),
        tab3: (
            <div className='flex justify-around flex-col md:flex-row'>
                <div className=' w-[100%] md:w-[45%]'>
                    
                    <div className='flex justify-between pb-3'>
                    <p className='text-white font-oswald border-b w-full border-gray-400 md:pt-10'>MANICURE </p>
                    <p className='text-[#d19d64] border-b md:pt-10 border-gray-400 font-oswald'>$10</p>
                    </div>
                    <div className='flex justify-between pb-3'>
                    <p className='text-white font-oswald border-b w-full border-gray-400 md:pt-10'>PEDICURE</p>
                    <p className='text-[#d19d64] md:pt-10 font-oswald border-b border-gray-400'>$15</p>
                    </div>
                    <div className='flex justify-between pb-3'>
                    <p className='text-white font-oswald border-b w-full border-gray-400 md:pt-10'>FACIAL</p>
                    <p className='text-[#d19d64] md:pt-10 font-oswald border-b border-gray-400'>$20</p>
                    </div>
                    <div className='flex justify-between pb-3'>
                    <p className='text-white font-oswald border-b w-full border-gray-400 md:pt-10'>FACE MASK</p>
                    <p className='text-[#d19d64] md:pt-10 font-oswald border-b border-gray-400'>$10</p>
                    </div>
                </div>
                <div className=' w-[100%] md:w-[45%]'>
                    <div className='flex justify-between pb-3'>
                    <p className='text-white font-oswald border-b w-full border-gray-400 md:pt-10'>EYEBROW WAXING</p>
                    <p className='text-[#d19d64] md:pt-10 font-oswald border-b border-gray-400'>$20</p>
                    </div>
                    <div className='flex justify-between pb-3'>
                    <p className='text-white font-oswald border-b w-full border-gray-400 md:pt-10'>NOSE AND EAR TRIMMING</p>
                    <p className='text-[#d19d64] md:pt-10 font-oswald border-b border-gray-400'>$20</p>
                    </div>
                    <div className='flex justify-between pb-3'>
                    <p className='text-white font-oswald border-b w-full border-gray-400 md:pt-10'>CHEST AND BACK WAXING</p>
                    <p className='text-[#d19d64] md:pt-10 font-oswald border-b border-gray-400'>$40</p>
                    </div>
                    <div className='flex justify-between'>
                    <p className='text-white font-oswald border-b w-full border-gray-400 md:pt-10'>MASSAGE</p>
                    <p className='text-[#d19d64] md:pt-10  font-oswald border-b border-gray-400'>$30</p>
                    </div>
                </div>
            </div>
        )
    }




  return (
    
        <div id="pricing" className='bg-black bg-blend-darken bg-opacity-70 bg-barber-chair bg-cover bg-center h-[600px] md:h-[750px] '>
            <h2 className='text-4xl text-center font-oswald font-bold pt-20 pb-2 text-white'>OUR PRICING</h2>
            <img className='w-[80px] mx-auto pb-10' src='./barber-scissors.png' />
                <div className=' w-[80%] h-[50%] m-auto'>
               <div className='flex flex-wrap justify-around bg-black text-gray-500 text-xl font-bold border-b-2 border-[#d19d64] '>
                {tabs.map((tab) => (
                    <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`font-oswald hover:bg-[#d19d64] hover:text-black px-10 hover:duration-500 ${
                        activeTab === tab.id ? 'bg-[#d19d64] text-black' : 'bg-black text-gray-500'
                    }`}>
                        
                        {tab.label}</button>
                ))}
            </div>
            <div>{tabContent[activeTab]}</div>
            </div>
            <div className='h-[45px] max-w-[65%] hover:bg-black hover:border-white hover:duration-500 mx-auto p-12 border-2 border-gray-500 hidden md:flex justify-between items-center '>
                <p className='text-white font-oswald '>OPENING HOURS: MONDAY-FRIDAY: 9.00AM-6.00PM</p>
                <button className='bg-[#D19D64] h-[30px] w-[180px] text-[10px] hover:bg-white hover:duration-500 rounded-lg font-oswald font-bold tracking-widest'>MAKE APPOINTMENT NOW</button>
            </div>
        </div>    
  )
}

export default Pricing