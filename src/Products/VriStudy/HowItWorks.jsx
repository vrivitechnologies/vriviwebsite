// import React, { useState, useEffect, useRef } from "react";
// import {
//     HiOutlineShieldCheck,
//     HiOutlineUserCircle,
//     HiOutlineMagnifyingGlass,
//     HiOutlineBookmark,
//     HiOutlineDocumentArrowUp,
//     HiOutlineLockClosed,
//     HiOutlineClipboardDocumentCheck,
//     HiOutlineBellAlert,
//     HiOutlineClock
// } from "react-icons/hi2";

// import StudentProfile from '../../assets/Profile.png';
// import StudentUniversities from '../../assets/Universities.png';
// import StudentDocumnets from '../../assets/Documents.png';
// import StudentDashboard from '../../assets/StudentDashboard.png';

// const steps = [
//     {
//         title: "Register & Complete Profile",
//         description:
//             "Users register using email and mobile number, then complete their profile with personal, academic, and contact details.",
//         extraInfo: [
//             { text: "Secure OTP/email verification", icon: HiOutlineShieldCheck },
//             { text: "Personalized dashboard access", icon: HiOutlineUserCircle }
//         ],
//         image: StudentProfile
//     },
//     {
//         title: "Shortlist Universities",
//         description:
//             "Users search and shortlist universities that match their preferences and eligibility criteria.",
//         extraInfo: [
//             { text: "Advanced filters for better search", icon: HiOutlineMagnifyingGlass },
//             { text: "Save shortlisted universities for later", icon: HiOutlineBookmark }
//         ],
//         image: StudentUniversities
//     },
//     {
//         title: "Upload Documents",
//         description:
//             "Users securely upload academic transcripts, passport, and other required documents.",
//         extraInfo: [
//             { text: "Multiple file formats supported", icon: HiOutlineDocumentArrowUp },
//             { text: "Secure and encrypted storage", icon: HiOutlineLockClosed }
//         ],
//         image: StudentDocumnets
//     },
//     {
//         title: "Document Review",
//         description:
//             "Counsellor review submitted documents for completeness and accuracy before applications are processed.",
//         extraInfo: [
//             { text: "Approve, reject, or request changes", icon: HiOutlineClipboardDocumentCheck },
//             { text: "Real-time status updates", icon: HiOutlineBellAlert }
//         ],
//         image: StudentDocumnets
//     },
//     {
//         title: "University Applications",
//         description:
//             "Counsellor submits applications to shortlisted universities and records application status in the system.",
//         extraInfo: [
//             { text: "Track each application in detail", icon: HiOutlineClipboardDocumentCheck },
//             { text: "Centralized status management", icon: HiOutlineLockClosed }
//         ],
//         image: StudentDocumnets
//     },
//     {
//         title: "Track Application Status",
//         description:
//             "Users can log in anytime to track their document verification and application progress in real-time.",
//         extraInfo: [
//             { text: "Notifications for every status update in the student dashborad", icon: HiOutlineBellAlert },
//             { text: "Complete application timeline", icon: HiOutlineClock }
//         ],
//         image: StudentDashboard
//     }
// ];

// const HowItWorks = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [autoPlay, setAutoPlay] = useState(true);
//     const intervalRef = useRef(null);

//     useEffect(() => {
//         if (autoPlay) {
//             intervalRef.current = setInterval(() => {
//                 setCurrentIndex((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
//             }, 4000);
//         }
//         return () => clearInterval(intervalRef.current);
//     }, [autoPlay]);

//     const handleTabClick = (i) => {
//         setCurrentIndex(i);
//         setAutoPlay(false);
//     };

//     const { title, description, extraInfo, image } = steps[currentIndex];

//     return (
//         <section className="pt-20 lg:max-w-7xl mx-auto w-full md:px-0 px-4">
//             {/* Heading */}
//             <h2 className="md:text-4xl text-2xl font-semibold text-center mb-10">How It Works</h2>
//             {/* <p className="text-gray-500 text-center mb-10">
//                 Step-by-step process to guide you through the application journey
//             </p> */}

//             {/* Step Tabs */}
//             <div className="flex flex-wrap lg:max-w-4xl gap-1 mx-auto text-xs justify-center mb-12 bg-gray-100 py-1.5 rounded-md">
//                 {steps.map((step, i) => (
//                     <button
//                         key={i}
//                         onClick={() => handleTabClick(i)}
//                         className={`px-3.5 py-2 cursor-pointer rounded-md transition-all duration-300 ${currentIndex === i
//                                 ? "bg-white text-black shadow-md"
//                                 : "text-black hover:bg-gray-200"
//                             }`}
//                     >
//                         {step.title}
//                     </button>
//                 ))}
//             </div>

//             {/* Content Section */}
//             <div className="flex flex-col md:flex-row  gap-10">
//                 {/* Left Image */}
//                 <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-200">
//                     <img
//                         src={image}
//                         alt={title}
//                         className="w-full object-cover transition-all duration-500"
//                     />
//                 </div>

//                 {/* Right Text */}
//                 <div className="md:w-1/2 space-y-5">
//                     <h3 className="text-2xl ">{title}</h3>
//                     <p className="text-gray-600 text-lg">{description}</p>
//                     <ul className="space-y-3">
//                         {extraInfo.map((point, i) => {
//                             const Icon = point.icon;
//                             return (
//                                 <li key={i} className="flex items-start  gap-2">
//                                     <Icon className="text-blue-500 w-5 h-5 flex-shrink-0 mt-1.5" />
//                                     <span className="text-gray-600 text-lg">{point.text}</span>
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HowItWorks;




import React, { useState, useEffect, useRef } from "react";
import {
    HiOutlineShieldCheck,
    HiOutlineUserCircle,
    HiOutlineMagnifyingGlass,
    HiOutlineBookmark,
    HiOutlineDocumentArrowUp,
    HiOutlineLockClosed,
    HiOutlineClipboardDocumentCheck,
    HiOutlineBellAlert,
    HiOutlineClock
} from "react-icons/hi2";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import StudentProfile from "../../assets/Profile.png";
import StudentUniversities from "../../assets/Universities.png";
import StudentDocumnets from "../../assets/Documents.png";
import StudentDashboard from "../../assets/StudentDashboard.png";

const steps = [
    {
        title: "Register & Complete Profile",
        description:
            "Users register using email and mobile number, then complete their profile with personal, academic, and contact details.",
        extraInfo: [
            { text: "Secure OTP/email verification", icon: HiOutlineShieldCheck },
            { text: "Personalized dashboard access", icon: HiOutlineUserCircle }
        ],
        image: StudentProfile
    },
    {
        title: "Shortlist Universities",
        description:
            "Users search and shortlist universities that match their preferences and eligibility criteria.",
        extraInfo: [
            { text: "Advanced filters for better search", icon: HiOutlineMagnifyingGlass },
            { text: "Save shortlisted universities for later", icon: HiOutlineBookmark }
        ],
        image: StudentUniversities
    },
    {
        title: "Upload Documents",
        description:
            "Users securely upload academic transcripts, passport, and other required documents.",
        extraInfo: [
            { text: "Multiple file formats supported", icon: HiOutlineDocumentArrowUp },
            { text: "Secure and encrypted storage", icon: HiOutlineLockClosed }
        ],
        image: StudentDocumnets
    },
    {
        title: "Document Review",
        description:
            "Counsellor review submitted documents for completeness and accuracy before applications are processed.",
        extraInfo: [
            { text: "Approve, reject, or request changes", icon: HiOutlineClipboardDocumentCheck },
            { text: "Real-time status updates", icon: HiOutlineBellAlert }
        ],
        image: StudentDocumnets
    },
    {
        title: "University Applications",
        description:
            "Counsellor submits applications to shortlisted universities and records application status in the system.",
        extraInfo: [
            { text: "Track each application in detail", icon: HiOutlineClipboardDocumentCheck },
            { text: "Centralized status management", icon: HiOutlineLockClosed }
        ],
        image: StudentDocumnets
    },
    {
        title: "Track Application Status",
        description:
            "Users can log in anytime to track their document verification and application progress in real-time.",
        extraInfo: [
            { text: "Notifications for every status update in the student dashborad", icon: HiOutlineBellAlert },
            { text: "Complete application timeline", icon: HiOutlineClock }
        ],
        image: StudentDashboard
    }
];

const HowItWorks = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    const intervalRef = useRef(null);

    // autoplay for desktop
    useEffect(() => {
        if (autoPlay) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
            }, 4000);
        }
        return () => clearInterval(intervalRef.current);
    }, [autoPlay]);

    const handleTabClick = (i) => {
        setCurrentIndex(i);
        setAutoPlay(false);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % steps.length);
        setAutoPlay(false);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + steps.length) % steps.length);
        setAutoPlay(false);
    };

    const { title, description, extraInfo, image } = steps[currentIndex];


    return (
        <section
            id="How It Works"
            className="py-20 lg:max-w-7xl mx-auto w-full lg:px-0 px-4"
        >
            {/* Heading */}
            <h2 className="md:text-4xl text-2xl font-semibold text-center mb-10 text-black">
                How It Works
            </h2>

            {/* Mobile view: arrows + single tab */}
            <div className="flex items-center justify-center gap-2 mb-6 md:hidden">
                <button
                    onClick={handlePrev}
                    className="p-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-300 text-white shadow-md hover:scale-105 transition-transform"
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={() => handleTabClick(currentIndex)}
                    className={`px-4 py-2 cursor-pointer rounded-full font-medium shadow-md transition-all duration-300 ${autoPlay
                            ? "bg-gradient-to-r from-blue-400 to-blue-200 text-white"
                            : "bg-gradient-to-r from-blue-600 to-blue-400 text-white"
                        }`}
                >
                    {steps[currentIndex].title}
                </button>
                <button
                    onClick={handleNext}
                    className="p-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-300 text-white shadow-md hover:scale-105 transition-transform"
                >
                    <FaChevronRight />
                </button>
            </div>

            {/* Desktop view: all tabs */}
            <div className="hidden md:flex flex-nowrap lg:max-w-5xl gap-3 mx-auto text-xs justify-center mb-12 p-2 bg-blue-50 rounded-md shadow-inner">
                {steps.map((step, i) => (
                    <button
                        key={i}
                        onClick={() => handleTabClick(i)}
                        className={`px-4 py-2 cursor-pointer rounded-md font-medium transition-all duration-300 shadow-sm whitespace-nowrap ${currentIndex === i
                                ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-md scale-105"
                                : "bg-white text-blue-700 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-100"
                            }`}
                    >
                        {step.title}
                    </button>
                ))}
            </div>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row gap-10 ">
                {/* Left Image */}
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-200  transform hover:scale-[1.02] transition-transform duration-300">
                    <img src={image} alt={title} className="w-full object-cover" />
                </div>

                {/* Right Text */}
                <div className=" space-y-5">
                    <h3 className="text-2xl  text-black">{title}</h3>
                    <p className="text-gray-700 text-[16px]">{description}</p>
                    <ul className="">
                        {extraInfo.map((point, i) => {
                            const Icon = point.icon;
                            return (
                                <li
                                    key={i}
                                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all"
                                >
                                    <Icon className="text-blue-500 w-5 h-5 flex-shrink-0 mt-1.5" />
                                    <span className="text-gray-700 text-[16px]">{point.text}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );





};

export default HowItWorks;
