import React, { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/VriviWebsiteLogo.webp"
import { content } from "./Content";

const HeaderWithBgWhite = () => {
    const [scrolled, setScrolled] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const navigate = useNavigate();

    const productsRefDesktop = useRef(null);
    const productsRefMobile = useRef(null);

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

    // Navigate home with target section
    const handleNavigateHomeToSection = (sectionId) => {
        setProductsOpen(false);
        setSidebarOpen(false);
        navigate("/", { state: { scrollTo: sectionId } });
    };

    // Smart handler that scrolls if on home, navigates otherwise
    const handleNavItemClick = (sectionId) => {
        if (window.location.pathname === "/") {
            handleScrollTo(sectionId);
        } else {
            handleNavigateHomeToSection(sectionId);
        }
    };

    // Navigate to products page
    const handleNavigateProducts = () => {
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

    // Close dropdown when clicking outside
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

    // Close dropdown if sidebar is closed
    useEffect(() => {
        if (!sidebarOpen) setProductsOpen(false);
    }, [sidebarOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full bg-blue-50 items-center  justify-center py-2 z-50 transition-all duration-300 ${scrolled ? "bg-white backdrop-blur-md" : ""
                    }`}
            >
                <div className="w-full  px-6 mx-auto h-12 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="h-14 w-auto" />
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex  items-center space-x-6 font-medium">
                        <button
                            type="button"
                            onClick={() => handleNavItemClick("Home")}
                            className="nav-link cursor-pointer "
                        >
                            {content.rightLinks.Home}
                        </button>

                        <button
                            type="button"
                            onClick={() => handleNavItemClick("services")}
                            className="nav-link cursor-pointer"
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
                                className="nav-link flex cursor-pointer items-center space-x-1"
                                aria-expanded={productsOpen}
                                aria-haspopup="menu"
                            >
                                <span>{content.rightLinks.Products}</span>
                                <ChevronDown className="h-4 w-4 mt-1 flex-shrink-0" />
                            </button>

                            {productsOpen && (
                                <div className="absolute top-full right-0 mt-2 w-72 bg-white shadow-xl rounded-md py-2 z-50">
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
                            onClick={() => handleNavItemClick("Careers")}
                            className="nav-link cursor-pointer"
                        >
                            {content.rightLinks.Careers}
                        </button>
                        <button
                            type="button"
                            onClick={() => handleNavItemClick("footer")}
                            className="nav-link cursor-pointer"
                        >
                            {content.rightLinks.AboutUs}
                        </button>
                        <button
                            type="button"
                            onClick={() => handleNavItemClick("footer")}
                            className="nav-link cursor-pointer"
                        >
                            {content.rightLinks.contact}
                        </button>

                        {/* Underline Hover Effect */}
                        <style jsx>{`
    .nav-link {
        position: relative;
        display: inline-flex;
        align-items: center;
        color: #1d4ed8; /* Tailwind blue-600 */
        padding-bottom: 4px;
    }
    .nav-link::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0%;
        height: 2px;
        background: #1d4ed8; /* underline matches link color */
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

                    <nav className="flex flex-col space-y-4 text-blue-600 font-medium">
                        <button
                            type="button"
                            onClick={() => handleNavItemClick("Home")}
                            className="hover:text-black text-left"
                        >
                            {content.rightLinks.Home}
                        </button>

                        <button
                            type="button"
                            onClick={() => handleNavItemClick("services")}
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
                                className="nav-link cursor-pointer"
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
                            onClick={() => handleNavItemClick("Careers")}
                            className="hover:text-black text-left"
                        >
                            {content.rightLinks.Careers}
                        </button>
                        <button
                            type="button"
                            onClick={() => handleNavItemClick("footer")}
                            className="hover:text-black text-left"
                        >
                            {content.rightLinks.AboutUs}
                        </button>
                        <button
                            type="button"
                            onClick={() => handleNavItemClick("footer")}
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

export default HeaderWithBgWhite;
