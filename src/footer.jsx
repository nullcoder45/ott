import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-500 text-center mt-4 px-2 lg:mt-16">
    <div className='flex flex-col items-start gap-y-4'>
    <p>Connect with us</p>
    <div className="mb-5 ">
    <a href="https://twitter.com/yourcompany" className="text-black hover:text-blue-600 mx-3">
    <FontAwesomeIcon className='lg:w-1/5' icon={faYoutube} size="x"/>
    </a>
    <a href="https://www.facebook.com/yourcompany" className="text-black hover:text-blue-800 mx-3">
    <FontAwesomeIcon className='lg:w-1/15' icon={faFacebookF} size="x"/>
    </a>
    <a href="https://www.youtube.com/yourcompany" className="text-black hover:text-red-600 mx-3">
    <FontAwesomeIcon className='lg:w-1/5' icon={faInstagram} size="x" />
    </a>
    </div>
    </div>
    <div className='flex flex-col items-start justify-start gap-2 text-base'>
    <a href="https://www.stage.in/privacy" className=" hover:underline mx-3">Privacy Policy</a>
    <a href="https://www.stage.in/settings/contact-us" className=" hover:underline mx-3">Contact Us</a>
    <a href="/https://www.stage.in/terms" className="hover:underline mx-3">Terms of Use</a>
    <a href="https://www.stage.in/refundCancel" className="hover:underline mx-3">Refund Policy</a>
    </div>
    <p className='mt-4 text-base pb-2 text-left'>©2024 STAGE Technologies Pvt Ltd</p>
    </footer>
  )
}
