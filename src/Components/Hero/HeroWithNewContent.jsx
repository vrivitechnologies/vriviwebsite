import React, { useState, useEffect, useRef } from "react";
import { Productcontent, features, Vrivicontent } from "./HeroContent";
import StartFreeTrail from "../StartFreeTrail/StartFreeTrail";
import { useNavigate } from "react-router-dom";
const Hero1Content = ({ pauseAutoSlide, resumeAutoSlide }) => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate();

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
            {/* <div
                className="inline-block text-[45px] mt-7 mb-5 font-bold bg-gradient-to-r from-[#a020f0]  to-[#00aaff] bg-clip-text text-transparent"
            >
                {Productcontent.badge}
            </div> */}

            <div className="flex flex-col md:flex-row items-center  justify-between gap-12 mt-2">

                {/* LEFT SIDE */}
                <div className="md:w-2/3 space-y-3">
                    {/* Badge */}
                    <div className="flex items-center gap-2  ">
                        <div
                            className="inline-block md:text-4xl text-lg mt-8 font-bold bg-purple-500 text-white md:px-6 px-3 md:pt-2 md:pb-2.5 pt-1 pb-1.5 rounded-full"
                        >
                            {Productcontent.badge}
                        </div>
                        <div
                            className="inline-block md:text-3xl text-[16px] md:mt-12 mt-10 font-bold text-blue-500"
                        >
                            {Productcontent.subBadge}
                        </div>
                    </div>

                    <p className="text-3xl font-semibold mt-6 ">
                        {Productcontent.headingLine1}
                    </p>

                    <p className="text-3xl font-semibold ">
                        {Productcontent.headingLine2Prefix} <span className="text-fuchsia-700">{text}<span className="inline">|</span></span>
                    </p>

                    <p className="text-lg opacity-90 mt-6">
                        {Productcontent.subText}
                    </p>

                    {/* Features */}
                    {/* <div className="mt-6 mb-6 flex flex-wrap gap-6">
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
                    </div> */}

                    {/* Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                        {Productcontent.stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className={`${stat.bgColor} rounded-lg p-3 text-center shadow-md transition`}
                            >
                                <div className="text-sm text-start opacity-80">{stat.label}</div>
                                <div className="text-xl font-medium text-start">{stat.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Buttons */}
                    {/* <div className="flex flex-wrap gap-4">
                        <button  onClick={() => setShowForm(true)} className="px-6 py-3 bg-blue-500 cursor-pointer text-white font-semibold rounded-md  transition shadow-lg">
                            {Productcontent.buttonText}
                        </button>
                    </div> */}

                    <div className="flex w-full items-center justify-center mt-6 text-center mx-auto">
                        <button onClick={() => navigate("/vristudy")} className="px-6 py-3 bg-blue-500 cursor-pointer text-white font-semibold rounded-md  transition shadow-lg">
                            {Productcontent.buttonText}
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="hidden lg:flex md:w-1/2 justify-center">
                    <img
                        src={Productcontent.studyabroadImage}
                        alt="Study Abroad"
                        className="max-w-full h-full rounded-xl shadow-2xl border-4 border-white/10"
                    />
                </div>

                {showForm && <StartFreeTrail onClose={() => setShowForm(false)} />}
            </div>
        </>
    );

};

const Hero2Content = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* LEFT SIDE */}
            <div className="md:w-2/3 space-y-6">
                {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                    {Vrivicontent.headingLine1}
                </h1> */}
                <div
                    className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight bg-gradient-to-r from-[#a020f0]  to-[#00aaff] bg-clip-text text-transparent"
                >
                    {Vrivicontent.headingLine1}
                </div>

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

const HeroWithNewContent = () => {
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
        <section id="Home"
            className="relative lg:h-[580px] py-20 border-gray-200 border-b  lg:py-0 flex justify-center items-center overflow-hidden text-gray-900"
        >
            {/* Gradient background */}
            <div
                className="absolute inset-0 z-0 bg-white"

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
                        <div className="max-w-7xl ">
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

export default HeroWithNewContent;
