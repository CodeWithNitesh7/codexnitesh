import React, { useState, useEffect } from "react";

export default function HeroSection() {
    const texts = [
        "Full Stack Developer",
        "MERN Stack Developer",
        "Flutter Developer",
        "Android & iOS Developer",
        "Smart Coder",
        "FreeLancer"
    ];

    const [index, setIndex] = useState(0); // current text index
    const [subIndex, setSubIndex] = useState(0); // current character index
    const [reverse, setReverse] = useState(false); // typing or deleting

    useEffect(() => {
        if (index === texts.length) return;

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 50 : 120); // typing speed / deleting speed

        if (!reverse && subIndex === texts[index].length + 1) {
            // pause before deleting
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
        <div className="bg-[#ACDBFB]/50 grid grid-cols-1 sm:grid-cols-2 items-center px-12 py-12 min-h-screen">
            {/* Text Section */}
            <div className="space-y-6 ">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
                    Hi, I'm <span className="text-cyan-700">Nitesh Gupta</span>
                </h1>
                <p className="text-lg text-gray-600">
                    A passionate full-stack developer who loves building modern web applications.
                </p>

                {/* Typing Animation */}
                <h2 className="text-3xl sm:text-3xl font-bold  text-cyan-700">
                    {`${texts[index].substring(0, subIndex)}`}
                    <span className="border-r-2 border-cyan-700 animate-pulse ml-1"></span>
                </h2>
            </div>

            {/* Image Section */}
            <div className="flex justify-center">
                <img
                    src="/me.png"
                    alt="Smart Coder"
                    className="h-72 w-72 sm:h-96 sm:w-96 shadow-xl rounded-full  object-cover"
                />
                {/* Thought  */}

            </div>
        </div>
    );
}
