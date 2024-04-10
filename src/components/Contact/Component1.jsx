import React from 'react'

const Component1 = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center px-8 lg:px-20 w-full h-full pt-20">
  <div className="max-w-[768px]">
    <p className="font-xyz text-lg font-bold">CONTACT US</p>
    <h1 className="font-bold font-Sen text-2xl lg:text-3xl mt-2">Let’s Start a Conversation</h1>
    <p className="text-sm lg:text-base text-[#6D6E76] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
  </div>

  <div className="bg-[#592EA9] mt-20 flex justify-start items-center py-10 md:w-[768px] w-full h-auto md:h-[240px]">
  <div className="flex md:space-x-4 flex-col  lg:flex-row  md:flex-row  sm:flex-row  w-full px-4 md:px-0">
    <div className="flex flex-col px-4 md:px-16 py-2 w-full">
      <div className="w-full items-start text-start justify-start">
        <p className="text-[#FFFFFF] font-thin mt-4 md:-mt-4">Working hours</p>
        <div className="border-b border-white w-full mt-4"></div>
        <h5 className="font-Sen font-bold text-xl text-white mt-6">Monday To Friday</h5>
        <h5 className="font-Sen font-bold text-xl text-white mt-2">9:00 AM to 8:00 PM</h5>
        <h1 className="text-lg text-[#FFFFFF] font-thin mt-2">Our Support Team is available 24/7</h1>
      </div>
    </div>

    <div className="flex flex-col md:pr-20 pl-4 py-2 w-full mt-8 md:mt-0">
      <div className="w-full items-start text-start justify-start">
        <p className="text-[#FFFFFF] font-thin mt-4 md:-mt-4 sm:-mt-4">Contact us</p>
        <div className="border-b border-white w-full mt-4"></div>
        
        <h5 className="font-Sen font-bold text-xl text-white mt-6">020 7993 2905</h5>
        <h1 className="text-lg text-[#FFFFFF] font-thin mt-2">hello@finsweet.com</h1>
      </div>
    </div>
  </div>
</div>


</div>

  )
}

export default Component1
