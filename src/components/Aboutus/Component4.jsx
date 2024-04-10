import React from 'react'
import Image from "next/image";
import photo1 from '../../../public/assests/Component6/photo1.svg';
import photo2 from '../../../public/assests/Component6/photo2.svg';
import photo3 from '../../../public/assests/Component6/photo3.svg';
import photo4 from '../../../public/assests/Component6/photo4.svg';
import { SiFacebook } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoBold } from "react-icons/pi";
import { SiLinkedin } from "react-icons/si";

const Component4 = () => {
  return (
    <main className="w-full h-full lg:-mt-36 md:-mt-20 mt-4 px-10 md:px-50 sm:px-20 flex justify-center items-start">
    <div className="flex flex-col items-center w-full max-w-screen-xl mt-5 lg:mt-4 md:mt-36 sm:mt-24">
        <h2 className="font-sen text-[18px] sm:text-[24px] md:text-[24px] lg:text-[36px] font-bold mt-2">List of Authors</h2>

        <section className="w-full lg:px-2 md:px-50 sm:px-3  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-5 lg:mt-16">
           
            <div className="flex flex-col items-center max-w-auto h-auto bg-gray-100 py-10 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-pink-100">
                <div className="rounded-full flex items-center justify-center h-20 w-20">
                    <Image src={photo1} alt="man" width={128} height={128} layout="intrinsic" />
                </div>
                <h3 className="font-sen text-lg lg:text-xl font-bold mt-2 text-center">Floyd Miles</h3>
                <p className="font-xyz text-sm lg:text-[14px] font-thin text-gray-600 mt-3 text-center">Content Writer @Company</p>
                <div className="flex items-center justify-center space-x-4 text-center mt-3"> 
                    <SiFacebook className="text-xl" /> 
                    <FaTwitter className="text-xl" />
                    <PiInstagramLogoBold className="text-xl" />
                    <SiLinkedin className="text-xl" />
                </div>
            </div>
            <div className="flex flex-col items-center max-w-auto h-auto bg-gray-100 py-10 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-pink-100">
                <div className="rounded-full flex items-center justify-center h-20 w-20">
                    <Image src={photo2} alt="women" width={128} height={128} layout="intrinsic" />
                </div>
                <h3 className="font-sen text-lg lg:text-xl font-bold mt-2 text-center">Dianne Russell</h3>
                <p className="font-xyz text-sm lg:text-[14px] font-thin text-gray-600 mt-3 text-center">Content Writer @Company</p>
                <div className="flex items-center justify-center space-x-4 text-center mt-3"> 
                    <SiFacebook className="text-xl" /> 
                    <FaTwitter className="text-xl" />
                    <PiInstagramLogoBold className="text-xl" />
                    <SiLinkedin className="text-xl" />
                </div>
            </div>

            <div className="flex flex-col items-center max-w-auto h-auto bg-gray-100 py-10 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-pink-100">
                <div className="rounded-full flex items-center justify-center h-20 w-20">
                    <Image src={photo3} alt="women" width={128} height={128} layout="intrinsic" />
                </div>
                <h3 className="font-sen text-lg lg:text-xl font-bold mt-2 text-center">Jenny Wilson</h3>
                <p className="font-xyz text-sm lg:text-[14px] font-thin text-gray-600 mt-3 text-center">Content Writer @Company</p>
                <div className="flex items-center justify-center space-x-4 text-center mt-3"> 
                    <SiFacebook className="text-xl" /> 
                    <FaTwitter className="text-xl" />
                    <PiInstagramLogoBold className="text-xl" />
                    <SiLinkedin className="text-xl" />
                </div>
            </div>

            <div className="flex flex-col items-center max-w-auto h-auto bg-gray-100 py-10 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-pink-100">
                <div className="rounded-full flex items-center justify-center h-20 w-20">
                    <Image src={photo4} alt="women" width={128} height={128} layout="intrinsic" />
                </div>
                <h3 className="font-sen text-lg lg:text-xl font-bold mt-2 text-center">Leslie Alexander</h3>
                <p className="font-xyz text-sm lg:text-[14px] font-thin text-gray-600 mt-3 text-center">Content Writer @Company</p>
                <div className="flex items-center justify-center space-x-4 text-center mt-3"> 
                    <SiFacebook className="text-xl" /> 
                    <FaTwitter className="text-xl" />
                    <PiInstagramLogoBold className="text-xl" />
                    <SiLinkedin className="text-xl" />
                </div>
            </div>

            <div className="flex flex-col items-center max-w-auto h-auto bg-gray-100 py-10 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-pink-100">
                <div className="rounded-full flex items-center justify-center h-20 w-20">
                    <Image src={photo4} alt="women" width={128} height={128} layout="intrinsic" />
                </div>
                <h3 className="font-sen text-lg lg:text-xl font-bold mt-2 text-center">Leslie Alexander</h3>
                <p className="font-xyz text-sm lg:text-[14px] font-thin text-gray-600 mt-3 text-center">Content Writer @Company</p>
                <div className="flex items-center justify-center space-x-4 text-center mt-3"> 
                    <SiFacebook className="text-xl" /> 
                    <FaTwitter className="text-xl" />
                    <PiInstagramLogoBold className="text-xl" />
                    <SiLinkedin className="text-xl" />
                </div>
            </div>

            <div className="flex flex-col items-center max-w-auto h-auto bg-gray-100 py-10 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-pink-100">
                <div className="rounded-full flex items-center justify-center h-20 w-20">
                    <Image src={photo3} alt="women" width={128} height={128} layout="intrinsic" />
                </div>
                <h3 className="font-sen text-lg lg:text-xl font-bold mt-2 text-center">Leslie Alexander</h3>
                <p className="font-xyz text-sm lg:text-[14px] font-thin text-gray-600 mt-3 text-center">Content Writer @Company</p>
                <div className="flex items-center justify-center space-x-4 text-center mt-3"> 
                    <SiFacebook className="text-xl" /> 
                    <FaTwitter className="text-xl" />
                    <PiInstagramLogoBold className="text-xl" />
                    <SiLinkedin className="text-xl" />
                </div>
            </div>

            <div className="flex flex-col items-center max-w-auto h-auto bg-gray-100 py-10 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-pink-100">
                <div className="rounded-full flex items-center justify-center h-20 w-20">
                    <Image src={photo2} alt="women" width={128} height={128} layout="intrinsic" />
                </div>
                <h3 className="font-sen text-lg lg:text-xl font-bold mt-2 text-center">Leslie Alexander</h3>
                <p className="font-xyz text-sm lg:text-[14px] font-thin text-gray-600 mt-3 text-center">Content Writer @Company</p>
                <div className="flex items-center justify-center space-x-4 text-center mt-3"> 
                    <SiFacebook className="text-xl" /> 
                    <FaTwitter className="text-xl" />
                    <PiInstagramLogoBold className="text-xl" />
                    <SiLinkedin className="text-xl" />
                </div>
            </div>

            <div className="flex flex-col items-center max-w-auto h-auto bg-gray-100 py-10 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-pink-100">
                <div className="rounded-full flex items-center justify-center h-20 w-20">
                    <Image src={photo1} alt="women" width={128} height={128} layout="intrinsic" />
                </div>
                <h3 className="font-sen text-lg lg:text-xl font-bold mt-2 text-center">Leslie Alexander</h3>
                <p className="font-xyz text-sm lg:text-[14px] font-thin text-gray-600 mt-3 text-center">Content Writer @Company</p>
                <div className="flex items-center justify-center space-x-4 text-center mt-3"> 
                    <SiFacebook className="text-xl" /> 
                    <FaTwitter className="text-xl" />
                    <PiInstagramLogoBold className="text-xl" />
                    <SiLinkedin className="text-xl" />
                </div>
            </div>
        </section>
        </div>
    </main>
  )
}

export default Component4
