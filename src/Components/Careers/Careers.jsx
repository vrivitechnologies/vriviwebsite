import React from "react";
import { careers } from "./CareersContent";
import { useNavigate } from "react-router-dom";
const CareersSection = () => {
  const navigate = useNavigate();
  return (
    <section id="careers" className="py-20 ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl text-center font-semibold  mb-12">Careers</h2>
        <div className="grid md:grid-cols-2 gap-8 justify-center items-center w-full">
          {careers.map((job, index) => (
            <div
              key={index}
              className=" shadow-lg bg-blue-50 rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl mb-2">
                {job.title}
              </h3>
              <p className="text-gray-600 mb-4">{job.description}</p>

             <div
                className="inline-block pt-1 pb-2 px-4 cursor-pointer text-white bg-gradient-to-r from-blue-500 to-purple-600 
                           rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-purple-700 
                           transition-all duration-300"
                onClick={() => {
                  if (job.nav) {
                    navigate(job.nav); // internal navigation
                  } else {
                    window.open(job.link, "_blank", "noopener,noreferrer"); // external link
                  }
                }}
              >
                Apply
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
