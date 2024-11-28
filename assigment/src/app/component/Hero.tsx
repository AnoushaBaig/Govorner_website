// components/Hero.tsx
import React from 'react';
import Image from 'next/image'; // Ensure you import this if needed

const Hero = () => {
  return (
    <section 
      className="text-black flex items-center justify-between h-screen p-20 mb-0 relative"
      style={{
        backgroundImage: "url('/image/bg_house.jpg')", // Aapki background image ka path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-white opacity-50" /> {/* White overlay with transparency */}
      <div className="flex-1 text-center md:text-left relative z-10">
        <h1 className="text-5xl font-bold text-blue-700">Welcome to the Governor of Sindh&apos;s Website</h1>
        <h2 className="text-3xl text-blue-400">Certified Cloud Applied Generative AI Engineer (GenEng)</h2>
        <h3 className="mt-5 text-blue-400">Serving the people of Sindh with integrity and commitment.</h3>
      </div>
      <div className="flex-1 relative w-full hidden md:block mt-10"> {/* Adjust height as needed */}
  <Image
    src="/image/km.png" // Ensure the path is correct
    alt="Governor's Image" // Change layout to 'responsive'
    width={8000}
    height={1300}
    layout='responsive'
    className='object-contain'
   
  />
</div>

    </section>
  );
};

export default Hero;
