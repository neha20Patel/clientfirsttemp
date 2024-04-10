import React from 'react';
import Image from "next/image";
import imagecover from '../../../public/assests/Component1/imagecover.svg';

const Component1 = () => {
  return (
    <main className={`w-full h-auto relative leading-snug fadeIn`}>
      <div className="relative w-full h-[450px] md:h-[400px] lg:h-[550px]">
        <Image
          src={imagecover}
          alt="Cover"
          layout="fill" 
          objectFit="cover" 
          quality={100} 
        />
      <div className="absolute w-full h-full flex items-center justify-center bg-black/70 ">
          <div className={`text-white p-4 text-left max-w-2xl w-full mx-auto ml-6 md:px-8 lg:px-18 fadeIn`}>
            <h1 className="text-[14px] lg:text-[20px] font-light">POSTED ON STARTUP</h1>
              <h1 className="text-lg lg:text-4xl md:text-2xl sm:text-xl font-bold mt-6 font-sen"> Step-by-step guide to choosing great font pairs</h1>
            <div className="flex flex-row items-center space-x-6 mt-5">
              <p className="font-extralight text-[14px] lg:text-[16px] tracking-wider font-xyz">
                By <span className="text-[rgba(255,208,80,1)] font-xyz">James</span>
               </p>
              <p className="font-extralight text-[14px] lg:text-[16px] tracking-wider font-xyz">| May 23, 2022 </p>
            </div>
            <p className="text-[12px] lg:text-[16px] md:text-[14px] sm-text-[12px] font-light mt-7 max-w-[550px] font-xyz">
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur  occaecat cupidatat non proident.
            </p>
            <div className="mt-9">
              <a href="#_" className={`mt-10 relative rounded px-5 py-2.5 overflow-hidden group bg-[rgba(255,208,80,1)]  hover:bg-gradient-to-r hover:bg-[rgba(255,208,80,1)]  text-black hover:ring-2 hover:ring-offset-2 hover:ring-[rgba(255,208,80,1)]  transition-all ease-out duration-300 buttonHover`}>
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative font-bold text-[14px] font-sen">Read More{'  > '}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Component1;
