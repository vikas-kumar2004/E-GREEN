import React from "react";
import { Sun, Globe, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2 text-white text-xl font-bold">
            <Sun className="w-6 h-6 text-yellow-400" />
            SolarCalc
          </div>
          <p className="mt-2 text-sm text-gray-400">
            Helping you estimate the right solar panels for your energy needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <Globe className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@solarcalc.com"
              className="hover:text-yellow-400"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SolarCalc. All rights reserved.
      </div>
    </footer>
  );
}
