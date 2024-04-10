import React from 'react'
import Image from "next/image";
import building from '../../../public/assests/Component2/building.svg';

const Component2 = () => {
  return (
 <main className="w-full h-[900px]">
    <div className="flex flex-cols-2 sm:justify-center lg:justify-normal md:justify-normal justify-center pl-6 pr-6">
    <div className="mt-20 lg:ml-16 md:ml-9 sm:ml-3 ml-[10px] mr-[10px] ">
      <p className="text-[18px] lg:text-[26px] font-bold w-[200px] font-sen">Featured Post</p>
      <div className="px-4 xl:w-[600px] lg:w-[550px] lg:h-[560px] md:w-[480px] md:h-[490px] sm:w-[500px] sm:h-[500px] w-auto h-[470px] mt-7 border rounded-sm">
        <div className="mt-10 mr-2 lg:ml-[30px] lg:mr-[30px] md:ml-[30px] md:mr-[30px] sm:ml-[30px] sm:mr-[30px] ml-2 max-w-[400px] sm:max-w-[450px] md:max-w-[400px] lg:max-w-[600px] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <Image src={building} layout="responsive" width={600} height={300} alt="Building" />
        </div>
        <div className="flex flex-row items-center space-x-3 lg:space-x-8 md:space-x-8 sm:space-x-8 mt-5 lg:ml-[30px] lg:mr-[30px] md:ml-[30px] md:mr-[30px] sm:ml-[30px] sm:mr-[30px] ml-[2px]">
            <p className="font-light text-[10px] lg:text-[12px] tracking-wider text-gray-700 font-xyz">
                By <span className="text-purple-500 font-xyz">John Doe</span>
            </p>
            <p className="font-light text-[10px] lg:text-[12px] tracking-wider text-gray-700 font-xyz">
                | May 23, 2022
            </p>
        </div>
        <div className="lg:ml-[30px] lg:mr-[30px] md:ml-[30px] md:mr-[30px] sm:ml-[30px] sm:mr-[30px] ml-[2px]  mt-4">
          <h3 className=" xl:w-[500px] lg:w-[500px] md:w-[400px] sm:w-[400px] w-full font-bold text-[14px] sm:text-[14px] lg:text-[20px] mt-4 font-sen "> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>

          <p className=" xl:w-[450px] lg:w-[400px] md:w-[400px] sm:w-[400px] w-full font-light text-[12px] sm:text-[12px] lg:text-[14px] text-gray-400 mt-4 font-xyz">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

        </div>
        <div className="lg:mt-6 md:mt-6 sm:mt-6 lg:ml-[30px] lg:mr-[30px] md:ml-[30px] md:mr-[30px] sm:ml-[30px] sm:mr-[30px] ml-[2px] mt-6">
            <a href="#_" className="relative rounded px-5 py-2 overflow-hidden group bg-[rgba(255,208,80,1)] hover:bg-gradient-to-r hover:bg-[rgba(255,208,80,1)] text-black hover:ring-2 hover:ring-offset-2 hover:ring-[rgba(255,208,80,1)] transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-23 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative font-sen text-[12px] font-bold">Read More {'>'}</span>
            </a>
        </div>
    </div>
</div>

 <div className="mt-20 hidden xl:pl-28 lg:pl-16 md:pl-16 md:block justify-between lg:w-[200px] lg:h-[600px] md:w-auto md:h-[400px]">
        <div class="flex justify-between items-center xl:w-[350px] lg:w-[300px] md:w-[270px]">
           <p class="lg:text-[26px] text-[16px] font-bold font-sen">All Posts</p>
            <button class="text-[14px] md:text-[12px] font-extralight text-purple-500 font-sen">View All</button>
        </div>
   <div class="-ml-2 hover:bg-pink-100 h-[130px] xl:w-[370px] lg:h-[140px] md:h-[110px] w-[300px] ">
  <div class="lg:w-[300px] md:w-auto w-[300px] h-[50px] flex flex-row items-center space-x-6 mt-2 lg:ml-9 ml-4">
    <p class="font-light text-[12px] lg:text-[12px] md:text-[12px] tracking-wider text-gray-700 font-xyz">
      By <span class="text-purple-500 font-xyz">Jhon Deo</span>
    </p>
    <p class="font-light text-[12px] lg:text-[12px] md:text-[12px] tracking-wider text-gray-700 font-xyz">
      | Aug 23, 2021
    </p>
  </div>
  <h1 class="text-[12px] lg:text-[18px] md:text-[12px] font-bold w-auto lg:-mt-2 lg:ml-9 lg:w-[240px] md:w-[180px] ml-4 tracking-wider md:-mt-2 font-sen">8 Figma design systems that you can download for free today.</h1>
  </div>

  <div class="-ml-2 hover:bg-pink-100 h-[130px] xl:w-[370px] lg:h-[140px] md:h-[110px] w-[300px] ">
  <div class="lg:w-[300px] md:w-auto w-[300px] h-[50px] flex flex-row items-center space-x-6 mt-2 lg:ml-9 ml-4">
    <p class="font-light text-[12px] lg:text-[12px] md:text-[12px] tracking-wider text-gray-700 font-xyz">
      By <span class="text-purple-500 font-xyz">Jhon Deo</span>
    </p>
    <p class="font-light text-[12px] lg:text-[12px] md:text-[12px] tracking-wider text-gray-700 font-xyz">
      | Aug 23, 2021
    </p>
  </div>
  <h1 class="text-[12px] lg:text-[18px] md:text-[12px] font-bold w-auto lg:-mt-2 lg:ml-9 lg:w-[240px] md:w-[180px] ml-4 tracking-wider md:-mt-2 font-sen">8 Figma design systems that you can download for free today.</h1>
  </div>

  <div class="-ml-2 hover:bg-pink-100 h-[130px] xl:w-[370px] lg:h-[140px] md:h-[110px] w-[300px] ">
  <div class="lg:w-[300px] md:w-auto w-[300px] h-[50px] flex flex-row items-center space-x-6 mt-2 lg:ml-9 ml-4">
    <p class="font-light text-[12px] lg:text-[12px] md:text-[12px] tracking-wider text-gray-700 font-xyz">
      By <span class="text-purple-500 font-xyz">Jhon Deo</span>
    </p>
    <p class="font-light text-[12px] lg:text-[12px] md:text-[12px] tracking-wider text-gray-700 font-xyz">
      | Aug 23, 2021
    </p>
  </div>
  <h1 class="text-[12px] lg:text-[18px] md:text-[12px] font-bold w-auto lg:-mt-2 lg:ml-9 lg:w-[240px] md:w-[180px] ml-4 tracking-wider md:-mt-2 font-sen">8 Figma design systems that you can download for free today.</h1>
  </div>

  <div class="-ml-2 hover:bg-pink-100 h-[130px] xl:w-[370px] lg:h-[140px] md:h-[110px] w-[300px] ">
  <div class="lg:w-[300px] md:w-auto w-[300px] h-[50px] flex flex-row items-center space-x-6 mt-2 lg:ml-9 ml-4">
    <p class="font-light text-[12px] lg:text-[12px] md:text-[12px] tracking-wider text-gray-700 font-xyz">
      By <span class="text-purple-500 font-xyz">Jhon Deo</span>
    </p>
    <p class="font-light text-[12px] lg:text-[12px] md:text-[12px] tracking-wider text-gray-700 font-xyz">
      | Aug 23, 2021
    </p>
  </div>
  <h1 class="text-[12px] lg:text-[18px] md:text-[12px] font-bold w-auto lg:-mt-2 lg:ml-9 lg:w-[240px] md:w-[180px] ml-4 tracking-wider md:-mt-2 font-sen">8 Figma design systems that you can download for free today.</h1>
  </div>
 </div>
    </div>
 </main>
  )
}

export default Component2

