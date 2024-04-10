import React from 'react';
import NavbarData from "../utils/Navbar";
import Link from "next/link";
import { SiFacebook } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoBold } from "react-icons/pi";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full mt-9">
      <div className="w-full lg:h-[500px]  max-h-[540px] bg-[#232536] px-4 py-8 md:px-8 md:py-12 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-xyz mb-4 md:mb-0">{'{'}Finsweet</h1>
          <ul className="flex flex-row md:flex-row items-center space-x-3 md:space-x-4 lg:space-x-7 font-xyz">
        {NavbarData.map((item) => (
          <li key={item.key} className="my-2 md:my-0">
            <Link href={item.href} className="font-normal text-white text-xs md:text-sm lg:text-base hover:text-gray-300 transition-colors duration-150">{item.title}</Link>
          </li>
        ))}
        <li className="my-2 md:my-0">
          <Link href="/Privacypolicy" className="font-normal text-white text-xs md:text-sm lg:text-base hover:text-gray-300 transition-colors duration-150">Privacy Policy</Link>
        </li>
    </ul>
        </div>
        <div className="bg-[rgba(109,110,118,1)] lg:h-[250px] max-h-[300] mt-10 flex flex-col md:flex-row justify-start items-center px-6 md:px-16 sm:px-32 py-8">
    <h2 className="text-white font-bold text-[20px] lg:text-[32px] sm:text-[24px] md:text-[24px] mb-4 md:mb-0 md:mr-4 max-w-[560px] font-Sen">Subscribe to our newsletter to get the latest updates and news</h2>
    
    <div className="flex flex-row justify-center items-center -ml-2 lg:ml-10 lg:-mt-5 mt-5 space-x-3">
    <input type="email" placeholder="Enter Your Email" className="placeholder:text-gray-400 border bg-[#6D6E76] border-[rgba(76,76,76,1)] text-[#6D6E76] rounded-sm text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] w-full sm:w-auto md:w-[323px] h-10 px-4 font-xyz"/>

    <button className="w-40 h-10  bg-[rgba(255,208,80,1)] text-black rounded-sm font-bold font-sen text-[14px] sm:text-[16px] lg:text-[18px] font-Sen">Subscribe</button>
</div>

</div>
    <div className="py-9 flex flex-col md:flex-row justify-between items-center">
    <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
        <p className="font-xyz lg:text-[16px] text-[14px] text-[rgba(109,110,118,1)] ">Finstreet 118 2561 Fintown</p>
        <p className="font-xyz ;g:text-[16px] text-[14px] text-[rgba(109,110,118,1)]">Hello@finsweet.com  020 7993 2905</p>
    </div>
    <div className="flex flex-row space-x-4">
        <SiFacebook className="text-[16px] text-[rgba(109,110,118,1)]" /> 
        <FaTwitter className="text-[16px] text-[rgba(109,110,118,1)]" />
        <PiInstagramLogoBold className="text-[16px] text-[rgba(109,110,118,1)]" /> 
        <SiLinkedin className="text-[16px] text-[rgba(109,110,118,1)]" />
    </div>
</div>


      </div>
    </footer>
  )
}

export default Footer;


