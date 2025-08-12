import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "./ProductContent";

const OurProducts = () => {
  const navigate = useNavigate();
  return (
    <section id="products" className="py-10 bg-gradient-to-br from-blue-50  to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl  font-semibold text-center mb-10 text-gray-900">
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
              {/* Feature points */}
              <ul className="mt-4 space-y-2">
                {product.point.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <FaCheck className="text-blue-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
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




