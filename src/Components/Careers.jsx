import React from "react";

const CareersSection = () => {
  const careers = [
    {
      title: "Software Engineer – FullStack",
      description:
        "We are looking for a Software Engineer – Full Stack with 0-2 years experience or strong interest in JavaScript, ReactJS, Nodejs, PostgreSQL, and Java with good communication skills.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSf9OiEFjDAjlIaS5Vmgq1s4NdKRTMgUJbkOAKZ8nziC3CDAnA/viewform",
    },
    {
      title: "Software Engineer – FullStack",
      description:
        "We are looking for a Software Engineer – Full Stack with 0-2 years experience or strong interest in JavaScript, ReactJS, Nodejs, PostgreSQL, and Java with good communication skills.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSf9OiEFjDAjlIaS5Vmgq1s4NdKRTMgUJbkOAKZ8nziC3CDAnA/viewform",
    },
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl text-center font-semibold  mb-12">Careers</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {careers.map((job, index) => (
            <div
              key={index}
              className=" shadow-lg bg-indigo-50 rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl mb-2">
                {job.title}
              </h3>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div  className="inline-block  bg-indigo-500 text-white  rounded-lg  pt-1 pb-2 px-4 hover:bg-blue-700 cursor-pointer transition-all">
                <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                Apply
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
