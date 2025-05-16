import React from 'react'

function Footer() {
  return (
    <>
      <section className='flex items-center justify-between gap-[20px] px-8 my-[20px] text-[#475569]'>
        <div>
            <p><span className='font-bold'>magnifico</span> @2023. All rights reserved by <span className='font-bold'>Faiza Naaz</span>.</p>
        </div>

        <ul className='flex items-center gap-[20px]'>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Support</li>
            <li>About</li>
            <li>Resources</li>
            <li>Contact</li>
        </ul>
      </section>
    </>
  )
}

export default Footer