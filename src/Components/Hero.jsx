// import React, { useState, useEffect } from 'react';
// const Hero = () => {
//   const content = {
//     headingLine1: "We Bring Software Solutions To Make Life Easier For Your Business.",
//     headingLine2Prefix: "Empowering Businesses with Innovative Technology Solutions.",
//   };

//   return (
//     <section
//       className="relative py-16 sm:py-20 px-4 sm:px-6 text-center h-screen flex justify-center items-center overflow-hidden"
//       style={{
//         backgroundImage: `
//         radial-gradient(circle, rgba(255,255,255,0.8) 2px, transparent 2px)
//       `,
//         backgroundSize: "20px 20px",
//         backgroundColor: "#ffffff",
//       }}
//     >
//       {/* Gradient overlay */}
//       <div className="absolute inset-0 z-0">
//         <div
//           className="w-full h-full"
//           style={{
//             background: "linear-gradient(135deg, #00aaff, #ffffff, #a020f0)",
//             opacity: 0.2,
//           }}
//         />
//       </div>

//       {/* Blinking dots overlay */}
//       <div
//         className="absolute inset-0 z-0 animate-blinkDots"
//         style={{
//           backgroundImage: `
//           radial-gradient(circle, rgba(0,170,255,0.8) 2px, transparent 2px),
//           radial-gradient(circle, rgba(160,32,240,0.8) 2px, transparent 2px)
//         `,
//           backgroundSize: "20px 20px, 20px 20px",
//           backgroundPosition: "0 0, 10px 10px",
//           mixBlendMode: "overlay",
//         }}
//       />

//       {/* Content */}
//       <div className="relative z-10 w-full max-w-5xl mx-auto space-y-6">
//         {/* Gradient Heading */}
//         <h1
//           className="text-3xl sm:text-4xl md:text-6xl font-semibold bg-clip-text text-transparent"
//           style={{
//             backgroundImage: "linear-gradient(to right, #00aaff, #a020f0)",
//           }}
//         >
//           {content.headingLine1}
//         </h1>

//         <h2
//           className="text-2xl text-gray-600"

//         >
//           {content.headingLine2Prefix}
//         </h2>
//       </div>

//       <style jsx>{`
//       @keyframes blinkDots {
//         0%, 100% {
//           opacity: 1;
//         }
//         50% {
//           opacity: 0.5;
//         }
//       }
//       .animate-blinkDots {
//         animation: blinkDots 2s infinite ease-in-out;
//       }
//     `}</style>
//     </section>
//   );

// };

// export default Hero;
















// with carousel bg-blue and purple gradient
import React, { useState, useEffect, useRef } from "react";
import { UserCog, Trophy, Tag } from "lucide-react";
const Hero1Content = () => {
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

  const [text, setText] = useState("");
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

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 text-center">
      <div>
        <div className="inline-block px-4 py-1.5 mb-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
          {content.badge}
        </div>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900">
        {content.headingLine1}
      </h1>

      <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900">
        {content.headingLine2Prefix}{" "}
        <span className="text-blue-500">
          {text}
          <span className="inline">|</span>
        </span>
      </h2>

      <p className="text-[16px] mt-8 max-w-lg mx-auto text-gray-800">
        {content.subText}
      </p>

      <form className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
        <input
          type="email"
          placeholder={content.emailPlaceholder}
          className="px-4 py-3 w-full sm:w-64 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="px-4 py-3 w-full sm:w-auto text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition">
          {content.buttonText}
        </button>
      </form>

      <div className="mt-20 flex flex-wrap justify-center gap-6 text-gray-800">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div key={idx} className="flex items-center gap-2">
              <Icon className="w-5 h-5" />
              <span>{feature.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const Hero2Content = () => {
  const content = {
    headingLine1:
      "We Bring Software Solutions To Make Life Easier For Your Business.",
    headingLine2Prefix:
      "Empowering Businesses with Innovative Technology Solutions.",
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center h-full space-y-6 text-center px-4">
      <h1
        className="text-3xl sm:text-4xl md:text-6xl font-semibold bg-clip-text text-transparent"
        style={{
          backgroundImage: "linear-gradient(to right, #00aaff, #a020f0)",
        }}
      >
        {content.headingLine1}
      </h1>

      <h2 className="text-2xl text-gray-600">{content.headingLine2Prefix}</h2>
    </div>
  );
};
const Hero = () => {
  const slides = [Hero1Content, Hero2Content];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slideCount = slides.length;

  const slideInterval = useRef(null);

  const startAutoSlide = () => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
      setIsTransitioning(true);
    }, 5000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(slideInterval.current);
  }, []);

  // Handle infinite loop snap
  useEffect(() => {
    if (currentSlide === slideCount) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true); 
          });
        });
      }, 700); 
      return () => clearTimeout(timeout);
    }
  }, [currentSlide, slideCount]);

  const displaySlides = [...slides, slides[0]];

  return (
    <section
      className="relative h-screen flex justify-center items-center overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 2px, transparent 2px)`,
        backgroundSize: "20px 20px",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full"
          style={{
            background: "linear-gradient(135deg, #00aaff, #ffffff, #a020f0)",
            opacity: 0.2,
          }}
        />
      </div>

      {/* Slides wrapper */}
      <div
        className={`relative z-10 flex w-screen`}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: isTransitioning ? "transform 0.7s ease-in-out" : "none",
        }}
      >
        {displaySlides.map((Slide, idx) => (
          <div
            key={idx}
            className="w-screen flex-shrink-0 flex justify-center items-center"
          >
            <div className="w-full max-w-5xl px-4">
              <Slide />
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              clearInterval(slideInterval.current);
              setCurrentSlide(idx);
              setIsTransitioning(true);
              startAutoSlide();
            }}
            className={`w-4 h-4 rounded-full ${idx === (currentSlide % slideCount) ? "bg-blue-600" : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </section>
  );
};
export default Hero;













// import React, { useState, useEffect, useRef } from "react";
// import { UserCog, Trophy, Tag } from "lucide-react";

// const Hero1Content = () => {
//   const content = {
//     badge: "All-in-one Study Abroad CRM",
//     headingLine1: "Your Gateway to Studying Abroad",
//     headingLine2Prefix: "Designed for",
//     rotatingWords: ["Dreamers", "Achievers", "Explorers", "Future Leaders"],
//     subText:
//       "Discover top universities, track your applications, and plan your journey with a smart study abroad platform made for students.",
//     emailPlaceholder: "Enter your email",
//     buttonText: "Start free trial",
//   };

//   const features = [
//     { text: "Self Managed", icon: UserCog },
//     { text: "ZERO commissions", icon: Trophy },
//     { text: "White-label", icon: Tag },
//   ];

//   const [text, setText] = useState("");
//   const [index, setIndex] = useState(0);
//   const [subIndex, setSubIndex] = useState(0);
//   const [deleting, setDeleting] = useState(false);

//   useEffect(() => {
//     const currentWord = content.rotatingWords[index];
//     let timeout;

//     if (!deleting && subIndex < currentWord.length) {
//       timeout = setTimeout(() => {
//         setSubIndex(subIndex + 1);
//         setText(currentWord.substring(0, subIndex + 1));
//       }, 100);
//     } else if (deleting && subIndex > 0) {
//       timeout = setTimeout(() => {
//         setSubIndex(subIndex - 1);
//         setText(currentWord.substring(0, subIndex - 1));
//       }, 50);
//     } else if (!deleting && subIndex === currentWord.length) {
//       timeout = setTimeout(() => setDeleting(true), 1500);
//     } else if (deleting && subIndex === 0) {
//       setDeleting(false);
//       setIndex((prev) => (prev + 1) % content.rotatingWords.length);
//     }

//     return () => clearTimeout(timeout);
//   }, [subIndex, deleting, index, content.rotatingWords]);

//   return (
//     <div className="w-full max-w-5xl mx-auto space-y-6 text-center text-white">
//       <div>
//         <div className="inline-block px-4 py-1.5 mb-1 text-sm font-medium bg-white/20 rounded-full">
//           {content.badge}
//         </div>
//       </div>

//       <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
//         {content.headingLine1}
//       </h1>

//       <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
//         {content.headingLine2Prefix}{" "}
//         <span className="text-blue-300">
//           {text}
//           <span className="inline">|</span>
//         </span>
//       </h2>

//       <p className="text-[16px] mt-8 max-w-lg mx-auto text-white/80">
//         {content.subText}
//       </p>

//       <form className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
//         <input
//           type="email"
//           placeholder={content.emailPlaceholder}
//           className="px-4 py-3 w-full sm:w-64 bg-white text-gray-900 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//         <button className="px-4 py-3 w-full sm:w-auto text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition">
//           {content.buttonText}
//         </button>
//       </form>

//       <div className="mt-20 flex flex-wrap justify-center gap-6 text-white/80">
//         {features.map((feature, idx) => {
//           const Icon = feature.icon;
//           return (
//             <div key={idx} className="flex items-center gap-2">
//               <Icon className="w-5 h-5" />
//               <span>{feature.text}</span>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// const Hero2Content = () => {
//   const content = {
//     headingLine1:
//       "We Bring Software Solutions To Make Life Easier For Your Business.",
//     headingLine2Prefix:
//       "Empowering Businesses with Innovative Technology Solutions.",
//   };

//   return (
//     <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center h-full space-y-6 text-center text-white">
//       <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold">
//         {content.headingLine1}
//       </h1>
//       <h2 className="text-2xl text-white/80">{content.headingLine2Prefix}</h2>
//     </div>
//   );
// };

// const Hero = () => {
//   const slides = [Hero1Content, Hero2Content];
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(true);
//   const slideCount = slides.length;

//   const slideInterval = useRef(null);

//   const startAutoSlide = () => {
//     slideInterval.current = setInterval(() => {
//       setCurrentSlide((prev) => prev + 1);
//       setIsTransitioning(true);
//     }, 8000);
//   };

//   useEffect(() => {
//     startAutoSlide();
//     return () => clearInterval(slideInterval.current);
//   }, []);

//   useEffect(() => {
//     if (currentSlide === slideCount) {
//       const timeout = setTimeout(() => {
//         setIsTransitioning(false);
//         setCurrentSlide(0);
//         requestAnimationFrame(() => {
//           requestAnimationFrame(() => {
//             setIsTransitioning(true);
//           });
//         });
//       }, 700);
//       return () => clearTimeout(timeout);
//     }
//   }, [currentSlide, slideCount]);

//   const displaySlides = [...slides, slides[0]];

//   return (
//     <section
//       className="relative h-screen flex justify-center items-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950"
//     >
//       {/* Slides wrapper */}
//       <div
//         className={`relative z-10 flex w-screen`}
//         style={{
//           transform: `translateX(-${currentSlide * 100}%)`,
//           transition: isTransitioning ? "transform 0.7s ease-in-out" : "none",
//         }}
//       >
//         {displaySlides.map((Slide, idx) => (
//           <div
//             key={idx}
//             className="w-screen flex-shrink-0 flex justify-center items-center"
//           >
//             <div className="w-full max-w-5xl px-4">
//               <Slide />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Hero;

