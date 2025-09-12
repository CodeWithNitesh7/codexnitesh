import React from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Gym Management System",
        description:
            "A multi-tenant gym management software built with the MERN stack. Includes membership plans, attendance, and admin dashboard.",
        image: "/projects/gym.png", // apni image ka path dalna
        github: "https://github.com/yourusername/gym-management",
        live: "https://yourliveurl.com/gym",
        tech: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
    },
    {
        title: "Quiz App",
        description:
            "A quiz application where users can login, play quizzes, and view their scores. Admin can add questions.",
        image: "/projects/quiz.png",
        github: "https://github.com/yourusername/quiz-app",
        live: "https://yourliveurl.com/quiz",
        tech: ["React", "Bootstrap", "Node.js", "MySQL"],
    },
    {
        title: "Portfolio Website",
        description:
            "My personal portfolio showcasing my projects, skills, and contact information.",
        image: "/projects/portfolio.png",
        github: "https://github.com/yourusername/portfolio",
        live: "https://yourliveurl.com",
        tech: ["React", "TailwindCSS"],
    },
];

export default function Projects() {
    return (
        <div className="min-h-screen bg-[#ACDBFB]/50 py-12 px-6">
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">
                My Projects
            </h1>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-5 flex flex-col space-y-3">
                            <h2 className="text-xl font-semibold text-gray-800">
                                {project.title}
                            </h2>
                            <p className="text-gray-600 text-sm">{project.description}</p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex items-center gap-4 mt-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-gray-700 hover:text-black"
                                >
                                    <Github size={18} /> Code
                                </a>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                                >
                                    <ExternalLink size={18} /> Live
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
