import React from 'react'

export default function Gallery() {
    return <>
        <div id='gallery' className="max-w-[1140px] m-auto w-full px-4 py-16">
            <h2 className=' text-center text-gray-700 p-4 '>Gallery</h2>
            <div className=" grid sm:grid-cols-5 gap-4">
                <div className=" sm:col-span-3 col-span-2 row-span-2">
                    <img className=' w-full h-full object-cover' src={require('../../img/luxurious-villa-with-modern-architectural-design_23-2151694086.jpg')} alt="" />
                </div>
                <div className=" ">
                    <img className=' w-full h-full object-cover' src={require('../../img/coconut-landscape-green-tropical-swimming_1253-651.jpg')} alt="" />
                </div>
                <div className=" ">
                    <img className=' w-full h-full object-cover' src={require('../../img/terrace-lounge-with-rattan-armchairs-seaview-luxury-resort-summer-holiday-concept_1253-931.jpg')} alt="" />
                </div>
                <div className=" ">
                    <img className=' w-full h-full object-cover' src={require('../../img/view-breathtaking-beach-nature-landscape_23-2151682898.jpg')} alt="" />
                </div>
                <div className=" ">
                    <img className=' w-full h-full object-cover' src={require('../../img/vacation-luxury-resort-with-swimming-pool-hammock-umbrellas-ai-generative_123827-24108.jpg')} alt="" />
                </div>
            </div>

        </div>
        



    </>
}

