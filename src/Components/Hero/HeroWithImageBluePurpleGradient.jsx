import React, { useState, useEffect, useRef } from "react";
import { Productcontent, features, Vrivicontent } from "./HeroContent";

const Hero1Content = ({ pauseAutoSlide, resumeAutoSlide }) => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const currentWord = Productcontent.rotatingWords[index];
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
            setIndex((prev) => (prev + 1) % Productcontent.rotatingWords.length);
        }

        return () => clearTimeout(timeout);
    }, [subIndex, deleting, index, Productcontent.rotatingWords]);

    return (
        <>

            {/* Badge */}
            {/* <div className="inline-block text-5xl font-medium mb-5">
                {Productcontent.badge}
            </div> */}

            <div className="flex flex-col md:flex-row items-center  justify-between gap-12">

                {/* LEFT SIDE */}
                <div className="md:w-2/3 space-y-6">
                    {/* Badge */}
                    <div className="inline-block text-3xl font-medium ">
                        {Productcontent.badge}
                    </div>
                    <p className="text-xl opacity-90">
                        {Productcontent.subText}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <button className="px-6 py-3 bg-blue-500 cursor-pointer text-white font-semibold rounded-md  transition shadow-lg">
                            {Productcontent.buttonText}
                        </button>
                    </div>

                    {/* Features */}
                    <div className="mt-4 flex flex-wrap gap-6">
                        {features.map((feature, idx) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2 "
                                >
                                    <Icon className="w-5 h-5 text-purple-500" />
                                    <span>{feature.text}</span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Stats */}
                    <div className=" grid grid-cols-1 sm:grid-cols-4 gap-3">
                        {Productcontent.stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className="bg-white backdrop-blur-sm rounded-lg p-3 text-center shadow-md hover:bg-white/20 transition"
                            >
                                <div className="text-sm text-start opacity-80">{stat.label}</div>
                                <div className="text-xl font-medium  text-start ">{stat.value}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={Productcontent.studyabroadImage}
                        alt="Study Abroad"
                        className="max-w-full h-full rounded-xl shadow-2xl border-4 border-white/10"
                    />
                </div>
            </div>
        </>
    );

};

const Hero2Content = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* LEFT SIDE */}
            <div className="md:w-2/3 space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                    {Vrivicontent.headingLine1}
                </h1>

                <h2 className="text-xl sm:text-2xl opacity-90">
                    {Vrivicontent.headingLine2Prefix}
                </h2>
            </div>

            {/* RIGHT SIDE */}
            <div className="md:w-1/2 flex justify-center">
                <img
                    src={Vrivicontent.companyBgImage}
                    alt="Company Background"
                    className="max-w-full h-full rounded-xl shadow-2xl border-4 border-white/10"
                />
            </div>
        </div>
    );
};

const HeroWithImageBluePurpleGradient = () => {
    const slides = [Hero1Content, Hero2Content];
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const slideCount = slides.length;
    const slideInterval = useRef(null);

    const startAutoSlide = () => {
        slideInterval.current = setInterval(() => {
            setCurrentSlide((prev) => prev + 1);
            setIsTransitioning(true);
        }, 60000);
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
        <section
            className="relative h-[580px] flex justify-center items-center overflow-hidden text-gray-900"
        >
            {/* Gradient background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "linear-gradient(135deg, #00aaff, #ffffff, #a020f0)",
                    opacity: 0.2,
                }}
            ></div>

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
                        className="w-screen flex-shrink-0 flex justify-center items-center px-6"
                    >
                        <div className="max-w-7xl">
                            <Slide
                                pauseAutoSlide={pauseAutoSlide}
                                resumeAutoSlide={resumeAutoSlide}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            pauseAutoSlide();
                            setCurrentSlide(idx);
                            setIsTransitioning(true);
                            resumeAutoSlide();
                        }}
                        className={`w-2 h-2 rounded-full ${idx === currentSlide % slideCount
                                ? "bg-gray-900"
                                : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </section>

    );
};

export default HeroWithImageBluePurpleGradient;
