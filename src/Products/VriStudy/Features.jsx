import React, { useState } from "react";
import { Users, Building2, FileCheck2, ShieldCheck, Smartphone, Section } from "lucide-react";
import { FaCheck } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import StudentProfile from "../../assets/Profile.png";
import StudentUniversities from "../../assets/Universities.png";
import StudentDocumnets from "../../assets/Documents.png";
import StudentDashboard from "../../assets/StudentDashboard.png";
import DocumentsReview from "../../assets/DocumentsReview.png";
import UniversityApplns from "../../assets/UniversityApplns.png";

const headings = {
  heading: "Manage Every Step of the Study Abroad Journey in One Place",
  subheading: "All the tools students, counsellors, and admins need to streamline applications, track progress, and achieve study abroad goals."
};

const featuresData = [
  {
    id: 1,
    title: "AI Assistant",
    subTitle: "Leverages AI models to simplify complex tasks",
    icon: Users, // use a relevant icon from your icon set
    color: {
      bg: "bg-cyan-300",
      text: "text-cyan-300",
    },
    details: {
      heading: "AI Powered CRM",
      subheading: "Leverages AI models to simplify complex tasks",
      points: [
        "Generate Letter of Recommendation",
        "Compare LOR documents and compatability scores",
        
      ],
    },
  },
  {
    id: 2,
    title: "Lead & Student Management",
    subTitle: "Track every enquiry to enrollment",
    icon: Users, // use a relevant icon from your icon set
    color: {
      bg: "bg-yellow-300",
      text: "text-yellow-300",
    },
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
    icon: Building2, // or a graduation cap icon
    color: {
      bg: "bg-violet-300",
      text: "text-violet-300",
    },
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
    color: {
      bg: "bg-rose-300",
      text: "text-rose-300",
    },
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
    color: {
      bg: "bg-lime-200",
      text: "text-lime-200",
    },
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
    color: {
      bg: "bg-purple-200",
      text: "text-purple-200",
    },
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


const Features = () => {
  const [selected, setSelected] = useState(featuresData[0]);

  return (
    <div id="Features" className="pt-10 px-4">
      {/* Heading */}
      <div className="mx-auto text-center space-y-6 mb-10">
        <p className="max-w-2xl mx-auto text-2xl md:text-4xl font-semibold">
          {headings.heading}
        </p>
        {/* <p className="text-[16px] max-w-md mx-auto">{headings.subheading}</p> */}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid max-w-7xl mx-auto grid-cols-2 gap-3">
        {/* Left Cards */}
        <div className="space-y-5">
          {featuresData.map((item) => {
            const IconComponent = item.icon;
            const isSelected = selected?.id === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setSelected(item)}
                className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${isSelected
                  ? `${item.color.bg} text-black`
                  : "bg-white text-black"
                  }`}
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black">
                  <IconComponent
                    className={`w-8 h-8 ${item.color.text}`}
                  />
                </div>
                <div>
                  <p className="font-semibold text-2xl">{item.title}</p>
                  {item.subTitle && <p className="text-lg">{item.subTitle}</p>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Panel */}
        <div
          className={`rounded-2xl p-8 shadow-lg space-y-5 ${selected?.color?.bg || ""}`}
        >
          {selected && (
            <>
              <div className="space-y-8">
                <p className="text-6xl font-semibold">
                  {selected.details.heading}
                </p>
                <p className="text-3xl">{selected.details.subheading}</p>
              </div>
              <ul className="space-y-3">
                {selected.details.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-[16px]">
                    <FaCheck className="text-3xl bg-black text-white rounded-full p-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      {/* Mobile Accordion */}
      <div className="md:hidden max-w-2xl mx-auto space-y-3">
        {featuresData.map((item) => {
          const IconComponent = item.icon;
          const isSelected = selected?.id === item.id;

          return (
            <div key={item.id} className="rounded-lg border border-gray-200">
              {/* Card Header */}
              <div
                onClick={() =>
                  setSelected((prev) => (prev?.id === item.id ? null : item))
                }
                className={`flex items-center justify-between gap-4 p-4 cursor-pointer transition-all ${isSelected
                  ? `${item.color.bg} text-black`
                  : "bg-white text-black"
                  }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black">
                    <IconComponent
                      className={`w-6 h-6 ${item.color.text}`}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{item.title}</p>
                    {item.subTitle && (
                      <p className="text-sm">{item.subTitle}</p>
                    )}
                  </div>
                </div>
                <FaChevronDown
                  className={`transition-transform duration-300 ${isSelected ? "rotate-180" : ""
                    }`}
                />
              </div>

              {/* Expandable Content */}
              {isSelected && (
                <div className={`p-4 space-y-4 border-t ${item.color.bg}`}>
                  <div className="space-y-2">
                    <p className="text-xl font-semibold">
                      {item.details.heading}
                    </p>
                    <p className="text-base">{item.details.subheading}</p>
                  </div>
                  <ul className="space-y-2">
                    {item.details.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <FaCheck className="text-lg bg-black text-white rounded-full p-1" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

};

export default Features;

