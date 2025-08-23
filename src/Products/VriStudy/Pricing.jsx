import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";
import StartFreeTrial from "../../Components/StartFreeTrail/StartFreeTrail";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Pricing = () => {
    const [showForm, setShowForm] = useState(false);
    const [subscriptionType, setsubscriptionType] = useState("");
    const pricingPlans = [
        {
            name: "Starter Package",
            price: "999",
            billing: "/month",
            features: [
                "Lead Management",
                "Student Management",
                "Application Management",
                "Employee Management",
                "University programs",
                "Branches",
                "Reports",
                "2 Users",
                "20000 leads"
            ],
            button: "Start Free Trial",
            subscriptionType: "Starter"
        },
        {
            name: "Pro Package",
            price: "1499",
            billing: "/month",
            badge: "MOST POPULAR",
            features: [
                "Lead Management",
                "Student Management",
                "Application Management",
                "Employee Management",
                "University programs",
                "Branches",
                "Reports",
                "5 Users",
                "50000 leads",
                "Sub-domain",
                "Weekly Backup (max 4 weeks)",
            ],
            button: "Start Free Trial",
            subscriptionType: "Pro"
        },
        {
            name: "Enterprise Package",
            price: "3999",
            billing: "/month",
            features: [
                "Lead Management",
                "Student Management",
                "Application Management",
                "Employee Management",
                "University programs",
                "Branches",
                "Reports",
                "Unlimited users",
                "2 lakh leads",
                "Sub-domain",
                "Weekly Backup (max 1 years)",
            ],
            ai: "AI Assistant",
            button: "Start Free Trial",
            subscriptionType: "Enterprise"
        }
    ];

    return (
        <div className="relative py-20 min-h-screen px-4 bg-white">
            {/* Trial banner */}
            <p className="text-center bg-blue-100 text-blue-700 font-medium py-2 px-4 max-w-md rounded-full mx-auto mb-12 shadow-sm">
                30 days free trial. No contract or credit card required.
            </p>

            {/* Pricing cards */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => {
                    // Soft pastel gradient backgrounds
                    const cardGradients = [
                        "bg-gradient-to-b from-purple-100 to-purple-100",
                        "bg-gradient-to-b from-green-100 to-green-100",
                        "bg-gradient-to-b from-yellow-100 to-yellow-100"
                    ];

                    return (
                        <div
                            key={index}
                            className={`rounded-2xl relative flex flex-col shadow-lg hover:shadow-xl transition  ${cardGradients[index]}`}
                        >
                            {/* Card header */}
                            <div className="text-center rounded-t-2xl px-6 py-1.5 relative">
                                {plan.badge && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-300 text-gray-800 px-3 py-1 text-xs font-bold rounded-full shadow">
                                        {plan.badge}
                                    </div>
                                )}
                            </div>

                            <div className="border-b border-gray-500 p-0.5">
                                <h3 className="text-lg font-semibold text-center text-gray-800">{plan.name}</h3>
                                <div className="text-4xl font-bold flex items-center justify-center text-gray-900 ">
                                    <FaIndianRupeeSign className="mr-0.5" />
                                    <p className="mb-1">{plan.price}</p>
                                </div>
                                <p className="text-sm text-center mb-1 text-gray-600">{plan.billing}</p>
                            </div>

                            {/* Features */}
                            <ul className="space-y-2 flex-1 px-6 pb-4 pt-2 ">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-gray-700">
                                        <FiCheck className="text-black border rounded-full p-1 text-xl mt-1 mr-2" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* AI Assistant */}
                            {plan.ai && (
                                <div className="flex items-center px-6 pb-3">
                                    <FiCheck className="text-green-800 mt-1 mr-2 border border-green-800 rounded-full p-1 text-xl " />
                                    <span className="bg-green-200 text-green-800 pt-1 pb-1.5 px-4 rounded-full text-sm font-medium">
                                        {plan.ai}
                                    </span>
                                </div>
                            )}

                            {/* Button */}
                            <div className="px-6 pb-6">
                                <button
                                    onClick={() => {
                                        setShowForm(true);
                                        setsubscriptionType(plan.subscriptionType);
                                    }}
                                    className="px-6 py-3 border border-gray-700 bg-gray-700 cursor-pointer w-full text-white font-semibold rounded-md transition"
                                >
                                    {plan.button}
                                </button>
                            </div>

                            {/* Form Modal */}
                            {showForm && (
                                <StartFreeTrial
                                    onClose={() => setShowForm(false)}
                                    subscriptionType={subscriptionType}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );





};

export default Pricing;



