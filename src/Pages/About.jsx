import React from "react";
import { Code, Laptop, User } from "lucide-react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaJava,
    FaBootstrap,
    FaPhp,
} from "react-icons/fa";
import {

    SiMongodb,
    SiSpringboot,
    SiTailwindcss,
    SiFlutter,
    SiPython,
    SiPostman,
    SiXampp,
    SiGithub,
    SiVercel,
    SiRender,
    SiRailway,
    SiFirebase
} from "react-icons/si";

export default function About() {
    return (
        <div className="min-h-screen bg-[#ACDBFB]/50 flex flex-col items-center py-12 px-6">
            {/* Heading */}
            <h1 className="text-4xl font-bold text-gray-800 mb-8">About Me</h1>

            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
                {/* profile image */}
                <div className="flex justify-center">
                    <img
                        src="/me.png"
                        alt="Profile"
                        className="rounded-2xl shadow-lg w-92 h-100 object-cover"
                    />
                </div>

                {/* Right Side - About Content */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-700 flex items-center gap-2">
                        <User size={24} className="text-blue-500" /> Who Am I?
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Hi 👋, I’m <span className="font-bold">Nitesh Gupta</span>, a passionate
                        <span className="text-blue-600 font-semibold"> Full-Stack Developer</span>.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-700 flex items-center gap-2">
                        <Laptop size={24} className="text-green-500" /> What I Do?
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        I specialize in the <span className="font-semibold">MERN Stack</span>,
                        <span className="font-semibold"> Java + Spring Boot</span>,
                        and <span className="font-semibold">TailwindCSS</span>.
                        Currently learning <span className="font-semibold">Flutter</span> 🚀.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-700 flex items-center gap-2">
                        <Code size={24} className="text-purple-500" /> Skills
                    </h2>

                    {/* Skills */}
                    <ul className="grid grid-cols-4 gap-5 text-5xl text-gray-700">
                        <li className="hover:text-orange-500"><FaHtml5 /></li>
                        <li className="hover:text-blue-500"><FaCss3Alt /></li>
                        <li className="hover:text-yellow-500"><FaJs /></li>
                        <li className="hover:text-blue-400"><FaReact /></li>
                        <li className="hover:text-green-500"><FaNodeJs /></li>
                        <li className="hover:text-green-600"><SiMongodb /></li>
                        <li className="hover:text-red-600"><FaJava /></li>
                        <li className="hover:text-green-700"><SiSpringboot /></li>
                        <li className="hover:text-sky-500"><SiTailwindcss /></li>
                        <li className="hover:text-blue-600"><SiFlutter /></li>
                        <li className="hover:text-purple-600"><FaBootstrap /></li>
                        <li className="hover:text-blue-600"><SiPython /></li>
                        <li className="hover:text-blue-600"><FaPhp /></li>
                        <li className="hover:text-blue-600"><SiFirebase /></li>

                    </ul>

                    {/* Tools */}
                    <h2 className="text-2xl font-semibold text-gray-700 flex items-center gap-2">
                        <Code size={24} className="text-purple-500" /> Tools
                    </h2>

                    <ul className="grid grid-cols-4 gap-5 text-5xl text-gray-700">

                        <li className="hover:text-orange-500"><SiPostman /></li>
                        <li className="hover:text-orange-600"><SiXampp /></li>
                        <li className="hover:text-gray-800"><SiGithub /></li>
                        <li className="hover:text-black"><SiVercel /></li>
                        <li className="hover:text-green-500"><SiRender /></li>
                        <li className="hover:text-purple-600"><SiRailway /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
