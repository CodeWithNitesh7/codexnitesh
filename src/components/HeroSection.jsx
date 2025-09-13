import React, { useState, useEffect } from "react";

export default function HeroSection() {
    const texts = [
        "Full Stack Developer",
        "MERN Stack Developer",
        "Flutter Developer",
        "Android & iOS Developer",
        "Smart Coder",
        "Freelancer"
    ];

    const [index, setIndex] = useState(0); // current text index
    const [subIndex, setSubIndex] = useState(0); // current character index
    const [reverse, setReverse] = useState(false); // typing or deleting

    useEffect(() => {
        if (index === texts.length) return;

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 50 : 120);

        if (!reverse && subIndex === texts[index].length + 1) {
            setTimeout(() => setReverse(true), 1000);
            return;
        }

        if (reverse && subIndex === 0) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % texts.length);
        }

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    return (
        <div className="bg-[#ACDBFB]/50 min-h-screen flex flex-col-reverse sm:flex-row items-center px-6 sm:px-12 py-12 gap-8">
            {/* Text Section */}
            <div className="flex-1 flex flex-col justify-center space-y-4 sm:space-y-6 text-center sm:text-left">
                <h1 className="text-3xl sm:text-5xl font-bold text-gray-800">
                    Hi, I'm <span className="text-cyan-700">Nitesh Gupta</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-600">
                    A passionate full-stack developer who loves building modern web applications.
                </p>

                {/* Typing Animation */}
                <h2 className="text-xl sm:text-3xl font-bold text-cyan-700">
                    {texts[index].substring(0, subIndex)}
                    <span className="border-r-2 border-cyan-700 animate-pulse ml-1"></span>
                </h2>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex justify-center sm:justify-start">
                <img
                    src="/me.png"
                    alt="Smart Coder"
                    className="h-48 w-48 sm:h-80 sm:w-80 md:h-96 md:w-96 shadow-xl rounded-full object-cover"
                />
            </div>
        </div>
    );
}
