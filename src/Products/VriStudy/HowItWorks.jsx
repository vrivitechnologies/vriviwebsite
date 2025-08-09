import React from 'react';
import StudentProfile from '../../assets/Profile.png'
import StudentUniversities from '../../assets/Universities.png'
import StudentDocumnets from '../../assets/Documents.png'
import StudentDashboard from '../../assets/StudentDashboard.png'

const headings = {
    heading: "How It Works",
    subheading: "Your Study Abroad Journey in 4 Simple Steps"
};

const steps = [
    {
        step: "Step 1",
        title: "Create Your Profile",
        description:
            "Sign up and fill in your personal, academic, and contact details to get started.",
        image: StudentProfile
    },
    {
        step: "Step 2",
        title: "Upload Your Documents",
        description:
            "Securely upload your academic transcripts, passport, and other required documents.",
        image: StudentDocumnets
    },
    {
        step: "Step 3",
        title: "Shortlist Universities",
        description:
            "Explore and save universities that match your preferences and eligibility.",
        image: StudentUniversities
    },
    {
        step: "Step 4",
        title: "Track Your Application Status",
        description:
            "Monitor every stage of your application in your dashboard until you receive your offer.",
        image: StudentDashboard
    }
];


const HowItWorks = () => {
    return (
        <section className='pt-30 max-w-7xl mx-auto px-4'>
            {/* Heading */}
            <div className='text-center max-w-4xl mx-auto space-y-4 mb-20'>
                <p className='text-4xl font-semibold'>{headings.heading}</p>
                <p className='text-[16px] '>{headings.subheading}</p>
            </div>

            {/* Steps */}
            <div className='grid md:grid-cols-3 grid-cols-2 gap-8'>
                {steps.map((item, index) => (
                    <div key={index} className='rounded-2xl shadow  flex flex-col items-center text-center bg-white transition duration-300'>
                        <h3 className='text-2xl font-semibold mb-4 p-3 '>{item.step}</h3>
                        <div className='p-3'>
                            <img src={item.image} alt={item.title} className=' mb-6 w-full h-full' />
                        </div>
                        <div className='bg-gray-50 p-3'>
                            <p className='font-semibold text-xl'>{item.title}</p>
                            <p className='text-[16px] text-gray-600 mt-2'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
