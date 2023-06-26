import React from 'react'
import heroimage from '../assets/cecheader.png'

function Hero() {
    return (
        <div>
            <div className='md:mx-32 md:mt-32 mt-16 mx-4'>
                <h1 className='font-poppinssemibold text-xl'>Undergraduate Programs</h1>
                <div className='flex items-center justify-center'>
                    <img src={heroimage} alt='heroimage' className='mt-8 w-[100%]' />
                </div>
                <p className='text-sm text-[#5A5A5A] font-poppinsregular mt-10 leading-7'>
                    “The prerequisite for motivation and success in any endeavor is a BIG vision for your future. If you’re stuck in the past, you’re really in trouble. <br/>
                    B.N. Norton. <br/>
                    The opportunity to birth Canadian Imperial College is inspired by this quote of B.N. Norton. Canadian Imperial College is the manifestation of the BIG picture, which was hitherto a dream in our heads. The search for a sustainable solution to the dynamic challenges that the world faces today requires that we look beyond the surface. We must employ the most powerful tool we have, ‘our minds’, to see further and create a better future.
                </p>
            </div>
        </div>
    )
}

export default Hero
