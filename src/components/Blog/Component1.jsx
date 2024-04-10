import React from 'react';
import Image from "next/image";
import image1 from '../../../public/blog/Component1/image1.svg';

const Component1 = () => {
  return (
    <main className="max-h-[700px] w-full py-16 lg:py-10 bg-[#F4F0F8]">
      <section className="container mx-auto flex flex-col lg:flex-row justify-between items-start space-y-10 lg:space-y-0 lg:space-x-10 lg:px-10 md:px-10 sm:px-9 px-4 mt-10 ">
        <div className="text-black text-left max-w-2xl w-full">
          <h1 className="text-[14px] lg:text-[20px] font-light font-xyz">FEATURED POST</h1>
          <h2 className="text-lg lg:text-4xl md:text-2xl sm:text-xl font-bold mt-6 font-Sen">
            Step-by-step guide to choosing great font pairs
          </h2>
          <div className="flex flex-row items-center space-x-6 mt-5">
            <p className="font-extralight text-[14px] lg:text-[16px] tracking-wider font-xyz">
              By <span className="text-[#592EA9] font-xyz">James</span>
            </p>
            <p className="font-extralight text-[14px] lg:text-[16px] tracking-wider font-xyz">| May 23, 2022</p>
          </div>
          <p className="text-[12px] lg:text-[16px] md:text-[14px] sm:text-[12px] font-light mt-4 max-w-[550px] font-xyz text-[#6D6E76]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <div className="mt-12">
            <a href="#_" className="mt-10 relative rounded px-5 py-2.5 overflow-hidden group bg-[rgba(255,208,80,1)] hover:bg-gradient-to-r hover:bg-[rgba(255,208,80,1)] text-black hover:ring-2 hover:ring-offset-2 hover:ring-[rgba(255,208,80,1)] transition-all ease-out duration-300 buttonHover">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative font-bold text-[14px] font-Sen">Read More{' >'}</span>
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 max-w-full lg:w-[500px] md:w-[450px] md:h-[400px] sm:w-[400px] sm:h-[400px] h-[359px] xl:max-w-lg ">
          <Image src={image1} layout="responsive" width={500} height={359} alt="Featured Image" />
        </div>
      </section>
    </main>
  );
}

export default Component1;
