import React from 'react'

export default function Hero() {
  return <>
  
    <div className="w-full h-[90vh]">
      <img src={require('../../img/sunrise.jpg')}
        alt=""
        className='w-full h-full object-cover'
      
      />
    </div>
    <div className="max-w-[1140px] m-auto">
      <div className=" absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-gray-700 p-4">
        <h1 className=' font-bold text-4xl'>Find Your Special Trip</h1>
        <h2 className='text-4xl italic'>With Weekaway</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cum unde veniam praesentium sed,
          adipisci vero eos ipsam, vitae accusamus iure fuga
          corporis deserunt, obcaecati consectetur ipsum
          veritatis odit sint inventore!
        </p>
      </div>
    </div>
  
  </>
}
