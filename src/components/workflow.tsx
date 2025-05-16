"use client"
import { useMediaQuery } from "@/hooks/use-media-query"
import type React from "react"
import { FaArrowRight } from "react-icons/fa"

const WorkFlow: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
      <div className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-8 items-start md:items-center`}>
        {/* Left Content */}
        <div className={`w-full ${isMobile ? "" : "md:w-1/2"} space-y-6`}>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">Improve workflow</h1>

          {/* Gray square - hidden on mobile */}
          <div className={`w-[90px] h-[90px] bg-[#D9D9D9] ${isMobile ? "hidden" : "block"}`}></div>

          {/* Workflow tabs */}
          <div
            className={`${
              isMobile ? "w-full border border-gray-200 rounded-md" : "w-[78%] border border-gray-200 rounded-2xl"
            } flex items-center justify-around font-medium text-sm md:text-base overflow-hidden`}
          >
            <div className={`${isMobile ? "flex-1 text-center py-2" : "px-4 py-3"}`}>
              <h2 className={`${isMobile ? "text-blue-800 font-semibold" : ""}`}>Research</h2>
            </div>
            <div
              className={`${
                isMobile ? "flex-1 text-center border-x border-gray-200 py-2" : "px-8 py-3 border-x border-gray-200"
              }`}
            >
              <h2>Plan</h2>
            </div>
            <div className={`${isMobile ? "flex-1 text-center py-2" : "px-4 py-3"}`}>
              <h2>Design</h2>
            </div>
          </div>

          {/* Description text */}
          <p className="text-gray-600 text-sm md:text-base">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac
            varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in
            accumsan.
          </p>

          {/* CTA link */}
          <a href="#" className="inline-flex items-center gap-2 text-blue-700 text-sm md:text-base font-medium">
            Check the tools
            <span>
              <FaArrowRight />
            </span>
          </a>
        </div>

        {/* Right Content - Image */}
        <div
          className={`w-full ${isMobile ? "" : "md:w-1/2"} relative h-[250px] md:h-[350px] rounded-lg overflow-hidden`}
        >
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
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/kali.png')",
              }}
            ></div>
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
    </section>
  )
}

export default WorkFlow
