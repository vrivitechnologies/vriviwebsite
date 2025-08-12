import React from "react";
import { footerText } from "./FooterContent";
import logo from "../../assets/VriviWebsiteLogo.webp"

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
              <li>WhatsApp: {footerText.contactInfo.WhatsApp}</li>
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
