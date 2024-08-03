import React from 'react'

export default function Activities() {
    return <>
        <div className=" max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
            <div className=" relative p-4">
                <h3 className=' absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
                <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src={require('../../img/recreation-lounge-towel-chair-chairs_1203-5760.jpg')} alt="recreation" />
            </div>
            <div className=" relative p-4">
                <h3 className=' absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Cruises</h3>
                <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src={require('../../img/urban-skyline-modern-buildings_1359-335.jpg')} alt="skyline" />
            </div>
            <div className=" relative p-4">
                <h3 className=' absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Excursions</h3>
                <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src={require('../../img/underwater-portrait-scuba-diver-exploring-sea-world_23-2151456243.jpg')} alt="diver scuba" />
            </div>
    </div>
    
    
    </>
}
