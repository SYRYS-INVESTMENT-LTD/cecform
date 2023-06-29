import React from 'react'
import firstfooter from '../assets/firstfooter.png'
import secondfooter from '../assets/secondfooter.png'
import thirdfooter from '../assets/thirdfooter.png'
import instagram from '../assets/instagramwhite.png'
import { MdFacebook, MdWhatsapp } from 'react-icons/md'

export default function Footer() {
    return (
        <div>
            <div className='md:flex items-stretch mt-28'>
                <div className='px-10 py-20 bg-[#012d46] md:w-[65%] md:flex justify-between md:space-y-0  space-y-14'>
                    <div className=''>
                        <h1 className='font-poppinsmedium text-white text-base'>Head Teacher</h1>
                        <p className='font-poppinsregular text-xs text-white mt-8'>Charlene Erica Dushime</p>
                    </div>
                    <div className=''>
                        <h1 className='font-poppinsmedium text-white text-base'>Explore</h1>
                        <div className='mt-8 space-y-5'>
                            <div className='flex items-center md:space-x-4 justify-between md:justify-center'>
                                <p className='font-poppinsregular text-xs text-[#bababa] cursor-pointer hover:text-[#FF5539] hover:underline'>About</p>
                                <p className='font-poppinsregular text-xs text-[#bababa] cursor-pointer hover:text-[#FF5539] hover:underline'>Blogs and News</p>
                            </div>
                            <div className='flex items-center md:space-x-4 justify-between md:justify-center'>
                                <p className='font-poppinsregular text-xs text-[#FF5539] cursor-pointer hover:text-[#FF5539] hover:underline'>Universities</p>
                                <p className='font-poppinsregular text-xs text-[#bababa] cursor-pointer hover:text-[#FF5539] hover:underline'>Contact Us</p>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <p className='font-poppinsregular text-xs text-[#bababa] cursor-pointer hover:text-[#FF5539] hover:underline'>Courses</p>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <p className='font-poppinsregular text-xs text-[#bababa] cursor-pointer hover:text-[#FF5539] hover:underline'>For Applicants</p>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='font-poppinsmedium text-white text-base'>Certified by</h1>
                        <div className='mt-8 space-y-5'>
                            <div className='flex items-start space-x-4'>
                                <img src={firstfooter} alt='footerimg-certified' className='w-20' />
                                <img src={secondfooter} alt='footerimg-certified' className='w-20' />
                            </div>
                            <div className='flex items-center space-x-4'>
                                <img src={thirdfooter} alt='footerimg-certified' className='w-20' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-10 py-20 md:bg-[#18212f] bg-[#012d46] md:w-[35%]'>
                    <div className=''>
                        <h1 className='font-poppinsmedium text-white text-base'>About</h1>
                        <p className='font-poppinsregular text-xs text-[#bababa] mt-8'>CEC is an Education Consultancy and online centre that caters to needs of students around the world.</p>

                        <div className='bg-[#FF5539] cursor-pointer mt-10 items-center flex space-x-2 justify-center py-3 px-4 w-[50%]'>
                            <p className='text-[#fff] font-poppinsregular text-xs'>Contact Us</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:flex md:items-stretch items-center justify-center flex md:flex-row flex-col w-[100%]'>
                <div className='px-10 py-8 bg-[#18212f] md:w-[65%] items-center flex space-x-2 w-[100%]'>
                    <p className='text-xs font-poppinsregular text-[#babababa]'>© Copyright 2023 by</p>
                    <p className='text-xs font-poppinsregular text-[#FF5539]'>C.E.C.</p>
                </div>

                <div className='px-10 py-8 md:bg-[#012d46] bg-[#18212f] md:w-[35%] items-center flex space-x-6 w-[100%]'>
                    <MdFacebook size={24} color='#fff' className='cursor-pointer' />
                    <img src={instagram} alt='instagram' className='w-5 cursor-pointer' />
                    <MdWhatsapp size={24} color='#fff' className='cursor-pointer' />
                </div>
            </div>
        </div>
    )
}
