import React, { useEffect, useState, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/VriviWebsiteLogo.webp'
import Pricing from './Pricing';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const navigate = useNavigate();
  // Ref for the products dropdown container
  const productsRef = useRef(null);

  const content = {
    rightLinks: {
      Home: "Home",
      Features: "Features",
      Products: "Products",
      HowItWorks: "How It Works",
      Pricing: "Pricing",
      AboutUs: "About Us",
      contact: "Contact Us",
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close products dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (productsRef.current && !productsRef.current.contains(event.target)) {
        setProductsOpen(false);
      }
    }
    if (productsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener on unmount or when productsOpen changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [productsOpen]);

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 w-full z-50 py-2  transition-all duration-300 ${scrolled ? 'bg-white/60 backdrop-blur-md' : ''
//           }`}
//       >
//         <div className="lg:max-w-7xl md:px-0 w-full px-6 mx-auto h-18 flex items-center justify-between">
//           {/* Left: Logo */}
//           <div className="flex items-center">
//             <Link to="/">
//               <img
//                 src={logo}
//                 alt="Umbrella Logo"
//                 className="h-14 w-auto cursor-pointer"
//               />
//             </Link>
//           </div>

//           {/* Right: Links */}
//           <nav className="hidden md:flex items-center space-x-6 text-gray-800 font-medium">
//             <a href="/" className="nav-link">
//               {content.rightLinks.Home}
//             </a>

//             <a href="#Features" className="nav-link">
//               {content.rightLinks.Features}
//             </a>

//             <a href="#How It Works" className="nav-link">
//               {content.rightLinks.HowItWorks}
//             </a>
            

//             <a href="#Pricing" className="nav-link">
//               {content.rightLinks.Pricing}
//             </a>
//             <a href="#footer" className="nav-link">
//               {content.rightLinks.AboutUs}
//             </a>
//             <a href="#footer" className="nav-link">
//               {content.rightLinks.contact}
//             </a>
//           </nav>

//           {/* Add this style jsx below in your component */}
//           <style jsx>{`
//   .nav-link {
//     position: relative;
//     display: inline-flex;
//     align-items: center;
//     color: #1f2937; /* gray-800 */
//     padding-bottom: 4px;
//     text-decoration: none;
//     transition: color 0.3s ease;
//   }
//   .nav-link::after {
//     content: '';
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     width: 0%;
//     height: 2px;
//     background: #0056b3; /* Solid blue underline */
//     transition: width 0.4s ease;
//   }
//   .nav-link:hover {
//     color: #003d82; /* Darker blue on hover */
//   }
//   .nav-link:hover::after {
//     width: 100%;
//   }
// `}</style>


//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden z-50">
//             <button onClick={() => setSidebarOpen(!sidebarOpen)}>
//               {sidebarOpen ? (
//                 <X className="h-6 w-6 text-black" />
//               ) : (
//                 <Menu className="h-6 w-6 text-black" />
//               )}
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Sidebar */}
//       <div
//         className={`fixed inset-0 transition-all duration-300 z-[60] ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'
//           }`}
//       >
//         {/* Overlay */}
//         <div
//           className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
//             }`}
//           onClick={() => setSidebarOpen(false)}
//         ></div>

//         {/* Drawer */}
//         <div className="fixed top-0 right-0 w-72 h-full bg-white shadow-lg p-6 flex flex-col z-[70]">
//           <div className="flex items-center justify-between mb-6">
//             <button onClick={() => setSidebarOpen(false)}>
//               <X className="h-6 w-6 text-black" />
//             </button>
//           </div>

//           <nav className="flex flex-col space-y-4 text-gray-800 font-medium">
//             <a
//               href="/"
//               onClick={() => setSidebarOpen(false)}
//               className="hover:text-black"
//             >
//               {content.rightLinks.Home}
//             </a>

//             <a
//               href="#Features"
//               onClick={() => setSidebarOpen(false)}
//               className="hover:text-black"
//             >
//               {content.rightLinks.Features}
//             </a>

//             <a
//               href="#How It Works"
//               onClick={() => setSidebarOpen(false)}
//               className="hover:text-black"
//             >
//               {content.rightLinks.HowItWorks}
//             </a>

//             <a
//               href="#Pricing"
//               onClick={() => setSidebarOpen(false)}
//               className="hover:text-black"
//             >
//               {content.rightLinks.Pricing}
//             </a>

//             <a
//               href="#footer"
//               onClick={() => setSidebarOpen(false)}
//               className="hover:text-black"
//             >
//               {content.rightLinks.AboutUs}
//             </a>

//             <a
//               href="#footer"
//               onClick={() => setSidebarOpen(false)}
//               className="hover:text-black"
//             >
//               {content.rightLinks.contact}
//             </a>
//           </nav>
//         </div>
//       </div>

//     </>
//   );








 return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 py-2 bg-white transition-all duration-300 ${scrolled ? 'bg-white backdrop-blur-md' : ''
          }`}
      >
        <div className="lg:max-w-7xl md:px-0 w-full px-6 mx-auto h-12 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logo}
                alt="Umbrella Logo"
                className="h-14 w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Right: Links */}
          <nav className="hidden md:flex items-center space-x-6 text-gray-800 font-medium">
            <a href="/" className="nav-link">
              {content.rightLinks.Home}
            </a>

            <a href="#Features" className="nav-link">
              {content.rightLinks.Features}
            </a>

            <a href="#How It Works" className="nav-link">
              {content.rightLinks.HowItWorks}
            </a>
            

            <a href="#Pricing" className="nav-link">
              {content.rightLinks.Pricing}
            </a>
            <a href="#footer" className="nav-link">
              {content.rightLinks.AboutUs}
            </a>
            <a href="#footer" className="nav-link">
              {content.rightLinks.contact}
            </a>
          </nav>

          {/* Add this style jsx below in your component */}
          <style jsx>{`
  .nav-link {
    position: relative;
    display: inline-flex;
    align-items: center;
    color: #1f2937; /* gray-800 */
    padding-bottom: 4px;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  .nav-link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0%;
    height: 2px;
    background: #0056b3; /* Solid blue underline */
    transition: width 0.4s ease;
  }
  .nav-link:hover {
    color: #003d82; /* Darker blue on hover */
  }
  .nav-link:hover::after {
    width: 100%;
  }
`}</style>


          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-50">
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? (
                <X className="h-6 w-6 text-black" />
              ) : (
                <Menu className="h-6 w-6 text-black" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 transition-all duration-300 z-[60] ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          onClick={() => setSidebarOpen(false)}
        ></div>

        {/* Drawer */}
        <div className="fixed top-0 right-0 w-72 h-full bg-white shadow-lg p-6 flex flex-col z-[70]">
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => setSidebarOpen(false)}>
              <X className="h-6 w-6 text-black" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4 text-gray-800 font-medium">
            <a
              href="/"
              onClick={() => setSidebarOpen(false)}
              className="hover:text-black"
            >
              {content.rightLinks.Home}
            </a>

            <a
              href="#Features"
              onClick={() => setSidebarOpen(false)}
              className="hover:text-black"
            >
              {content.rightLinks.Features}
            </a>

            <a
              href="#How It Works"
              onClick={() => setSidebarOpen(false)}
              className="hover:text-black"
            >
              {content.rightLinks.HowItWorks}
            </a>

            <a
              href="#Pricing"
              onClick={() => setSidebarOpen(false)}
              className="hover:text-black"
            >
              {content.rightLinks.Pricing}
            </a>

            <a
              href="#footer"
              onClick={() => setSidebarOpen(false)}
              className="hover:text-black"
            >
              {content.rightLinks.AboutUs}
            </a>

            <a
              href="#footer"
              onClick={() => setSidebarOpen(false)}
              className="hover:text-black"
            >
              {content.rightLinks.contact}
            </a>
          </nav>
        </div>
      </div>

    </>
  );


};

export default Header;
