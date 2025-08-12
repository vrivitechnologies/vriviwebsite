// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const content = {
//     pricingSection: {
//         heading: "Pricing ",
//         subheading: "We are more budget friendly than you would expect! we offer a very flexible and customized pricing, tailored to your needs.",
//         cards: [
//             {
//                 title: "Sign Up for Free",
//                 description: "Get started with our platform at no cost and explore all the basic features.",
//                 buttonText: "Start Free Trial"
//             },
//             {
//                 title: "Premium Plans",
//                 description: "Unlock advanced features like personalized counseling and priority application support.",
//                 buttonText: "Show Pricing"
//             }
//         ]
//     }
// };

// const Pricing = () => {
//     const navigate = useNavigate();

//     const handleStartFreeTrial = () => {
//         navigate('/signup');
//     };

//     const handleShowPricing = () => {
//         navigate('/pricing');
//     };

//     return (
//         <section className="py-20 ">
//             <div className="max-w-7xl mx-auto lg:px-0 px-4 text-center">
//                 {/* Section Heading */}
//                 <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-gray-900">
//                     {content.pricingSection.heading}
//                 </h2>
//                 <p className=" mb-20 max-w-2xl mx-auto text-[16px] leading-relaxed">
//                     {content.pricingSection.subheading}
//                 </p>

//                 {/* Pricing Cards */}
//                 <div className="grid md:grid-cols-2 gap-10">

//                     {/* Card 1 */}
//                     <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl p-10 border border-gray-100 relative">
//                         <h3 className="text-2xl font-semibold mb-3 text-gray-900">
//                             {content.pricingSection.cards[0].title}
//                         </h3>
//                         <p className="text-gray-500 mb-8 text-base leading-relaxed">
//                             {content.pricingSection.cards[0].description}
//                         </p>
//                         <button
//                             onClick={handleStartFreeTrial}
//                             className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white py-3 px-8 rounded-xl font-medium transition duration-300 w-full shadow-md hover:shadow-lg"
//                         >
//                             {content.pricingSection.cards[0].buttonText}
//                         </button>
//                     </div>

//                     {/* Card 2 */}
//                     <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl p-10 border border-gray-100 relative">
//                         <h3 className="text-2xl font-semibold mb-3 text-gray-900">
//                             {content.pricingSection.cards[1].title}
//                         </h3>
//                         <p className="text-gray-500 mb-8 text-base leading-relaxed">
//                             {content.pricingSection.cards[1].description}
//                         </p>
//                         <button
//                             onClick={handleShowPricing}
//                             className="bg-gray-900 hover:bg-black cursor-pointer text-white py-3 px-8 rounded-xl font-medium transition duration-300 w-full shadow-md hover:shadow-lg"
//                         >
//                             {content.pricingSection.cards[1].buttonText}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );

// };

// export default Pricing;


// import React from "react";

// const PricingPlans = () => {
//   const pricingPlans = [
//     {
//       name: "Basic",
//       subtitle: "Best for revenue under $10k/month",
//       oldPrice: "$24",
//       newPrice: "$12",
//       billing: "/mo",
//       yearly: "$144 /year",
//       save: "Save 50%",
//       includes: [
//         "Extended Warranties only",
//         "1 term option (Ex. 1 year)",
//         "Up to 10 policies per month"
//       ],
//       features: [
//         "PDP & Cart Widgets",
//         "Embedded claim portal",
//         "AI contract generator",
//         "AI Price suggestions"
//       ],
//       button: "Start free trial"
//     },
//     {
//       name: "Pro",
//       subtitle: "Best for revenue up to $100k/month",
//       oldPrice: "$129",
//       newPrice: "$65",
//       billing: "/mo",
//       yearly: "$780 /year",
//       save: "Save 50%",
//       badge: "Best Value",
//       includes: [
//         "Extended & OEM Warranties",
//         "Unlimited term options",
//         "Up to 50 policies per month"
//       ],
//       extra: [
//         "Checkout widget (Coming soon)",
//         "AI Fraud Prevention (Coming soon)",
//         "Post purchase up-sells (Coming soon)",
//         "OEM Registrations (Coming soon)"
//       ],
//       baseIncludesFrom: "Basic",
//       button: "Start free trial"
//     },
//     {
//       name: "Enterprise",
//       subtitle: "Best for revenue over $100k/month",
//       oldPrice: "$499",
//       newPrice: "$250",
//       billing: "/mo",
//       yearly: "$3000 /year",
//       save: "Save 50%",

//       includes: [
//         "OEM, Extended, & Shipping Protection",
//         "Unlimited term options"
//       ],
//       extra: ["Dedicated Success Manager", "White label branding"],
//       baseIncludesFrom: "Pro",
//       button: "Start free trial"
//     }
//   ];

//   return (
//     <div className="pt-30 lg:px-0 px-4">
//       <h2 className="md:text-4xl  text-2xl font-semibold text-center">
//         Pricing Plans
//       </h2>
//       <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
//         {pricingPlans.map((plan, index) => (
//           <div
//             key={index}
//             className={`border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col ${plan.badge ? "relative  border-blue-600" : ""
//               }`}
//           >
//             {plan.badge && (
//               <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-white bg-blue-600 text-xs font-bold px-3 py-1 rounded-full">
//                 {plan.badge}
//               </div>
//             )}

//             <h3 className="text-xl font-bold">{plan.name}</h3>
//             <p className="text-sm text-gray-500 mb-4">{plan.subtitle}</p>

//             <div className="mb-4">
//               <span className="line-through text-gray-600 text-sm mr-2">
//                 {plan.oldPrice}
//               </span>
//               <span className="text-3xl font-bold">{plan.newPrice}</span>
//               <span className="text-gray-600">{plan.billing}</span>
//               <p className="text-gray-500">{plan.yearly}</p>
//               <span className="text-blue-500 text-sm font-bold">
//                 {plan.save}
//               </span>
//             </div>

//             <div className="mb-4">
//               <p className="font-semibold mb-2">Includes</p>
//               <ul className="space-y-1 text-sm">
//                 {plan.includes.map((item, i) => (
//                   <li key={i} className="flex items-start">
//                     <span className="text-blue-500 mr-2">✔</span> {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {plan.baseIncludesFrom && (
//               <div className="mb-4">
//                 <p className="font-semibold">
//                   Everything in {plan.baseIncludesFrom}, plus
//                 </p>
//                 <ul className="space-y-1 text-sm">
//                   {plan.extra.map((item, i) => (
//                     <li key={i} className="flex items-start">
//                       <span className="text-blue-500 mr-2">✔</span> {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {!plan.baseIncludesFrom && plan.features && (
//               <div className="mb-4">
//                 <p className="font-semibold">Features</p>
//                 <ul className="space-y-1 text-sm">
//                   {plan.features.map((item, i) => (
//                     <li key={i} className="flex items-start">
//                       <span className="text-blue-500 mr-2">✔</span> {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             <button className="mt-auto bg-blue-600 text-white cursor-pointer font-semibold py-2 px-4 rounded-md">
//               {plan.button}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default PricingPlans;

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
            button: "Start Free Trail",
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
            button: "Start Free Trail",
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
            button: "Start Free Trail",
            subscriptionType: "Enterprise"
        }
    ];

    return (
        <div
            className="relative py-20 min-h-screen px-4"
            style={{
                backgroundImage: `
      radial-gradient(circle, white 2px, transparent 2px)
    `,
                backgroundSize: "20px 20px",
                backgroundColor: "#e5f3fd", // light blue
            }}
        >
            <p className="text-center bg-green-400 py-1 px-3 max-w-md rounded-full  mx-auto mb-10">
                30 days free trial. No contract or credit card required.
            </p>

            {/* Pricing cards */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5">
                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className={`rounded-2xl text-white relative flex flex-col ${plan.badge ? "bg-purple-600" : "bg-purple-900"
                            }`}
                    >
                        <div className="border border-b border-white text-center rounded-t-2xl px-6 py-2">
                            {/* Badge */}
                            {plan.badge && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-3 py-1 text-xs font-bold rounded-md shadow-md">
                                    {plan.badge}
                                </div>
                            )}

                            <h3 className="text-sm font-semibold ">{plan.name}</h3>
                            <div className="text-3xl font-bold flex text-center items-center justify-center">
                                <FaIndianRupeeSign></FaIndianRupeeSign>
                                <p>{plan.price}</p>
                            </div>
                            <p><span className="text-xs font-normal">{plan.billing}</span></p>
                        </div>

                        <ul className="space-y-2 flex-1 rounded-2xl  px-6 py-3">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start">
                                    <FiCheck className="text-yellow-400 mt-1 mr-2" />
                                    <span>{feature}</span>
                                </li>

                            ))}
                        </ul>
                        {plan.ai && (
                            <div className="flex  px-6">
                                <FiCheck className="text-yellow-400 mt-2 mr-2" />
                                <span className="bg-green-400  text-black py-1 px-6 rounded-full">
                                    {plan.ai}
                                </span>
                            </div>
                        )}

                        <div className="flex gap-4 p-6 w-full ">
                            <button
                                onClick={() => {
                                    setShowForm(true);
                                    setsubscriptionType(plan.subscriptionType); // pass value directly
                                }}
                                className="px-6 py-2  bg-blue-600 cursor-pointer w-full text-white font-semibold rounded-md transition shadow-lg"
                            >
                                {plan.button}
                            </button>
                        </div>

                        {showForm && (
                            <StartFreeTrial
                                onClose={() => setShowForm(false)}
                                subscriptionType={subscriptionType}
                            />
                        )}

                    </div>

                ))}
            </div>
        </div>
    );
};

export default Pricing;



