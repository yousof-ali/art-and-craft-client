import React from 'react';

const Button = ({ text, onClick, disabled, className }) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`px-6 py-2 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out 
          ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-pink-600 hover:bg-pink-500'} 
          ${className}`}
      >
        {text}
      </button>
    );
  };
  
  export default Button;


