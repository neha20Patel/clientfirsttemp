import React from 'react';

const Component3 = () => {
  return (
    <main className="h-[500px] w-full">
    <div className="bg-[rgba(244,240,248,1)] xl:ml-[90px] xl:mr-[90px] lg:ml-[90px] lg:mr-[90px] md:ml-[60px] md:mr-[60px] sm:ml-[30px] sm:mr-[30px] ml-[30px] mr-[30px] ">
     <div className="w-full max-h-[900px] overflow-hidden lg:pt-8 sm:-mt-44 md:-mt-32 lg:-mt-8 -mt-60 pl-[30px] pr-[30px]">
       <div className="flex flex-col justify-center lg:flex-row md:flex-row sm:grid sm:grid-cols-2">
        <div className="flex flex-col max-w-[600px] lg:max-w-md py-4 px-2 xl:px-8 lg:px-8 lg:py-8 md:py-3 sm:ml-2 md:ml-2 ">
          <h1 className=" text-[14px] lg:text-[16px] font-medium font-xyz">ABOUT US</h1>   
          <h2 className="font-sen text-[16px] xl:text-3xl lg:text-[24px] md:text-[18px] font-bold mt-4 xl:max-w-[650px] lg:max-w-[300px] max-w-[300px]">We are a community of content writers who share their learnings</h2>
          <p className="font-xyz text-[10px] xl:text-[16px] lg:text-[12px] font-extralight text-[rgba(109,110,118,1)] lg:mt-4 mt-2 xl:max-w-[450px] lg:max-w-[300px] max-w-[250px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="text-[12px] xl:text-[14px] lg:text-[12px] font-bold text-purple-700 mt-4 self-start font-sen">Read more {'>'}</button>
        </div>
        <div className="flex flex-col max-w-[800px] lg:max-w-md py-4 px-2 xl:px-6 lg:px-3 lg:py-8 md:py-3 md:-ml-7 sm:ml-2">
          <h1 className="text-[14px] lg:text-[16px] font-medium font-xyz">OUR MISSION</h1>   
          <h2 className="font-sen text-[16px] xl:text-3xl lg:text-[24px] md:text-[18px] xl:max-w-[460px] lg:max-w-[350px] sm:max-w-[300px] font-bold mt-4 ">Creating valuable content for creatives all around the world</h2>
          <p className="font-xyz text-[10px] xl:text-[16px] lg:text-[12px] font-extralight text-[rgba(109,110,118,1)] lg:mt-4 mt-2 xl:max-w-[700px] lg:max-w-[370px] sm:max-w-[300px] w-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        </div> 
       </div>
      </div>
    </main>
  );
};

export default Component3;
