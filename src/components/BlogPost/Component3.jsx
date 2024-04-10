import React from 'react';
import Image from 'next/image';
import image1 from '../../../public/blog/Component2/image1.svg';
import blogPosts from '../../utils/Blogpost'; 

const Component3 = () => {
  return (
    <main className="w-full h-[800px] lg:px-20 lg:py-28 sm:py-20 sm:px-10 px-7 py-10">
        <h2 className="font-Sen lg:text-[36px] text-[20px] font-bold mt-7">What to read next</h2>
        <div className="flex flex-wrap lg:-mx-2 mt-10 shadow-sm rounded-sm">
            {blogPosts.map((post, index) => (
    <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-5 mb-4 fadeInUp"> 
      <div className="bg-white overflow-hidden">
        <img alt={post.title} src={`/blog/Component2/${post.fileName}`} className="w-full h-auto object-cover object-center" />
        <div className="mt-6">
        <p className="text-gray-600 text-sm mt-2 hover:text-[#592EA9] tracking-wider">{post.data}</p>

          <h3 className="font-bold lg:text-[24px] text-[18px] mt-2">{post.title}</h3>
          <p className="text-gray-600 text-sm mt-2">{post.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>
    </main>
  );
};

export default Component3;
