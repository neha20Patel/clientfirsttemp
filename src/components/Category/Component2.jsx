import React from 'react'
import Image from "next/image";
import businessimg from '../../../public/category/Component2/businessimg.svg';
import icon1 from '../../../public/assests/Component4/icon1.svg';
import icon2 from '../../../public/assests/Component4/icon2.svg';
import icon3 from '../../../public/assests/Component4/icon3.svg';
import icon4 from '../../../public/assests/Component4/icon4.svg';

const Component2 = () => {
  return (
    <main className="w-full h-full lg:px-20 md:px-20 sm:px-20 px-10 lg:py-20 md:py-20 sm:py-20 py-9">
    <section className="flex flex-col lg:flex-row md:flex-row sm:flex-col">
      <section className="flex flex-col">
        <div className="flex flex-col lg:flex-row md:flex-row items-start lg:items-start">
          <div className=" max-w-full max-h-full xl:max-w-[260px] xl:max-h-[250px] lg:max-w-[260px] lg:max-h-[250px] md:max-w-[294px] md:max-h-[400px]">
            <Image src={businessimg} layout="responsive" width={294} height={250} alt="Featured Image" />
          </div>
          <div className="flex flex-col max-w-[500px] lg:max-w-[512px] md:max-w-[400px] lg:pl-6 md:pl-10 lg:mt-10 md:mt-3 mt-6">
            <p className="text-[14px] text-[#592EA9] font-Inter">BUSINESS</p>
            <h2 className="text-[14px] lg:text-[28px] md:text-[24px] sm:text-[20px] font-Sen font-bold mt-2">Top 6 free website mockup tools 2022</h2>
            <p className="text-[10px] mt-2 lg:text-[16px] md:text-[14px] sm:text-[12px] font-light max-w-[500px] font-xyz text-[#6D6E76]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
        </div>
        </div>
     
        <div className="flex flex-col lg:flex-row md:flex-row items-start lg:items-start mt-14">
        <div className=" max-w-full max-h-full xl:max-w-[260px] xl:max-h-[250px] lg:max-w-[260px] lg:max-h-[250px] md:max-w-[294px] md:max-h-[400px] ">
            <Image src={businessimg} layout="responsive" width={294} height={250} alt="Featured Image" />
          </div>
          <div className="flex flex-col max-w-[500px] lg:max-w-[512px] md:max-w-[400px] lg:pl-6 md:pl-10 lg:mt-10 md:mt-3  mt-6">
            <p className="text-[14px] text-[#592EA9] font-Inter">BUSINESS</p>
            <h2 className="text-[14px] lg:text-[28px] md:text-[24px] sm:text-[20px] font-Sen font-bold mt-2">Top 6 free website mockup tools 2022</h2>
            <p className="text-[10px] mt-2 lg:text-[16px] md:text-[14px] sm:text-[12px] font-light max-w-[500px] font-xyz text-[#6D6E76]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
        </div>
        </div>

        <div className="flex flex-col lg:flex-row md:flex-row items-start lg:items-start mt-14">
        <div className=" max-w-full max-h-full xl:max-w-[260px] xl:max-h-[250px] lg:max-w-[260px] lg:max-h-[250px] md:max-w-[294px] md:max-h-[400px] ">
            <Image src={businessimg} layout="responsive" width={294} height={250} alt="Featured Image" />
          </div>
          <div className="flex flex-col max-w-[500px] lg:max-w-[512px] md:max-w-[400px] lg:pl-6 md:pl-10 lg:mt-10 md:mt-3 mt-6">
            <p className="text-[14px] text-[#592EA9] font-Inter">BUSINESS</p>
            <h2 className="text-[14px] lg:text-[28px] md:text-[24px] sm:text-[20px] font-Sen font-bold mt-2">Ten free foogle fonts that you should use</h2>
            <p className="text-[10px] mt-2 lg:text-[16px] md:text-[14px] sm:text-[12px] font-light max-w-[500px] font-xyz text-[#6D6E76]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
         </div>
        </div>
        </section>
        <div className="lg:ml-36 md:ml-24 ml-4 lg:mt-2 mt-7">
        <h1 className="lg:text-[36px] text-[20px] font-bold font-Sen max-h-[70px]">Categories</h1>
        <div className="mt-8">
        <div className="flex flex-col items-center w-full sm:w-[294px] h-auto border rounded-md mt-5 py-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-amber-400">
  <div className="flex items-center justify-start w-full px-4">
    <div className="bg-pink-100 rounded-md p-2  h-9 w-9">
      <Image src={icon2} alt="Business" width={23} height={23} layout="intrinsic" />
    </div>
    <h3 className="font-sen text-sm sm:text-lg lg:text-xl font-bold ml-4">Business</h3>
  </div>
</div>

 <div className="flex flex-col items-center w-full sm:w-[294px] h-auto border rounded-md mt-5 py-4 transition   duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-amber-400">
  <div className="flex items-center justify-start w-full px-4">
    <div className="bg-pink-100 rounded-md p-2 h-9 w-9">
      <Image src={icon2} alt="Business" width={23} height={23} layout="intrinsic" />
    </div>
    <h3 className="font-sen text-sm sm:text-lg lg:text-xl font-bold ml-4">Startup</h3>
  </div>
</div>
 <div className="flex flex-col items-center w-full sm:w-[294px] h-auto border rounded-md mt-5 py-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-amber-400">
  <div className="flex items-center justify-start w-full px-4">
    <div className="bg-pink-100 rounded-md p-2 h-9 w-9">
      <Image src={icon3} alt="Business" width={23} height={23} layout="intrinsic" />
    </div>
    <h3 className="font-sen text-sm sm:text-lg lg:text-xl font-bold ml-4">Economy</h3>
  </div>
</div>

<div className="flex flex-col items-center w-full sm:w-[294px] h-auto border rounded-md mt-5 py-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-amber-400">
  <div className="flex items-center justify-start w-full px-4">
    <div className="bg-pink-100 rounded-md p-2 h-9 w-9">
      <Image src={icon4} alt="Business" width={23} height={23} layout="intrinsic" />
    </div>
    <h3 className="font-sen text-sm sm:text-lg lg:text-xl font-bold ml-4">Technology</h3>
  </div>
</div>
        <div className="lg:ml-3 md:ml-2 ml-4 mt-7">
          <h1 className="lg:text-[36px] text-[20px] font-bold font-Sen max-h-[70px] ">All Tags</h1>

          <div className="flex flex-row mt-6">
            <button className="-ml-2 font-[12px] text-[#6D6E76] font-Sen border border-[#6D6E76] rounded-full w-[133px] h-[48px]">Business</button>
            <button className=" ml-2 font-[12px] text-[#6D6E76] font-Sen border border-[#6D6E76] rounded-full w-[149px] h-[48px]">Experience</button>
          </div>
          <div className="flex flex-row mt-4">
            <button className="-ml-2 font-[12px] text-[#6D6E76] font-Sen border border-[#6D6E76] rounded-full w-[100px] h-[48px]">Screen</button>
            <button className=" ml-2 font-[12px] text-[#6D6E76] font-Sen border border-[#6D6E76] rounded-full w-[181px] h-[48px]">Technology</button>
          </div>
          <div className="flex flex-row mt-4">
          <button className="-ml-2 font-[12px] text-[#6D6E76] font-Sen border border-[#6D6E76] rounded-full w-[181px] h-[48px]">Marketing</button>
            <button className="ml-2 font-[12px] text-[#6D6E76] font-Sen  border-[#6D6E76] border rounded-full w-[100px] h-[48px]">Life</button>
            
          </div>
        </div>
      </div>
    </div>
 </section>
</main>
  )
}
export default Component2
