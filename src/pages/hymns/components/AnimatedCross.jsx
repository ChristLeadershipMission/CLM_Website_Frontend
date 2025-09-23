import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCross = ({ size = 'md' }) => {
    const sizeMap = {
        sm: { width: 24, height: 24, glowSize: 'shadow-md' },
        md: { width: 32, height: 32, glowSize: 'shadow-lg' },
        lg: { width: 48, height: 48, glowSize: 'shadow-xl' }
    };

    const { width, height, glowSize } = sizeMap[size] || sizeMap.md;

    const containerVariants = {
        hidden: {
            opacity: 0,
            scale: 0.5,
            rotate: -180
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        }
    };

    const floatVariants = {
        float: {
            y: [-2, 2, -2],
            rotate: [0, 1, -1, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const glowVariants = {
        idle: {
            filter: "drop-shadow(0 0 8px rgba(237, 137, 54, 0.3))",
        },
        hover: {
            filter: "drop-shadow(0 0 16px rgba(237, 137, 54, 0.6))",
            scale: 1.1,
            rotate: [0, 5, -5, 0],
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="inline-block"
        >
            <motion.div
                variants={floatVariants}
                animate="float"
                whileHover="hover"
                className="cursor-pointer"
            >
                <motion.svg
                    variants={glowVariants}
                    initial="idle"
                    whileHover="hover"
                    width={width}
                    height={height}
                    viewBox="0 0 32 32"
                    className={`text-orange-500 ${glowSize} transition-all duration-300`}
                    fill="currentColor"
                >
                    {/* Main Cross Shape */}
                    <motion.rect
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                        x="14"
                        y="4"
                        width="4"
                        height="24"
                        rx="2"
                        className="origin-center"
                    />
                    <motion.rect
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
                        x="8"
                        y="12"
                        width="16"
                        height="4"
                        rx="2"
                        className="origin-center"
                    />

                    {/* Decorative Elements */}
                    <motion.circle
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.3 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                        cx="16"
                        cy="16"
                        r="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-orange-300"
                    />

                    {/* Center Glow */}
                    <motion.circle
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        cx="16"
                        cy="16"
                        r="2"
                        className="text-orange-400 opacity-60"
                    />

                    {/* Radial Lines */}
                    <motion.g
                        initial={{ opacity: 0, rotate: 45 }}
                        animate={{ opacity: 0.4, rotate: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="text-orange-300 origin-center"
                        style={{ transformOrigin: '16px 16px' }}
                    >
                        <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1" />
                        <line x1="16" y1="26" x2="16" y2="30" stroke="currentColor" strokeWidth="1" />
                        <line x1="2" y1="16" x2="6" y2="16" stroke="currentColor" strokeWidth="1" />
                        <line x1="26" y1="16" x2="30" y2="16" stroke="currentColor" strokeWidth="1" />
                    </motion.g>
                </motion.svg>
            </motion.div>

            {/* Pulsing Background Glow */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: [0.1, 0.3, 0.1],
                    scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0 bg-orange-400 rounded-full blur-sm -z-10"
                style={{
                    width: width * 1.5,
                    height: height * 1.5,
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            />
        </motion.div>
    );
};

export default AnimatedCross;
