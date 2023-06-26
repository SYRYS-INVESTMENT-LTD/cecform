import React from 'react'
import ceclogo from '../assets/ceclogo.png'
import uk from '../assets/language.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import whatsapp from '../assets/whatsapp.png'

function Navbar() {
    return (
        <div>
            <div className='mx-6 pt-8 flex items-center justify-between'>
                <div>
                    <img src={ceclogo} alt='logo' className='h-12'/>
                </div>

                <div>
                 <ul className='flex items-center space-x-6'>
                 <a href='/'>
                 <li className='font-poppinsregular text-xs cursor-pointer'>Home</li>
                 </a>
                 <a href='/'>
                 <li className='font-poppinsregular text-xs cursor-pointer'>About</li>
                 </a>
                 <a href='/'>
                 <li className='font-poppinsregular text-xs cursor-pointer text-[#F16101]'>Universities</li>
                 </a>
                 <a href='/'>
                 <li className='font-poppinsregular text-xs cursor-pointer'>Courses</li>
                 </a>
                 <a href='/'>
                 <li className='font-poppinsregular text-xs cursor-pointer'>For Applicants</li>
                 </a>
                 <a href='/'>
                 <li className='font-poppinsregular text-xs cursor-pointer'>Blogs and News</li>
                 </a>
                 <a href='/'>
                 <li className='font-poppinsregular text-xs cursor-pointer'>Contact</li>
                 </a>
                 <div className='border border-[#17A2B8] rounded-lg py-2 cursor-pointer px-2 flex items-center justify-center space-x-2'>
                    <img src={uk} alt='languageselector' className='ml-1'/>
                   <MdKeyboardArrowDown/>
                 </div>
                 </ul>
                </div>

                <div className='flex items-center space-x-4'>
                  <img src={facebook} alt='facebook' className='w-3'/>
                  <img src={instagram} alt='instagram' className='w-3'/>
                  <img src={whatsapp} alt='whatsapp' className='w-3'/>
                </div>

                <div className='md: hidden absolute left-0 bg-black'>
                
                </div>
            </div>
        </div>
    )
}

export default Navbar