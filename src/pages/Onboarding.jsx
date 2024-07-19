import React from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';

const Onboarding = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <button className="w-52 h-32 bg-cyan-500 text-white font-semibold rounded-lg">
            Login Individu
          </button>
          <button className="w-52 h-32 bg-cyan-500 text-white font-semibold rounded-lg">
            Login Bisnis
          </button>
        </div>
        <p className="text-gray-700">
          belum terdaftar internet banking?{" "}
          <Link to="/register" className="text-blue-500 underline">
            mendaftar
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Onboarding;
