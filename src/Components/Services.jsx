import React from "react";
import { Code, Cpu, BarChart3, Cloud } from "lucide-react";

const services = [
    {
        title: "Product Development",
        description: "End-to-end software solutions tailored to your business needs.",
        icon: <Code size={40} className="text-indigo-500" />,
        color: "from-indigo-50 to-indigo-100",
    },
    {
        title: "Analytics",
        description: "Use AI based forecasting models to leverage data to predict trends and make informed decisions.",
        icon: <BarChart3 size={40} className="text-emerald-500" />,
        color: "from-emerald-50 to-emerald-100",
    },
    {
        title: "AIOps",
        description: "Use AI to monitor, analyze, and optimize your infrastructure intelligently.",
        icon: <Cpu size={40} className="text-blue-500" />,
        color: "from-blue-50 to-blue-100",
    },
    {
        title: "Digital Modernization",
        description: "Use cloud based technologies to transform legacy systems into modern and highly scalable applications.",
        icon: <Cloud size={40} className="text-purple-500" />,
        color: "from-purple-50 to-purple-100",
    },
];

const headinsg = {
    headingLine1: " Our Services",
    headingLine2: "We combine cutting-edge technology with deep industry knowledge to deliver solutions that drive growth and innovation.",
}

const Services = () => {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-0 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                    {headinsg.headingLine1}
                </h2>
                <p className="max-w-2xl text-[16px] mx-auto mb-12">
                    {headinsg.headingLine2}
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-2xl shadow-md bg-gradient-to-b ${service.color} transition-transform transform hover:-translate-y-2 hover:shadow-xl`}
                        >
                            <div className="mb-4 flex justify-center">{service.icon}</div>
                            <h3 className="text-3xl font-semibold  mb-2">{service.title}</h3>
                            <p className=" text-[16px]">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
