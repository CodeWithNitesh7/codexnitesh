import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#ACDBFB] z-50">
            {/* Outer Glow Circle */}
            <motion.div
                className="absolute w-56 h-56 rounded-full border-4 border-white/50"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Rotating Ring */}
            <motion.div
                className="absolute w-72 h-72 rounded-full border-t-4 border-b-4 border-white/70"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {/* Logo */}
            <motion.img
                src='/Logo.png'
                alt="Logo"
                className="w-44 h-44 relative z-10  rounded-full drop-shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            />

            {/* Loading Text */}
            <motion.p
                className="absolute bottom-16 text-xl font-semibold text-gray-800"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                Loading...
            </motion.p>
        </div>
    );
}
