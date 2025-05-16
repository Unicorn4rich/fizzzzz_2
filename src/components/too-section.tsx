import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';

function ToolsSection() {
  return (
    <>
 
       <section className='flex items-center justify-between gap-[20px] px-8'>

        {/* 1 */}
        <div className='flex  flex-col gap-[20px] w-[50%]'>
            <div className='w-[600px]'>
            <h1 className='text-[56px] font-bold leading-[100%]'>Get all the tools your team needs</h1>
            </div>
            <p>Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
            <p className='flex items-center gap-[10px] text-blue-700 text-left'>Check the tools<span><FaArrowRight/></span></p>
        </div>

        {/* 2 */}
        <div className='relative flex gap-[0px] w-full md:w-[37%] h-[300px] md:h-[420px]'>
            <Image src={"/Right.png"} alt="Woman smiling with hand on chin" fill className='object-cover' priority />
        </div>

       </section>

    </>
  )
}

export default ToolsSection