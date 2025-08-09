// import React from "react";
// import { FaUserGraduate, FaFileAlt, FaChartLine, FaComments, FaGlobe } from "react-icons/fa";

// const OurProducts = () => {
//   return (
//     <section id="products" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        
//         {/* Left Content */}
//         <div>
//           <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Product: StudyAbroad CRM</h2>
//           <p className="text-lg text-gray-600 mb-8">
//             A comprehensive CRM platform designed for study abroad consultancies to manage students, applications, and documents effortlessly — all in one place.
//           </p>
          
//           <ul className="space-y-4">
//             <li className="flex items-start">
//               <FaUserGraduate className="text-indigo-600 text-2xl mt-1" />
//               <span className="ml-3 text-gray-700 text-lg">Student & Lead Management</span>
//             </li>
//             <li className="flex items-start">
//               <FaFileAlt className="text-indigo-600 text-2xl mt-1" />
//               <span className="ml-3 text-gray-700 text-lg">Application & Document Tracking</span>
//             </li>
//             <li className="flex items-start">
//               <FaChartLine className="text-indigo-600 text-2xl mt-1" />
//               <span className="ml-3 text-gray-700 text-lg">Analytics & Reporting</span>
//             </li>
//             <li className="flex items-start">
//               <FaComments className="text-indigo-600 text-2xl mt-1" />
//               <span className="ml-3 text-gray-700 text-lg">Integrated Communication Tools</span>
//             </li>
//             <li className="flex items-start">
//               <FaGlobe className="text-indigo-600 text-2xl mt-1" />
//               <span className="ml-3 text-gray-700 text-lg">Global University Database</span>
//             </li>
//           </ul>

//           <button className="mt-8 px-6 py-3 bg-indigo-600 text-white text-lg rounded-lg shadow hover:bg-indigo-700 transition">
//             Learn More
//           </button>
//         </div>

//         {/* Right Product Image */}
//         <div className="flex justify-center">
//           <img
//             src="https://via.placeholder.com/500x350.png?text=StudyAbroad+CRM"
//             alt="StudyAbroad CRM"
//             className="rounded-xl shadow-lg"
//           />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default OurProducts;

// src/components/Products.js


import React from "react";
import { useNavigate } from "react-router-dom";

const OurProducts = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "StudyAbroad CRM",
      description:
        "A complete CRM platform designed for overseas education consultants to manage leads, applications, and communication effectively.",
      link: "/vristudyhomepage",
    },
    {
      id: 2,
      name: "Another Product",
      description: "This is a short description of another product.",
      link: "/products/another",
    },
  ];

return (
  <section id="products" className="py-20 bg-gradient-to-br from-blue-50  to-purple-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl  font-semibold text-center mb-12 text-gray-900">
     <span className="">Our Products</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl  p-6 shadow-md border border-blue-300 
                       hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 
                       transform transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold  ">
                {product.name}
              </h3>
              <span className="text-3xl"></span>
            </div>
            <p className="mt-3 text-gray-600 leading-relaxed">
              {product.description}
            </p>
            <button
              onClick={() => navigate(product.link)}
              className="mt-6 cursor-pointer text-blue-600 
                          focus:ring-4 focus:ring-blue-200 
                         transition-all duration-300"
            >
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

};

export default OurProducts;




