'use client'
import React, { useState }  from 'react';
import Link from "next/link";
import NavbarData from "../utils/Navbar";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";


const Header = () => {  
  const [toggle, setToggle] = useState(false);
  return (
    <header className="bg-black h-20 w-full">
      <div className="flex flex-row justify-between items-center px-4 md:px-8 lg:px-16  h-full">
        <h1 className="text-white text-2xl md:text-3xl font-Sen">{'{'}Finsweet</h1>
        <div className="flex items-center space-x-4"> 
          <nav>
            <ul className="hidden md:flex items-center space-x-4 lg:space-x-7 font-xyz">
              {NavbarData.map((item) => (
                <li key={item.key}>
                  <Link href={item.href} className="font-light text-white text-sm md:text-base">{item.title}
                  </Link>
                </li>
              ))}
            </ul>
            {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            size={30}
            className="md:hidden block z-50 text-white"
          />
        ) : (
          <HiMenuAlt3
            onClick={() => setToggle(!toggle)}
            size={30}
            className="md:hidden block text-white"
          />
        )}
          </nav>
          <button type="button" className=" hidden font-xyz md:block h-[40px] w-[150px] py-2 px-5 text-[18px] font-bold text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-yellow-400 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Subscribe
          </button>
        </div>
        <div className={`duration-300 pt-16 md:hidden flex flex-col w-[70%] h-screen fixed bg-black/90 text-white top-0 ${
    toggle ? "left-0" : "left-[-70%]"
  }`}
  style={{ zIndex: 1 }}
>
  {toggle && (
        <div className="md:hidden">
          <ul>
            {NavbarData.map((item) => (
              <li key={item.key} className="text-left ml-5">
                <Link href={item.href} className="font-bold text-[14px] block py-2 mt-3 font-xyz">{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
</div>
      </div>
    </header>
  );
};

export default Header;
