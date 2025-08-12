import React, { useState, useEffect } from 'react';
const Hero = () => {
  const content = {
    headingLine1: "We Bring Software Solutions To Make Life Easier For Your Business.",
    headingLine2Prefix: "Empowering Businesses with Innovative Technology Solutions.",
  };

  return (
    <section
      className="relative py-16 sm:py-20 px-4 sm:px-6 text-center h-screen flex justify-center items-center overflow-hidden"
      style={{
        backgroundImage: `
        radial-gradient(circle, rgba(255,255,255,0.8) 2px, transparent 2px)
      `,
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

      {/* Blinking dots overlay */}
      <div
        className="absolute inset-0 z-0 animate-blinkDots"
        style={{
          backgroundImage: `
          radial-gradient(circle, rgba(0,170,255,0.8) 2px, transparent 2px),
          radial-gradient(circle, rgba(160,32,240,0.8) 2px, transparent 2px)
        `,
          backgroundSize: "20px 20px, 20px 20px",
          backgroundPosition: "0 0, 10px 10px",
          mixBlendMode: "overlay",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto space-y-6">
        {/* Gradient Heading */}
        <h1
          className="text-3xl sm:text-4xl md:text-6xl font-semibold bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(to right, #00aaff, #a020f0)",
          }}
        >
          {content.headingLine1}
        </h1>

        <h2
          className="text-2xl text-gray-600"

        >
          {content.headingLine2Prefix}
        </h2>
      </div>

      <style jsx>{`
      @keyframes blinkDots {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
      }
      .animate-blinkDots {
        animation: blinkDots 2s infinite ease-in-out;
      }
    `}</style>
    </section>
  );

};

export default Hero;
