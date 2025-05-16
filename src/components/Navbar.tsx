import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-4 px-4 md:px-8 lg:px-16 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">
        magnifico
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
              Products
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
              Solutions
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
              Services
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
              Help Center
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <div className="relative">
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Pricing
            </button>
          </div>
        </div>
      </div>

      {/* Auth Buttons */}
      <div className="hidden md:flex items-center space-x-2">
        <Button variant="ghost" className="text-sm text-blue-600 hover:text-blue-700">
          Log In
        </Button>
        <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white flex items-center">
          Sign Up Free
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Button variant="ghost" className="p-2">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
