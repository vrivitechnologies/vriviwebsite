import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import React from "react";

export const footerText = {
  companyName: "Vrivi Technologies",
  companyDescription:
    "At Vrivi Technologies, we are committed to empowering businesses with cutting-edge technology solutions that drive innovation, efficiency, and growth. With a deep understanding of modern software development, our team of experts is dedicated to transforming ideas into reality and enabling our clients to thrive in a rapidly evolving digital landscape.",
  quickLinks: [
    { label: "Home", url: "/" },
    { label: "Services", url: "#services" },
    { label: "Products", url: "#products" },
    { label: "Our Expertise", url: "#expertise" },
    { label: "Careers", url: "#Careers" },
  ],
  contactInfo: {
    email: "contact@vrivi.com",
    WhatsApp: "+91 9398969103",
    location: "Nallagandla ,Hyderabad, India",
  },
  socialLinks: [
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaLinkedinIn />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
  ],
  copyright: `© 2025 VRIVI Technologies LLP | All rights reserved`,
};