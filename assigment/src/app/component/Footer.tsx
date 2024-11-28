// components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-600 p-4 mt-0" >
      <div className=' grid grid-cols-1 gap-10 md:grid-cols-3'>
      <div className="text-white text-left ">
        <h2 className='text-xl font-bold'>Core Cources</h2>
        <ol className='mt-5 flex-col gap-3 text-sm md:text-base'>
        <li>programming fundamentals</li>
        <li>web2 using Nextjs</li>
        <li>Earn as you learn</li>
        </ol>
       
        &copy; {new Date().getFullYear()} Anousha Baig. All rights reserved.
      </div>
      
      <div className='text-white'>
        <h1 className='text-xl font-bold'>Advance Cources</h1>
        <ul>
          <li>Web 3 and Metaverse</li>
          <li>Cloud-Native Computing</li>
          <li>Artificial Intelligence (AI) and Deep Learning</li>
          <li>Ambient Computing and IoT</li>
        </ul>
      </div>
      </div>
      
    </footer>
  );
};

export default Footer;
