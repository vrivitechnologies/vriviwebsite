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

import React from "react";
import { FiCheck } from "react-icons/fi";

const PricingPlans = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "999",
      billing: "/MONTH",
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
      ]
    },
    {
      name: "Pro",
      price: "1499",
      billing: "/MONTH",
      badge: "MOST POPULAR",
      features: [
        "Weekly Backup (max weeks)",
        "Lead Management",
        "Student Management",
        "Application Management",
        "Employee Management",
        "University programs",
        "Branches",
        "Reports",
        "5 Users",
        "50000 leads",
        "Sub-domain"
      ]
    },
    {
      name: "Enterprise",
      price: "1999",
      billing: "/MONTH",
      features: [
        "Weekly Backup (max 1 years)",
        "Lead Management",
        "Student Management",
        "Application Management",
        "Employee Management",
        "University programs",
        "Branches",
        "Reports",
        "Unlimited users",
        "2 lakh leads",
        "Sub-domain"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b  min-h-screen py-12 px-4">
      {/* Free trial badge */}
      <div className="absolute top-4 left-4 bg-yellow-400 px-4 py-2 rounded-md font-bold shadow-md">
        30 days free trial
      </div>

      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-2">
        Choose Your <span className="text-yellow-400">Subscription Plan</span>
      </h2>
      <p className="text-center text-white mb-10">
        30 days free trial. No contract or credit card required.
      </p>

      {/* Pricing cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 text-white relative flex flex-col ${
              plan.badge ? "bg-purple-600" : "bg-purple-900"
            }`}
          >
            {/* Badge */}
            {plan.badge && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-3 py-1 text-xs font-bold rounded-md shadow-md">
                {plan.badge}
              </div>
            )}

            <h3 className="text-lg font-semibold uppercase mb-2">{plan.name}</h3>
            <p className="text-3xl font-bold mb-4">
              {plan.price}
              <span className="text-lg font-normal">{plan.billing}</span>
            </p>

            <ul className="space-y-2 flex-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <FiCheck className="text-yellow-400 mt-1 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;


