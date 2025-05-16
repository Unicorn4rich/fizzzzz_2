"use client"

import { useMediaQuery } from "@/hooks/use-media-query"

function Footer() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <footer className="w-full max-w-7xl mx-auto px-4 md:px-8 py-6 border-t border-gray-100">
      {isMobile ? (
        // Mobile Layout
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-1">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">magnifico</span>
            </p>
            <p className="text-sm text-gray-500">© 2023. All rights reserved.</p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Support</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      ) : (
        // Desktop Layout
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">magnifico by Faiza Naaz</span> © 2023. All rights reserved.
            </p>
          </div>
          <ul className="flex items-center gap-6 text-sm text-gray-500">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Support</li>
            <li>About</li>
            <li>Resources</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </footer>
  )
}

export default Footer
