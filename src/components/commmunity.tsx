"use client"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"
import { ArrowRight } from "lucide-react"

function JoinCommunity() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
      <div className="relative w-full h-[300px] md:h-[220px] rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700">
        {/* Background Image - Using a div with background instead of Image for the gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700"></div>

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-16">
          {/* Text Content */}
          <div className="w-full flex flex-col items-center gap-4 md:gap-6">
            <h2 className="text-2xl md:text-4xl font-bold text-white">Join the community today</h2>
            <p className="text-sm md:text-base text-white/90 max-w-[800px]">
              Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac
              varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in
              accumsan.
            </p>

            {/* Sign Up Button */}
            <Button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white">
              Sign Up Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinCommunity
