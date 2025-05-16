import React from 'react'
import Image from 'next/image';
import { Button } from './ui/button';

function ProblemSec() {
  return (
    <>
    <section className=' my-8 px-8 text-white '>
     <div className='relative flex  gap-[0px] w-full md:w-[100%] h-[300px] md:h-[320px] rounded-3xl overflow-hidden p-8 '>
        <Image src={"/last.png"} alt="Woman smiling with hand on chin" fill className='object-cover' priority />

        <div className='w-full absolute inset-0 flex gap-[15px] items-center text-center flex-col justify-center '>
           {/* text */}
          <div className='w-full flex items-center flex-col justify-center gap-[20px] '>
            <div className='w-full'>
            <h1 className='text-[56px] font-bold leading-[100%]'>Join the community today</h1>
            </div>
            <p className='w-[800px]'>Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
          </div>

                {/* Auth Buttons */}

        <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white flex items-center">
          Sign Up Free
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Button>
      </div>

        </div>
    </section>
    </>
  )
}

export default ProblemSec


