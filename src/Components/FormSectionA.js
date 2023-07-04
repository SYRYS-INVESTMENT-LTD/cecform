import React, { useState } from 'react'
import { MdAdd, MdCancel } from 'react-icons/md';
import Select from 'react-select';
import axios from 'axios';
import { CheckCircle, XCircle } from 'react-feather';
import { toast } from 'react-toastify';

function FormSectionA() {

    const applyingasoptions = [
        { value: 'Undergraduate', label: 'Undergraduate' },
        { value: 'Masters', label: 'Masters' },
        { value: 'P.H.D', label: 'P.H.D' },
    ];

    const educationalcertificateoptions = [
        { value: 'High School', label: 'High School' },
        { value: 'Diploma', label: 'Diploma' },
        { value: 'Undergraduate', label: 'Undergraduate' },
        { value: 'Masters', label: 'Masters' },
        { value: 'P.H.D', label: 'P.H.D' },
    ];

    const howdidyouhearaboutusoptions = [
        { value: 'Google', label: 'Google' },
        { value: 'Facebook', label: 'Facebook' },
        { value: 'Instagram', label: 'Instagram' },
        { value: 'Other Social Media Platforms', label: 'Other Social Media Platforms' },
        { value: 'A Friend', label: 'A Friend' },
        { value: 'A Student who gained admission through us', label: 'A Student who gained admission through us' },
    ];

    const nationalities = [
        { value: 'Afghanistan', label: 'Afghanistan' },
        { value: 'Albania', label: 'Albania' },
        { value: 'Algeria', label: 'Algeria' },
        { value: 'Andorra', label: 'Andorra' },
        { value: 'Angola', label: 'Angola' },
        { value: 'Antigua and Barbuda', label: 'Antigua and Barbuda' },
        { value: 'Argentina', label: 'Argentina' },
        { value: 'Armenia', label: 'Armenia' },
        { value: 'Australia', label: 'Australia' },
        { value: 'Austria', label: 'Austria' },
        { value: 'Azerbaijan', label: 'Azerbaijan' },
        { value: 'Bahamas', label: 'Bahamas' },
        { value: 'Bahrain', label: 'Bahrain' },
        { value: 'Bangladesh', label: 'Bangladesh' },
        { value: 'Barbados', label: 'Barbados' },
        { value: 'Belarus', label: 'Belarus' },
        { value: 'Belgium', label: 'Belgium' },
        { value: 'Belize', label: 'Belize' },
        { value: 'Benin', label: 'Benin' },
        { value: 'Bhutan', label: 'Bhutan' },
        { value: 'Bolivia', label: 'Bolivia' },
        { value: 'Bosnia and Herzegovina', label: 'Bosnia and Herzegovina' },
        { value: 'Botswana', label: 'Botswana' },
        { value: 'Brazil', label: 'Brazil' },
        { value: 'Brunei', label: 'Brunei' },
        { value: 'Bulgaria', label: 'Bulgaria' },
        { value: 'Burkina Faso', label: 'Burkina Faso' },
        { value: 'Burundi', label: 'Burundi' },
        { value: 'Cabo Verde', label: 'Cabo Verde' },
        { value: 'Cambodia', label: 'Cambodia' },
        { value: 'Cameroon', label: 'Cameroon' },
        { value: 'Canada', label: 'Canada' },
        { value: 'Central African Republic', label: 'Central African Republic' },
        { value: 'Chad', label: 'Chad' },
        { value: 'Chile', label: 'Chile' },
        { value: 'China', label: 'China' },
        { value: 'Colombia', label: 'Colombia' },
        { value: 'Comoros', label: 'Comoros' },
        { value: 'Congo', label: 'Congo' },
        { value: 'Costa Rica', label: 'Costa Rica' },
        { value: 'Croatia', label: 'Croatia' },
        { value: 'Cuba', label: 'Cuba' },
        { value: 'Cyprus', label: 'Cyprus' },
        { value: 'Czech Republic', label: 'Czech Republic' },
        { value: 'Denmark', label: 'Denmark' },
        { value: 'Djibouti', label: 'Djibouti' },
        { value: 'Dominica', label: 'Dominica' },
        { value: 'Dominican Republic', label: 'Dominican Republic' },
        { value: 'East Timor', label: 'East Timor' },
        { value: 'Ecuador', label: 'Ecuador' },
        { value: 'Egypt', label: 'Egypt' },
        { value: 'El Salvador', label: 'El Salvador' },
        { value: 'Equatorial Guinea', label: 'Equatorial Guinea' },
        { value: 'Eritrea', label: 'Eritrea' },
        { value: 'Estonia', label: 'Estonia' },
        { value: 'Eswatini', label: 'Eswatini' },
        { value: 'Ethiopia', label: 'Ethiopia' },
        { value: 'Fiji', label: 'Fiji' },
        { value: 'Finland', label: 'Finland' },
        { value: 'France', label: 'France' },
        { value: 'Gabon', label: 'Gabon' },
        { value: 'Gambia', label: 'Gambia' },
        { value: 'Georgia', label: 'Georgia' },
        { value: 'Germany', label: 'Germany' },
        { value: 'Ghana', label: 'Ghana' },
        { value: 'Greece', label: 'Greece' },
        { value: 'Grenada', label: 'Grenada' },
        { value: 'Guatemala', label: 'Guatemala' },
        { value: 'Guinea', label: 'Guinea' },
        { value: 'Guinea-Bissau', label: 'Guinea-Bissau' },
        { value: 'Guyana', label: 'Guyana' },
        { value: 'Haiti', label: 'Haiti' },
        { value: 'Honduras', label: 'Honduras' },
        { value: 'Hungary', label: 'Hungary' },
        { value: 'Iceland', label: 'Iceland' },
        { value: 'India', label: 'India' },
        { value: 'Indonesia', label: 'Indonesia' },
        { value: 'Iran', label: 'Iran' },
        { value: 'Iraq', label: 'Iraq' },
        { value: 'Ireland', label: 'Ireland' },
        { value: 'Israel', label: 'Israel' },
        { value: 'Italy', label: 'Italy' },
        { value: 'Jamaica', label: 'Jamaica' },
        { value: 'Japan', label: 'Japan' },
        { value: 'Jordan', label: 'Jordan' },
        { value: 'Kazakhstan', label: 'Kazakhstan' },
        { value: 'Kenya', label: 'Kenya' },
        { value: 'Kiribati', label: 'Kiribati' },
        { value: 'Korea, North', label: 'Korea, North' },
        { value: 'Korea, South', label: 'Korea, South' },
        { value: 'Kosovo', label: 'Kosovo' },
        { value: 'Kuwait', label: 'Kuwait' },
        { value: 'Kyrgyzstan', label: 'Kyrgyzstan' },
        { value: 'Laos', label: 'Laos' },
        { value: 'Latvia', label: 'Latvia' },
        { value: 'Lebanon', label: 'Lebanon' },
        { value: 'Lesotho', label: 'Lesotho' },
        { value: 'Liberia', label: 'Liberia' },
        { value: 'Libya', label: 'Libya' },
        { value: 'Liechtenstein', label: 'Liechtenstein' },
        { value: 'Lithuania', label: 'Lithuania' },
        { value: 'Luxembourg', label: 'Luxembourg' },
        { value: 'Madagascar', label: 'Madagascar' },
        { value: 'Malawi', label: 'Malawi' },
        { value: 'Malaysia', label: 'Malaysia' },
        { value: 'Maldives', label: 'Maldives' },
        { value: 'Mali', label: 'Mali' },
        { value: 'Malta', label: 'Malta' },
        { value: 'Marshall Islands', label: 'Marshall Islands' },
        { value: 'Mauritania', label: 'Mauritania' },
        { value: 'Mauritius', label: 'Mauritius' },
        { value: 'Mexico', label: 'Mexico' },
        { value: 'Micronesia', label: 'Micronesia' },
        { value: 'Moldova', label: 'Moldova' },
        { value: 'Monaco', label: 'Monaco' },
        { value: 'Mongolia', label: 'Mongolia' },
        { value: 'Montenegro', label: 'Montenegro' },
        { value: 'Morocco', label: 'Morocco' },
        { value: 'Mozambique', label: 'Mozambique' },
        { value: 'Myanmar', label: 'Myanmar' },
        { value: 'Namibia', label: 'Namibia' },
        { value: 'Nauru', label: 'Nauru' },
        { value: 'Nepal', label: 'Nepal' },
        { value: 'Netherlands', label: 'Netherlands' },
        { value: 'New Zealand', label: 'New Zealand' },
        { value: 'Nicaragua', label: 'Nicaragua' },
        { value: 'Niger', label: 'Niger' },
        { value: 'Nigeria', label: 'Nigeria' },
        { value: 'North Macedonia', label: 'North Macedonia' },
        { value: 'Norway', label: 'Norway' },
        { value: 'Oman', label: 'Oman' },
        { value: 'Pakistan', label: 'Pakistan' },
        { value: 'Palau', label: 'Palau' },
        { value: 'Palestinian Territories', label: 'Palestinian Territories' },
        { value: 'Panama', label: 'Panama' },
        { value: 'Papua New Guinea', label: 'Papua New Guinea' },
        { value: 'Paraguay', label: 'Paraguay' },
        { value: 'Peru', label: 'Peru' },
        { value: 'Philippines', label: 'Philippines' },
        { value: 'Poland', label: 'Poland' },
        { value: 'Portugal', label: 'Portugal' },
        { value: 'Qatar', label: 'Qatar' },
        { value: 'Romania', label: 'Romania' },
        { value: 'Russia', label: 'Russia' },
        { value: 'Rwanda', label: 'Rwanda' },
        { value: 'Saint Kitts and Nevis', label: 'Saint Kitts and Nevis' },
        { value: 'Saint Lucia', label: 'Saint Lucia' },
        { value: 'Saint Vincent and the Grenadines', label: 'Saint Vincent and the Grenadines' },
        { value: 'Samoa', label: 'Samoa' },
        { value: 'San Marino', label: 'San Marino' },
        { value: 'Sao Tome and Principe', label: 'Sao Tome and Principe' },
        { value: 'Saudi Arabia', label: 'Saudi Arabia' },
        { value: 'Senegal', label: 'Senegal' },
        { value: 'Serbia', label: 'Serbia' },
        { value: 'Seychelles', label: 'Seychelles' },
        { value: 'Sierra Leone', label: 'Sierra Leone' },
        { value: 'Singapore', label: 'Singapore' },
        { value: 'Slovakia', label: 'Slovakia' },
        { value: 'Slovenia', label: 'Slovenia' },
        { value: 'Solomon Islands', label: 'Solomon Islands' },
        { value: 'Somalia', label: 'Somalia' },
        { value: 'South Africa', label: 'South Africa' },
        { value: 'South Sudan', label: 'South Sudan' },
        { value: 'Spain', label: 'Spain' },
        { value: 'Sri Lanka', label: 'Sri Lanka' },
        { value: 'Sudan', label: 'Sudan' },
        { value: 'Suriname', label: 'Suriname' },
        { value: 'Sweden', label: 'Sweden' },
        { value: 'Switzerland', label: 'Switzerland' },
        { value: 'Syria', label: 'Syria' },
        { value: 'Taiwan', label: 'Taiwan' },
        { value: 'Tajikistan', label: 'Tajikistan' },
        { value: 'Tanzania', label: 'Tanzania' },
        { value: 'Thailand', label: 'Thailand' },
        { value: 'Togo', label: 'Togo' },
        { value: 'Tonga', label: 'Tonga' },
        { value: 'Trinidad and Tobago', label: 'Trinidad and Tobago' },
        { value: 'Tunisia', label: 'Tunisia' },
        { value: 'Turkey', label: 'Turkey' },
        { value: 'Turkmenistan', label: 'Turkmenistan' },
        { value: 'Tuvalu', label: 'Tuvalu' },
        { value: 'Uganda', label: 'Uganda' },
        { value: 'Ukraine', label: 'Ukraine' },
        { value: 'United Arab Emirates', label: 'United Arab Emirates' },
        { value: 'United Kingdom', label: 'United Kingdom' },
        { value: 'United States', label: 'United States' },
        { value: 'Uruguay', label: 'Uruguay' },
        { value: 'Uzbekistan', label: 'Uzbekistan' },
        { value: 'Vanuatu', label: 'Vanuatu' },
        { value: 'Vatican City', label: 'Vatican City' },
        { value: 'Venezuela', label: 'Venezuela' },
        { value: 'Vietnam', label: 'Vietnam' },
        { value: 'Yemen', label: 'Yemen' },
        { value: 'Zambia', label: 'Zambia' },
        { value: 'Zimbabwe', label: 'Zimbabwe' },
    ]


    const [selectedDocuments, setSelectedDocuments] = useState([]);
    const [isUploadEnabled, setIsUploadEnabled] = useState(false);

    const handleDocumentChange = (event) => {
        const files = Array.from(event.target.files);
        const supportedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/png', 'image/jpeg'];
        const validFiles = files.filter((file) => supportedTypes.includes(file.type));

        setSelectedDocuments(validFiles);
        setIsUploadEnabled(validFiles.length > 0);
    };

    const handleRemoveDocument = (file) => {
        const updatedDocuments = selectedDocuments.filter((doc) => doc !== file);
        setSelectedDocuments(updatedDocuments);
        setIsUploadEnabled(updatedDocuments.length > 0);
    };


    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [middlename, setmiddlename] = useState("")
    const [passportnumber, setpassportnumber] = useState("")
    const [emailaddress, setemailaddress] = useState("")
    const [dayofbirth, setdayofbirth] = useState("")
    // Function to handle day selection
    const handleDayChange = (e) => {
        setdayofbirth(e.value);
    };

    // Function to handle month selection
    const handleMonthChange = (e) => {
        setmonthofbirth(e.value);
    };

    // Function to handle year selection
    const handleYearChange = (e) => {
        setyearofbirth(e.value);
    };

    // Array of days from 1 to 31
    const days = Array.from({ length: 31 }, (_, i) => ({
        value: (i + 1).toString(),
        label: (i + 1).toString()
    }));

    //Array of Months
    const months = [
        { value: '01', label: 'January' },
        { value: '02', label: 'February' },
        { value: '03', label: 'March' },
        { value: '04', label: 'April' },
        { value: '05', label: 'May' },
        { value: '06', label: 'June' },
        { value: '07', label: 'July' },
        { value: '08', label: 'August' },
        { value: '09', label: 'September' },
        { value: '10', label: 'October' },
        { value: '11', label: 'November' },
        { value: '12', label: 'December' },
    ];



    //Array of Years
    // Generate various years
    const years = Array.from({ length: 2023 - 1970 + 1 }, (_, i) => {
        const year = 1970 + i;
        return {
            value: year.toString(),
            label: year.toString(),
        };
    });


    const [monthofbirth, setmonthofbirth] = useState("")
    const [yearofbirth, setyearofbirth] = useState("")
    const [gender, setgender] = useState("Male")
    const [nationality, setnationality] = useState("")
    const [placeofbirth, setplaceofbirth] = useState("")
    const [streetorboxnumber, setstreetorboxnumber] = useState("")
    const [townorcity, settownorcity] = useState("")
    const [country, setcountry] = useState("")
    const [postalorzipcode, setpostalorzipcode] = useState("")
    const [phonenumber, setphonenumber] = useState("")

    {/*GUARDIAN A DETAILS*/ }
    const [guardianfirstname, setguardianfirstname] = useState("")
    const [guardianlastname, setguardianlastname] = useState("")
    const [guardianmiddlename, setguardianmiddlename] = useState("")
    const [guardianstreetorboxnumber, setguardianstreetorboxnumber] = useState("")
    const [guardiantownorcity, setguardiantownorcity] = useState("")
    const [guardiancountry, setguardiancountry] = useState("")
    const [guardianpostalorzipcode, setguardianpostalorzipcode] = useState("")
    const [guardianphonenumber, setguardianphonenumber] = useState("")
    const [guardianemailaddress, setguardianemailaddress] = useState("")

    {/*GUARDIAN B DETAILS*/ }
    const [guardianBfirstname, setguardianBfirstname] = useState("")
    const [guardianBlastname, setguardianBlastname] = useState("")
    const [guardianBmiddlename, setguardianBmiddlename] = useState("")
    const [guardianBstreetorboxnumber, setguardianBstreetorboxnumber] = useState("")
    const [guardianBtownorcity, setguardianBtownorcity] = useState("")
    const [guardianBcountry, setguardianBcountry] = useState("")
    const [guardianBpostalorzipcode, setguardianBpostalorzipcode] = useState("")
    const [guardianBphonenumber, setguardianBphonenumber] = useState("")
    const [guardianBemailaddress, setguardianBemailaddress] = useState("")

    const [studentwithdisability, setstudentwithdisability] = useState(false)
    const [studentwithnodisability, setstudentwithnodisability] = useState(false)
    const [disability, setdisability] = useState("")


    const handleCheckboxChange = (e) => {
        const { name } = e.target;

        if (name === 'yes') {
            setstudentwithdisability(true);
            setstudentwithnodisability(false);
            setdisability("yes")
        } else if (name === 'no') {
            setstudentwithdisability(false);
            setstudentwithnodisability(true);
            setdisability("no")
        }
    };

    {/*ACADEMIC HISTORY*/ }
    const [academicHistory, setAcademicHistory] = useState([{ institution: '', degree: '', location: '' }]);

    const handleInputChange = (index, field, value) => {
        const updatedHistory = [...academicHistory];
        updatedHistory[index][field] = value;
        setAcademicHistory(updatedHistory);
    };
    const handleAddEntry = () => {
        setAcademicHistory([...academicHistory, { institution: '', degree: '', location: '' }]);
    };

    const handleRemoveEntry = (index) => {
        const updatedHistory = [...academicHistory];
        updatedHistory.splice(index, 1);
        setAcademicHistory(updatedHistory);
    };



    {/*MISC*/ }
    const [howdidyouhearaboutus, sethowdidyouhearaboutus] = useState("")

    const customStyles = {
        control: base => ({
            ...base,
            height: 45,
            minHeight: 45,
        })
    };

    {/*SELECT STATES*/ }
    const [applyingas, setapplyingas] = useState(null);

    const handleApplyingAsChange = (selectedOption) => {
        setapplyingas(selectedOption.value);
    };

    const [educationalobjective, seteducationalobjective] = useState(null);
    const [course, setcourse] = useState(null);

    const [educationalObjective, seteducationalObjective] = useState("");
    const [Course, setCourse] = useState("")

    const courseOptionsByObjective = {
        'Vocational School': [
            { value: 'Carpentry and Joinery', label: 'Carpentry and Joinery' },
            { value: 'Plumbing and Pipefitting', label: 'Plumbing and Pipefitting' },
            // Add other vocational school course options here
        ],
        'Undergraduate': [
            { value: 'BSc Psychology', label: 'BSc Psychology' },
            { value: 'BSc Economics', label: 'BSc Economics' },
            // Add other undergraduate course options here
        ],
        'Masters': [
            { value: 'MSc Data Science', label: 'MSc Data Science' },
            { value: 'MBA Marketing Management', label: 'MBA Marketing Management' },
            // Add other masters course options here
        ],
        'PhD': [
            { value: 'PhD Research Methodology', label: 'PhD Research Methodology' },
            { value: 'PhD Economics', label: 'PhD Economics' },
            // Add other PhD course options here
        ],
    };

    const handleObjectiveChange = (selectedOption) => {
        if (selectedOption) {
            seteducationalobjective(selectedOption);
            seteducationalObjective(selectedOption.value)
        } else {
            seteducationalObjective('');
        }
        setcourse(null);
    };

    const handleCourseChange = (selectedOption) => {
        if (selectedOption) {
            setcourse(selectedOption);
            setCourse(selectedOption.value);
        } else {
            setCourse('');
        }
    };

    const courseOptions = educationalobjective ? courseOptionsByObjective[educationalobjective.value] : [];



    {/*DUPLICATE COMPONENTS*/ }
    const applicantnationality = (selectedOption) => {
        setnationality(selectedOption.value);
    };

    const applicantplaceofbirth = (selectedOption) => {
        setplaceofbirth(selectedOption.value);
    };

    const applicantaddresscountry = (selectedOption) => {
        setcountry(selectedOption.value);
    };

    const guardianadresscountry = (selectedOption) => {
        setguardiancountry(selectedOption.value);
    };

    const guardianBadresscountry = (selectedOption) => {
        setguardianBcountry(selectedOption.value);
    };

    const handlehowdidyouhearaboutus = (selectedOption) => {
        sethowdidyouhearaboutus(selectedOption.value);
    };

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onsubmit = async (event) => {
        event.preventDefault();

        setIsLoading(true);

        const dob = `${yearofbirth}-${monthofbirth}-${dayofbirth}`;
        const disability = studentwithdisability ? 'yes' : 'no';

        const academicHistoryJSON = JSON.stringify(academicHistory);

        const data = new FormData();
        data.append('applyas', applyingas);
        data.append('educationobjective', educationalObjective);
        data.append('course', Course);
        data.append('firstname', firstname);
        data.append('lastname', lastname);
        data.append('middlename', middlename);
        data.append('passport', passportnumber);
        data.append('phone', phonenumber);
        data.append('email', emailaddress);
        data.append('dob', dob);
        data.append('gender', gender);
        data.append('nationality', nationality);
        data.append('placeofbirth', placeofbirth);
        data.append('country', country);
        data.append('street', streetorboxnumber);
        data.append('city', townorcity);
        data.append('homephone', phonenumber);
        data.append('zip', postalorzipcode);
        data.append('onefirstname', guardianfirstname);
        data.append('onesurnname', guardianlastname);
        data.append('onemiddlename', guardianmiddlename);
        data.append('onestreet', guardianstreetorboxnumber);
        data.append('onephone', guardianphonenumber);
        data.append('oneemail', guardianemailaddress);
        data.append('onecity', guardiantownorcity);
        data.append('onezip', guardianpostalorzipcode);
        data.append('onecountry', guardiancountry);
        data.append('twofirstname', guardianBfirstname);
        data.append('twosurnname', guardianBlastname);
        data.append('twomiddlename', guardianBmiddlename);
        data.append('twostreet', guardianBstreetorboxnumber);
        data.append('twophone', guardianBphonenumber);
        data.append('twoemail', guardianBemailaddress);
        data.append('twocity', guardianBtownorcity);
        data.append('twozip', guardianBpostalorzipcode);
        data.append('twocountry', guardianBcountry);
        data.append('disability', disability);
        data.append('academichistory', academicHistoryJSON);
        data.append('source', howdidyouhearaboutus);

        // Append supporting documents
        selectedDocuments.forEach((document, index) => {
            data.append(`supportingdocuments[${index}]`, document);
        });

        //console.log('Data:', Object.fromEntries(data)); // Convert FormData object to plain object for easier reading

        try {
            await axios.post('https://api.syrysapp.com/api/cecleads', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Access-Control-Allow-Origin': '*' // Add this header
                },

            });

            setIsFormSubmitted(true);
            toast.success('Application submitted successfully!');
            setIsLoading(false);

            // Call the handleUpload function to perform any necessary operations with selectedDocuments state
            //handleUpload();
        } catch (error) {
            console.error(error);
            setIsLoading(false);
            if (error.response && error.response.data && error.response.data.message) {
                // Extract field names and error messages from the API response
                const errorMessage = error.response.data.message;
                const errorFields = Object.keys(errorMessage);
                const errorMessages = Object.values(errorMessage);

                // Display individual error messages in the toast notification
                errorFields.forEach((field, index) => {
                    const message = `${field}: ${errorMessages[index]}`;
                    toast.error(message);
                });
            } else {
                // Display a generic error message
                toast.error('An error occurred. Please try again.');
                setIsLoading(false);
            }
        }
    };
    return (
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


                        <div className="border-dashed border-red-500 mt-8 rounded-lg border-2 p-4 my-4">
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
                            <div
                                onClick={onsubmit}
                                className="bg-[#FF5539] cursor-pointer rounded-lg items-center flex space-x-2 justify-center py-4 px-4 w-[50%]"
                            >
                                {isLoading ? (
                                    <svg
                                        className="animate-spin h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM16 4.709A7.962 7.962 0 0120 12h4c0-6.627-5.373-12-12-12v4zm2 14.582l3 2.646A7.962 7.962 0 0020 12h-4c0 2.086-.81 4.018-2.137 5.463z"
                                        ></path>
                                    </svg>
                                ) : (
                                    <p className="text-[#fff] font-poppinsregular text-xs">Apply Now</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center mt-10 mx-10">
                    <CheckCircle className="text-green-500 w-12 h-12 mb-4" />
                    <h1 className="text-2xl font-poppinsmedium">Application Submitted!</h1>
                    <p className="text-sm mt-2 text-center font-poppinsmedium">
                        Thank you for submitting your application.
                    </p>
                </div>
            )}
        </div>
    )
}

export default FormSectionA