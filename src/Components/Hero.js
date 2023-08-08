import React from 'react'
import heroimage from '../assets/cecheader.png'

function Hero() {
    return (
        <div>
            <div className='md:mx-32 md:mt-32 mt-16 mx-4'>
                <h1 className='font-poppinsregular md:text-5xl text-3xl'>C. Education Consultancy Scholarship Examination 2023: Gain up to 100% Scholarship at a Leading University</h1>
                <div className='flex items-center justify-center'>
                    <img src={heroimage} alt='heroimage' className='mt-8 w-[100%]' />
                </div>
                <p className='md:text-base text-sm text-[#5A5A5A] font-poppinsregular mt-10 leading-7'>
                    Are you a student, with a desire to pursue higher education and fulfill your academic aspirations? C. Education Consultancy is offering an opportunity that can lead you towards a future.
                    The C. Education Consultancy Scholarship Examination aims to recognize and assist students like yourself, who demonstrate a commitment, to achieving academic excellence.
                </p>
            </div>
        </div>
    )
}

export default Hero
