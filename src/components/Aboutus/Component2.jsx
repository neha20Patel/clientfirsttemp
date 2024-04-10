import React from 'react'
import Image from "next/image";
import group from '../../../public/aboutus/Component2/group.svg';
const Component2 = () => {
  return (
    <div className="w-full h-[540px] mt-10">
    <div className="px-10 relative w-full h-[400px] ">
      <Image src={group} priority className="lg:w-[1280px] lg:flex md:flex hidden sm:hidden"/>
    <div className="bg-[#FFD050] w-[400px] xl:w-[630px] xl:h-[156px] lg:w-[530px] lg:h-[120px] md:w-[450px] h-auto py-8 md:h-[100px] absolute top-30 xl:top-40 lg:top-20 md:top-16 left-0 md:left-40 mt-28 hidden md:hidden lg:flex xl:flex-row lg:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-3 xl:space-x-7">
  <div className="flex flex-col items-start">
    <h1 className="text-4xl xl:text-[48px] md:text-[24px] lg:text-[34px] font-Sen font-bold">12+</h1>
    <p className="text-base">Blogs Published</p>
  </div>
  <div className="flex flex-col items-start">
    <h1 className="text-4xl xl:text-[48px] md:text-[24px] lg:text-[34px] font-Sen font-bold">18K+</h1>
    <p className="text-base">Views on Finsweet</p>
  </div>
  <div className="flex flex-col items-start">
    <h1 className="text-4xl xl:text-[48px] md:text-[24px] lg:text-[34px] font-Sen font-bold">30K+</h1>
    <p className="text-base">Total active Users</p>
  </div>
</div>

</div>
<div className="bg-[rgba(244,240,248,1)] xl:ml-[40px] xl:mr-[40px] lg:ml-[40px] lg:mr-[40px] md:ml-[40px] md:mr-[40px] sm:ml-[30px] sm:mr-[30px] ml-[30px] mr-[30px] ">
     <div className="w-full max-h-[900px] overflow-hidden -mt-96 xl:mt-5 sm:-mt-96 md:-mt-32 lg:-mt-20 pl-[30px] pr-[30px]">
       <div className="flex flex-col justify-center lg:flex-row md:flex-row sm:grid sm:grid-cols-2">
        <div className="flex flex-col max-w-[600px] lg:max-w-[560px] py-4 px-2 xl:px-12 lg:px-8 lg:py-24 md:py-16 sm:ml-2 md:ml-2 ">
          <h1 className=" text-[14px] lg:text-[16px] font-medium font-xyz">OUR MISSION</h1>   
          <h2 className="font-Sen text-[16px] xl:text-[24px] lg:text-[24px] md:text-[18px] font-bold mt-4 xl:max-w-[650px] lg:max-w-[300px] max-w-[300px]">Creating valuable content for creatives all around the world</h2>
          <p className="font-xyz text-[10px] xl:text-[16px] lg:text-[12px] font-extralight text-[rgba(109,110,118,1)] lg:mt-4 mt-2 xl:max-w-[500px] lg:max-w-[300px] max-w-[250px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
         
        </div>
        <div className="flex flex-col max-w-[800px] lg:max-w-[560px] py-4 px-2 xl:px-10 lg:px-3 lg:py-24 md:py-16 md:-ml-7 sm:ml-2">
          <h1 className="text-[14px] lg:text-[16px] font-medium font-xyz">OUR VISION</h1>   
          <h2 className="font-Sen text-[16px] xl:text-[24px] lg:text-[24px] md:text-[18px] xl:max-w-[460px] lg:max-w-[350px] sm:max-w-[300px] font-bold mt-4 ">A platform that empowers individuals to improve</h2>
          <p className="font-xyz text-[10px] xl:text-[16px] lg:text-[12px] font-extralight text-[rgba(109,110,118,1)] lg:mt-4 mt-2 xl:max-w-[500px] lg:max-w-[370px] sm:max-w-[300px] w-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
        </div>
        </div> 
       </div>
      </div>
</div>

  )
}




export default Component2
