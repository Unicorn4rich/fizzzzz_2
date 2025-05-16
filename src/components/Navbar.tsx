"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav className="w-full py-4 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row md:items-center md:justify-between relative">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          magnifico
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" className="p-2" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
              Products
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
              Solutions
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
              Services
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
              Help Center
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
          </div>
          <div className="relative">
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900">Pricing</button>
          </div>
        </div>
      </div>

      {/* Auth Buttons - Desktop */}
      <div className="hidden md:flex items-center space-x-2">
        <Button variant="ghost" className="text-sm text-blue-600 hover:text-blue-700">
          Log In
        </Button>
        <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white flex items-center">
          Sign Up Free
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white z-50 shadow-lg py-4 px-4 mt-2">
          <div className="flex flex-col space-y-4">
            <button className="flex items-center justify-between text-sm font-medium text-gray-700 hover:text-gray-900 py-2">
              Products
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <button className="flex items-center justify-between text-sm font-medium text-gray-700 hover:text-gray-900 py-2">
              Solutions
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <button className="flex items-center justify-between text-sm font-medium text-gray-700 hover:text-gray-900 py-2">
              Services
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <button className="flex items-center justify-between text-sm font-medium text-gray-700 hover:text-gray-900 py-2">
              Help Center
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900 py-2">Pricing</button>
            <div className="pt-2 border-t border-gray-200">
              <Button variant="ghost" className="text-sm text-blue-600 hover:text-blue-700 w-full justify-start">
                Log In
              </Button>
              <Button
                variant="default"
                className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center w-full mt-2"
              >
                Sign Up Free
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
