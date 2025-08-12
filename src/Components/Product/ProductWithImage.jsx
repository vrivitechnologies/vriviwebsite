import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "./ProductContent";
import { FaCheck } from "react-icons/fa6";

const ProductWithImage = () => {
    const navigate = useNavigate();

    return (
        <section
            id="products"
            //   className="py-6 bg-gradient-to-br from-purple-100 via-white to-blue-100"
            className="py-6 bg-gray-50"

        >
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-semibold text-center mb-3 text-gray-900">
                    Our Products
                </h2>

                {products.map((product) => (<>
                    <div className="bg-white rounded-xl shadow-2xl border-blue-100 border-2 ">
                        <h3 className="text-2xl font-semibold  text-purple-500 py-2 text-center rounded-t-xl">
                            {product.name}
                        </h3>
                        <div key={product.id}
                            className="flex flex-col md:flex-row items-center gap-6  overflow-hidden  hover:shadow-3xl transition-all duration-300 mb-12" >
                            {/* Product Image */}
                            <div className="md:w-2/3 relative overflow-hidden group px-2 ">

                                <img
                                    src={product.adminDasboard}
                                    alt={product.name}
                                    className="w-full h-full object-cover border-2 border-gray-100 transform group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div> */}
                            </div>

                            {/* Product Info */}
                            <div className="md:w-1/2 p-8">

                                <p className="text-gray-600 text-lg leading-relaxed mb-2">
                                    {product.description}
                                </p>
                                {/* Feature points */}
                                <ul className="mt-2 mb-6 space-y-2">
                                    {product.point.map((item, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700">
                                            <FaCheck className="bg-blue-400 text-white rounded-full p-1.5 text-2xl mr-2" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => navigate(product.link)}
                                    className="px-6 py-2 text-sm font-medium cursor-pointer text-white bg-gradient-to-r from-blue-500 to-purple-600 
                                    rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-purple-700 
                                     transition-all duration-300"
                                >
                                    Learn More →
                                </button>
                            </div>
                        </div>

                    </div>

                </>
                ))}
            </div>
        </section>
    );
};

export default ProductWithImage;
