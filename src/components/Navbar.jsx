import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="bg-[#ACDBFB] p-4 flex items-center justify-between   fixed left-0 right-0 z-50 ">
            {/* Logo plus Header */}
            <div className="flex items-center gap-4">
                <img
                    src="/Logo.png"
                    alt="Logo"
                    className="h-16 w-16 rounded-full object-cover"
                />
                <h1 className="text-3xl font-bold text-cyan-700">Nitesh Gupta</h1>
            </div>

            {/* Menus */}
            <div className="flex  items-center gap-6 text-lg font-medium text-gray-700">
                <Link to="/" className="hover:text-cyan-600">Home</Link>
                <Link to="/about" className="hover:text-cyan-600">About</Link>
                <Link to="/projects" className="hover:text-cyan-600">Projects</Link>
                <Link to="/resume" className="hover:text-cyan-600">Resume</Link>

                <button className=' bg-cyan-700 hover:bg-cyan-600 text-blue-200 hover:text-blue-100  rounded-xl px-3 py-2  ' > Github</button>
            </div>
        </div>
    );
}
