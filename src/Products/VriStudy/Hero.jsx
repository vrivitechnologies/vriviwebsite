import React, { useState, useEffect } from 'react';
import { UserCog, Trophy, Tag } from "lucide-react";

const Hero = () => {
  const content = {
    badge: "AI Powered Study Abroad CRM",
    headingLine1: "Your Gateway to Studying Abroad",
    headingLine2Prefix: "Designed for",
    rotatingWords: ["Dreamers", "Achievers", "Explorers", "Future Leaders"],
    subText:
      "Discover top universities, track your applications, and plan your journey with a smart study abroad platform made for students.",

    emailPlaceholder: "Enter your email",
    buttonText: "Start free trial",
  };

  const features = [
    { text: "Self Managed", icon: UserCog },
    { text: "ZERO commissions", icon: Trophy },
    { text: "White-label", icon: Tag },
  ];

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = content.rotatingWords[index];
    let timeout;

    if (!deleting && subIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setSubIndex(subIndex + 1);
        setText(currentWord.substring(0, subIndex + 1));
      }, 100);
    } else if (deleting && subIndex > 0) {
      timeout = setTimeout(() => {
        setSubIndex(subIndex - 1);
        setText(currentWord.substring(0, subIndex - 1));
      }, 50);
    } else if (!deleting && subIndex === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % content.rotatingWords.length);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, content.rotatingWords]);

  // return (
  //   <section
  //     className="py-16  px-4 sm:px-6 text-center   lg:h-[calc(100vh+300px)] h-screen flex  justify-center"
  //     style={{
  //       backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)",
  //       backgroundSize: "20px 20px",
  //       backgroundColor: "#f2f2f2",
  //     }}
  //   >
  //     {/* White glow effect */}
  //     <div className="absolute inset-0 z-0">
  //       <div
  //         className="w-full h-full"
  //         style={{
  //           background: "radial-gradient(ellipse at center, rgba(255,255,255,0.7) 40%, transparent 60%)",
  //         }}
  //       />
  //     </div>
  //     <div className="relative z-10 w-full pt-30 max-w-5xl mx-auto space-y-6">
  //       <div>
  //         <div className="inline-block px-4 py-1.5 mb-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
  //           {content.badge}
  //         </div>
  //       </div>

  //       <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900">
  //         {content.headingLine1}
  //       </h1>

  //       <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 ">
  //         {content.headingLine2Prefix}{" "}
  //         <span className="text-blue-500">
  //           {text}
  //           <span className="inline">|</span>
  //         </span>
  //       </h2>

  //       <p className="text-[16px] mt-8 max-w-lg  mx-auto text-gray-800">
  //         {content.subText}
  //       </p>

  //       <form className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
  //         <input
  //           type="email"
  //           placeholder={content.emailPlaceholder}
  //           className="px-4 py-3 w-full sm:w-64 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
  //         />
  //         <button className="px-4 py-3 w-full sm:w-auto text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition">
  //           {content.buttonText}
  //         </button>
  //       </form>

  //       <div className="mt-20 flex flex-wrap justify-center gap-6 text-gray-800">
  //         {features.map((feature, idx) => {
  //           const Icon = feature.icon;
  //           return (
  //             <div key={idx} className="flex items-center gap-2 ">
  //               <Icon className="w-5 h-5 " />
  //               <span>{feature.text}</span>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   </section>
  // );









  //   return (
  //   <section
  //     className="py-16 pt-40  px-4 sm:px-6 text-center   lg:h-[calc(100vh+300px)] h-screen flex  justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950"

  //   >

  //     <div className="relative z-10 w-full max-w-5xl mx-auto space-y-6">
  //       {/* Badge */}
  //       <div>
  //         <div className="inline-block px-4 py-1.5 mb-1 text-sm font-medium text-blue-100 bg-blue-500/40 rounded-full">
  //           {content.badge}
  //         </div>
  //       </div>

  //       {/* Headings */}
  //       <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
  //         {content.headingLine1}
  //       </h1>

  //       <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white">
  //         {content.headingLine2Prefix}{" "}
  //         <span className="text-blue-300">
  //           {text}
  //           <span className="inline">|</span>
  //         </span>
  //       </h2>

  //       {/* Subtext */}
  //       <p className="text-[16px] mt-8 max-w-lg mx-auto text-blue-100">
  //         {content.subText}
  //       </p>

  //       {/* Form */}
  //       <form className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
  //         <input
  //           type="email"
  //           placeholder={content.emailPlaceholder}
  //           className="px-4 py-3 w-full sm:w-64 bg-white  rounded-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-300"
  //         />
  //         <button className="px-4 py-3 w-full sm:w-auto text-white bg-blue-500 rounded-xl hover:bg-blue-600 transition">
  //           {content.buttonText}
  //         </button>
  //       </form>

  //       {/* Features */}
  //       <div className="mt-20 flex flex-wrap justify-center gap-6 text-blue-100">
  //         {features.map((feature, idx) => {
  //           const Icon = feature.icon;
  //           return (
  //             <div key={idx} className="flex items-center gap-2">
  //               <Icon className="w-5 h-5 text-blue-300" />
  //               <span>{feature.text}</span>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   </section>
  // );











  return (
    <section
      className="py-16 pt-40 px-4 sm:px-6 text-center lg:h-[calc(100vh+300px)] h-screen flex justify-center "
    >
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full"
          style={{
            background: "linear-gradient(135deg, #00aaff, #ffffff, #a020f0)",
            opacity: 0.2,
          }}
        />
      </div>
      <div className="relative z-10 w-full max-w-5xl mx-auto space-y-6">
        {/* Badge */}
        <div>
          <div className="inline-block px-4 py-1.5 mb-1 text-sm font-medium text-blue-100 bg-blue-500/40 rounded-full">
            {content.badge}
          </div>
        </div>

        {/* Headings */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
          {content.headingLine1}
        </h1>

        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white">
          {content.headingLine2Prefix}{" "}
          <span className="text-blue-300">
            {text}
            <span className="inline">|</span>
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-[16px] mt-8 max-w-lg mx-auto text-blue-100">
          {content.subText}
        </p>

        {/* Form */}
        <form className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <input
            type="email"
            placeholder={content.emailPlaceholder}
            className="px-4 py-3 w-full sm:w-64 bg-white rounded-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button className="px-4 py-3 w-full sm:w-auto text-white bg-blue-500 rounded-xl hover:bg-blue-600 transition">
            {content.buttonText}
          </button>
        </form>

        {/* Features */}
        <div className="mt-20 flex flex-wrap justify-center gap-6 text-blue-100">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex items-center gap-2">
                <Icon className="w-5 h-5 text-blue-300" />
                <span>{feature.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );



};

export default Hero;

