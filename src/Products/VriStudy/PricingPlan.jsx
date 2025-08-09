import React from "react";

const PricingPlans =() => {
  const pricingPlans = [
    {
      name: "Basic",
      subtitle: "Best for revenue under $10k/month",
      oldPrice: "$24",
      newPrice: "$12",
      billing: "/mo",
      yearly: "$144 /year",
      save: "Save 50%",
      includes: [
        "Extended Warranties only",
        "1 term option (Ex. 1 year)",
        "Up to 10 policies per month"
      ],
      features: [
        "PDP & Cart Widgets",
        "Embedded claim portal",
        "AI contract generator",
        "AI Price suggestions"
      ],
      button: "Start free trial"
    },
    {
      name: "Pro",
      subtitle: "Best for revenue up to $100k/month",
      oldPrice: "$129",
      newPrice: "$65",
      billing: "/mo",
      yearly: "$780 /year",
      save: "Save 50%",
      badge: "Best Value",
      includes: [
        "Extended & OEM Warranties",
        "Unlimited term options",
        "Up to 50 policies per month"
      ],
      extra: [
        "Checkout widget (Coming soon)",
        "AI Fraud Prevention (Coming soon)",
        "Post purchase up-sells (Coming soon)",
        "OEM Registrations (Coming soon)"
      ],
      baseIncludesFrom: "Basic",
      button: "Start free trial"
    },
    {
      name: "Enterprise",
      subtitle: "Best for revenue over $100k/month",
      oldPrice: "$499",
      newPrice: "$250",
      billing: "/mo",
      yearly: "$3000 /year",
      save: "Save 50%",
      dropdownLabel: "How many warranties do you sell?",
      dropdownOptions: [
        "51-200 per month",
        "201-500 per month",
        "500+ per month"
      ],
      includes: [
        "OEM, Extended, & Shipping Protection",
        "Unlimited term options"
      ],
      extra: ["Dedicated Success Manager", "White label branding"],
      baseIncludesFrom: "Pro",
      button: "Start free trial"
    }
  ];

  return (
   <div className="pt-30 px-4">
    <h2 className="text-4xl font-semibold text-center mb-10">
      Pricing Plans 
    </h2>
     <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
      {pricingPlans.map((plan, index) => (
        <div
          key={index}
          className={`border rounded-2xl shadow-sm p-6 flex flex-col ${
            plan.badge ? "relative border-lime-400" : ""
          }`}
        >
          {plan.badge && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime-400 text-xs font-bold px-3 py-1 rounded-full">
              {plan.badge}
            </div>
          )}

          <h3 className="text-xl font-bold">{plan.name}</h3>
          <p className="text-sm text-gray-500 mb-4">{plan.subtitle}</p>

          <div className="mb-4">
            <span className="line-through text-gray-400 text-sm mr-2">
              {plan.oldPrice}
            </span>
            <span className="text-3xl font-bold">{plan.newPrice}</span>
            <span className="text-gray-600">{plan.billing}</span>
            <p className="text-gray-500">{plan.yearly}</p>
            <span className="text-lime-500 text-sm font-bold">
              {plan.save}
            </span>
          </div>

          {plan.dropdownLabel && (
            <select className="border rounded-md p-2 mb-4 w-full text-sm">
              {plan.dropdownOptions.map((opt, i) => (
                <option key={i}>{opt}</option>
              ))}
            </select>
          )}

          <div className="mb-4">
            <p className="font-semibold mb-2">Includes</p>
            <ul className="space-y-1 text-sm">
              {plan.includes.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-lime-500 mr-2">✔</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {plan.baseIncludesFrom && (
            <div className="mb-4">
              <p className="font-semibold">
                Everything in {plan.baseIncludesFrom}, plus
              </p>
              <ul className="space-y-1 text-sm">
                {plan.extra.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-lime-500 mr-2">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!plan.baseIncludesFrom && plan.features && (
            <div className="mb-4">
              <p className="font-semibold">Features</p>
              <ul className="space-y-1 text-sm">
                {plan.features.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-lime-500 mr-2">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button className="mt-auto bg-lime-400 hover:bg-lime-500 text-black font-semibold py-2 px-4 rounded-md">
            {plan.button}
          </button>
        </div>
      ))}
    </div>
   </div>
  );
}
export default PricingPlans;
