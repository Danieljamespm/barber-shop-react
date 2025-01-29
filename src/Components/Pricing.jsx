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
                <div className='bg-white w-[100%] md:w-[35%]'>
                    
                    <div className='flex justify-between'>
                    <p className='font-oswald border-b-2 w-full border-gray-400 md:pt-10'>VINTAGE HAIR CUT </p>
                    <p className='text-[#d19d64] border-b-2 md:pt-10 border-gray-400 font-oswald pt-3'>$12</p>
                    </div>
                    <div className='flex justify-between'>
                    <p className='font-oswald border-b-2 w-full border-gray-400 md:pt-10'>CLASSIC HAIRCUT</p>
                    <p className='text-[#d19d64] md:pt-10 font-oswald border-b-2 border-gray-400 pt-3'>$25</p>
                    </div>
                    <div className='flex justify-between'>
                    <p className='font-oswald border-b-2 w-full border-gray-400 md:pt-10'>STYLISH HAIRCUT</p>
                    <p className='text-[#d19d64] md:pt-10 font-oswald border-b-2 border-gray-400 pt-3'>$34</p>
                    </div>
                    <div className='flex justify-between'>
                    <p className='font-oswald border-b-2 w-full border-gray-400 md:pt-10'>TRADITIONAL HAIR CUT</p>
                    <p className='text-[#d19d64] md:pt-10 font-oswald border-b-2 border-gray-400 pt-3'>$44</p>
                    </div>
                </div>
                <div className='bg-white w-[100%] md:w-[35%]'>
                    <div className='flex justify-between'>
                    <p className='font-oswald border-b-2 w-full border-gray-400 md:pt-10'>HAIR WASH</p>
                    <p className='text-[#d19d64] md:pt-10 font-oswald border-b-2 border-gray-400 pt-3'>$12</p>
                    </div>
                    <div className='flex justify-between'>
                    <p className='font-oswald border-b-2 w-full border-gray-400 md:pt-10'>HAIR COLOR</p>
                    <p className='text-[#d19d64] md:pt-10 font-oswald border-b-2 border-gray-400 pt-3'>$75</p>
                    </div>
                    <div className='flex justify-between'>
                    <p className='font-oswald border-b-2 w-full border-gray-400 md:pt-10'>HIGHLIGHT</p>
                    <p className='text-[#d19d64] md:pt-10 font-oswald border-b-2 border-gray-400 pt-3'>$49</p>
                    </div>
                    <div className='flex justify-between'>
                    <p className='font-oswald border-b-2 w-full border-gray-400 md:pt-10'>HAIR RESTORATION/REPLACEMENT</p>
                    <p className='text-[#d19d64] md:pt-10  font-oswald border-b-2 border-gray-400 pt-3'>$99</p>
                    </div>
                </div>
            </div>
        ),
        tab2: (
            <div className='flex justify-around flex-col md:flex-row'>
            <div className='bg-white w-[100%] md:w-[35%]'>
                
                <div className='flex justify-between'>
                <p className='font-oswald border-b-2 w-full border-gray-400 md:pt-10'>BEAR TRIM </p>
                <p className='text-[#d19d64] border-b-2 md:pt-10 border-gray-400 font-oswald pt-3'>$10</p>
                </div>
                <div className='flex justify-between'>
                <p className='font-oswald border-b-2 w-full border-gray-400 md:pt-10'>FULL BEARD SHAPING</p>
                <p className='text-[#d19d64] md:pt-10 font-oswald border-b-2 border-gray-400 pt-3'>$30</p>
                </div>
                <div className='flex justify-between'>
                <p className='font-oswald border-b-2 w-full border-gray-400 md:pt-10'>HOT TOWEL SHAVE</p>
                <p className='text-[#d19d64] md:pt-10 font-oswald border-b-2 border-gray-400 pt-3'>$25</p>
                </div>
                <div className='flex justify-between'>
                <p className='font-oswald border-b-2 w-full border-gray-400 md:pt-10'>CLASSIC SHAVE</p>
                <p className='text-[#d19d64] md:pt-10 font-oswald border-b-2 border-gray-400 pt-3'>$15</p>
                </div>
            </div>
            <div className='bg-white w-[100%] md:w-[35%]'>
                <div className='flex justify-between'>
                <p className='font-oswald border-b-2 w-full border-gray-400 md:pt-10'>BEARD LINE-UP</p>
                <p className='text-[#d19d64] md:pt-10 font-oswald border-b-2 border-gray-400 pt-3'>$20</p>
                </div>
                <div className='flex justify-between'>
                <p className='font-oswald border-b-2 w-full border-gray-400 md:pt-10'>MUSTACHE TRIM</p>
                <p className='text-[#d19d64] md:pt-10 font-oswald border-b-2 border-gray-400 pt-3'>$20</p>
                </div>
                <div className='flex justify-between'>
                <p className='font-oswald border-b-2 w-full border-gray-400 md:pt-10'>FACIAL HAIR TINTING</p>
                <p className='text-[#d19d64] md:pt-10 font-oswald border-b-2 border-gray-400 pt-3'>$40</p>
                </div>
                <div className='flex justify-between'>
                <p className='font-oswald border-b-2 w-full border-gray-400 md:pt-10'>SKIN TREATMENTS</p>
                <p className='text-[#d19d64] md:pt-10  font-oswald border-b-2 border-gray-400 pt-3'>$15</p>
                </div>
            </div>
        </div>
        ),
        tab3: (
            <div className='flex justify-around flex-col md:flex-row'>
                <div className='bg-white w-[100%] md:w-[35%]'>
                    
                    <div className='flex justify-between'>
                    <p className='font-oswald border-b-2 w-full border-gray-400 md:pt-10'>MANICURE </p>
                    <p className='text-[#d19d64] border-b-2 md:pt-10 border-gray-400 font-oswald pt-3'>$10</p>
                    </div>
                    <div className='flex justify-between'>
                    <p className='font-oswald border-b-2 w-full border-gray-400 md:pt-10'>PEDICURE</p>
                    <p className='text-[#d19d64] md:pt-10 font-oswald border-b-2 border-gray-400 pt-3'>$15</p>
                    </div>
                    <div className='flex justify-between'>
                    <p className='font-oswald border-b-2 w-full border-gray-400 md:pt-10'>FACIAL</p>
                    <p className='text-[#d19d64] md:pt-10 font-oswald border-b-2 border-gray-400 pt-3'>$20</p>
                    </div>
                    <div className='flex justify-between'>
                    <p className='font-oswald border-b-2 w-full border-gray-400 md:pt-10'>FACE MASK</p>
                    <p className='text-[#d19d64] md:pt-10 font-oswald border-b-2 border-gray-400 pt-3'>$10</p>
                    </div>
                </div>
                <div className='bg-white w-[100%] md:w-[35%]'>
                    <div className='flex justify-between'>
                    <p className='font-oswald border-b-2 w-full border-gray-400 md:pt-10'>EYEBROW WAXING</p>
                    <p className='text-[#d19d64] md:pt-10 font-oswald border-b-2 border-gray-400 pt-3'>$20</p>
                    </div>
                    <div className='flex justify-between'>
                    <p className='font-oswald border-b-2 w-full border-gray-400 md:pt-10'>NOSE AND EAR TRIMMING</p>
                    <p className='text-[#d19d64] md:pt-10 font-oswald border-b-2 border-gray-400 pt-3'>$20</p>
                    </div>
                    <div className='flex justify-between'>
                    <p className='font-oswald border-b-2 w-full border-gray-400 md:pt-10'>CHEST AND BACK WAXING</p>
                    <p className='text-[#d19d64] md:pt-10 font-oswald border-b-2 border-gray-400 pt-3'>$40</p>
                    </div>
                    <div className='flex justify-between'>
                    <p className='font-oswald border-b-2 w-full border-gray-400 md:pt-10'>MASSAGE</p>
                    <p className='text-[#d19d64] md:pt-10  font-oswald border-b-2 border-gray-400 pt-3'>$30</p>
                    </div>
                </div>
            </div>
        )
    }




  return (
    
        <div className='bg-barber-chair bg-cover bg-center h-[700px] '>
            <h2 className='text-4xl text-center font-oswald font-bold pt-20 pb-2'>OUR PRICING</h2>
            <img className='w-[80px] mx-auto pb-10' src='./barber-scissors.png' />
                <div className='bg-slate-300 w-[80%] h-[50%] m-auto'>
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
        </div>    
  )
}

export default Pricing