import React from 'react';

const Component1 = () => {
  return (
    <main className="flex justify-start items-start w-full h-full">
      <div className="lg:pl-40 md:pl-20 sm:pl-7 flex lg:flex-row md:flex-row sm:flex-row flex-col">
        <div className="lg:max-w-[623px] md:max-w-[400px] sm:max-w-[400px] max-w-[300px] px-7 py-10 flex flex-col">
          <p className="font-xyz text-[16px] ">ABOUT US</p>
          <h1 className="font-bold font-Sen lg:text-[38px] md:text-[24px] text-[20px] mt-2">We are a team of content writers who share their learnings</h1>
        </div>
        <div className="pr-7 lg:max-w-[440px] md:max-w-[400px] max-w-[300px] lg:mt-20 lg:ml-6 md:ml-7 md:mt-16 sm:mt-20 ml-7 -mt-5">
          <p className="lg:text-[14px] xl:text-[14px] text-[12px] text-[#6D6E76]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </main>
  );
};

export default Component1;
