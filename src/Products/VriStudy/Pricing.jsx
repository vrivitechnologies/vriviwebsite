import React from 'react';
import { useNavigate } from 'react-router-dom';

const content = {
    pricingSection: {
        heading: "Pricing ",
        subheading: "We are more budget friendly than you would expect! we offer a very flexible and customized pricing, tailored to your needs.",
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
        <section className="py-20 ">
            <div className="max-w-7xl mx-auto lg:px-0 px-4 text-center">
                {/* Section Heading */}
                <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-gray-900">
                    {content.pricingSection.heading}
                </h2>
                <p className=" mb-20 max-w-2xl mx-auto text-[16px] leading-relaxed">
                    {content.pricingSection.subheading}
                </p>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-10">

                    {/* Card 1 */}
                    <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl p-10 border border-gray-100 relative">
                        <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                            {content.pricingSection.cards[0].title}
                        </h3>
                        <p className="text-gray-500 mb-8 text-base leading-relaxed">
                            {content.pricingSection.cards[0].description}
                        </p>
                        <button
                            onClick={handleStartFreeTrial}
                            className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white py-3 px-8 rounded-xl font-medium transition duration-300 w-full shadow-md hover:shadow-lg"
                        >
                            {content.pricingSection.cards[0].buttonText}
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl p-10 border border-gray-100 relative">
                        <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                            {content.pricingSection.cards[1].title}
                        </h3>
                        <p className="text-gray-500 mb-8 text-base leading-relaxed">
                            {content.pricingSection.cards[1].description}
                        </p>
                        <button
                            onClick={handleShowPricing}
                            className="bg-gray-900 hover:bg-black cursor-pointer text-white py-3 px-8 rounded-xl font-medium transition duration-300 w-full shadow-md hover:shadow-lg"
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
