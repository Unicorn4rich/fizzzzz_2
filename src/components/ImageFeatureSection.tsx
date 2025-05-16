import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const FeatureSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row gap-8 md:gap-30 items-center">

        {/* Images section */}
    <div className="relative flex gap-[0px] w-full md:w-1/2 h-[300px] md:h-[400px]">
          {/* First image (left) */}
      < div className="absolute left-0 bottom-0 md:left-0 md:top-1/2 md:-translate-y-1/2 w-[120px] md:w-[150px] h-[180px] md:h-[320px] rounded-lg overflow-hidden z-10">
        <Image
          src="/l1.png" // Make sure the file is in public folder
          alt="Woman smiling with hand on chin"
          fill // ye layout: 'fill' ka shorthand hai
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 120px, 150px" // optional: better for performance
          priority // optional: if it's a hero image
        />
      </div>
          
          {/* Second image (middle) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[140px] md:w-[160px] h-[200px] md:h-[300px] rounded-lg overflow-hidden z-20">
        <Image
          src="/l2.png" // Make sure the file is in public folder
          alt="Woman smiling with hand on chin"
          fill // ye layout: 'fill' ka shorthand hai
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 120px, 150px" // optional: better for performance
          priority // optional: if it's a hero image
        />
          </div>
          
          {/* Third image (right) */}
          <div className="absolute right-0 bottom-0 md:right-0 md:top-1/2 md:-translate-y-1/2 w-[120px] md:w-[150px] h-[180px] md:h-[320px] rounded-lg overflow-hidden z-10">
        <Image
          src="/l3.png" // Make sure the file is in public folder
          alt="Woman smiling with hand on chin"
          fill // ye layout: 'fill' ka shorthand hai
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 120px, 150px" // optional: better for performance
          priority // optional: if it's a hero image
        />
          </div>
    </div>
        
        {/* Text content */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 w-[300px]">
            Enjoy your time working
          </h2>
          <p className="text-gray-600">
            Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet semean nulla id.
          </p>
          <Link 
            href="#" 
            className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800"
          >
          <p className='flex items-center gap-[10px] text-blue-700 text-left'>See how it helped others<span><FaArrowRight/></span></p>
            
            
          </Link>
        </div>

      </div>
    </div>
  );
};
