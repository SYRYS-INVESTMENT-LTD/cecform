import React from 'react'
import heroimage from '../assets/cecheader.png'

function Hero() {
    return (
        <div>
            <div className='mx-14 mt-32'>
                <h1 className='font-poppinssemibold text-xl'>Undergraduate Programs</h1>
                <div className='flex items-center justify-center'>
                    <img src={heroimage} alt='heroimage' className='mt-8 w-[100%]' />
                </div>
            </div>
        </div>
    )
}

export default Hero
