import React, { useEffect, useState, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/VriviWebsiteLogo.webp'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const navigate = useNavigate();
  // Ref for the products dropdown container
  const productsRef = useRef(null);

  const content = {
    logo: { icon: "🛡️", name: "umbrella" },
    rightLinks: {
      Home: "Home",
      Services: "Services",
      Products: "Products",
      Careers: "Careers",
      AboutUs: "About Us",
      contact: "Contact Us",
      signIn: "Sign in",
      cta: { icon: "🛍️", text: "Start free trial" }
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 py-2 transition-all duration-300 ${scrolled ? 'bg-white/60 backdrop-blur-md' : ''
          }`}
      >
        <div className="max-w-7xl md:px-0 px-6 mx-auto h-18 flex items-center justify-between">
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

            <a href="#" className="nav-link">
              {content.rightLinks.Services}
            </a>

            {/* Products Dropdown */}
            <div className="relative" ref={productsRef}>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="nav-link cursor-pointer flex items-center space-x-1"
                type="button"
              >
                <span>{content.rightLinks.Products}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {productsOpen && (
                <div className="absolute cursor-pointer top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                  <button
                    onClick={() => {
                      navigate("/vristudyhomepage");
                      setProductsOpen(false);
                    }}
                    className="block w-full cursor-pointer text-left px-4 py-2 hover:bg-gray-100"
                    type="button"
                  >
                    Study Abroad
                  </button>
                </div>
              )}
            </div>

            <a href="#" className="nav-link">
              {content.rightLinks.Careers}
            </a>
            <a href="#" className="nav-link">
              {content.rightLinks.AboutUs}
            </a>
            <a href="#" className="nav-link">
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
            <div className="text-xl font-bold text-black flex items-center gap-2">
              <span>{content.logo.icon}</span>
              <span>{content.logo.name}</span>
            </div>
            <button onClick={() => setSidebarOpen(false)}>
              <X className="h-6 w-6 text-black" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4 text-gray-800 font-medium">
            <a href="#" className="hover:text-black">
              {content.rightLinks.Services}
            </a>

            {/* Mobile Products Dropdown */}
            <div>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="hover:text-black w-full text-left flex items-center justify-between"
              >
                {content.rightLinks.Products}
                <ChevronDown className="h-4 w-4" />
              </button>
              {productsOpen && (
                <div className="ml-4 mt-2 flex flex-col space-y-2">
                  <button
                    onClick={() => {
                      navigate("/vristudyhomepage");
                      setSidebarOpen(false);
                      setProductsOpen(false);
                    }}
                    className="hover:text-black text-left"
                  >
                    Study Abroad
                  </button>
                </div>
              )}
            </div>

            <a href="#" className="hover:text-black">
              {content.rightLinks.Careers}
            </a>
            <a href="#" className="hover:text-black">
              {content.rightLinks.AboutUs}
            </a>
            <a href="#" className="hover:text-black">
              {content.rightLinks.contact}
            </a>
            {/* <a href="#" className="hover:text-black">
              {content.rightLinks.signIn}
            </a>
            <a
              href="#"
              className="bg-black text-white font-medium py-2 px-4 rounded-md text-center mt-2 hover:bg-gray-900"
            >
              {content.rightLinks.cta.icon} {content.rightLinks.cta.text}
            </a> */}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
