// import React, { useState, useEffect, useRef } from "react";
// import { UserCog, Trophy, Tag } from "lucide-react";
// const Hero1Content = () => {
//   const content = {
//     badge: "AI Powered Study Abroad CRM",
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
//     <div className="w-full max-w-3xl mx-auto space-y-3 text-center">
//       <div>
//         <div className="inline-block px-5 py-1.5 mb-1 text-sm font-medium text-white bg-purple-600 rounded-full">
//           {content.badge}
//         </div>
//       </div>

//       <h1
//         className="text-3xl sm:text-4xl md:text-4xl font-bold  mr-2 bg-clip-text text-transparent inline-block leading-tight"
//         style={{
//           backgroundImage: "linear-gradient(to right, #00aaff, #a020f0)",
//         }}
//       >
//         {content.headingLine1}
//       </h1>

//       <h2
//         className="text-2xl sm:text-4xl md:text-4xl font-bold bg-clip-text text-transparent inline-block leading-tight"
//         style={{
//           backgroundImage: "linear-gradient(to right, #00aaff, #a020f0)",
//         }}
//       >
//         {content.headingLine2Prefix}{" "}
//         <span
//           className="bg-clip-text text-transparent"
//           style={{
//             backgroundImage: "linear-gradient(to right, #00aaff, #a020f0)",
//           }}
//         >
//           {text}
//           <span className="inline">|</span>
//         </span>
//       </h2>


//       <p className="text-[16px]  max-w-lg mx-auto text-gray-800">
//         {content.subText}
//       </p>

//       <form className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
//         <input
//           type="email"
//           placeholder={content.emailPlaceholder}
//           className="px-4 py-2 w-full sm:w-64 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//         <button className="px-4 py-2 w-full sm:w-auto text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">
//           {content.buttonText}
//         </button>
//       </form>

//       <div className="mt-4 flex flex-wrap justify-center gap-6 text-gray-800">
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
//     <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center h-full space-y-6 text-center px-4">
//       <h1
//         className="text-3xl sm:text-4xl md:text-4xl font-semibold bg-clip-text text-transparent"
//         style={{
//           backgroundImage: "linear-gradient(to right, #00aaff, #a020f0)",
//         }}
//       >
//         {content.headingLine1}
//       </h1>

//       <h2 className="text-xl text-gray-600">{content.headingLine2Prefix}</h2>
//     </div>
//   );
// };
// const TestingHero = () => {
//   const slides = [Hero1Content, Hero2Content];
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(true);
//   const slideCount = slides.length;

//   const slideInterval = useRef(null);

//   const startAutoSlide = () => {
//     slideInterval.current = setInterval(() => {
//       setCurrentSlide((prev) => prev + 1);
//       setIsTransitioning(true);
//     }, 20000);
//   };

//   useEffect(() => {
//     startAutoSlide();
//     return () => clearInterval(slideInterval.current);
//   }, []);

//   // Handle infinite loop snap
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
//       className="relative h-[500px] flex justify-center items-center overflow-hidden"
//       style={{
//         backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 2px, transparent 2px)`,
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

//       {/* Dots */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
//         {slides.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => {
//               clearInterval(slideInterval.current);
//               setCurrentSlide(idx);
//               setIsTransitioning(true);
//               startAutoSlide();
//             }}
//             className={`w-4 h-4 rounded-full ${idx === (currentSlide % slideCount) ? "bg-blue-600" : "bg-gray-300"
//               }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };
// export default TestingHero;


import React, { useState, useEffect, useRef } from "react";
import { UserCog, Trophy, Tag } from "lucide-react";

const Hero1Content = ({ pauseAutoSlide, resumeAutoSlide }) => {
    const content = {
        badge: "VRISTUDY - AI Powered Study Abroad CRM",
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
        <div className="w-full max-w-3xl mx-auto space-y-6 text-center">
            <div>
                <div className="inline-block px-5 py-1.5 mb-1 text-sm font-medium text-white bg-purple-600 rounded-full">
                    {content.badge}
                </div>
            </div>

            <h1
                className="text-3xl sm:text-4xl md:text-4xl font-bold  bg-clip-text text-transparent inline-block leading-tight"
                style={{
                    backgroundImage: "linear-gradient(to right, #00aaff, #a020f0)",
                }}
            >
                {content.headingLine1}
            </h1>

            <h2
                className="text-2xl sm:text-4xl md:text-4xl font-bold bg-clip-text text-transparent inline-block leading-tight"
                style={{
                    backgroundImage: "linear-gradient(to right, #00aaff, #a020f0)",
                }}>
                {content.headingLine2Prefix}{" "}
                <span className="text-fuchsia-700">{text}<span className="inline">|</span></span>
            </h2>

            <p className="text-[16px] max-w-lg mx-auto text-gray-800">
                {content.subText}
            </p>

            <form
                className="mt-8 flex flex-col sm:flex-row justify-center gap-3"
                onFocus={pauseAutoSlide}
                onBlur={resumeAutoSlide}
            >
                {/* <input
                    type="email"
                    placeholder={content.emailPlaceholder}
                    className="px-4 py-2 w-full sm:w-64 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                /> */}
                <button className="px-4 py-1.5 w-full sm:w-auto text-sm cursor-pointer text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">
                    {content.buttonText}
                </button>
            </form>

            <div className="mt-4 flex flex-wrap justify-center gap-6 text-gray-800">
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
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center h-full space-y-6 text-center px-4">
            <h1
                className="text-3xl sm:text-4xl md:text-4xl font-semibold bg-clip-text text-transparent"
                style={{
                    backgroundImage: "linear-gradient(to right, #00aaff, #a020f0)",
                }}
            >
                {content.headingLine1}
            </h1>

            <h2 className="text-xl text-gray-600">{content.headingLine2Prefix}</h2>
        </div>
    );
};

const TestingHero = () => {
    const slides = [Hero1Content, Hero2Content];
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const slideCount = slides.length;
    const slideInterval = useRef(null);

    const startAutoSlide = () => {
        slideInterval.current = setInterval(() => {
            setCurrentSlide((prev) => prev + 1);
            setIsTransitioning(true);
        }, 20000);
    };

    const pauseAutoSlide = () => clearInterval(slideInterval.current);

    const resumeAutoSlide = () => {
        pauseAutoSlide();
        startAutoSlide();
    };

    useEffect(() => {
        startAutoSlide();
        return () => pauseAutoSlide();
    }, []);

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
        <section className="relative h-[550px] flex justify-center items-center overflow-hidden bg-white">
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
                className="relative z-10 flex w-screen"
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
                            <Slide pauseAutoSlide={pauseAutoSlide} resumeAutoSlide={resumeAutoSlide} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            pauseAutoSlide();
                            setCurrentSlide(idx);
                            setIsTransitioning(true);
                            resumeAutoSlide();
                        }}
                        className={`w-4 h-4 rounded-full ${idx === currentSlide % slideCount ? "bg-blue-600" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default TestingHero;
