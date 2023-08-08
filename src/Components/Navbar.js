import React, { useState } from 'react'
import ceclogo from '../assets/ceclogo.png'
import uk from '../assets/language.png'
import { MdClose, MdKeyboardArrowDown, MdMenu } from "react-icons/md";
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagramblack.png'
import whatsapp from '../assets/whatsapp.png'

function Navbar() {
    const [open, setopen] = useState(false);
    return (
        <div className='relative'>
            <div className='mx-6 md:pt-8 pt-7 flex items-center justify-between'>
                <div>
                    <img src={ceclogo} alt='logo' className='h-12' />
                </div>

                <div className='md:flex hidden'>
                    <ul className='flex items-center space-x-6'>
                        <a href='https://www.ceduconsult.com/find-university'>
                            <li className='font-poppinsregular text-sm cursor-pointer text-black hover:text-[#F16101]'>Home</li>
                        </a>
                        <a href='https://www.ceduconsult.com/find-university'>
                            <li className='font-poppinsregular text-sm cursor-pointer text-black hover:text-[#F16101]'>About</li>
                        </a>
                        <a href='https://www.ceduconsult.com/find-university'>
                            <li className='font-poppinsregular text-sm cursor-pointer text-[#000] hover:text-[#F16101]'>Universities</li>
                        </a>
                        <a href='https://www.ceduconsult.com/find-university'>
                            <li className='font-poppinsregular text-sm cursor-pointer text-black hover:text-[#F16101]'>Courses</li>
                        </a>
                        <a href='https://www.ceduconsult.com/find-university'>
                            <li className='font-poppinsregular text-sm cursor-pointer text-black hover:text-[#F16101]'>For Applicants</li>
                        </a>
                        <a href='https://www.ceduconsult.com/find-university'>
                            <li className='font-poppinsregular text-sm cursor-pointer text-black hover:text-[#F16101]'>Blogs and News</li>
                        </a>
                        <a href='https://www.ceduconsult.com/find-university'>
                            <li className='font-poppinsregular text-sm cursor-pointer text-black hover:text-[#F16101]'>Contact</li>
                        </a>
                        <div className='border border-[#17A2B8] rounded-lg py-2 cursor-pointer px-2 flex items-center justify-center space-x-2'>
                            <img src={uk} alt='languageselector' className='ml-1' />
                            <MdKeyboardArrowDown />
                        </div>
                    </ul>
                </div>

                <div className='hidden md:flex items-center space-x-4'>
                    <a href="https://www.facebook.com/ceduconsultancy">
                        <img src={facebook} alt='facebook' className='w-3' />
                    </a>
                    <a href="https://www.instagram.com/cedu_consultancy/">
                        <img src={instagram} alt='instagram' className='w-3' />
                    </a>
                    <a href="https://wa.me/443301335324">
                        <img src={whatsapp} alt='whatsapp' className='w-3' />
                    </a>
                </div>

                <div onClick={(e) => setopen(!open)} className='md:hidden flex cursor-pointer'>
                    {open == true ? <MdClose size={26} /> : <MdMenu size={26} />}
                </div>
            </div>
            <div className={`${open == true ? "md:hidden absolute bg-[#18212f] h-screen w-[100%] mt-5" : "hidden"}`}>
                <div className=''>
                    <ul className='pt-10 items-start space-y-5 flex flex-col'>
                        <a href='/'>
                            <li className='font-poppinsregular text-base cursor-pointer px-6 text-white hover:text-[#F16101]'>Home</li>
                        </a>
                        <a className='bg-[#2a3444] h-0.5 w-[100%]'></a>
                        <a href='/'>
                            <li className='font-poppinsregular text-base cursor-pointer px-6 text-white hover:text-[#F16101]'>About</li>
                        </a>
                        <a className='bg-[#2a3444] h-0.5 w-[100%]'></a>
                        <a href='/'>
                            <li className='font-poppinsregular text-base cursor-pointer text-[#ffffff] px-6 hover:text-[#F16101]'>Universities</li>
                        </a>
                        <a className='bg-[#2a3444] h-0.5 w-[100%]'></a>
                        <a href='/'>
                            <li className='font-poppinsregular text-base cursor-pointer px-6 text-white hover:text-[#F16101]'>Courses</li>
                        </a>
                        <a className='bg-[#2a3444] h-0.5 w-[100%]'></a>
                        <a href='/'>
                            <li className='font-poppinsregular text-base cursor-pointer px-6 text-white hover:text-[#F16101]'>For Applicants</li>
                        </a>
                        <a className='bg-[#2a3444] h-0.5 w-[100%]'></a>
                        <a href='/'>
                            <li className='font-poppinsregular text-base cursor-pointer px-6 text-white hover:text-[#F16101]'>Blogs and News</li>
                        </a>
                        <a className='bg-[#2a3444] h-0.5 w-[100%]'></a>
                        <a href='/'>
                            <li className='font-poppinsregular text-base cursor-pointer px-6 text-white'>Contact</li>
                        </a>
                        <a className='bg-[#2a3444] h-0.5 w-[100%]'></a>
                        <div className='items-center justify-center flex mx-6'>
                            <div className='border border-[#17A2B8] rounded-lg py-3 cursor-pointer px-3 flex items-center justify-center space-x-2'>
                                <h1 className='font-poppinsmedium text-sm text-white'>English</h1>
                                <img src={uk} alt='languageselector' className='ml-1' />
                                <MdKeyboardArrowDown color='#fff' />
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar