import React, { useEffect } from "react";
import { Briefcase, MapPin, Globe, CheckCircle2, Sparkles } from "lucide-react";
import logo from "../../assets/VriviWebsiteLogo.webp";
import {
    FiMapPin,
    FiUser,
    FiClock,
    FiBriefcase,
    FiCalendar,
    FiTool,
    FiTarget,
    FiCheckSquare,
    FiGift,
    FiArrowRight
} from "react-icons/fi";

const jobDetails = {
    title: "Software Engineer (AI)",
    position: "Software Engineer (AI)",
    experience: "0–2 Years",
    eligibility: "B.E/B.Tech Freshers interested in Data Science & AI (2023–2025 pass-outs)",
    type: "Full-Time",
    location: "Nallagandla, Hyderabad (Work from Office)",
    skills: {
        mandatory: [
            "Python programming",
            "Machine Learning (ML)",
            "Deep Learning (DL)",
            "GPT-4/5 & other LLMs",
            "LangChain for AI workflow orchestration",
            "Retrieval-Augmented Generation (RAG) pipelines",
            "Embeddings & Vector Databases (Pinecone / pgvector)",
            "Google Vertex AI (or similar platforms)",
            "Prompt engineering & fine-tuning basics",
            "Knowledge of APIs for LLM integration",
            "Basic understanding of deploying AI microservices",
        ],
        goodToHave: [
            "Experience with Hugging Face models",
            "Exposure to knowledge graphs or reasoning engines",
            "Familiarity with caching & optimization techniques for LLMs",
        ],
    },
    responsibilities: [
        "Design and build AI-powered microservices and applications",
        "Work with LLMs, embeddings, LangChain, and vector search",
        "Implement and optimize RAG pipelines for real-world use cases",
        "Experiment with ML, DL, prompt engineering, fine-tuning, and model optimization",
        "Contribute to building intelligent AI-driven workflows & solutions",
        "Collaborate with the team on scalable AI product development",
    ],
    requirements: [
        "Strong problem-solving & logical thinking skills",
        "Interest in exploring and applying AI/ML to real-world problems",
        "Ability to quickly learn and adapt to new AI tools & frameworks",
        "0–2 years of experience (Freshers welcome)",
    ],
    benefits: [
        "Hands-on experience in AI/ML product development",
        "Opportunity to work on enterprise-grade AI workflows",
        "Exposure to cutting-edge LLMs & vector search tech",
        "Chance for a full-time role / PPO based on performance",
    ],
    link: "https://forms.gle/BamBwJzBr82hLVSU7",
};

const AIEngineer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="py-12 px-4 pt-20 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">

                {/* Job Title */}
                <div className="bg-blue-500 text-white text-center py-6">
                    <h1 className="text-3xl font-medium">{jobDetails.title}</h1>
                </div>

                {/* Apply Button - Top */}
                <div className="bg-gray-50 py-6 px-8 border-b border-gray-200">
                    <div className="flex justify-center">
                        <button
                            onClick={() =>
                                window.open(jobDetails.link, "_blank", "noopener,noreferrer")
                            }
                            className="px-8 py-3 flex items-center gap-3 cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                        >
                            Apply Now
                        </button>
                    </div>
                </div>

                {/* Job Overview */}
                <div className="p-8 space-y-6 text-gray-800">

                    {/* Quick Info Cards */}
                    <div className="border border-gray-200 rounded-lg p-6">
                        <h2 className="text-lg font-semibold mb-6 flex items-center gap-2 text-gray-800">
                            Job Overview
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3">
                                <FiBriefcase className="w-5 h-5 text-blue-600" />
                                <div>
                                    <p className="text-sm text-gray-500">Position</p>
                                    <p className="font-medium text-gray-800">{jobDetails.position}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <FiClock className="w-5 h-5 text-blue-600" />
                                <div>
                                    <p className="text-sm text-gray-500">Experience</p>
                                    <p className="font-medium text-gray-800">{jobDetails.experience}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <FiCalendar className="w-5 h-5 text-blue-600" />
                                <div>
                                    <p className="text-sm text-gray-500">Type</p>
                                    <p className="font-medium text-gray-800">{jobDetails.type}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <FiMapPin className="w-5 h-5 text-blue-600" />
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-medium text-gray-800">{jobDetails.location}</p>
                                </div>
                            </div>
                        </div>

                        {/* Eligibility */}
                        <div className="mt-6 pt-4 border-t border-gray-100">
                            <div className="flex items-start gap-3">
                                <FiCheckSquare className="w-5 h-5 text-blue-600 mt-0.5" />
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Eligibility Criteria</p>
                                    <p className="text-gray-800">{jobDetails.eligibility}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="border border-gray-200 rounded-lg p-6">
                        <h2 className="text-lg font-semibold mb-6 flex items-center gap-2 text-gray-800">
                            <FiTool className="text-blue-600 w-5 h-5" />
                            Skills We're Looking For
                        </h2>

                        {/* Mandatory Skills */}
                        <div className="mb-6">
                            <h3 className="font-medium text-gray-800 mb-3">Mandatory Skills</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                {jobDetails.skills.mandatory.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Good to Have Skills */}
                        <div>
                            <h3 className="font-medium text-gray-800 mb-3">Good to Have</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                {jobDetails.skills.goodToHave.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="border border-gray-200 rounded-lg p-6">
                        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-800">
                            <FiTarget className="text-blue-600 w-5 h-5" />
                            Role & Responsibilities
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {jobDetails.responsibilities.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Requirements */}
                    <div className="border border-gray-200 rounded-lg p-6">
                        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-800">
                            <FiCheckSquare className="text-blue-600 w-5 h-5" />
                            Requirements
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {jobDetails.requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Benefits */}
                    <div className="border border-gray-200 rounded-lg p-6">
                        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-800">
                            <FiGift className="text-blue-600 w-5 h-5" />
                            What You'll Gain
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {jobDetails.benefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Bottom Apply Button */}
                    <div className="flex justify-center pt-4">
                        <button
                            onClick={() =>
                                window.open(jobDetails.link, "_blank", "noopener,noreferrer")
                            }
                            className="px-10 py-4 flex cursor-pointer items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                        >
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIEngineer;
