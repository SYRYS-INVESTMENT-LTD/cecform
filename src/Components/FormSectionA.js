import React, { useState } from 'react'
import { MdAdd } from 'react-icons/md';
import Select from 'react-select';

function FormSectionA() {

    const options = [
        { value: 'Undergraduate', label: 'Undergraduate' },
        { value: 'Postgraduate', label: 'Postgraduate' },
    ];

    const customStyles = {
        control: base => ({
            ...base,
            height: 45,
            minHeight: 45,
        })
    };

    const [applyingas, setapplyingas] = useState(null);
    return (
        <div>
            <div className='md:mt-20 mt-14 md:mx-32 mx-6 mb-10'>

                <div className='space-y-10'>
                    <div className='space-y-3'>
                        <label className='font-poppinsmedium text-xs text-[#262626]'>You are applying as</label>
                        <Select
                            defaultValue={applyingas}
                            onChange={setapplyingas}
                            options={options}
                            components={{
                                IndicatorSeparator: () => null
                            }}
                            styles={customStyles}
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 8,
                                height: 40,
                                colors: {
                                    ...theme.colors,
                                    primary25: 'dangerLight',
                                    primary: 'grey',
                                },
                            })}
                            placeholder="Select option"
                            className='font-poppinsregular text-xs text-[#5A5A5A]'
                        />
                    </div>

                    <div className='space-y-3'>
                        <label className='font-poppinsmedium text-xs text-[#262626]'>Educational Objective</label>
                        <Select
                            defaultValue={applyingas}
                            onChange={setapplyingas}
                            options={options}
                            components={{
                                IndicatorSeparator: () => null
                            }}
                            styles={customStyles}
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 8,
                                height: 40,
                                colors: {
                                    ...theme.colors,
                                    primary25: 'dangerLight',
                                    primary: 'grey',
                                },
                            })}
                            placeholder="Select option"
                            className='font-poppinsregular text-xs text-[#5A5A5A]'
                        />
                    </div>

                    <div className='space-y-3'>
                        <label className='font-poppinsmedium text-xs text-[#262626]'>Select a Course</label>
                        <Select
                            defaultValue={applyingas}
                            onChange={setapplyingas}
                            options={options}
                            components={{
                                IndicatorSeparator: () => null
                            }}
                            styles={customStyles}
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 8,
                                height: 40,
                                colors: {
                                    ...theme.colors,
                                    primary25: 'dangerLight',
                                    primary: 'grey',
                                },
                            })}
                            placeholder="Select option"
                            className='font-poppinsregular text-xs text-[#5A5A5A]'
                        />
                    </div>

                    <div className='bg-[#e6e6e6] h-0.5 w-[100%] mt-4'>

                    </div>
                </div>

                <div className='mt-14 space-y-14'>
                    <h1 className='font-poppinsmedium text-xs text-[#FF5539]'>Personal details</h1>

                    <div>
                        <h1 className='text-xs text-[#232323] font-poppinsmedium'>Names</h1>
                        <div className='md:flex items-center md:space-x-6 space-y-4'>
                            <input placeholder='First name' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input placeholder='Last name' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input placeholder='Middle name (optional)' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                        </div>
                    </div>

                    <div className='md:flex items-center md:space-x-6 space-y-4'>
                        <div className='w-[100%]'>
                            <h1 className='text-xs text-[#232323] font-poppinsmedium'>Passport Number</h1>
                            <input placeholder='Enter here' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                        </div>
                        <div className='w-[100%]'>
                            <h1 className='text-xs text-[#232323] font-poppinsmedium'>Phone number</h1>
                            <input placeholder='Enter here' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                        </div>
                        <div className='w-[100%]'>
                            <h1 className='text-xs text-[#232323] font-poppinsmedium'>Email address</h1>
                            <input placeholder='Enter here' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                        </div>
                    </div>

                    <div className='md:flex items-center md:space-x-6 space-y-4'>
                        <div className='w-[100%]'>
                            <h1 className='text-xs text-[#232323] font-poppinsmedium'>Date of Birth</h1>
                            <div className='flex items-center space-x-3'>
                                <input placeholder='Day' className='outline-none w-[70%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                                <input placeholder='Month' className='outline-none w-[70%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                                <input placeholder='Year' className='outline-none w-[70%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            </div>
                        </div>
                        <div className='w-[100%]'>
                            <h1 className='text-xs text-[#232323] font-poppinsmedium'>Gender</h1>
                            <div className='flex items-center space-x-3 w-[100%]'>
                                <div className='bg-[#FF553933] cursor-pointer items-center flex justify-center outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#FF553933]' >
                                    <h1 className='text-[#FF5539] text-xs font-poppinsregular'>Male</h1>
                                </div>
                                <div className='bg-[#F2F2F2] cursor-pointer items-center flex justify-center outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#CBCBCB]' >
                                    <h1 className='text-[#969696] text-xs font-poppinsregular'>Female</h1>
                                </div>
                                <div className='bg-[#F2F2F2] cursor-pointer items-center flex justify-center outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#CBCBCB]' >
                                    <h1 className='text-[#969696] text-xs font-poppinsregular'>Other</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='md:flex items-center md:space-x-6 space-y-4'>
                        <div className='w-[100%]'>
                            <h1 className='text-xs text-[#232323] font-poppinsmedium'>Nationality</h1>
                            <input placeholder='Enter here' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                        </div>
                        <div className='w-[100%]'>
                            <h1 className='text-xs text-[#232323] font-poppinsmedium'>Place of birth</h1>
                            <input placeholder='Enter here' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                        </div>
                    </div>

                    <div>
                        <h1 className='text-xs text-[#232323] font-poppinsmedium'>Permanent Address</h1>
                        <div className='flex items-center space-x-6'>
                            <input placeholder='Street or box number' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input placeholder='Town/city' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input placeholder='Country' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                        </div>
                        <div className='flex items-center space-x-6 mt-4'>
                            <input placeholder='Postal/zip code' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input placeholder='Home phone number' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <div className='w-[100%]'></div>
                        </div>
                    </div>

                    <div className='bg-[#e6e6e6] h-0.5 w-[100%] mt-4'>

                    </div>
                </div>

                <div className='mt-14 space-y-14'>
                    <h1 className='font-poppinsmedium text-xs text-[#FF5539]'>Parent, Guardian or Spouse details</h1>

                    <div>
                        <h1 className='text-xs text-[#232323] font-poppinsmedium'>Individual One</h1>
                        <div className='flex items-center space-x-6'>
                            <input placeholder='First name' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input placeholder='Surname' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input placeholder='Middle name (optional)' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                        </div>
                        <div className='flex items-center space-x-6 mt-4'>
                            <input placeholder='Street or box number' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input placeholder='Town/city' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input placeholder='Country' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                        </div>
                        <div className='flex items-center space-x-6 mt-4'>
                            <input placeholder='Postal/zip code' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input placeholder='Home phone number' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input placeholder='Email address' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                        </div>
                    </div>

                    <div>
                        <h1 className='text-xs text-[#232323] font-poppinsmedium'>Individual Two</h1>
                        <div className='flex items-center space-x-6'>
                            <input placeholder='First name' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input placeholder='Surname' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input placeholder='Middle name (optional)' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                        </div>
                        <div className='flex items-center space-x-6 mt-4'>
                            <input placeholder='Street or box number' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input placeholder='Town/city' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input placeholder='Country' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                        </div>
                        <div className='flex items-center space-x-6 mt-4'>
                            <input placeholder='Postal/zip code' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input placeholder='Home phone number' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input placeholder='Email address' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                        </div>
                    </div>
                    <div className='bg-[#e6e6e6] h-0.5 w-[100%] mt-4'>

                    </div>
                </div>

                <div className='mt-14 space-y-8'>
                    <h1 className='font-poppinsmedium text-xs text-[#FF5539]'>Students with Disability</h1>

                    <p className='font-poppinsregular text-xs text-[#5A5A5A]'>
                        Completion of the following is voluntary and will remain confidential. For the purposes of this questionnaire, disabilities are long term or recurring impairments and include: mobility, sensory, mental health, physical and/or learning disabilities.
                    </p>

                    <div className='flex items-center space-x-9'>
                        <h1 className='font-poppinsmedium text-xs text-[#262626]'>Do you consider yourself a person with disability</h1>
                        <div className='items-center flex space-x-3'>
                            <input type="checkbox" />
                            <p className='font-poppinsregular text-xs text-[#5A5A5A]'> Yes</p>
                        </div>

                        <div className='items-center flex space-x-3'>
                            <input type="checkbox" />
                            <p className='font-poppinsregular text-xs text-[#5A5A5A]'> No</p>
                        </div>
                    </div>
                    <div className='bg-[#e6e6e6] h-0.5 w-[100%] mt-4'>

                    </div>
                </div>


                <div className='mt-14 space-y-6'>
                    <div>
                        <h1 className='font-poppinsmedium text-xs text-[#262626]'>Academic History</h1>
                        <p className='font-poppinsregular text-xs text-[#5A5A5A] mt-2'>
                            List all previous educational experience and indicate certificates received.
                        </p>
                    </div>

                    <div>
                        <Select
                            defaultValue={applyingas}
                            onChange={setapplyingas}
                            options={options}
                            components={{
                                IndicatorSeparator: () => null
                            }}
                            styles={customStyles}
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 8,
                                height: 40,
                                colors: {
                                    ...theme.colors,
                                    primary25: 'dangerLight',
                                    primary: 'grey',
                                },
                            })}
                            placeholder="Select academic level"
                            className='font-poppinsregular text-xs text-[#5A5A5A]'
                        />
                    </div>

                    <div className='flex items-center space-x-6'>
                        <input placeholder='Name of school' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                        <input placeholder='Location' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                    </div>
                </div>

                <div className='items-center flex justify-center mt-14'>
                    <div className='border-[#FF5539] border rounded-lg items-center flex space-x-2 justify-center py-3 px-4'>
                        <p className='text-[#FF5539] font-poppinsregular text-xs'>Add another</p>
                        <MdAdd color='#FF5539' />
                    </div>
                </div>

                <div className='bg-[#e6e6e6] h-0.5 w-[100%] mt-14'>

                </div>

                <div className='mt-14'>
                    <h1 className='font-poppinsmedium text-xs text-[#262626]'>How did you hear about us</h1>

                    <div className='mt-4'>
                        <Select
                            defaultValue={applyingas}
                            onChange={setapplyingas}
                            options={options}
                            components={{
                                IndicatorSeparator: () => null
                            }}
                            styles={customStyles}
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 8,
                                height: 40,
                                colors: {
                                    ...theme.colors,
                                    primary25: 'dangerLight',
                                    primary: 'grey',
                                },
                            })}
                            placeholder="Select option"
                            className='font-poppinsregular text-xs text-[#5A5A5A]'
                        />
                    </div>
                </div>

                <div className='items-center flex justify-center mt-20'>
                    <div className='bg-[#FF5539] cursor-pointer rounded-lg items-center flex space-x-2 justify-center py-4 px-4 w-[50%]'>
                        <p className='text-[#fff] font-poppinsregular text-xs'>Apply Now</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormSectionA