<div>
{!isFormSubmitted ? (
    <div>
            <div className='md:mt-20 mt-14 md:mx-32 mx-6 mb-10'>

                <div className='space-y-10'>
                    <div className='space-y-3'>
                        <label className='font-poppinsmedium text-xs text-[#262626]'>You are applying as</label>
                        <Select
                            defaultValue={applyingas}
                            onChange={handleApplyingAsChange}
                            options={applyingasoptions}
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
                            id="educational-objective"
                            value={educationalobjective}
                            options={[
                                { value: 'Vocational School', label: 'Vocational School' },
                                { value: 'Undergraduate', label: 'Undergraduate' },
                                { value: 'Masters', label: 'Masters' },
                                { value: 'PhD', label: 'PhD' },
                            ]}
                            onChange={handleObjectiveChange}
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
                            id="course"
                            value={course}
                            options={courseOptions}
                            onChange={handleCourseChange}
                            isDisabled={!educationalobjective}
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
                        <div className='md:flex items-center md:space-x-6 space-y-4 md:space-y-0'>
                            <input placeholder='First name' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' value={firstname} onChange={(e) => setfirstname(e.target.value)} />
                            <input placeholder='Middle name (optional)' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' value={middlename} onChange={(e) => setmiddlename(e.target.value)} />
                            <input placeholder='Last name' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' value={lastname} onChange={(e) => setlastname(e.target.value)} />
                        </div>
                    </div>

                    <div className='md:flex items-center md:space-x-6 space-y-4 md:space-y-0'>
                        <div className='w-[100%]'>
                            <h1 className='text-xs text-[#232323] font-poppinsmedium'>Passport Number</h1>
                            <input value={passportnumber} onChange={(e) => setpassportnumber(e.target.value)} placeholder='Enter here' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                        </div>
                        <div className='w-[100%]'>
                            <h1 className='text-xs text-[#232323] font-poppinsmedium'>Phone number</h1>
                            <input value={phonenumber} onChange={(e) => setphonenumber(e.target.value)} placeholder='Enter here' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                        </div>
                        <div className='w-[100%]'>
                            <h1 className='text-xs text-[#232323] font-poppinsmedium'>Email address</h1>
                            <input value={emailaddress} onChange={(e) => setemailaddress(e.target.value)} placeholder='Enter here' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                        </div>
                    </div>

                    <div className='md:flex items-center md:space-x-6 space-y-4 md:space-y-0'>
                        <div className='w-[100%]'>
                            <h1 className='text-xs text-[#232323] font-poppinsmedium'>Date of Birth</h1>
                            <div className='flex items-center space-x-3 mt-2'>
                                <Select
                                    defaultValue={dayofbirth}
                                    onChange={handleDayChange}
                                    options={days}
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
                                    placeholder="Select Day"
                                    className='font-poppinsregular text-xs text-[#5A5A5A]'
                                />
                                <Select
                                    defaultValue={monthofbirth}
                                    onChange={handleMonthChange}
                                    options={months}
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
                                    placeholder="Select Month"
                                    className='font-poppinsregular text-xs text-[#5A5A5A]'
                                />
                                <Select
                                    defaultValue={yearofbirth}
                                    onChange={handleYearChange}
                                    options={years}
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
                                    placeholder="Select Year"
                                    className='font-poppinsregular text-xs text-[#5A5A5A]'
                                />
                            </div>
                        </div>
                        <div className='w-[100%]'>
                            <h1 className='text-xs text-[#232323] font-poppinsmedium'>Gender</h1>
                            <div className='flex items-center space-x-3 w-[100%]'>
                                <div
                                    onClick={() => setgender('Male')}
                                    className={`${gender === "Male" ?
                                        "bg-[#FF553933] cursor-pointer items-center flex justify-center outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#FF553933]"
                                        :
                                        "bg-[#F2F2F2] cursor-pointer items-center flex justify-center outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#CBCBCB]"}`} >
                                    <h1
                                        className={`${gender === 'Male' ? "text-[#FF5539] text-xs font-poppinsregular" : "text-[#969696] text-xs font-poppinsregular"}`}>Male</h1>
                                </div>
                                <div
                                    onClick={() => setgender('Female')}
                                    className={`${gender === "Female" ?
                                        "bg-[#FF553933] cursor-pointer items-center flex justify-center outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#FF553933]"
                                        :
                                        "bg-[#F2F2F2] cursor-pointer items-center flex justify-center outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#CBCBCB]"}`}
                                >
                                    <h1
                                        className={`${gender === 'Female' ? "text-[#FF5539] text-xs font-poppinsregular" : "text-[#969696] text-xs font-poppinsregular"}`}>Female</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='md:flex items-center md:space-x-6 space-y-4 md:space-y-0'>
                        <div className='w-[100%]'>
                            <h1 className='text-xs text-[#232323] font-poppinsmedium mb-2'>Nationality</h1>
                            <Select
                                defaultValue={nationality}
                                onChange={applicantnationality}
                                options={nationalities}
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
                        <div className='w-[100%]'>
                            <h1 className='mb-2 text-xs text-[#232323] font-poppinsmedium'>Place of birth</h1>
                            <Select
                                defaultValue={placeofbirth}
                                onChange={applicantplaceofbirth}
                                options={nationalities}
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

                    <div>
                        <h1 className='mb-2 text-xs text-[#232323] font-poppinsmedium'>Permanent Address</h1>
                        <Select
                            defaultValue={country}
                            onChange={applicantaddresscountry}
                            options={nationalities}
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
                            placeholder="Select Country"
                            className='font-poppinsregular text-xs text-[#5A5A5A]'
                        />
                        <div className='flex items-center space-x-6'>
                            <input value={streetorboxnumber} onChange={(e) => setstreetorboxnumber(e.target.value)} placeholder='Street or box number' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input value={townorcity} onChange={(e) => settownorcity(e.target.value)} placeholder='Town/city' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                        </div>
                        <div className='flex items-center space-x-6 mt-4'>
                            <input value={postalorzipcode} onChange={(e) => setpostalorzipcode(e.target.value)} placeholder='Postal/zip code' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input value={phonenumber} onChange={(e) => setphonenumber(e.target.value)} placeholder='Home phone number' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <div className='w-[100%]'></div>
                        </div>
                    </div>

                    <div className='bg-[#e6e6e6] h-0.5 w-[100%] mt-4'>

                    </div>
                </div>

                <div className='mt-14 space-y-14'>
                    <h1 className='font-poppinsmedium text-xs text-[#FF5539]'>Parent, Guardian or Spouse details</h1>

                    <div>
                        <h1 className='text-xs text-[#232323] font-poppinsmedium'>Individual One *</h1>
                        <div className='flex items-center space-x-6 mb-4'>
                            <input value={guardianfirstname} onChange={(e) => setguardianfirstname(e.target.value)} placeholder='First name' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input value={guardianlastname} onChange={(e) => setguardianlastname(e.target.value)} placeholder='Surname' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input value={guardianmiddlename} onChange={(e) => setguardianmiddlename(e.target.value)} placeholder='Middle name (optional)' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                        </div>
                        <Select
                            defaultValue={guardiancountry}
                            onChange={guardianadresscountry}
                            options={nationalities}
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
                            placeholder="Select Country"
                            className='font-poppinsregular text-xs text-[#5A5A5A]'
                        />
                        <div className='flex items-center space-x-6 mt-4'>
                            <input value={guardianstreetorboxnumber} onChange={(e) => setguardianstreetorboxnumber(e.target.value)} placeholder='Street or box number' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input value={guardiantownorcity} onChange={(e) => setguardiantownorcity(e.target.value)} placeholder='Town/city' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                        </div>
                        <div className='flex items-center space-x-6 mt-4'>
                            <input value={guardianpostalorzipcode} onChange={(e) => setguardianpostalorzipcode(e.target.value)} placeholder='Postal/zip code' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input value={guardianphonenumber} onChange={(e) => setguardianphonenumber(e.target.value)} placeholder='Home phone number' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input value={guardianemailaddress} onChange={(e) => setguardianemailaddress(e.target.value)} placeholder='Email address' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                        </div>
                    </div>

                    <div>
                        <h1 className='text-xs text-[#232323] font-poppinsmedium'>Individual Two</h1>
                        <div className='mb-4 flex items-center space-x-6'>
                            <input value={guardianBfirstname} onChange={(e) => setguardianBfirstname(e.target.value)} placeholder='First name' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input value={guardianBlastname} onChange={(e) => setguardianBlastname(e.target.value)} placeholder='Surname' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input value={guardianBmiddlename} onChange={(e) => setguardianBmiddlename(e.target.value)} placeholder='Middle name (optional)' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                        </div>
                        <Select
                            defaultValue={guardianBcountry}
                            onChange={guardianBadresscountry}
                            options={nationalities}
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
                            placeholder="Select Country"
                            className='font-poppinsregular text-xs text-[#5A5A5A]'
                        />
                        <div className='flex items-center space-x-6 mt-4'>
                            <input value={guardianBstreetorboxnumber} onChange={(e) => setguardianBstreetorboxnumber(e.target.value)} placeholder='Street or box number' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input value={guardianBtownorcity} onChange={(e) => setguardianBtownorcity(e.target.value)} placeholder='Town/city' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                        </div>
                        <div className='flex items-center space-x-6 mt-4'>
                            <input value={guardianBpostalorzipcode} onChange={(e) => setguardianBpostalorzipcode(e.target.value)} placeholder='Postal/zip code' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input value={guardianBphonenumber} onChange={(e) => setguardianBphonenumber(e.target.value)} placeholder='Home phone number' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            <input value={guardianBemailaddress} onChange={(e) => setguardianBemailaddress(e.target.value)} placeholder='Email address' className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
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
                            <input type="checkbox" name="yes" checked={studentwithdisability} onChange={handleCheckboxChange} />
                            <p className='font-poppinsregular text-xs text-[#5A5A5A]'> Yes</p>
                        </div>

                        <div className='items-center flex space-x-3'>
                            <input type="checkbox" name="no" checked={studentwithnodisability} onChange={handleCheckboxChange} />
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

                    {academicHistory.map((entry, index) => (
                        <div key={index}>
                            <div className='py-2'>
                                <Select
                                    options={educationalcertificateoptions}
                                    name="degree"
                                    value={entry.degree}
                                    onChange={(selectedOption) => handleInputChange(index, 'degree', selectedOption)}
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

                            <div className='flex items-center space-x-6 pb-4'>
                                <input
                                    name="institution"
                                    value={entry.institution}
                                    onChange={(e) => handleInputChange(index, 'institution', e.target.value)}
                                    placeholder='Name of school'
                                    className='outline-none w-[100%] text-xs font-poppinsregular py-3 px-3 border mt-2 rounded-lg border-[#c2c2c2]' />
                            </div>

                            <Select
                                name="location"
                                value={entry.location}
                                onChange={(selectedOption) => handleInputChange(index, 'location', selectedOption)}
                                options={nationalities}
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
                                placeholder="Select Location"
                                className='font-poppinsregular text-xs text-[#5A5A5A]'
                            />

                            {index > 0 && (
                                <div onClick={() => handleRemoveEntry(index)} className='border-[#FF5539] cursor-pointer border rounded-lg items-center flex space-x-2 justify-center py-3 mt-4 px-4'>
                                    <p className='text-[#FF5539] font-poppinsregular text-xs'>Remove</p>
                                </div>
                            )}
                        </div>
                    ))}

                </div>

                <div onClick={handleAddEntry} className='border-[#FF5539] cursor-pointer mt-4 border rounded-lg items-center flex space-x-2 justify-center py-3 px-4'>
                    <p className='text-[#FF5539] font-poppinsregular text-xs'>Add another</p>
                    <MdAdd color='#FF5539' />
                </div>


                <div className="border-dashed border-red-500 border-2 p-4 my-4">
                    <label htmlFor="documents" className="block mb-2 font-poppinsregular text-sm">
                        Supporting Documents:
                    </label>
                    <input
                        type="file"
                        id="documents"
                        multiple
                        accept=".pdf,.docx,image/png,image/jpeg"
                        onChange={handleDocumentChange}
                    />

                    <div className="mt-4">
                        {selectedDocuments.map((file, index) => (
                            <div key={index} className="flex items-center mb-2">
                                <span className="flex-grow">{file.name}</span>
                                <button
                                    className="text-red-500 p-1 hover:bg-red-500 hover:text-white rounded-full"
                                    onClick={() => handleRemoveDocument(file)}
                                >
                                    <MdCancel />
                                </button>
                            </div>
                        ))}
                    </div>

                    <button
                        type="submit"
                        className={`mt-4 bg-red-500 text-white py-2 px-4 rounded ${isUploadEnabled ? '' : 'opacity-50 cursor-not-allowed'
                            }`}
                        disabled={!isUploadEnabled}
                    >
                        Upload Documents
                    </button>
                </div>

                <div className='bg-[#e6e6e6] h-0.5 w-[100%] mt-14'>

                </div>

                <div className='mt-14'>
                    <h1 className='font-poppinsmedium text-xs text-[#262626]'>How did you hear about us</h1>

                    <div className='mt-4'>
                        <Select
                            defaultValue={howdidyouhearaboutus}
                            onChange={handlehowdidyouhearaboutus}
                            options={howdidyouhearaboutusoptions}
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
                    <div onClick={onsubmit} className='bg-[#FF5539] cursor-pointer rounded-lg items-center flex space-x-2 justify-center py-4 px-4 w-[50%]'>
                        <p className='text-[#fff] font-poppinsregular text-xs'>Apply Now</p>
                    </div>
                </div>
            </div>
        </div>
) : (
  <div className="flex flex-col items-center mt-10">
    <CheckCircle className="text-green-500 w-12 h-12 mb-4" />
    <h1 className="text-2xl font-poppinsmedium">Application Submitted!</h1>
    <p className="text-lg text-center font-poppinssemibold">
      Thank you for submitting your application.
    </p>
  </div>
)}

<ToastContainer /> {/* Place this at the top level of your application */}
</div>