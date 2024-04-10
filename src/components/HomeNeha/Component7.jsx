import React from 'react';
import Image from "next/image";
import profile from '../../../public/assests/Component7/profile.svg';

const Component7 = () => {
  return (
    <main className="px-6 lg:px-20 md:px-10 sm:px-10 w-full">
    <div className="max-h-full bg-[rgba(251,246,234,1)] overflow-hidden mt-[100px] lg:mt-[170px] md:mt-[130px] sm:mt-[100px]">
      <div className="flex flex-col md:flex-row sm:flex-row justify-between items-center px-4 sm:px-8 md:px-8 lg:px-16 xl:px-20">

        <div className="flex flex-col w-full md:w-1/2 lg:max-w-[345px] py-12 sm:py-6 px-9 lg:py-14 lg:px-2 xl:px-6">
          <h1 className="text-[14px] lg:text-[16px] font-semibold font-xyz">TESTIMONIALS</h1>
          <h2 className="text-[14px] sm:text-[20px] md:text-[20px] lg:text-3xl font-bold mt-4 font-sen" >What people say about our blog</h2>
          <p className="text-[12px] lg:text-[16px] font-extralight text-gray-900 mt-3 font-xyz">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>

        <div className="hidden md:block bg-gray-700 w-px h-[300px] lg:my-0 my-6"></div>
        
        <div className="flex flex-col w-full md:w-1/2 lg:max-w-lg py-3 sm:py-6 px-9 lg:py-14  lg:px-3 xl:px-4 lg:mt-10">
          <h4 className="text-[12px] md:text-[18px] lg:text-[20px] font-bold xl:w-[400px] lg:w-[350px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
          <div className="flex flex-row mt-8 md:mt-16">
            <Image src={profile} width={48} height={48} alt="Profile" className="lg:h-12 lg:w-12 md:h-12 md:w-12 w-8 h-8"/>
            <div className="ml-6">
                <h4 className="lg:text-[24px] text-[14px] font-bold">Jonathan Vallem</h4>
                <p className="lg:text-[16px] text-[12px] font-extralight text-[rgba(126,126,126,1)]">New york, USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  );
};

export default Component7;
