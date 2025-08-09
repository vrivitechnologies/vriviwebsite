import React from 'react';
import { useNavigate } from 'react-router-dom';

const content = {
  pricingSection: {
    heading: "Pricing ",
    subheading: "We are more budget friendly than you would expect! PilotApps offers a very flexible and customized pricing, tailored to your needs.",
    cards: [
      {
        title: "Sign Up for Free",
        description: "Get started with our platform at no cost and explore all the basic features.",
        buttonText: "Start Free Trial"
      },
      {
        title: "Premium Plans",
        description: "Unlock advanced features like personalized counseling and priority application support.",
        buttonText: "Show Pricing"
      }
    ]
  }
};

const Pricing = () => {
    const navigate = useNavigate();

    const handleStartFreeTrial = () => {
        navigate('/signup');
    };

    const handleShowPricing = () => {
        navigate('/pricing');
    };

    return (
        <section className="pt-30">
            <div className="max-w-7xl mx-auto px-4 text-center">
                {/* Section Heading */}
                <h2 className="text-4xl font-semibold  mb-4">
                    {content.pricingSection.heading}
                </h2>
                <p className=" mb-20 max-w-2xl mx-auto text-center text-[16px]">
                    {content.pricingSection.subheading}
                </p>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white shadow rounded-2xl p-8 ">
                        <h3 className="text-xl font-semibold mb-2">{content.pricingSection.cards[0].title}</h3>
                        <p className="text-gray-500 mb-6">{content.pricingSection.cards[0].description}</p>
                        <button
                            onClick={handleStartFreeTrial}
                            className="bg-indigo-600 text-white py-3 px-6 rounded-xl hover:bg-indigo-700 transition duration-300 w-full"
                        >
                            {content.pricingSection.cards[0].buttonText}
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow rounded-2xl p-8 ">
                        <h3 className="text-xl font-semibold mb-2">{content.pricingSection.cards[1].title}</h3>
                        <p className="text-gray-500 mb-6">{content.pricingSection.cards[1].description}</p>
                        <button
                            onClick={handleShowPricing}
                            className="bg-gray-800 text-white py-3 px-6 rounded-xl hover:bg-gray-900 transition duration-300 w-full"
                        >
                            {content.pricingSection.cards[1].buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
