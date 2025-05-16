"use client"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

export const FeatureSection = () => {

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 md:py-10">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">


                {/* Images section - Below text on mobile */}
        <div className="relative w-full md:w-1/2 h-[380px] md:h-[400px]">
          {/* First image (left) */}
          <div className="absolute left-0 top-0 md:left-0 md:top-1/2 md:-translate-y-1/2 w-[110px] md:w-[150px] h-[160px] md:h-[320px] rounded-lg overflow-hidden z-10">
            <Image
              src="/l1.png"
              alt="Woman smiling with hand on chin"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 110px, 150px"
              priority
            />
          </div>

          {/* Second image (middle) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[80px] md:top-1/2 md:-translate-y-1/2 w-[130px] md:w-[180px] h-[180px] md:h-[280px] rounded-lg overflow-hidden z-20">
            <Image
              src="/l2.png"
              alt="Group of people collaborating"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 130px, 180px"
              priority
            />
          </div>

          {/* Third image (right) */}
          <div className="absolute right-0 top-[180px] md:right-0 md:top-1/2 md:-translate-y-1/2 w-[110px] md:w-[150px] h-[160px] md:h-[320px] rounded-lg overflow-hidden z-10">
            <Image
              src="/l3.png"
              alt="Woman working at desk"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 110px, 150px"
              priority
            />
          </div>
        </div>

        {/* Text content - On top for mobile */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Enjoy your time working</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis
            sed tincidunt. Mi tempus quis massa tellus imperdiet semean nulla id.
          </p>
          <Link href="#" className="inline-block pt-1">
            <p className="flex items-center gap-2 text-blue-600 text-sm font-medium">
              See how it helped others
              <span>
                <FaArrowRight className="h-3.5 w-3.5" />
              </span>
            </p>
          </Link>
        </div>

      </div>
    </div>
  )
}
