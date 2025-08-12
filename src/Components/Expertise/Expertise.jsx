import React from "react";
import { expertiseData } from "./ExpertiseContent"; 

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-0">
        <h2 className="text-4xl font-semibold text-center mb-20 ">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseData.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300 border border-gray-100"
            >
              <div
                className={`absolute  w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg`}
              >
                {item.icon}
              </div>
              <div className="ml-20">
                {/* <span className="text-sm text-gray-400 font-medium">{item.id}</span> */}
                <h3 className="text-xl font-semibold  text-gray-800 group-hover:text-indigo-600 transition">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
