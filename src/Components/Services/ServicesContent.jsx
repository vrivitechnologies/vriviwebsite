import { Code, Cpu, BarChart3, Cloud } from "lucide-react";
import React from "react";


export const services = [
    {
        title: "Product Development",
        description: "End-to-end software solutions tailored to your business needs.",
        icon: <Code size={40} className="text-orange-500" />,
        color: "from-orange-50 to-orange-100",
    },
    {
        title: "AI",
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
    {
        title: "Analytics",
        description: "Use AI based forecasting models to leverage data to predict trends and make informed decisions.",
        icon: <BarChart3 size={40} className="text-emerald-500" />,
        color: "from-emerald-50 to-emerald-100",
    },
];

export const headinsg = {
    headingLine1: " Our Services",
    headingLine2: "We combine cutting-edge technology with deep industry knowledge to deliver solutions that drive growth and innovation.",
}