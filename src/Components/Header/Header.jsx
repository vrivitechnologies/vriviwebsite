import React, { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/VriviWebsiteLogo.webp";

export const content = {
    logo: logo,
    rightLinks: {
        Services: "Services",
        Products: "Products",
        Careers: "Careers",
        AboutUs: "About Us",
        contact: "Contact Us",
        Home:"Home"
    },
    product: "VRISTUDY - Study Abroad CRM"
};

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const navigate = useNavigate();

    // Separate refs for desktop & mobile dropdowns
    const productsRefDesktop = useRef(null);
    const productsRefMobile = useRef(null);

    const content = {
        logo: logo,
        rightLinks: {
            Services: "Services",
            Products: "Products",
            Careers: "Careers",
            AboutUs: "About Us",
            contact: "Contact Us",
        },
        product: "VRISTUDY - Study Abroad CRM"
    };

    // Smooth scroll to section (with header offset)
    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // adjust to your header height
            const top = element.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
        setSidebarOpen(false);
    };

    // Navigate to products page (closes menus)
    const handleNavigateProducts = (e) => {
        // optional: e && e.preventDefault();
        setProductsOpen(false);
        setSidebarOpen(false);
        navigate("/vristudyhomepage");
    };

    // Sticky header effect
    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    // Close dropdown when clicking outside (use 'click' so button onClick runs first)
    useEffect(() => {
        const handleClickOutside = (event) => {
            const desktopContains =
                productsRefDesktop.current &&
                productsRefDesktop.current.contains(event.target);
            const mobileContains =
                productsRefMobile.current &&
                productsRefMobile.current.contains(event.target);

            if (!desktopContains && !mobileContains) {
                setProductsOpen(false);
            }
        };

        if (productsOpen) {
            document.addEventListener("click", handleClickOutside);
        }
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [productsOpen]);

    // Close dropdown on Escape key
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") setProductsOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // Close dropdown if sidebar is closed (keeps state tidy)
    useEffect(() => {
        if (!sidebarOpen) setProductsOpen(false);
    }, [sidebarOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full items-center justify-center py-2 z-50 transition-all duration-300 ${scrolled ? "bg-white/60 backdrop-blur-md" : ""
                    }`}
            >
                <div className="max-w-7xl md:px-0 px-6 mx-auto h-12 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="h-14 w-auto" />
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-6 font-medium">
                        <button
                            type="button"
                            onClick={() => handleScrollTo("Home")}
                            className="nav-link"
                            
                        >
                            {content.rightLinks.Services}
                        </button>

                        <button
                            type="button"
                            onClick={() => handleScrollTo("services")}
                            className="nav-link"
                        >
                            {content.rightLinks.Services}
                        </button>
                        

                        {/* Products (desktop) */}
                        <div
                            className="relative flex items-center space-x-1"
                            ref={productsRefDesktop}
                        >
                            <button
                                type="button"
                                onClick={() => setProductsOpen((p) => !p)}
                                className="nav-link flex items-center space-x-1"
                                aria-expanded={productsOpen}
                                aria-haspopup="menu"
                            >
                                <span>{content.rightLinks.Products}</span>
                                <ChevronDown className="h-4 w-4 mt-1 flex-shrink-0" />
                            </button>

                            {productsOpen && (
                                <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-xl rounded-md py-2 z-50">
                                    <button
                                        type="button"
                                        onClick={handleNavigateProducts}
                                        className="block w-full text-sm cursor-pointer text-left px-4 py-2 hover:bg-gray-100"
                                    >
                                        {content.product}
                                    </button>
                                </div>
                            )}
                        </div>

                        <button
                            type="button"
                            onClick={() => handleScrollTo("Careers")}
                            className="nav-link"
                        >
                            {content.rightLinks.Careers}
                        </button>
                        <button
                            type="button"
                            onClick={() => handleScrollTo("footer")}
                            className="nav-link"
                        >
                            {content.rightLinks.AboutUs}
                        </button>
                        <button
                            type="button"
                            onClick={() => handleScrollTo("footer")}
                            className="nav-link"
                        >
                            {content.rightLinks.contact}
                        </button>

                        {/* Underline Hover Effect */}
                        <style jsx>{`
              .nav-link {
                position: relative;
                display: inline-flex;
                align-items: center;
                color: #1f2937;
                padding-bottom: 4px;
              }
              .nav-link::after {
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                width: 0%;
                height: 2px;
                background: #0056b3;
                transition: width 0.4s ease;
              }
              .nav-link:hover::after {
                width: 100%;
              }
            `}</style>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden z-50">
                        <button
                            type="button"
                            onClick={() => setSidebarOpen((s) => !s)}
                            aria-expanded={sidebarOpen}
                            aria-label="Toggle menu"
                        >
                            {sidebarOpen ? (
                                <X className="h-6 w-6 text-black" />
                            ) : (
                                <Menu className="h-6 w-6 text-black cursor-pointer" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar */}
            <div
                className={`fixed inset-0 transition-all duration-300 z-[60] ${sidebarOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Overlay */}
                <div
                    className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                    onClick={() => setSidebarOpen(false)}
                />

                {/* Drawer */}
                <div className="fixed top-0 right-0 w-72 h-full bg-white shadow-lg p-6 flex flex-col z-[70]">
                    <div className="flex items-center justify-between mb-6">
                        <img src={logo} alt="Logo" className="h-10" />
                        <button type="button" onClick={() => setSidebarOpen(false)}>
                            <X className="h-6 w-6 text-black" />
                        </button>
                    </div>

                    <nav className="flex flex-col space-y-4 text-gray-800 font-medium">
                        <button
                            type="button"
                            onClick={() => handleScrollTo("services")}
                            className="hover:text-black text-left"
                        >
                            {content.rightLinks.Services}
                        </button>

                        {/* Mobile Products Dropdown */}
                        <div
                            className="relative flex items-center space-x-1"
                            ref={productsRefMobile}
                        >
                            <button
                                type="button"
                                onClick={() => setProductsOpen((p) => !p)}
                                className="nav-link"
                            >
                                {content.rightLinks.Products}
                            </button>
                            <button
                                type="button"
                                onClick={() => setProductsOpen((p) => !p)}
                                className="p-1"
                                aria-label="Toggle products"
                            >
                                <ChevronDown className="h-4 w-4 mt-1 flex-shrink-0" />
                            </button>
                            {productsOpen && (
                                <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-xl rounded-md py-2 z-50">
                                    <button
                                        onClick={handleNavigateProducts}
                                        className="block w-full text-sm text-left px-4 py-2 hover:bg-gray-100"
                                    >
                                        Study Abroad
                                    </button>
                                </div>
                            )}
                        </div>

                        <button
                            type="button"
                            onClick={() => handleScrollTo("Careers")}
                            className="hover:text-black text-left"
                        >
                            {content.rightLinks.Careers}
                        </button>
                        <button
                            type="button"
                            onClick={() => handleScrollTo("footer")}
                            className="hover:text-black text-left"
                        >
                            {content.rightLinks.AboutUs}
                        </button>
                        <button
                            type="button"
                            onClick={() => handleScrollTo("footer")}
                            className="hover:text-black text-left"
                        >
                            {content.rightLinks.contact}
                        </button>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;
