// components/CustomButton.jsx
import React from "react";
import { FaArrowRight } from "react-icons/fa"; // You can import any icon of your choice

const CustomButton = ({ text, onClick, className, type = "button" }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-7 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out relative ${className}`}
        >
            <span className="flex items-center justify-center">
                {/* Main text of the button */}
                <span className="text-lg">{text}</span> {/* Increased text size */}
            </span>

            {/* Arrow icon adjusted with proper spacing */}
            <FaArrowRight className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white opacity-60" />
        </button>
    );
};

export default CustomButton;
