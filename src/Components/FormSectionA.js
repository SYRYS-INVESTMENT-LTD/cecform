import React, { useState } from 'react'
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

                <div className='mt-14 space-y-10'>
                 <h1 className='font-poppinsmedium text-xs text-[#FF5539]'>Personal details</h1>
                </div>
            </div>
        </div>
    )
}

export default FormSectionA