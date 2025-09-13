import React, { useEffect } from 'react';
import Services from './Services/Services';
import Expertise from './Expertise/Expertise';
import CareersSection from './Careers/Careers';
import { useLocation } from 'react-router-dom';
import ProductWithImage from './Product/ProductWithImage';
import HeroWithNewContent from './Hero/HeroWithNewContent';

const HomePage = () => {

  const location = useLocation();

  useEffect(() => {
  let id = location.state?.scrollTo || window.location.hash.replace("#", "");

  if (id) {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }
}, [location]);


  return (
    <>
      <HeroWithNewContent></HeroWithNewContent>
      <ProductWithImage></ProductWithImage>
      <Services />

      <Expertise></Expertise>

      <CareersSection />

    </>
  );
};

export default HomePage;



// import React, { useEffect, useRef } from "react";
// import Services from "./Services/Services";
// import Expertise from "./Expertise/Expertise";
// import CareersSection from "./Careers/Careers";
// import { useLocation } from "react-router-dom";
// import ProductWithImage from "./Product/ProductWithImage";
// import HeroWithNewContent from "./Hero/HeroWithNewContent";

// const HomePage = () => {
//   const location = useLocation();

//   // Refs for each section
//   const heroRef = useRef(null);
//   const productRef = useRef(null);
//   const servicesRef = useRef(null);
//   const expertiseRef = useRef(null);
//   const careersRef = useRef(null);

//   // Handle scroll to specific section if hash exists
//   useEffect(() => {
//     let id = location.state?.scrollTo || window.location.hash.replace("#", "");
//     if (id) {
//       const element = document.getElementById(id);
//       if (element) {
//         const offset = 80;
//         const top = element.getBoundingClientRect().top + window.scrollY - offset;
//         window.scrollTo({ top, behavior: "smooth" });
//       }
//     }
//   }, [location]);

//   // Update hash in URL while scrolling
//   useEffect(() => {
//     const sections = [
//       { id: "home", ref: heroRef },
//       { id: "products", ref: productRef },
//       { id: "services", ref: servicesRef },
//       { id: "expertise", ref: expertiseRef },
//       { id: "careers", ref: careersRef },
//     ];

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const newHash = `#${entry.target.id}`;
//             if (window.location.hash !== newHash) {
//               window.history.replaceState(null, "", newHash);
//             }
//           }
//         });
//       },
//       { threshold: 0.6 } // Section must be at least 60% visible
//     );

//     sections.forEach((section) => {
//       if (section.ref.current) {
//         observer.observe(section.ref.current);
//       }
//     });

//     return () => {
//       sections.forEach((section) => {
//         if (section.ref.current) {
//           observer.unobserve(section.ref.current);
//         }
//       });
//     };
//   }, []);

//   return (
//     <>
//       <div id="home" ref={heroRef}>
//         <HeroWithNewContent />
//       </div>

//       <div id="products" ref={productRef}>
//         <ProductWithImage />
//       </div>

//       <div id="services" ref={servicesRef}>
//         <Services />
//       </div>

//       <div id="expertise" ref={expertiseRef}>
//         <Expertise />
//       </div>

//       <div id="careers" ref={careersRef}>
//         <CareersSection />
//       </div>
//     </>
//   );
// };

// export default HomePage;
