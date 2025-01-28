import React, {useState} from 'react'

const Pricing = () => {

    const [activeTab, setActiveTab] = useState(0)

    const tabs = [
        {
            label: 'Hair',
            services: [
                {name:'VINTAGE HAIR CUT', price: '$12'},
                {name: 'CLASSIC HAIR CUT', price: '25'},
                {name: 'STYLISH HAIR CUT', price: '$34'},
                {name: 'TRADITIONAL HAIR CUT', price: '$44'},
            ],
            additionalServices: [
                {name: 'HAIR WASH', price: '$12'},
                {name: 'HAIR COLOR', price: '75'},
                {name: 'HIGHLIGHT', price: '49'},
                {name: 'HAIR RESTORATION OR REPLACEMENT', price: 'STARTING AT $99'},
            ],
        },
        {
            label: 'Shave',
            services: [
                {name: "BEARD TRIM", price: '$10'},
                {name: "FULL BEARD SHAPING", price:'$30'},
                {name:"HOT TOWEL SHAVE", price:'$25'},
                {name:'CLASSIC SHAVE', price:'$15'},
            ],
            additionalSerevices: [
                {name: "BEARD LINE-UP", price: '$20'},
                {name: "MUSTACHE TRIM", price:'$20'},
                {name:"FACIAL HAIR TINTING", price:'$40'},
                {name:'SKIN TREATMENTS', price:'$15'},
            ],
        },
        {
            label: 'OTHER',
            services:[
                {name: "MANICURE", price: '$10'},
                {name: "PEDICURE", price:'$15'},
                {name:"FACIAL", price:'$20'},
                {name:'FACE MASK', price:'$10'},
            ],
            additionalServices: [
                {name: "EYEBROW WAXING", price: '$20'},
                {name: "NOSE AND EAR TRIMMING", price:'$20'},
                {name:"CHEST AND BACK WAXING", price:'$40'},
                {name:'MASSAGE', price:'$30'},
            ],
        },
    ];




  return (
    <div className='w-[100%] h-[700px]'>
        <h2 className='text-4xl font-oswald font-bold text-center pt-20 pb-2'>OUR PRICING</h2>
        <img className='w-[80px] mx-auto' src='./barber-scissors.png' />
    </div>
  )
}

export default Pricing