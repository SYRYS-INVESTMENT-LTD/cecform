import React, { useState } from 'react'
import { MdArrowDropDown, MdArrowRight } from "react-icons/md";
import firstfooter from '../assets/firstfooter.png'
import secondfooter from '../assets/secondfooter.png'
import thirdfooter from '../assets/thirdfooter.png'
import gau from '../assets/gaulogo.png'

function Scholarship() {
    const [faqone, setfaqone] = useState(true)
    const [faqtwo, setfaqtwo] = useState(false)
    const [faqthree, setfaqthree] = useState(false)
    return (
        <div>
            <div className='mt-20 md:mx-32 mx-4'>
                <div>
                    <h1 className='font-poppinsmedium text-2xl'>About Girne American University</h1>
                    <p className='font-poppinsregular mt-2 md:text-base text-sm text-[#5A5A5A]'> <span className='cursor-pointer text-[#000] hover:underline'><a href='https://www.gau.edu.tr/en/'>GAU</a></span> is a leading university in Northern Cyprus, ranked as “One of the Best 100 Higher Education Provider Universities” in the <span className='cursor-pointer text-[#000] hover:underline'><a href='https://www.eduniversal-ranking.com'>Eduniversal rankings.</a></span> It is the first private university of Cyprus, established in 1985, providing higher education with an experience of 35 years. GAU boasts over 18,000 graduates from 135 countries around the world and is accredited by prestigious accrediting bodies in USA and Europe. A global university with 7 international campuses in 3 continents. </p>
                </div>
                <h1 className='font-poppinsmedium text-2xl mt-10'>Scholarship Examination Details</h1>
                <h1 className='font-poppinsmedium mt-6 md:text-lg text-base'>Date and Time</h1>
                <p className='font-poppinsregular mt-6 md:text-base text-sm text-[#5A5A5A]'>The scholarship examination is scheduled to take place on </p>
                <h1 className='font-poppinsmedium text-xl mt-3 text-[#FD7748]'>12th August, 2023 by 11:00am -1:00pm (GMT+2),</h1>
                <p className='font-poppinsregular mt-4 md:text-base text-sm text-[#5A5A5A]'>providing both science and arts students the opportunity to showcase their knowledge and abilities.</p>

                <div>
                    <h1 className='font-poppinsmedium mt-16 md:text-lg text-base'>Eligibility</h1>
                    <p className='font-poppinsregular mt-2 md:text-base text-sm text-[#5A5A5A] tracking-wide'>To be eligible for the C. Education Consultancy Scholarship Examination, you must be ready to apply for an Undergraduate/BSc/BA Program at Girne American University, a prestigious university in Northern Cyprus. You must also be ready to provide us with the necessary information to facilitate this application. Additionally, you must be under the age of 25 and possess a copy of your high school diploma. All students who meet these criteria are encouraged to participate and demonstrate their potential for academic excellence.</p>
                </div>

                <div>
                    <h1 className='font-poppinsmedium mt-16 md:text-lg text-base'>Exam Structure</h1>
                    <p className='font-poppinsregular mt-2 md:text-base text-sm text-[#5A5A5A] tracking-wide'>The Science examination will be divided into 6 sections: English, Mathematics, Biology, Chemistry and, Physics. It will be a total of 120 questions and it will be a timed exam of 80 minutes.
                        For the Art majors, the exam will consist of the following: English, Mathematics, Geography, History, Sociology and, Literature. It will be a total of 120 questions and it will be a timed exam of 80 minutes.</p>
                </div>

                <div>
                    <h1 className='font-poppinsmedium mt-24 text-2xl'>How to Register</h1>
                    <p className='font-poppinsregular mt-4 md:text-base text-sm text-[#5A5A5A] tracking-wide'>Registering for the scholarship examination is a simple and straightforward process. To secure your spot and be part of this incredible opportunity, follow these steps:</p>
                    <p className='font-poppinsregular mt-2 md:text-base text-sm text-[#5A5A5A] tracking-wide'>Fill out the registration form by clicking <span className='underline text-[#FD7748] cursor-pointer'><a href='https://docs.google.com/forms/d/e/1FAIpQLSffN08IVpugP18O9kc-oIjV9lVvDCvFPkHGK7wQki3fa5j42Q/viewform'>here.</a></span> It will only take a few minutes to complete.</p>

                    <p className='font-poppinsregular mt-10 md:text-base text-sm text-[#5A5A5A] tracking-wide'><span className=' text-[#000000] cursor-pointer text-base'>1.</span> Once you have successfully registered, you will receive a confirmation message and you’ll be invited to a group where you can meet with the other participants and ask any questions you might have.</p>
                    <p className='font-poppinsregular mt-10 md:text-base text-sm text-[#5A5A5A] tracking-wide'><span className=' text-[#000000] cursor-pointer text-base'>2.</span> 2.   On the day of the exam, a link will be sent to you to join the exam which will be held online.</p>
                </div>

                <div>
                    <h1 className='font-poppinsmedium mt-24 text-2xl'>Frequently Asked Questions</h1>
                    <div>
                        <div className='flex items-center space-x-3 mt-6 cursor-pointer' onClick={() => setfaqone(!faqone)}>
                            <span onClick={() => setfaqone(!faqone)} className='cursor-pointer'>
                                {faqone == true ? <MdArrowDropDown /> : <MdArrowRight />}
                            </span>
                            <p className='font-poppinsmedium md:text-base text-sm text-[#000000]'>Will the scholarship cover all my educational expenses? </p>
                        </div>
                        {faqone == true ? <p className='font-poppinsregular mt-2 md:text-base text-sm text-[#5A5A5A] tracking-wide mx-7'>The scholarship covers only tuition and the award percentage will be determined based on the candidate's performance. Students may receive from 25% up to 100% scholarship on tuition.</p> : null}
                    </div>

                    <div>
                        <div className='flex items-center space-x-3 mt-6 cursor-pointer' onClick={() => setfaqtwo(!faqtwo)}>
                            <span onClick={() => setfaqtwo(!faqtwo)} className='cursor-pointer'>
                                {faqtwo == true ? <MdArrowDropDown /> : <MdArrowRight />}
                            </span>
                            <p className='font-poppinsmedium md:text-base text-sm text-[#000000]'>Is there an application fee for the scholarship examination?</p>
                        </div>
                        {faqtwo == true ? <p className='font-poppinsregular mt-2 md:text-base text-sm text-[#5A5A5A] tracking-wide mx-7'>No, the application for the scholarship examination is entirely free of charge.</p> : null}
                    </div>

                    <div>
                        <div className='flex items-center space-x-3 mt-6 cursor-pointer' onClick={() => setfaqthree(!faqthree)}>
                            <span onClick={() => setfaqthree(!faqthree)} className='cursor-pointer'>
                                {faqthree == true ? <MdArrowDropDown /> : <MdArrowRight />}
                            </span>
                            <p className='font-poppinsmedium md:text-base text-sm text-[#000000]'>Is the exam for Postgraduate students?</p>
                        </div>
                        {faqthree == true ? <p className='font-poppinsregular mt-2 md:text-base text-sm text-[#5A5A5A] tracking-wide mx-7'>The Exam is only for Undergraduate/BSc/BA applicants however you can also apply for Postgraduate/MSc/MA/PhD Programs with special discounts.</p> : null}
                    </div>
                </div>

                <div>
                    <h1 className='font-poppinsmedium mt-24 text-2xl'>Our Commitment</h1>
                    <p className='font-poppinsregular mt-6 md:text-base text-sm text-[#5A5A5A] tracking-wide leading-7'>At C. Education Consultancy we truly believe in your potential. We are fully committed, to supporting you every step of the way throughout your journey. Our team of experts is always available to offer guidance and assistance whenever you require it. We genuinely understand the importance of your aspirations and our sole aim is to assist you in achieving them.
                        Don't miss this fantastic opportunity to transform your dreams into reality. Register now for the C. Education Consultancy Scholarship Examination and set yourself on the path to academic success!
                        <br></br>
                        Register <span className='underline text-[#FD7748] cursor-pointer'><a href='https://docs.google.com/forms/d/e/1FAIpQLSffN08IVpugP18O9kc-oIjV9lVvDCvFPkHGK7wQki3fa5j42Q/viewform'>here.</a></span> to secure your spot. <br></br>
                        Should you have any further questions or require additional information, feel free to reach out to us at <span className='underline text-[#000000] cursor-pointer'>info@ceduconsult.com</span> or call <span className='text-[#000000] cursor-pointer'>+90 5469924354.</span><br></br>
                        We are excited to witness your brilliance shine in the scholarship examination!</p>
                </div>

                <div className='items-center justify-center flex mt-20'>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSffN08IVpugP18O9kc-oIjV9lVvDCvFPkHGK7wQki3fa5j42Q/viewform'>
                        <div className='bg-[#F16101] rounded-full py-3 px-40 cursor-pointer'>
                            <h2 className='font-poppinsmedium text-base text-white'>Regiter now</h2>
                        </div>
                    </a>
                </div>

            </div>
            <div className='mt-20 py-10 px-16 bg-[#F1BE9D] flex justify-between items-center'>
                <span>
                    <img src={secondfooter} className='w-16' />
                </span>
                <span>
                    <img src={gau} className='w-40' />
                </span>
                <span>
                    <img src={thirdfooter} className='w-28' />
                </span>
                <span>
                    <img src={firstfooter} className='w-24' />
                </span>
            </div>
        </div>
    )
}

export default Scholarship
