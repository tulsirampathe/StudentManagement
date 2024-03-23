import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="w-auto mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  className="h-10 w-auto"
                  src="imgs/logo.png"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="ml-3">
              <h1 className="text-2xl font-bold text-white">Student Management</h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link
                to="/"
                className="text-lg font-medium text-white hover:text-gray-200"
              >
                Home
              </Link>
              <Link
                to="/profile"
                className="text-lg font-medium text-white hover:text-gray-200"
              >
                Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
