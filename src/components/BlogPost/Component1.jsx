import React from 'react'
import Image from "next/image";
import profile from '../../../public/assests/Component7/profile.svg';
import shuttle from '../../../public/blogpost/Component1/shuttle.svg';
import coverpage from '../../../public/blogpost/Component1/coverpage.svg';

const Component1 = () => {
  return (
    <main className="w-full h-full  justify-center items-center">
    <div className=" w-full h-auto px-9 md:px-40 lg:px-60 xl:px-60">
        <div className="flex flex-col mt-8 md:mt-16 justify-center items-start space-y-4">
            <div className="flex flex-row items-center">
                <Image src={profile} width={48} height={48} alt="Profile" className="lg:h-12 lg:w-12 md:h-12 md:w-12 w-8 h-8"/>
                <div className="ml-6">
                    <h4 className="lg:text-[24px] text-[14px] font-bold">Andrew Jonson</h4>
                    <p className="lg:text-[16px] text-[12px] font-extralight text-[rgba(126,126,126,1)]">Posted on 27th January 2022</p>
                </div>
            </div>
            <h1 className="text-left max-w-[768px] xl:text-[48px] lg:text-[38px] md:text-[20px] sm:text-[20px] text-[18px] font-Sen font-bold">Step-by-step guide to choosing great font pairs</h1>
            <div className="flex flex-row items-center">
                <Image src={shuttle} width={24} height={24} alt="Shuttle" className="lg:h-6 lg:w-6 md:h-4 md:w-4 w-4 h-4"/>
                <h4 className="ml-2 font-bold font-Sen lg:text-[24px] text-[14px]">Startup</h4>
            </div>
        </div>
    </div>
    <div className="flex justify-center items-center px-10 lg:px-16 lg:mt-20 mt-10">
    <div className="max-w-full overflow-hidden">
        <Image src={coverpage} layout="responsive" width={1280} height={582} alt="Cover Page"/>
    </div>
</div>

</main>

  )
}

export default Component1
