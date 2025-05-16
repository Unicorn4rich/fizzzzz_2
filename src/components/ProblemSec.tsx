import React from 'react'
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

function ProblemSec() {
  return (
    <>
    <section className=' my-8 px-8 text-white '>
     <div className='relative flex gap-[0px] w-full md:w-[100%] h-[300px] md:h-[420px] rounded-3xl overflow-hidden p-8 '>
        <Image src={"/problem.png"} alt="Woman smiling with hand on chin" fill className='object-cover' priority />

        <div className='w-full absolute inset-0 flex items-center justify-end px-60'>
           {/* text */}
          <div className='w-[50%] flex flex-col justify-center gap-[20px] '>
            <div className='w-[600px]'>
            <h1 className='text-[56px] font-bold leading-[100%]'>Problems come and get solved with ease</h1>
            </div>
            <p className='w-[550px]'>Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
            <p className='flex items-center gap-[10px] text-white text-left'>Check the tools<span><FaArrowRight/></span></p>
          </div>
        </div>

     </div>
    </section>
    </>
  )
}

export default ProblemSec





