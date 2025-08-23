import React, { useState } from "react";
import { Users, Building2, FileCheck2, ShieldCheck, Smartphone, Section } from "lucide-react";
import { FaCheck, FaArrowRight, FaStar } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import StudentProfile from "../../assets/Profile.png";
import StudentUniversities from "../../assets/Universities.png";
import StudentDocumnets from "../../assets/Documents.png";
import StudentDashboard from "../../assets/StudentDashboard.png";
import DocumentsReview from "../../assets/DocumentsReview.png";
import UniversityApplns from "../../assets/UniversityApplns.png";
import AIAssistant from "../../assets/AIAssistant.png";
import LeadsAndStudents from "../../assets/LeadsAndStudents.png";
import ShortlistUni from "../../assets/ShortlistUni.png";
import DocumentsAndApplicationTrack from "../../assets/DocumentsAndApplicationTrack.png" 
import RoleBased from "../../assets/RoleBased.png"
import Responsive from "../../assets/Responsive.png" 
import { Cpu, } from "lucide-react";

const headings = {
  heading: "Manage Every Step of the Study Abroad Journey in One Place",
  subheading: "All the tools students, counsellors, and admins need to streamline applications, track progress, and achieve study abroad goals."
};

const featuresData = [
  {
    id: 1,
    title: "AI Assistant",
    subTitle: "Leverages AI models to simplify complex tasks",
    icon: Cpu,
    image: AIAssistant,
    gradient: "from-blue-500 to-indigo-600",
    accentColor: "blue",
    details: {
      heading: "AI Powered CRM",
      subheading: "Leverages AI models to simplify complex tasks",
      points: [
        "Generate Letter of Recommendation",
        "Compare LOR documents and compatibility scores",
      ],
    },
  },
  {
    id: 2,
    title: "Lead & Student Management",
    subTitle: "Track every enquiry to enrollment",
    icon: Users,
    image: LeadsAndStudents,
    gradient: "from-orange-500 to-red-600",
    accentColor: "orange",
    details: {
      heading: "Seamlessly Manage Leads & Students",
      subheading: "Convert enquiries into successful admissions.",
      points: [
        "Add and track leads with status updates",
        "View student profiles and progress",
        "Centralized student records for easy access"
      ],
    },
  },
  {
    id: 3,
    title: "University Shortlisting",
    subTitle: "Match students to the right programs",
    icon: Building2,
    image: ShortlistUni,
    gradient: "from-purple-500 to-pink-600",
    accentColor: "purple",
    details: {
      heading: "Personalized Shortlisting Tools",
      subheading: "Help students find their perfect fit.",
      points: [
        "Search and filter universities",
        "Save shortlisted options",
        "Collaborate with students on selections"
      ],
    },
  },
  {
    id: 4,
    title: "Document & Application Tracking",
    subTitle: "Stay on top of every requirement",
    icon: FileCheck2,
    image: DocumentsAndApplicationTrack,
    gradient: "from-green-500 to-emerald-600",
    accentColor: "green",
    details: {
      heading: "Document Management Made Simple",
      subheading: "From upload to approval — all in one place.",
      points: [
        "Students upload required documents",
        "Admins and employees approve/reject instantly",
        "Track application status in real time"
      ],
    },
  },
  {
    id: 5,
    title: "Role-Based Access & Permissions",
    subTitle: "Control who can access what",
    icon: ShieldCheck,
    image: RoleBased,
    gradient: "from-teal-500 to-cyan-600",
    accentColor: "teal",
    details: {
      heading: "Secure Permission Management",
      subheading: "Ensure data privacy and controlled access.",
      points: [
        "Admins assign permissions to employees",
        "Grant access to specific modules (Leads, Students, Applications)",
        "Control edit, delete, and view rights"
      ],
    },
  },
  {
    id: 6,
    title: "Responsive Design",
    subTitle: "Seamless access across all devices",
    icon: Smartphone,
    image: Responsive,
    gradient: "from-violet-500 to-purple-600",
    accentColor: "violet",
    details: {
      heading: "Mobile-Friendly Interface",
      subheading: "Access the CRM from anywhere, anytime.",
      points: [
        "Optimized for desktops, tablets, and smartphones",
        "Adaptive layouts for better usability",
        "Consistent performance across all devices"
      ],
    },
  }
];

const FeaturesNew = () => {
  const [selected, setSelected] = useState(featuresData[0]);

  return (
    <div id="Features" className="py-20 px-4 bg-gray-50 min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" 
           style={{
             backgroundImage: `radial-gradient(circle, #d1d5db 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }}
      ></div>

      {/* Header */}
      <div className="relative max-w-4xl mx-auto text-center mb-16">
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {headings.heading}
        </h2>
        
        <p className="text-xl text-gray-600 leading-relaxed">
          {headings.subheading}
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar - Feature List */}
          <div className="col-span-4 space-y-3">
            {featuresData.map((item, index) => {
              const IconComponent = item.icon;
              const isSelected = selected?.id === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelected(item)}
                  className={`group cursor-pointer p-4 rounded-xl transition-all duration-300 border-2 ${
                    isSelected 
                      ? 'bg-white border-gray-200 shadow-lg scale-105' 
                      : 'bg-white/70 border-gray-100 hover:bg-white hover:shadow-md hover:scale-[1.02]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center shadow-md`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-snug">{item.subTitle}</p>
                    </div>
                    
                    <FaArrowRight className={`w-4 h-4 transition-all duration-300 ${
                      isSelected ? 'text-gray-700 translate-x-1' : 'text-gray-400'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="col-span-8">
            {selected && (
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                {/* Header */}
                <div className={`p-6 bg-gradient-to-r ${selected.gradient} text-white`}>

                  
                  <h3 className="text-3xl font-bold mb-2">{selected.details.heading}</h3>
                  <p className="text-lg opacity-90">{selected.details.subheading}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Features List */}
                  <div className="space-y-4 mb-6">
                    {selected.details.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-3  rounded-lg">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${selected.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <FaCheck className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <div className=" rounded-xl ">
                      <img 
                        src={selected.image} 
                        alt={selected.title}
                        className="w-full h-auto rounded-lg shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden max-w-2xl mx-auto space-y-4">
        {featuresData.map((item) => {
          const IconComponent = item.icon;
          const isSelected = selected?.id === item.id;

          return (
            <div key={item.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Header */}
              <div
                onClick={() => setSelected((prev) => (prev?.id === item.id ? null : item))}
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${item.gradient} flex items-center justify-center`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.subTitle}</p>
                  </div>
                </div>
                <FaChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    isSelected ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Expandable Content */}
              {isSelected && (
                <div className="border-t border-gray-100">
                  <div className={`p-4 bg-gradient-to-r ${item.gradient} text-white`}>
                    <h4 className="text-xl font-bold mb-1">{item.details.heading}</h4>
                    <p className="opacity-90">{item.details.subheading}</p>
                  </div>
                  
                  <div className="p-4 space-y-4">
                    {/* Features */}
                    <div className="space-y-3">
                      {item.details.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-3  rounded-lg">
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <FaCheck className="w-2.5 h-2.5 text-white" />
                          </div>
                          <span className="text-sm text-gray-700 font-medium">{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Image */}
                    <div className=" rounded-lg border border-gray-200">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-auto rounded object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesNew;


