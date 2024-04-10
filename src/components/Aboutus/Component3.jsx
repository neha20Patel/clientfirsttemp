import React from 'react';
import Image from "next/image";
import ground from '../../../public/aboutus/Component3/ground.svg';
import person3 from '../../../public/aboutus/Component3/person3.svg';

const Component3 = () => {
  return (
    <div className="w-full xl:mt-28 lg:mt-60 md:mt-20 sm:-mt-64 -mt-12 lg:px-10 -px-2">
      
      <div className="flex flex-col lg:flex-row md:flex-row items-center justify-center py-10 lg:py-60">
        <div className="flex-1 px-10 max-w-[600px]">
          <h1 className="font-Sen text-[20px] lg:text-[36px] md:text-[24px] sm:text-[24px] font-bold">Our team of creatives</h1>
          <h4 className="font-Sen text-[14px] lg:text-[24px] md:text-[20px] sm:text-[20px] font-bold mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
          <p className="lg:text-[14px] md:text-[14px] text-[12px] text-[#6D6E76] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
        </div>
        <div className="flex-1 flex justify-center items-center lg:items-start px-10 mt-10">
          <Image src={ground}  width={550} height={480} alt="Featured Image" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse md:flex-row-reverse items-center justify-center py-10 lg:py-60 lg:-mt-96 md:mt-10 -mt-7 ">
        <div className="flex-1 px-10 lg:max-w-[600px] md:max-w-[400]">
          <h1 className="font-Sen text-[20px] lg:text-[36px] md:text-[28px] sm:text-[24px] font-bold">Why we started this Blog</h1>
          <h4 className="font-Sen text-[14px] lg:text-[24px] md:text-[20px] sm:text-[20px] font-bold mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
          <p className="lg:text-[14px] md:text-[14px] text-[12px] text-[#6D6E76] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
        </div>
        <div className="flex-1 flex justify-center items-center lg:items-start px-10 mt-10">
          <Image src={person3}  width={550} height={480} alt="Featured Image" />
        </div>
      </div>
      
      {/* <div className="flex flex-col lg:flex-row-reverse md:flex-row-reverse items-center justify-center py-10 lg:py-60 lg:-mt-40 md:mt-10 mt-7 pr-10">
        <div className="flex-1 px-10 max-w-[600px]">
          <h1 className="font-Sen text-[20px] lg:text-[36px] md:text-[36px] sm:text-[24px] font-bold ">Why we started this Blog</h1>
          <h4 className="font-Sen text-[14px] lg:text-[24px] md:text-[24px] sm:text-[20px] font-bold mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
          <p className="lg:text-[14px] md:text-[14px] text-[12px] text-[#6D6E76] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
        </div>
        <div className="flex-1 flex justify-center items-center lg:items-start px-10 mt-10">
          <Image src={person3} width={550} height={480} alt="Inspirational Image" />
        </div>
      </div> */}
    </div>
  );
};

export default Component3;
