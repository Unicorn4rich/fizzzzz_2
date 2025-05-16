"use client"
import { FaArrowRight } from "react-icons/fa"
import Image from "next/image"
import { useMediaQuery } from "@/hooks/use-media-query"

function ToolsSection() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-6 md:py-8">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16">
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-[600px]">
            {isMobile ? "Enjoy your time working" : "Get all the tools your team needs"}
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac
            varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in
            accumsan.
          </p>
          <div className="pt-2">
            <a href="#" className="inline-flex items-center gap-[10px] text-blue-700 text-sm md:text-base font-medium">
              {isMobile ? "See how it helped others" : "Check the tools"}
              <span>
                <FaArrowRight />
              </span>
            </a>
          </div>
        </div>

        {/* Image/Chart */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative">
          <Image
            src={isMobile ? "/Right.png" : "/Right.png"}
            alt="Tools visualization chart"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default ToolsSection
