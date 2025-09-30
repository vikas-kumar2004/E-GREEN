import React, { useState } from "react";
import { Link } from "react-router";
import { Menu, X, Home, Phone, List, Info } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: <Home className="w-5 h-5 mr-2" />, link: "/" },
    {
      name: "Service",
      icon: <List className="w-5 h-5 mr-2" />,
      link: "https://pmsuryaghar.gov.in/#/",
    },
    {
      name: "Contact",
      icon: <Phone className="w-5 h-5 mr-2" />,
      link: "contact",
    },
    {
      name: "Overview",
      icon: <Info className="w-5 h-5 mr-2" />,
      link: "overvies",
    },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center text-2xl font-bold text-blue-600">
            <div className="w-10">
              <img src="/e-logo.png" alt="e-green" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                to={item.link}
                key={item.name}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-2 px-4 py-4">
            {navItems.map((item) => (
              <Link
                to={item.link}
                key={item.name}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
