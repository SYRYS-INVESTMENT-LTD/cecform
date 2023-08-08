import React, { useState } from 'react'
import { MdArrowDropDown, MdArrowRight } from "react-icons/md";

function Scholarship() {
    const [faqone, setfaqone] = useState(true)
    const [faqtwo, setfaqtwo] = useState(false)
    const [faqthree, setfaqthree] = useState(false)
    return (
        <div>
            <div className='mt-20 md:mx-32 mx-4'>
                <h1 className='font-poppinsmedium text-2xl'>Scholarship Examination Details</h1>
                <p className='font-poppinsregular mt-6 text-sm text-[#5A5A5A]'>The scholarship examination is scheduled to take place on </p>
                <h1 className='font-poppinsmedium text-xl mt-8 text-[#FD7748]'>12th August, 2023 by 11:00am -1:00pm (GMT+2),</h1>
                <p className='font-poppinsregular mt-6 text-sm text-[#5A5A5A]'>providing both science and arts students the opportunity to showcase their knowledge and abilities.</p>

                <div>
                    <h1 className='font-poppinsmedium mt-16 text-base'>Eligibility</h1>
                    <p className='font-poppinsregular mt-2 text-sm text-[#5A5A5A] tracking-wide'>To be eligible for the C. Education Consultancy Scholarship Examination, you must be ready to apply for an Undergraduate/BSc/BA Program at Girne American University, a prestigious university in Northern Cyprus. You must also be ready to provide us with the necessary information to facilitate this application. Additionally, you must be under the age of 25 and possess a copy of your high school diploma. All students who meet these criteria are encouraged to participate and demonstrate their potential for academic excellence.</p>
                </div>

                <div>
                    <h1 className='font-poppinsmedium mt-16 text-base'>Exam Structure</h1>
                    <p className='font-poppinsregular mt-2 text-sm text-[#5A5A5A] tracking-wide'>The Science examination will be divided into 6 sections: English, Mathematics, Biology, Chemistry and, Physics. It will be a total of 120 questions and it will be a timed exam of 80 minutes.
                        For the Art majors, the exam will consist of the following: English, Mathematics, Geography, History, Sociology and, Literature. It will be a total of 120 questions and it will be a timed exam of 80 minutes.</p>
                </div>

                <div>
                    <h1 className='font-poppinsmedium mt-24 text-2xl'>How to Register</h1>
                    <p className='font-poppinsregular mt-4 text-sm text-[#5A5A5A] tracking-wide'>Registering for the scholarship examination is a simple and straightforward process. To secure your spot and be part of this incredible opportunity, follow these steps:</p>
                    <p className='font-poppinsregular mt-2 text-sm text-[#5A5A5A] tracking-wide'>Fill out the registration form by clicking <span className='underline text-[#FD7748] cursor-pointer'>here.</span> It will only take a few minutes to complete.</p>

                    <p className='font-poppinsregular mt-10 text-sm text-[#5A5A5A] tracking-wide'><span className=' text-[#000000] cursor-pointer text-base'>1.</span> Once you have successfully registered, you will receive a confirmation message and you’ll be invited to a group where you can meet with the other participants and ask any questions you might have.</p>
                    <p className='font-poppinsregular mt-10 text-sm text-[#5A5A5A] tracking-wide'><span className=' text-[#000000] cursor-pointer text-base'>2.</span> 2.   On the day of the exam, a link will be sent to you to join the exam which will be held online.</p>
                </div>

                <div>
                    <h1 className='font-poppinsmedium mt-24 text-2xl'>Frequently Asked Questions</h1>
                    <div className='flex items-center space-x-3 mt-6 cursor-pointer' onClick={() => setfaqone(!faqone)}>
                        <span onClick={() => setfaqone(!faqone)} className='cursor-pointer'>
                            {faqone == true ? <MdArrowDropDown /> : <MdArrowRight />}
                        </span>
                        <p className='font-poppinsmedium text-sm text-[#000000]'>Will the scholarship cover all my educational expenses? </p>
                        {faqone == true ? <p className='font-poppinsregular mt-10 text-sm text-[#5A5A5A] tracking-wide'>The scholarship covers only tuition and the award percentage will be determined based on the candidate's performance. Students may receive from 25% up to 100% scholarship on tuition.</p> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scholarship
