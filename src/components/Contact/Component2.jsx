import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

const Component2 = () => {
  return (
    <div className="flex flex-col px-4 md:px-20 justify-center items-center text-start w-full h-full space-y-4 py-8 md:py-16">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full md:w-[768px] max-w-[768px] h-[60px] px-4 py-5 border border-gray-300 rounded-md text-[16px] text-[#232536]"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full md:w-[768px] max-w-[768px] h-[60px] px-4 py-5 border border-gray-300 rounded-md text-[16px]"
      />

      <div className="relative w-full md:w-[768px] max-w-[768px]">
        <input
          type="text"
          placeholder="Query related"
          className="w-full h-[60px] px-4 py-5 border border-gray-300 rounded-md text-[16px] pr-10"
        />
        <IoIosArrowDown
          style={{
            position: 'absolute',
            right: '30px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      <input
        type="text"
        placeholder="Message"
        className="w-full md:w-[768px] max-w-[768px] h-[120px] px-4 text-start border border-gray-300 rounded-md text-[16px]"
      />

      <button className="w-full md:w-[768px] max-w-[768px] h-[60px] bg-[#FFD050] font-bold"> Send Message</button>
    </div>
  );
}

export default Component2;
