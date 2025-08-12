
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { db } from "../../Firebase/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { FaCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const StartFreeTrial = ({ onClose , subscriptionType }) => {
    
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Stop background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "StudyAbroadLeads"), {
        ...form,
        createdAt: new Date(),
        subscriptionType:subscriptionType
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to submit.");
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 z-10 text-center animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 cursor-pointer transition-colors"
        >
          <RxCross2 className="text-2xl "></RxCross2>
        </button>

        {!isSubmitted ? (
          <>
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              Start Free Trial
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={form.company}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              <div className="flex justify-end w-full">
                <button
                type="submit"
                className=" bg-gradient-to-r  from-blue-500 to-purple-500 text-white py-2 px-6 rounded-full  transition-opacity cursor-pointer shadow-md"
              >
                Submit
              </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-2 animate-fadeIn">
            <FaCheckCircle className="text-green-500 text-4xl " />
            <h2 className="text-xl  ">
              Thank you!
            </h2>
            <p className="text-gray-600">
              We’ll get back to you soon.
            </p>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default StartFreeTrial;
