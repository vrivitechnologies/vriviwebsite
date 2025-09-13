import React from "react";
import { services } from "./ServicesContent";
import { headinsg } from "./ServicesContent";

const Services = () => {
    return (
        <section id="services" className="py-5 bg-white">
            <div className="max-w-7xl mx-auto px-6 py-20 lg:px-0 text-center">
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
