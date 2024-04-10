import React from 'react';
import Image from "next/image";
import icon1 from '../../../public/assests/Component4/icon1.svg';
import icon2 from '../../../public/assests/Component4/icon2.svg';
import icon3 from '../../../public/assests/Component4/icon3.svg';
import icon4 from '../../../public/assests/Component4/icon4.svg';

const Component4 = () => {
  return (
    <main className="w-full h-[300px] pt-2  flex justify-center items-start">
        <div className="flex flex-col items-start w-full max-w-screen-xl -mt-2 lg:-mt-10 md:mt-2 sm:mt-5">
           
            <h2 className="font-Sen text-[18px] sm:text-[24px] md:text-[24px] lg:text-[36px] font-bold mt-2 lg:ml-10 md:ml-20 sm:ml-20 ml-8">All Categories</h2>
          
            <section className="w-full px-8 lg:px-10 md:px-36 sm:px-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-5 lg:mt-16">
            
            <div className="flex flex-col w-full max-w-xs h-auto border rounded-md py-10 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-amber-400">
                <div className="bg-pink-100 rounded-md w-12 h-12 flex items-center justify-left self-start ml-7">
                    <Image src={icon1} alt="Business" width={48} height={48} layout="intrinsic" />
                </div>
                <h3 className="font-Sen text-lg lg:text-xl font-bold mt-2 text-left ml-7">Business</h3>
                <p className="font-xyz text-sm lg:text-base font-thin text-gray-600 mt-3 text-left ml-7">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
            <div className="flex flex-col w-full max-w-xs h-auto border rounded-md py-10 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-amber-400">
                <div className="bg-pink-100 rounded-md w-12 h-12 flex  items-center justify-center self-start ml-7">
                    <Image src={icon2} alt="Startup" width={23} height={23} layout="intrinsic" />
                </div>
                <h3 className="font-Sen text-lg lg:text-xl font-bold mt-2 text-left ml-7">Startup</h3>
                <p className="font-xyz text-sm lg:text-base font-thin text-gray-600 mt-3 text-left ml-7">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>

            <div className="flex flex-col w-full max-w-xs h-auto border rounded-md py-10 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-amber-400">
                <div className="bg-pink-100 rounded-md w-12 h-12 flex  items-center justify-center self-start ml-7">
                    <Image src={icon3} alt="Economy" width={23} height={23} layout="intrinsic" />
                </div>
                <h3 className="font-Sen text-lg lg:text-xl font-bold mt-2 text-left ml-7">Economy</h3>
                <p className="font-xyz text-sm lg:text-base font-thin text-gray-600 mt-3 text-left ml-7">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>

            <div className="flex flex-col w-full max-w-xs h-auto border rounded-md py-10 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-amber-400">
                <div className="bg-pink-100 rounded-md w-12 h-12 flex  items-center justify-center self-start ml-7">
                    <Image src={icon4} alt="Technology" width={23} height={23} layout="intrinsic" />
                </div>
                <h3 className="font-Sen text-lg lg:text-xl font-bold mt-2 text-left ml-7">Technology</h3>
                <p className="font-xyz text-sm lg:text-base font-thin text-gray-600 mt-3 text-left ml-7">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
                
            </section>
        </div>
    </main>
  );
}
export default Component4;



