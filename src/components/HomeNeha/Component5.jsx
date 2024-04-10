import React from 'react';
import Image from "next/image";
import groupimage from '../../../public/assests/Component5/groupimage.svg';

const Component5 = () => {
  return (
    <main className="w-full h-auto px-10 md:px-16 lg:px-20 lg:h-[800px] overflow-hidden lg:-mt-[40px] md:mt-[10px] sm:mt-[30px] mt-[400px]" >
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row relative justify-start items-start lg:mt-7 sm:mt-32 mt-96">
       
        <div className="relative w-full lg:w-[900px] md:w-[700px] sm:w-auto h-auto">
          <Image src={groupimage} layout="responsive" width={900} height={705} objectFit="cover" alt="Building" priority />
        </div>
        
        <div className="lg:mt-0 lg:absolute lg:top-48 lg:-right-20 md:right-0 sm:right-64 bg-white p-4 lg:p-20 w-full lg:w-[700px] h-auto justify-center items-start lg:items-start sm:items-center md:items-start text-left lg:text-left">
          <h1 className="text-sm lg:text-[16px] font-xyz">WHY WE STARTED</h1>
          <h2 className="text-[18px] lg:text-[36px] md:text-[28px] sm:text-[20px] font-bold font-sen lg:mt-3 mt-2 w-full lg:max-w-[380px] md:max-w-[430px] ">It started out as a simple idea and evolved into our passion</h2>
          <p className="text-[12px] lg:text-[14px] font-light text-gray-500 mt-2 lg:mt-5 w-full lg:max-w-[430px] md:max-w-[430px] font-xyz ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
          <button className="mt-4 text-[12px] lg:text-[14px] bg-yellow-300 text-black px-4 py-2 rounded font-bold font-sen">Discover our story {'>'}</button>
        </div>
      </div>
    </main>
  );
}
export default Component5;
