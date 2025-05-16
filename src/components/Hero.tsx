"use client"
import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';

const Hero: React.FC = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-12 flex flex-col md:flex-row gap-8 items-center">
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Team projects, <br /> done well
        </h1>
        <p className="text-gray-600 text-base md:text-lg ">
          The only platform that gives your team all the tools needed to work together on their awesome projects.
        </p>

        {/* Sign Up Form */}
        <form className="flex flex-col sm:flex-row gap-3 max-w-md">
          
          <Input
            type="email"
            placeholder="Enter work email"
            className="flex-grow"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center w-full sm:w-auto"
          >
            Sign Up Free
            <svg 
              className="ml-2 w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </Button>
        </form>

        {/* Partner Logos */}
        <div className="flex flex-wrap gap-6 items-center pt-4">
          <div className="flex items-center gap-1 text-gray-500">
            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-xs font-extrabold">S</span>
            </div>
            <span className="text-sm font-bold">SHELLS</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <div className="w-6 h-6 text-gray-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8l-5 5-5-5-5 5-5-5" />
              </svg>
            </div>
            <span className="text-sm font-bold">SmartFinder</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <div className="w-6 h-6 text-gray-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21L21 7M7 7h14v14" />
              </svg>
            </div>
            <span className="text-sm font-bold">ArtVenue</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <div className="w-6 h-6 text-gray-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 12h3m3 0h3m3 0h3M3 6h18M3 18h18" 
                />
              </svg>
            </div>
            <span className="text-sm font-bold">WAVES</span>
          </div>
        </div>
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
            backgroundImage: "url('/hero.png')"
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

export default Hero;




