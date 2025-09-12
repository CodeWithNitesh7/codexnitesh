import React, { useRef } from "react";
import { Download } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Resume() {
    const resumeRef = useRef();

    // PNG Download
    const downloadPNG = async () => {
        const element = resumeRef.current;
        const canvas = await html2canvas(element, { scale: 2 });
        const data = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = data;
        link.download = "resume.png";
        link.click();
    };

    // PDF Download
    const downloadPDF = async () => {
        const element = resumeRef.current;
        const canvas = await html2canvas(element, { scale: 2 });
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("resume.pdf");
    };

    return (
        <div className="min-h-screen bg-[#ACDBFB]/50 py-10 px-6 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">My Resume</h1>

            {/* Buttons */}
            <div className="flex gap-4 mb-6">
                <button
                    onClick={downloadPNG}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                    <Download size={18} /> Download PNG
                </button>
                <button
                    onClick={downloadPDF}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                    <Download size={18} /> Download PDF
                </button>
            </div>

            {/* Resume Preview */}
            <div
                ref={resumeRef}
                className="bg-white w-full max-w-3xl shadow-xl rounded-lg p-8 text-gray-800"
            >
                {/* Header */}
                <div className="border-b pb-4 mb-4">
                    <h2 className="text-3xl font-bold">Nitesh Gupta</h2>
                    <p className="text-gray-600">Full-Stack Developer</p>
                    <p className="text-sm text-gray-500">
                        Email: demo@example.com | Phone: +91 9876543210
                    </p>
                </div>

                {/* Education */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold border-b pb-2 mb-3">
                        Education
                    </h3>
                    <p className="font-medium">Diploma in Computer Science</p>
                    <p className="text-gray-600">XYZ College • 2022 - 2025</p>
                </div>

                {/* Skills */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold border-b pb-2 mb-3">Skills</h3>
                    <ul className="grid grid-cols-2 gap-2">
                        <li>HTML / CSS</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>MongoDB</li>
                        <li>Git & GitHub</li>
                    </ul>
                </div>

                {/* Projects */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold border-b pb-2 mb-3">Projects</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <span className="font-medium">Gym Management System</span> — Multi-tenant gym software built using MERN stack.
                        </li>
                        <li>
                            <span className="font-medium">Quiz App</span> — Login-based quiz platform with admin dashboard.
                        </li>
                        <li>
                            <span className="font-medium">Portfolio Website</span> — Personal portfolio showcasing projects and skills.
                        </li>
                    </ul>
                </div>

                {/* Experience */}
                <div>
                    <h3 className="text-xl font-semibold border-b pb-2 mb-3">
                        Experience
                    </h3>
                    <p className="font-medium">Junior Engineer (Intern)</p>
                    <p className="text-gray-600">ABC Tech • 2024</p>
                </div>
            </div>
        </div>
    );
}
