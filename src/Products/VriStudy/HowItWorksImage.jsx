import React from "react";
import StudyAbroadWorkFlow from "../../assets/StudyAbroadWorkFlow.png";

const HowItWorksImage = () => {
    return (
        <section
            id="How It Works"
            className="py-20 lg:max-w-5xl mx-auto w-full lg:px-0 px-4"
        >
            {/* Heading */}
            <h2 className="md:text-4xl text-2xl font-semibold text-center mb-16 text-black">
                How It Works
            </h2>

            {/* Image Container */}
            <div className="flex justify-center">
                <div className="relative group">
                    <div className=" "></div>
                    <div className="relative bg-white rounded-2xl  overflow-hidden ">
                        <img 
                            src={StudyAbroadWorkFlow} 
                            alt="Study Abroad Workflow" 
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksImage;

// import React from "react";
// import StudyAbroadWorkFlow from "../../assets/StudyAbroadWorkFlow.png";

// const HowItWorksImage = () => {
//     return (
//         <section
//             id="How It Works"
//             className="py-20 lg:max-w-6xl mx-auto w-full lg:px-0 px-4 relative overflow-hidden"
//         >
//             {/* Background Elements */}
//             <div className="absolute inset-0 -z-10">
//                 <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse"></div>
//                 <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
//             </div>

//             {/* Enhanced Heading Section */}
//             <div className="text-center mb-16 relative">
//                 <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-700 text-sm font-semibold mb-6 shadow-lg border border-white/40">
//                     <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
//                     Simple Process Overview
//                 </div>
                
//                 <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
//                     How It Works
//                 </h2>
                
//                 <div className="flex items-center justify-center mb-6">
//                     <div className="h-1 w-20 bg-gradient-to-r from-transparent via-blue-300 to-blue-500 rounded-full"></div>
//                     <div className="h-2 w-2 bg-blue-500 rounded-full mx-3"></div>
//                     <div className="h-1 w-20 bg-gradient-to-l from-transparent via-purple-300 to-purple-500 rounded-full"></div>
//                 </div>
                
//                 <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
//                     Our streamlined workflow guides you through every step of your study abroad journey
//                 </p>
//             </div>

//             {/* Enhanced Image Container */}
//             <div className="flex justify-center relative">
//                 <div className="relative group max-w-5xl w-full">
//                     {/* Floating decorative elements */}
//                     <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-400/60 to-cyan-400/60 rounded-full blur-lg group-hover:animate-bounce transition-all duration-300"></div>
//                     <div className="absolute -top-6 -right-10 w-12 h-12 bg-gradient-to-br from-purple-400/50 to-pink-400/50 rounded-full blur-md group-hover:animate-bounce transition-all duration-300" style={{ animationDelay: '0.5s' }}></div>
//                     <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-br from-emerald-400/40 to-teal-400/40 rounded-full blur-xl group-hover:animate-bounce transition-all duration-300" style={{ animationDelay: '1s' }}></div>
//                     <div className="absolute -bottom-6 -right-8 w-14 h-14 bg-gradient-to-br from-yellow-400/50 to-orange-400/50 rounded-full blur-lg group-hover:animate-bounce transition-all duration-300" style={{ animationDelay: '1.5s' }}></div>
                    
//                     {/* Main container with enhanced styling */}
//                     <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-white/60 shadow-2xl overflow-hidden transform transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-3xl">
//                         {/* Top gradient bar */}
//                         <div className="h-4 bg-gradient-to-r from-blue-500 via-indigo-500 via-purple-500 via-pink-500 to-orange-500 relative">
//                             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
//                         </div>
                        
//                         {/* Content wrapper with dots background */}
//                         <div 
//                             className="relative p-8 bg-gradient-to-br from-gray-50/90 via-white/95 to-blue-50/90"
//                             style={{
//                                 backgroundImage: `radial-gradient(circle, #e5e7eb 1px, transparent 1px)`,
//                                 backgroundSize: '20px 20px',
//                                 backgroundPosition: '0 0, 10px 10px'
//                             }}
//                         >
//                             {/* Enhanced image container */}
//                             <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-gray-100/70 group-hover:border-gray-200/70 transition-all duration-500">
//                                 {/* Image with overlay effects */}
//                                 <div className="relative overflow-hidden">
//                                     <img 
//                                         src={StudyAbroadWorkFlow} 
//                                         alt="Study Abroad Workflow" 
//                                         className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
//                                     />
                                    
//                                     {/* Subtle gradient overlay */}
//                                     <div className="absolute inset-0 bg-gradient-to-t from-blue-900/5 via-transparent to-purple-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                    
//                                     {/* Corner decorative accents */}
//                                     <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-blue-400/70 rounded-tl-xl"></div>
//                                     <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-purple-400/70 rounded-tr-xl"></div>
//                                     <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-emerald-400/70 rounded-bl-xl"></div>
//                                     <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-pink-400/70 rounded-br-xl"></div>
//                                 </div>
//                             </div>
//                         </div>
                        
//                         {/* Enhanced bottom info bar */}
//                         <div className="px-8 py-5 bg-gradient-to-r from-white/98 via-gray-50/98 to-white/98 border-t-2 border-gray-100/80 backdrop-blur-lg">
//                             <div className="flex items-center justify-center gap-8 text-sm">
//                                 <div className="flex items-center gap-3 px-4 py-2 bg-white/90 rounded-full shadow-md border border-gray-100/80 transition-all duration-300 hover:shadow-lg">
//                                     <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
//                                     <span className="text-gray-700 font-semibold">6 Steps</span>
//                                 </div>
                                
//                                 <div className="flex items-center gap-3 px-4 py-2 bg-white/90 rounded-full shadow-md border border-gray-100/80 transition-all duration-300 hover:shadow-lg">
//                                     <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
//                                     <span className="text-gray-700 font-semibold">End-to-End</span>
//                                 </div>
                                
//                                 <div className="flex items-center gap-3 px-4 py-2 bg-white/90 rounded-full shadow-md border border-gray-100/80 transition-all duration-300 hover:shadow-lg">
//                                     <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
//                                     <span className="text-gray-700 font-semibold">Guided Process</span>
//                                 </div>
//                             </div>
//                         </div>
                        
//                         {/* Subtle outer glow effect */}
//                         <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
//                     </div>
//                 </div>
//             </div>

//             {/* Call to action section */}
//             <div className="text-center mt-16">
//                 <div className="max-w-3xl mx-auto">
//                     <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                         Ready to start your journey? Our comprehensive workflow ensures nothing is left to chance, 
//                         guiding you seamlessly from application to enrollment.
//                     </p>
                    
//                     <div className="flex flex-wrap items-center justify-center gap-4">
//                         <div className="flex items-center gap-3 px-5 py-3 bg-white/95 backdrop-blur-lg rounded-full shadow-lg border border-gray-100/80 transition-all duration-300 hover:shadow-xl hover:scale-105">
//                             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                             <span className="text-sm text-gray-700 font-semibold">Interactive Process</span>
//                         </div>
                        
//                         <div className="flex items-center gap-3 px-5 py-3 bg-white/95 backdrop-blur-lg rounded-full shadow-lg border border-gray-100/80 transition-all duration-300 hover:shadow-xl hover:scale-105">
//                             <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
//                             <span className="text-sm text-gray-700 font-semibold">Real-time Updates</span>
//                         </div>
                        
//                         <div className="flex items-center gap-3 px-5 py-3 bg-white/95 backdrop-blur-lg rounded-full shadow-lg border border-gray-100/80 transition-all duration-300 hover:shadow-xl hover:scale-105">
//                             <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
//                             <span className="text-sm text-gray-700 font-semibold">Expert Support</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HowItWorksImage;
