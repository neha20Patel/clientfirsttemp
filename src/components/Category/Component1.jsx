import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Component1 = () => {
  return (
    <div className="bg-[#F4F0F8]">
    <div className="flex flex-col justify-center items-center text-center px-8 lg:px-20 w-full h-[348px] pt-16">
  <div className="max-w-[515px]">
  <h1 className="font-bold font-Sen text-2xl lg:text-[48px] mt-2">Business</h1>
  <p className="text-sm lg:text-base text-[#6D6E76] mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
  <div className="flex items-center justify-center space-x-2 mt-6 text-lg font-medium">
      <p className="font-xyz">BLOG</p>
      <IoIosArrowForward className="text-sm"/> 
      <p className="font-xyz">BUSINESS</p>
    </div>
    </div>
  </div>
  </div>
  )
}

export default Component1
