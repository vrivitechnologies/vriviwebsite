import React from 'react';

const headings = {
    heading: "Start selling warranties on Shopify in less than 10 minutes",
    subheading: "Easily install the Umbrella app and configure or migrate your first plan"
};

const steps = [
    {
        step: "Step 1",
        title: "Install the Umbrella AI app for Shopify or another platform",
        description: "Sync your catalog & deploy widgets on your store's product, cart, and checkout pages",
        image: "/images/step1.png"
    },
    {
        step: "Step 2",
        title: "Configure warranty pricing, coverage, & terms for each plan",
        description: "Choose which products are eligible and use AI to optimize pricing & terms for each plan",
        image: "/images/step2.png"
    },
    {
        step: "Step 3",
        title: "Boost revenue & automate warranty claims",
        description: "Display eligible plans on each product page & automatically add protection to cart",
        image: "/images/step3.png"
    }
];

const Steps = () => {
    return (
        <div className='pt-50 max-w-7xl mx-auto px-4'>
            <div className='text-center max-w-4xl mx-auto space-y-6 mb-20'>
                <p className='text-4xl  font-medium'>{headings.heading}</p>
                <p className='text-[16px]'>{headings.subheading}</p>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
                {steps.map((item, index) => (
                    <div key={index} className='rounded-2xl shadow-md p-6 flex flex-col items-center text-center'>
                        <h3 className='text-3xl font-semibold mb-4'>{item.step}</h3>
                        <img src={item.image} alt={item.title} className='rounded-xl mb-6 w-full h-auto' />
                        <p className='font-semibold text-xl'>{item.title}</p>
                        <p className='text-[16px] text-gray-600 mt-2'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Steps;
