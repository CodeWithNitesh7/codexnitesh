import React from "react";

import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Intrduce() {
    return (
        <section className="bg-[#ACDBFB]/50 py-20 px-12" id="about">
            <div className="max-w-7xl mx-auto px-6">
                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-30">
                    {/* Image Section */}
                    <div className="flex-1 flex justify-center md:justify-end">
                        <Tilt>
                            <img
                                src='/Avtar.png'
                                alt="avatar"
                                className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-lg"
                            />
                        </Tilt>
                    </div>
                    {/* Text Section */}
                    <div className="flex-1 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                            LET ME <span className="text-cyan-600">INTRODUCE</span> MYSELF
                        </h1>
                        <p className="text-gray-700 text-lg md:text-base leading-relaxed">
                            I fell in love with programming and I have at least learnt
                            something, I think… 🤷‍♂
                            <br />
                            <br />
                            I am fluent in classics like{" "}
                            <span className="text-cyan-600 font-semibold">
                                Java, Javascript and Python.
                            </span>
                            <br />
                            <br />
                            My field of Interest's are building new{" "}
                            <span className="text-cyan-600 font-semibold">
                                Web Technologies and Products
                            </span>{" "}
                            and also in areas related to{" "}
                            <span className="text-cyan-600 font-semibold">App Development.</span>
                            <br />
                            <br />
                            Whenever possible, I also apply my passion for developing products
                            with <span className="text-cyan-600 font-semibold">Node.js</span> and{" "}
                            <span className="text-cyan-600 font-semibold">
                                Modern Javascript Library and Frameworks
                            </span>{" "}
                            like <span className="text-cyan-600 font-semibold">React.js and Next.js</span>.
                        </p>
                    </div>

                </div>

                {/* Social Links */}
                <div className="mt-16 text-center md:text-right px-8">
                    <h2 className="text-3xl font-bold text-gray-800">FIND ME ON</h2>
                    <p className="text-gray-700 text-lg mt-2">
                        Feel free to <span className="text-cyan-600 font-semibold">connect</span> with me
                    </p>
                    <ul className="flex justify-center md:justify-end items-center gap-6 mt-4 text-2xl text-gray-700">
                        <li>
                            <a
                                href="https://github.com/CodeWithNitesh7/ "
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-cyan-600 transition"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/Soumyajit4419"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-cyan-600 transition"
                            >
                                <AiOutlineTwitter />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/nitesh-gupta-28b91b355/"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-cyan-600 transition"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/always.siddharth"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-cyan-600 transition"
                            >
                                <AiFillInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
