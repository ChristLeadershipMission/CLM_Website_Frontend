import React from 'react';
import { motion } from 'framer-motion';
import clmLogo from "../../../assets/pictures/clmLogo.svg";

const AnimatedLogo = ({ size = 'md' }) => {
    const sizeMap = {
        sm: { width: 32, height: 32, glowSize: 'shadow-md' },
        md: { width: 48, height: 48, glowSize: 'shadow-lg' },
        lg: { width: 64, height: 64, glowSize: 'shadow-xl' }
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

    const logoVariants = {
        idle: {
            filter: "drop-shadow(0 0 8px rgba(16, 185, 129, 0.3))",
            scale: 1
        },
        hover: {
            filter: "drop-shadow(0 0 16px rgba(16, 185, 129, 0.6))",
            scale: 1.1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const pulseVariants = {
        pulse: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="inline-block relative"
        >
            <motion.div
                variants={floatVariants}
                animate="float"
                whileHover="hover"
                className="cursor-pointer relative z-10"
            >
                <motion.img
                    src={clmLogo}
                    alt="CLM Logo"
                    variants={logoVariants}
                    initial="idle"
                    animate="pulse"
                    whileHover="hover"
                    className={`${glowSize} transition-all duration-300`}
                    style={{
                        width: width,
                        height: height,
                        objectFit: 'contain'
                    }}
                />
            </motion.div>

            {/* Pulsing Background Glow */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: [0.05, 0.15, 0.05],
                    scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0 bg-emerald-400 rounded-full blur-sm -z-10"
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

export default AnimatedLogo;
