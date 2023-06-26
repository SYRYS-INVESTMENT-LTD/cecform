import React from 'react'

function FormSectionA() {
    return (
        <div>
            <div className='md:mt-20 mt-14 md:mx-32 mx-6 mb-10'>
                <div className='space-y-4'>
                    <label className='font-poppinsmedium text-sm text-[#262626]'>You are applying as</label>
                    <select className='border border-[#CBCBCB] rounded-lg flex items-center  px-6 py-3 w-[100%]' >
                      <option className='font-poppinsregular text-xs text-[#5A5A5A]'>Select option</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default FormSectionA