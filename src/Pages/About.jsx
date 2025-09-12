import React from "react";
import { Code, Laptop, User } from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen bg-[#ACDBFB]/50 flex flex-col items-center py-12 px-6">
            {/* Heading */}
            <h1 className="text-4xl font-bold text-gray-800 mb-8">About Me</h1>

            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

                {/* Left Side - Profile Image */}
                <div className="flex justify-center">
                    <img
                        src="/me.png" // profile image accha sa
                        alt="Profile"
                        className="rounded-2xl shadow-lg w-72 h-80 object-cover"
                    />
                </div>

                {/* Right Side - About Content */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-700 flex items-center gap-2">
                        <User size={24} className="text-blue-500" /> Who Am I?
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Hi 👋, I’m <span className="font-bold">Nitesh Gupta</span>, a passionate
                        <span className="text-blue-600 font-semibold"> Full-Stack Developer</span> with a strong
                        interest in building scalable web applications and modern user interfaces.
                        I enjoy turning ideas into reality using code and creative design.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-700 flex items-center gap-2">
                        <Laptop size={24} className="text-green-500" /> What I Do?
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        I specialize in the <span className="font-semibold">MERN Stack</span> (MongoDB, Express.js,
                        React.js, Node.js) and   <span className="font-semibold">Java with Springboot</span> along with <span className="font-semibold">TailwindCSS</span> for modern
                        UI designs. Currently, I am learning <span className="font-semibold">Flutter</span> for mobile apps 🚀.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-700 flex items-center gap-2">
                        <Code size={24} className="text-purple-500" /> Skills
                    </h2>
                    <ul className="grid grid-cols-2 gap-3 text-gray-700">
                        <li className="bg-white shadow rounded-lg px-3 py-2">HTML / CSS</li>
                        <li className="bg-white shadow rounded-lg px-3 py-2">JavaScript</li>
                        <li className="bg-white shadow rounded-lg px-3 py-2">Mern Stack</li>
                        <li className="bg-white shadow rounded-lg px-3 py-2">Java with Springboot</li>
                        <li className="bg-white shadow rounded-lg px-3 py-2">Flutter</li>
                        <li className="bg-white shadow rounded-lg px-3 py-2">Native</li>
                        <li className="bg-white shadow rounded-lg px-3 py-2">Python</li>
                        <li className="bg-white shadow rounded-lg px-3 py-2">Git & GitHub</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
