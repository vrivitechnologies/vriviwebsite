import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "../assets/VriviWebsiteLogo.webp"
const footerText = {
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
    email: "support@umbrella.com",
    phone: "+91 98765 43210",
    location: "Bangalore, India",
  },
  socialLinks: [
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaLinkedinIn />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
  ],
  copyright: `© 2023 Corporate WordPress Theme By WP Radiant | Proudly powered by WordPress`,
};

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-gray-900 text-gray-300 rounded-tr-4xl rounded-tl-4xl mt-10">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto md:px-4 px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* logo and  companyDescription */}
          <div className="items-center space-y-5 ">
            <div> <img
              src={logo} // replace with your actual logo path
              alt="Vrivi Technologies"
              className="h-12 w-auto "
            />
            </div>
            <p className="text-sm leading-6">{footerText.companyDescription}</p>
          </div>

          {/* Quick Links */}
          <div className="">
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {footerText.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.url} className="hover:text-white">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: {footerText.contactInfo.email}</li>
              <li>Phone: {footerText.contactInfo.phone}</li>
              <li>Location: {footerText.contactInfo.location}</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              {footerText.socialLinks.map((social, idx) => (
                <a key={idx} href={social.url} className="hover:text-white">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-4 text-center text-sm">
          {footerText.copyright}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
