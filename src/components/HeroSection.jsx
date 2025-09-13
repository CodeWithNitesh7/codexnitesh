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

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

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
        <div className="bg-[#ACDBFB]/50 min-h-screen flex flex-col sm:flex-row items-center justify-center px-6 sm:px-12 py-10 gap-8">
            {/* Image Section */}
            <div className="flex justify-center sm:justify-start order-1 sm:order-none">
                <img
                    src="/me.png"
                    alt="Smart Coder"
                    className="h-40 w-40 sm:h-72 sm:w-72 md:h-96 md:w-96 shadow-xl rounded-full object-cover"
                />
            </div>

            {/* Text Section */}
            <div className="text-center sm:text-left space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-5xl font-bold text-gray-800">
                    Hi, I'm <span className="text-cyan-700">Nitesh Gupta</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-600">
                    A passionate full-stack developer who loves building modern web applications.
                </p>

                <h2 className="text-lg sm:text-3xl font-bold text-cyan-700">
                    {texts[index].substring(0, subIndex)}
                    <span className="border-r-2 border-cyan-700 animate-pulse ml-1"></span>
                </h2>
            </div>
        </div>
    );
}
