"use client"
import { useMediaQuery } from "@/hooks/use-media-query"
import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"

function ProblemSec() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-1">
      <div className="relative w-full h-[400px] md:h-[420px] rounded-3xl overflow-hidden bg-purple-800">
        {/* Background Image */}
        <Image src="/problem.png" alt="Background with floating objects" fill className="object-cover" priority />

        {/* Content Container */}
        <div
          className={`absolute inset-0 flex ${isMobile ? "items-start justify-start p-6" : "items-center justify-end pr-16 pl-8"}`}
        >
          {/* Text Content */}
          <div className={`flex flex-col gap-4 md:gap-6 ${isMobile ? "w-full" : "w-1/2"}`}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Problems come and get solved with ease
            </h2>
            <p className="text-sm md:text-base text-white/90">
              Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac
              varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in
              accumsan.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-white text-sm md:text-base font-medium mt-2">
              {isMobile ? "Improve workflow" : "Check the tools"}
              <span>
                <FaArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSec
