import React from 'react'
import Image from "next/image";
import image1 from '../../../public/blog/Component2/image1.svg';
import image2 from '../../../public/blog/Component2/image2.svg';

const Component2 = () => {
  return (
    <main className="w-full h-full lg:px-16 md:px-16 sm:px-16 px-8 lg:py-20 md:py-20 sm:py-20 py-9">
    <div>
        <h1 className="lg:text-[36px] text-[16px] font-bold font-Sen max-h-[70px] shadow-md">All Posts</h1>
      </div>  
      <div className="flex flex-col lg:flex-row md:flex-row items-start lg:items-start">
          <div className="mt-10 max-w-[500px] max-h-[500px] lg:w-[400px] lg:h-[300px] md:w-[400px] md:h-[400px] ">
            <Image src={image1} layout="responsive" width={450} height={300} alt="Featured Image" />
          </div>
        <div className="flex flex-col max-w-[500px] lg:max-w-[640px] md:max-w-[400px] lg:pl-10 md:pl-10 lg:mt-16 md:mt-16 pl-2 mt-6">
            <p className="text-[14px] text-[#592EA9] font-Inter">START UP</p>
            <h2 className="text-[14px] lg:text-[34px] md:text-[28px] sm:text-[24px] font-Sen font-bold mt-2">Design tips for designers that cover everything you need</h2>
            <p className="text-[10px] mt-2 lg:text-[14px] md:text-[14px] sm:text-[12px] font-light max-w-[550px] font-xyz text-[#6D6E76]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row md:flex-row items-start lg:items-start">
          <div className="mt-10 max-w-[500px] max-h-[500px] lg:w-[400px] lg:h-[300px] md:w-[400px] md:h-[400px] ">
            <Image src={image2} layout="responsive" width={450} height={300} alt="Featured Image" />
          </div>
        <div className="flex flex-col max-w-[500px] lg:max-w-[640px] md:max-w-[400px] lg:pl-10 md:pl-10 lg:mt-16 md:mt-16 pl-2 mt-6">
            <p className="text-[14px] text-[#592EA9] font-Inter">BUSINESS</p>
            <h2 className="text-[14px] lg:text-[34px]  md:text-[28px] sm:text-[24px] font-Sen font-bold mt-2">How to build rapport with your web design clients</h2>
            <p className="text-[10px] mt-2 lg:text-[14px] md:text-[14px] sm:text-[12px] font-light max-w-[550px] font-xyz text-[#6D6E76]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row md:flex-row items-start lg:items-start">
          <div className="mt-10 max-w-[500px] max-h-[500px] lg:w-[400px] lg:h-[300px] md:w-[400px] md:h-[400px] ">
            <Image src={image1} layout="responsive" width={450} height={300} alt="Featured Image" />
          </div>
        <div className="flex flex-col max-w-[500px] lg:max-w-[640px] md:max-w-[400px] lg:pl-10 md:pl-10 lg:mt-16 md:mt-16 pl-2 mt-6">
            <p className="text-[14px] text-[#592EA9] font-Inter">START UP</p>
            <h2 className="text-[14px] lg:text-[34px]  md:text-[28px] sm:text-[24px] font-Sen font-bold mt-2">Logo design trends to avoid in 2022 for free today</h2>
            <p className="text-[10px] mt-2 lg:text-[14px] md:text-[14px] sm:text-[12px] font-light max-w-[550px] font-xyz text-[#6D6E76]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row md:flex-row items-start lg:items-start">
          <div className="mt-10 max-w-[500px] max-h-[500px] lg:w-[400px] lg:h-[300px] md:w-[400px] md:h-[400px] ">
            <Image src={image2} layout="responsive" width={450} height={300} alt="Featured Image" />
          </div>
        <div className="flex flex-col max-w-[500px] lg:max-w-[640px] md:max-w-[400px] lg:pl-10 md:pl-10 lg:mt-16 md:mt-16 pl-2 mt-6">
            <p className="text-[14px] text-[#592EA9] font-Inter">TECHNOLOGY</p>
            <h2 className="text-[14px] lg:text-[34px]  md:text-[28px] sm:text-[24px] font-Sen font-bold mt-2">8 Figma design systems you can download for free today</h2>
            <p className="text-[10px] mt-2 lg:text-[14px] md:text-[14px] sm:text-[12px] font-light max-w-[550px] font-xyz text-[#6D6E76]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        </div>
      </div>

      

      <div className="flex justify-center items-center space-x-2 mt-10">
    <a className="flex items-center py-2 px-3 rounded font-medium select-none text-gray-900 bg-white transition-colors hover:border-[#FFD050] hover:bg-[#FFD050] hover:text-white font-Sen"
      href="/Blog">
      {'<'} Prev
    </a>
    <a className="flex items-center py-2 px-3 rounded font-medium select-none text-gray-900 bg-white transition-colors hover:border-[#FFD050] hover:bg-[#FFD050] hover:text-white font-Sen"
      href="/BlogPost">
      Next {'>'}
    </a>
</div>
    </main>
  )
}

export default Component2


