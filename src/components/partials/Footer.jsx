import React from 'react'
import { Link } from 'react-router-dom'
import { HiMiniLanguage } from "react-icons/hi2";

const Footer = () => {
  return (
    <div className='bg-black border-t-[4px] border-gray-500 py-20'>
    <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-4 text-white/80">
        <div>
      <ul className='underline space-y-3 text-sm'>
        <li><Link to="#">Questions? Contact us.</Link></li>
        <li><Link to="#">FAQ</Link></li>
        <li><Link to="#">Investor Relations</Link></li>
        <li><Link to="#">Ways to Watch</Link></li>
        <li><Link to="#">Corporate Information</Link></li>
        <li><Link to="#">Only on Netflix</Link></li>
      </ul>
        <div className='mt-5'>
            <button className='btn flex gap-2 justify-center items-center mb-5'> <HiMiniLanguage /> English</button>
            <small>Netflix Phillipines</small>
        </div>
      </div>

      <ul className='underline space-y-3 text-sm'>
        <li><Link to="#">Help Center</Link></li>
        <li><Link to="#">Jobs</Link></li>
        <li><Link to="#">Terms of Use</Link></li>
        <li><Link to="#">Contact Us</Link></li>
      </ul>

      <ul className='underline space-y-3 text-sm'>
        <li><Link to="#">Account</Link></li>
        <li><Link to="#">Redeem Gift Cards</Link></li>
        <li><Link to="#">Privacy</Link></li>
        <li><Link to="#">Speed Test</Link></li>
      </ul>

      <ul className='underline space-y-3 text-sm'>
        <li><Link to="#">Media Center</Link></li>
        <li><Link to="#">Buy Gift Cards</Link></li>
        <li><Link to="#">Cookie Preferences</Link></li>
        <li><Link to="#">Legal Notices</Link></li>
      </ul>


    </div>
    </div>
  )
}

export default Footer
