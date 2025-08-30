// import React, { useState } from "react";
// import { FiCheck, FiStar, FiZap, FiShield, FiTrendingUp } from "react-icons/fi";
// import { FaIndianRupeeSign, FaRocket, FaCrown, FaBuilding } from "react-icons/fa6";
// import StartFreeTrial from "../../Components/StartFreeTrail/StartFreeTrail";
// import { FaStar } from "react-icons/fa";

// const PricingNew = () => {
//     const [showForm, setShowForm] = useState(false);
//     const [subscriptionType, setsubscriptionType] = useState("");

//     const pricingPlans = [
//         {
//             name: "Starter Package",
//             price: "499",
//             billing: "/month/user",
//             description: "Perfect for small teams getting started",
//             icon: FaRocket,
//             gradient: "from-blue-500 to-cyan-500",
//             bgGradient: "from-blue-50 to-cyan-50",
//             borderColor: "border-blue-200",
//             features: [
//                 "Lead Management",
//                 "Student Management", 
//                 "Application Management",
//                 "Employee Management",
//                 "University programs",
//                 "Branches",
//                 "Reports",
//                 "20,000 leads"
//             ],
//             button: "Start Free Trial",
//             subscriptionType: "Starter"
//         },
//         {
//             name: "Pro Package",
//             price: "999",
//             billing: "/month/user",
//             description: "Ideal for growing businesses",
//             badge: "MOST POPULAR",
//             icon: FaStar,
//             gradient: "from-purple-500 to-pink-500",
//             bgGradient: "from-purple-50 to-pink-50",
//             borderColor: "border-purple-300",
//             isPopular: true,
//             features: [
//                 "Lead Management",
//                 "Student Management",
//                 "Application Management", 
//                 "Employee Management",
//                 "University programs",
//                 "Branches",
//                 "Reports",
//                 "50,000 leads",
//                 "Sub-domain",
//                 "Weekly Backup (max 4 weeks)"
//             ],
//             button: "Start Free Trial",
//             subscriptionType: "Pro"
//         },
//         {
//             name: "Enterprise Package",
//             price: "1999",
//             billing: "/month/user",
//             description: "Advanced features for large organizations",
//             icon: FaBuilding,
//             gradient: "from-emerald-500 to-teal-500",
//             bgGradient: "from-emerald-50 to-teal-50",
//             borderColor: "border-emerald-200",
//             features: [
//                 "Lead Management",
//                 "Student Management",
//                 "Application Management",
//                 "Employee Management", 
//                 "University programs",
//                 "Branches",
//                 "Reports",
//                 "Unlimited leads",
//                 "Sub-domain",
//                 "Payment and Partner Management",
//                 "Weekly Backup (max 1 year)",
//                 "Data retention 2 Years"
//             ],
//             ai: "AI Assistant",
//             button: "Start Free Trial",
//             subscriptionType: "Enterprise"
//         }
//     ];

//     const note = {
//         note: "Prices are exclusive of GST or taxes. Charges will be billed annually."
//     };

//     return (
//         <div className="relative py-16 min-h-screen px-4 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
//             {/* Background decoration */}
//             <div className="absolute inset-0 -z-10">
//                 <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
//                 <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
//             </div>

//             {/* Header Section */}
//             <div className="text-center mb-12 mt-3">
//                 <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-4 shadow-md">
//                     <FiZap className="mr-2 w-4 h-4" />
//                     30 days free trial • No contract or credit card required
//                 </div>

//                 <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-3">
//                     Choose Your Plan
//                 </h2>
//                 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                     Select the perfect package for your study abroad consultancy needs
//                 </p>
//             </div>

//             {/* Pricing cards */}
//             <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-8">
//                 {pricingPlans.map((plan, index) => {
//                     const IconComponent = plan.icon;

//                     return (
//                         <div
//                             key={index}
//                             className={`relative rounded-2xl flex flex-col shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br ${plan.bgGradient} border-2 ${plan.borderColor} h-full ${
//                                 plan.isPopular ? 'scale-105 ring-4 ring-purple-200' : ''
//                             }`}
//                         >
//                             {/* Popular badge */}
//                             {plan.badge && (
//                                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
//                                     <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-1 text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
//                                         <FiStar className="w-3 h-3" />
//                                         {plan.badge}
//                                     </div>
//                                 </div>
//                             )}

//                             {/* Card header */}
//                             <div className="text-center p-5 pb-3">
//                                 {/* Icon */}
//                                 <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${plan.gradient} shadow-lg mb-3`}>
//                                     <IconComponent className="w-6 h-6 text-white" />
//                                 </div>

//                                 <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.name}</h3>
//                                 <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

//                                 {/* Price */}
//                                 <div className="mb-3">
//                                     <div className="flex items-center justify-center text-3xl font-bold text-gray-900 mb-1">
//                                         <FaIndianRupeeSign className="text-xl mr-1" />
//                                         {plan.price}
//                                     </div>
//                                     <p className="text-gray-600 text-sm font-medium">{plan.billing}</p>
//                                 </div>
//                             </div>

//                             {/* Features - flex-1 to take available space */}
//                             <div className="px-5 flex-1 flex flex-col">
//                                 <ul className="space-y-2 mb-4 flex-1">
//                                     {plan.features.map((feature, i) => (
//                                         <li key={i} className="flex items-center text-gray-700 text-sm">
//                                             <div className={`p-0.5 rounded-full bg-gradient-to-r ${plan.gradient} mr-2 flex-shrink-0`}>
//                                                 <FiCheck className="w-3 h-3 text-white" />
//                                             </div>
//                                             <span className="font-medium">{feature}</span>
//                                         </li>
//                                     ))}
//                                 </ul>

//                                 {/* AI Assistant */}
//                                 {plan.ai && (
//                                     <div className="mt-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 mb-4">
//                                         <div className="flex items-center gap-2">
//                                             <div className="p-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500">
//                                                 <FiZap className="w-3 h-3 text-white" />
//                                             </div>
//                                             <div>
//                                                 <span className="font-bold text-green-800 text-sm">{plan.ai}</span>
//                                                 <p className="text-green-600 text-xs">Advanced AI-powered features</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>

//                             {/* Button - Always at bottom */}
//                             <div className="p-5 pt-0 mt-auto">
//                                 <button
//                                     onClick={() => {
//                                         setShowForm(true);
//                                         setsubscriptionType(plan.subscriptionType);
//                                     }}
//                                     className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
//                                         plan.isPopular
//                                             ? `bg-gradient-to-r ${plan.gradient} text-white hover:opacity-90`
//                                             : `bg-white text-gray-800 border-2 ${plan.borderColor} hover:bg-gradient-to-r hover:${plan.gradient} hover:text-white hover:border-transparent`
//                                     }`}
//                                 >
//                                     {plan.button}
//                                 </button>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>

//             {/* Note */}
//             <div className="max-w-4xl mx-auto text-center">
//                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-gray-200">
//                     <FiShield className="text-blue-500 w-4 h-4" />
//                     <p className="text-gray-700 text-sm font-medium">*{note.note}</p>
//                 </div>
//             </div>

//             {/* Form Modal */}
//             {showForm && (
//                 <StartFreeTrial
//                     onClose={() => setShowForm(false)}
//                     subscriptionType={subscriptionType}
//                 />
//             )}
//         </div>
//     );
// };

// export default PricingNew;



import React, { useState } from "react";
import { FiCheck, FiStar, FiZap, FiShield, FiTrendingUp } from "react-icons/fi";
import { FaIndianRupeeSign, FaRocket, FaCrown, FaBuilding } from "react-icons/fa6";
import StartFreeTrial from "../../Components/StartFreeTrail/StartFreeTrail";
import { FaStar } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const PricingNew = () => {
    const [showForm, setShowForm] = useState(false);
    const [subscriptionType, setsubscriptionType] = useState("");

    const pricingPlans = [
        {
            name: "Starter Package",
            price: "499",
            billing: "/month/user",
             note: "Billed anually",
            description: "Perfect for small teams getting started",
            icon: FaRocket,
            gradient: "from-blue-500 to-cyan-500",
            bgGradient: "from-blue-50 to-cyan-50",
            borderColor: "border-blue-200",
            features: [
                "Lead Management",
                "Student Management",
                "Application Management",
                "Employee Management",
                "University programs",
                "Branches",
                "Reports",
                "20,000 leads"
            ],
            button: "Start Free Trial",
            subscriptionType: "Starter"
        },
        {
            name: "Pro Package",
            price: "999",
            billing: "/month/user",
            note: "Billed anually",
            description: "Ideal for growing businesses",
            badge: "MOST POPULAR",
            icon: FaStar,
            gradient: "from-purple-500 to-pink-500",
            bgGradient: "from-purple-50 to-pink-50",
            borderColor: "border-purple-300",
            isPopular: true,
            features: [
                "Lead Management",
                "Student Management",
                "Application Management",
                "Employee Management",
                "University programs",
                "Branches",
                "Reports",
                "50,000 leads",
                "Sub-domain",
                "Weekly Backup (max 4 weeks)"
            ],
            button: "Start Free Trial",
            subscriptionType: "Pro"
        },
        {
            name: "Enterprise Package",
            price: "1999",
            billing: "/month/user",
             note: "Billed anually",
            description: "Advanced features for large organizations",
            icon: FaBuilding,
            gradient: "from-emerald-500 to-teal-500",
            bgGradient: "from-emerald-50 to-teal-50",
            borderColor: "border-emerald-200",
            features: [
                "Lead Management",
                "Student Management",
                "Application Management",
                "Employee Management",
                "University programs",
                "Branches",
                "Reports",
                "Unlimited leads",
                "Sub-domain",
                "Payment and Partner Management",
                "Weekly Backup (max 1 year)",
                "Data retention 2 Years"
            ],
            ai: "AI Assistant",
            button: "Start Free Trial",
            subscriptionType: "Enterprise"
        }
    ];

    const note = {
        note: "Prices are exclusive of GST or taxes. Charges will be billed annually."
    };

    return (
        <div className="relative py-16 min-h-screen px-4 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
            </div>

            {/* Header Section */}
            <div className="text-center mb-12 mt-3">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-4 shadow-md">
                    <FiZap className="mr-2 w-4 h-4" />
                    30 days free trial • No contract or credit card required
                </div>

                <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-3">
                    Choose Your Plan
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Select the perfect package for your study abroad consultancy needs
                </p>
            </div>

            {/* Pricing cards */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-8">
                {pricingPlans.map((plan, index) => {
                    const IconComponent = plan.icon;

                    return (
                        <div
                            key={index}
                            className={`relative rounded-2xl flex flex-col shadow-xl hover:shadow-2xl  bg-gradient-to-br ${plan.bgGradient} border-2 ${plan.borderColor} h-full ${plan.isPopular ? '' : ''
                                }`}
                        >
                            {/* Popular badge */}
                            {plan.badge && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-1 text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                                        <FiStar className="w-3 h-3" />
                                        {plan.badge}
                                    </div>
                                </div>
                            )}

                            {/* Card header */}
                            <div className="text-center p-5 pb-3">
                                {/* Icon */}
                                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${plan.gradient} shadow-lg mb-3`}>
                                    <IconComponent className="w-6 h-6 text-white" />
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.name}</h3>
                                {/* <p className="text-gray-600 text-sm mb-4">{plan.description}</p> */}

                                {/* Price */}
                                <div className=" flex items-center justify-center">
                                    <div className="flex items-center justify-center text-3xl font-bold text-gray-900 mb-1">
                                        <FaIndianRupeeSign className="text-xl mr-1" />
                                        {plan.price}
                                    </div>
                                    <p className="text-gray-600 text-sm font-medium">{plan.billing}</p>
                                </div>

                            </div>

                            {/* Features - flex-1 to take available space */}
                            <div className="px-5 flex-1 flex flex-col">
                                <ul className="space-y-2 mb-4 flex-1">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-gray-700 text-sm">
                                            <div className={`p-0.5 rounded-full bg-gradient-to-r ${plan.gradient} mr-2 flex-shrink-0`}>
                                                <FiCheck className="w-3 h-3 text-white" />
                                            </div>
                                            <span className="font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* AI Assistant */}
                                {plan.ai && (
                                    <div className="mt-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="p-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500">
                                                <HiSparkles className="w-3 h-3 text-white" />
                                            </div>
                                            <div>
                                                <span className="font-bold text-green-800 text-sm">{plan.ai}</span>
                                                <p className="text-green-600 text-xs">Advanced AI-powered features</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Button - Always at bottom */}
                            <div className="p-5 pt-0 mt-auto">
                                <button
                                    onClick={() => {
                                        setShowForm(true);
                                        setsubscriptionType(plan.subscriptionType);
                                    }}
                                    className={`w-full py-3 px-4 rounded-xl font-bold text-sm  duration-300 shadow-lg  ${plan.isPopular
                                            ? `bg-gradient-to-r ${plan.gradient} text-white hover:opacity-90 cursor-pointer`
                                            : `bg-white text-gray-800 border-2 ${plan.borderColor} cursor-pointer`
                                        }`}
                                >
                                    {plan.button}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Note */}
            <div className="max-w-6xl mx-auto  pt-6">
                <p className="text-gray-700 text-sm">* {note.note}</p>
                <p className="text-gray-700 text-sm">* Required minimum 2 Users</p>
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
};

export default PricingNew;



