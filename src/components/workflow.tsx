"use client"
import React from 'react';
;import { FaArrowRight } from 'react-icons/fa';

const WorkFlow: React.FC = () => {

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-12 flex flex-col md:flex-row gap-8 items-center">
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Improve workflow
        </h1>

        {/* empty div */}
        <div className='w-[90px] h-[90px] bg-[#D9D9D9]'>
        </div>

        <div className='w-[78%] flex items-center justify-around  rounded-2xl px-[20px]  border-1 font-semibold '>
            <div><h1>Research</h1></div>
            <div className='border-x-2 px-[40px] py-[10px]'><h1>Plan</h1></div>
            <div><h1>Design</h1></div>
        </div>

        <p className="text-gray-600 text-base md:text-medium max-w-md">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.        
        </p>
        <p className='flex items-center gap-[10px] text-blue-700 text-left'>Check the tools<span><FaArrowRight/></span></p>
        

      </div>

      {/* Right Content - Image */}
      <div className="w-full md:w-1/2 relative h-[300px] md:h-[350px] rounded-lg overflow-hidden">

        <div className="absolute top-2 right-2 flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>

        <div className="absolute top-2 left-[50%] transform -translate-x-[50%] text-xs text-gray-400">
          app.magnifico.co
        </div>

        <div className="absolute top-2 right-8 text-gray-400 flex gap-1">
          <button aria-label="Previous" className="text-xs">
            &lt;
          </button>
          <button aria-label="Next" className="text-xs">
            &gt;
          </button>
        </div>

        <div className="relative w-full h-full bg-gray-100 flex items-center justify-center">
          <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: "url('/kali.png')"
          }}></div>
        </div>

        <div className="absolute bottom-0 right-0 p-4 hidden md:block">
          <div className="flex flex-col gap-2">
            <div className="w-4 h-4 border border-gray-300 rounded-full"></div>
            <div className="w-4 h-4 border border-gray-300 rounded-full"></div>
            <div className="w-4 h-4 border border-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
