// import React, { useState, useEffect } from 'react';
// const Hero = () => {
//   const content = {
//     headingLine1: "We Bring Software Solutions To Make Life Easier For Your Business.",
//     headingLine2Prefix: "Empowering Businesses with Innovative Technology Solutions.",
//   };

//   return (
//     <section
//        className="py-16 sm:py-20 px-4 sm:px-6 text-center h-screen flex justify-center items-center bg-gradient-to-r from-[#002ED0] to-[#1E64F0]"
//     //   style={{
//     //     backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)",
//     //     backgroundSize: "20px 20px",
//     //     backgroundColor: "#f2f2f2",
//     //   }}
//     >
//       {/* White glow effect */}
//       {/* <div className="absolute inset-0 z-0">
//         <div
//           className="w-full h-full"
//           style={{
//             background: "radial-gradient(ellipse at center, rgba(255,255,255,0.7) 40%, transparent 60%)",
//           }}
//         />
//       </div> */}
//       <div className="relative z-10 w-full  max-w-5xl text-white mx-auto space-y-6">

//         <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold ">
//           {content.headingLine1}
//         </h1>

//         <h2 className="text-2xl font-medium  ">
//           {content.headingLine2Prefix}{" "}
//         </h2>

//       </div>
//     </section>
//   );
// };

// export default Hero;

// bg-gradient-to-br from-[#00A6FF] to-[#9B00FF]



import React, { useState, useEffect } from 'react';
const Hero = () => {
  const content = {
    headingLine1: "We Bring Software Solutions To Make Life Easier For Your Business.",
    headingLine2Prefix: "Empowering Businesses with Innovative Technology Solutions.",
  };

//   return (
//     <section
//       className="py-16 sm:py-20 px-4 sm:px-6 text-center    h-screen flex  justify-center"
//       style={{
//         backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)",
//         backgroundSize: "20px 20px",
//         backgroundColor: "#f2f2f2",
//       }}
//     >
//       {/* White glow effect */}
//       <div className="absolute inset-0 z-0">
//         <div
//           className="w-full h-full"
//           style={{
//             background: "radial-gradient(ellipse at center, rgba(255,255,255,0.7) 40%, transparent 60%)",
//           }}
//         />
//       </div>
//       <div className="relative z-10 w-full pt-50 max-w-5xl mx-auto space-y-6">

//         <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-gray-900">
//           {content.headingLine1}
//         </h1>

//         <h2 className="text-2xl font-medium text-gray-900 ">
//           {content.headingLine2Prefix}{" "}
//         </h2>

//       </div>
//     </section>
//   );



// return (
//   <section
//     className="relative py-16 sm:py-20 px-4 sm:px-6 text-center h-screen flex justify-center items-center overflow-hidden"
//     style={{
//       backgroundImage: `
//         radial-gradient(circle, rgba(255,255,255,0.8) 2px, transparent 2px)
//       `,
//       backgroundSize: "20px 20px",
//       backgroundColor: "#ffffff",
//     }}
//   >
//     {/* Gradient overlay */}
//     <div className="absolute inset-0 z-0">
//       <div
//         className="w-full h-full"
//         style={{
//           background: "linear-gradient(135deg, #00aaff, #ffffff, #a020f0)",
//           opacity: 0.2,
//         }}
//       />
//     </div>

//     {/* Blinking dots overlay */}
//     <div
//       className="absolute inset-0 z-0 animate-blinkDots"
//       style={{
//         backgroundImage: `
//           radial-gradient(circle, rgba(0,170,255,0.8) 2px, transparent 2px),
//           radial-gradient(circle, rgba(160,32,240,0.8) 2px, transparent 2px)
//         `,
//         backgroundSize: "20px 20px, 20px 20px",
//         backgroundPosition: "0 0, 10px 10px",
//         mixBlendMode: "overlay",
//       }}
//     />

//     {/* Content */}
//     <div className="relative z-10 w-full  max-w-5xl mx-auto space-y-6">
//       <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-gray-900">
//         {content.headingLine1}
//       </h1>

//       <h2 className="text-2xl font-medium text-gray-900">
//         {content.headingLine2Prefix}{" "}
//       </h2>
//     </div>

//     <style jsx>{`
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
//   </section>
// );



//Good
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

      {/* Gradient Subheading */}
      <h2
        // className="text-2xl font-medium bg-clip-text text-transparent"
        // style={{
        //   backgroundImage: "linear-gradient(to right, #00aaff, #a020f0)",
        //   opacity: 0.85,
        // }}
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


//top to bottom
// return (
//   <section
//     className="relative py-16 sm:py-20 px-4 sm:px-6 text-center h-screen flex justify-center items-center overflow-hidden"
//     style={{
//       backgroundColor: "#ffffff",
//     }}
//   >
//     {/* Gradient background overlay */}
//     <div className="absolute inset-0 z-0">
//       <div
//         className="w-full h-full"
//         style={{
//           background: "linear-gradient(135deg, #00aaff, #ffffff, #a020f0)",
//           opacity: 0.15,
//         }}
//       />
//     </div>

//     {/* V-shape moving dot behind text */}
//     <span
//       className="absolute w-2 h-2 rounded-full z-0"
//       style={{
//         backgroundColor: "rgba(0,170,255,0.9)",
//         top: "0%",
//         left: "0%",
//         animation: "moveV 3s infinite ease-in-out",
//         boxShadow: "0 0 10px rgba(0,170,255,0.8), 0 0 20px rgba(0,170,255,0.6)",
//         filter: "blur(0.5px)",
//       }}
//     />

//     {/* Text content on top */}
//     <div className="relative z-10 w-full max-w-5xl mx-auto space-y-6">
//       <h1
//         className="text-3xl sm:text-4xl md:text-6xl font-bold bg-clip-text text-transparent"
//         style={{
//           backgroundImage: "linear-gradient(to right, #00aaff, #a020f0)",
//         }}
//       >
//         {content.headingLine1}
//       </h1>

//       <h2 className="text-2xl text-gray-600">
//         {content.headingLine2Prefix}
//       </h2>
//     </div>

//     <style jsx>{`
//       @keyframes moveV {
//         0% {
//           transform: translate(0, 0);
//           opacity: 1;
//         }
//         40% {
//           transform: translate(30vw, 40vh); /* down-right */
//           opacity: 1;
//         }
//         100% {
//           transform: translate(60vw, 0vh); /* up-right */
//           opacity: 0;
//         }
//       }
//     `}</style>
//   </section>
// );


//right to left to center
// return (
//   <section
//     className="relative py-16 sm:py-20 px-4 sm:px-6 text-center h-screen flex justify-center items-center overflow-hidden"
//     style={{
//       backgroundImage: `
//         radial-gradient(circle, rgba(255,255,255,0.8) 2px, transparent 2px)
//       `,
//       backgroundSize: "20px 20px",
//       backgroundColor: "#ffffff",
//     }}
//   >
//     {/* Gradient overlay */}
//     <div className="absolute inset-0 z-0">
//       <div
//         className="w-full h-full"
//         style={{
//           background: "linear-gradient(135deg, #00aaff, #ffffff, #a020f0)",
//           opacity: 0.2,
//         }}
//       />
//     </div>

//     {/* V-shape dots */}
//     <div className="absolute inset-0 z-0">
//       {/* Top-left to bottom center */}
//       <span className="dot left-dot"></span>
//       {/* Top-right to bottom center */}
//       <span className="dot right-dot"></span>
//     </div>

//     {/* Content */}
//     <div className="relative z-10 w-full max-w-5xl mx-auto space-y-6">
//       <h1
//         className="text-3xl sm:text-4xl md:text-6xl font-bold bg-clip-text text-transparent"
//         style={{
//           backgroundImage: "linear-gradient(to right, #00aaff, #a020f0)",
//         }}
//       >
//         {content.headingLine1}
//       </h1>
//       <h2 className="text-2xl text-gray-600">
//         {content.headingLine2Prefix}
//       </h2>
//     </div>

//     <style jsx>{`
//       .dot {
//         position: absolute;
//         width: 6px;
//         height: 6px;
//         background: radial-gradient(circle at center, #00aaff, #a020f0);
//         border-radius: 50%;
//         box-shadow: 0 0 8px rgba(0,170,255,0.8), 0 0 16px rgba(160,32,240,0.6);
//         opacity: 0;
//       }

//       /* Top-left → bottom center */
//       .left-dot {
//         top: 0;
//         left: 0;
//         animation: leftFall 3s linear infinite;
//       }

//       /* Top-right → bottom center */
//       .right-dot {
//         top: 0;
//         right: 0;
//         animation: rightFall 3s linear infinite;
//       }

//       @keyframes leftFall {
//         0% { transform: translate(0, 0); opacity: 1; }
//         100% { transform: translate(calc(50vw - 3px), calc(90vh - 20px)); opacity: 0; }
//       }

//       @keyframes rightFall {
//         0% { transform: translate(0, 0); opacity: 1; }
//         100% { transform: translate(calc(-50vw + 3px), calc(90vh - 20px)); opacity: 0; }
//       }
//     `}</style>
//   </section>
// );


//right to left
// return (
//   <section
//     className="relative py-16 sm:py-20 px-4 sm:px-6 text-center h-screen flex justify-center items-center overflow-hidden"
//     style={{
//       backgroundImage: `
//         radial-gradient(circle, rgba(255,255,255,0.8) 2px, transparent 2px)
//       `,
//       backgroundSize: "20px 20px",
//       backgroundColor: "#ffffff",
//     }}
//   >
//     {/* Gradient overlay */}
//     <div className="absolute inset-0 z-0">
//       <div
//         className="w-full h-full"
//         style={{
//           background: "linear-gradient(135deg, #00aaff, #ffffff, #a020f0)",
//           opacity: 0.2,
//         }}
//       />
//     </div>

//     {/* V-shape from right side */}
//     <div className="absolute inset-0 z-0">
//       {/* Top-right to middle-left */}
//       <span className="dot top-right-dot"></span>
//       {/* Bottom-right to middle-left */}
//       <span className="dot bottom-right-dot"></span>
//     </div>

//     {/* Content */}
//     <div className="relative z-10 w-full max-w-5xl mx-auto space-y-6">
//       <h1
//         className="text-3xl sm:text-4xl md:text-6xl font-bold bg-clip-text text-transparent"
//         style={{
//           backgroundImage: "linear-gradient(to right, #00aaff, #a020f0)",
//         }}
//       >
//         {content.headingLine1}
//       </h1>
//       <h2 className="text-2xl text-gray-600">
//         {content.headingLine2Prefix}
//       </h2>
//     </div>

//     <style jsx>{`
//       .dot {
//         position: absolute;
//         width: 6px;
//         height: 6px;
//         background: radial-gradient(circle at center, #00aaff, #a020f0);
//         border-radius: 50%;
//         box-shadow: 0 0 8px rgba(0,170,255,0.8), 0 0 16px rgba(160,32,240,0.6);
//         opacity: 0;
//       }

//       /* From top-right → middle-left */
//       .top-right-dot {
//         top: 0;
//         right: 0;
//         animation: topRightToLeft 3s linear infinite;
//       }

//       /* From bottom-right → middle-left */
//       .bottom-right-dot {
//         bottom: 0;
//         right: 0;
//         animation: bottomRightToLeft 3s linear infinite;
//       }

//       @keyframes topRightToLeft {
//         0% { transform: translate(0, 0); opacity: 1; }
//         100% { transform: translate(calc(-90vw + 3px), calc(50vh - 50%)); opacity: 0; }
//       }

//       @keyframes bottomRightToLeft {
//         0% { transform: translate(0, 0); opacity: 1; }
//         100% { transform: translate(calc(-90vw + 3px), calc(-50vh + 50%)); opacity: 0; }
//       }
//     `}</style>
//   </section>
// );






};

export default Hero;


