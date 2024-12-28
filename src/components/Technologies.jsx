import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { TbLetterC } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { motion } from "framer-motion";
import { SiFigma } from "react-icons/si";


// Define movement variants with different durations and patterns
const iconVariants = (yOffset, duration) => ({
    initial: { y: yOffset },
    animate: {
        y: [yOffset, -yOffset],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">
                Technologies
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(10, 1)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-3">
                    <FaHtml5 className="text-7xl text-orange-500" /><center>HTML</center>
                </motion.div>
                <motion.div
                    variants={iconVariants(-10, 1.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-3">
                    <FaCss3Alt className="text-7xl text-blue-500" /><center>CSS</center>
                </motion.div>
                <motion.div
                    variants={iconVariants(15, 2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-3">
                    <RiReactjsLine className="text-7xl text-cyan-400" /><center>React</center>
                </motion.div>
                <motion.div
                    variants={iconVariants(-15, 2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-3">
                    <FaJava className="text-7xl text-orange-700" /><center>Java</center>
                </motion.div>
                <motion.div
                    variants={iconVariants(20, 3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-3">
                    <TbLetterC className="text-7xl text-blue-700" /><center>C Prog</center>
                </motion.div>
                <motion.div
                    variants={iconVariants(-20, 3.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-3">
                    <FaPython className="text-7xl text-yellow-300" /><center>Python</center>
                </motion.div>
                <motion.div
                    variants={iconVariants(25, 4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-3">
                    <SiMysql className="text-7xl text-sky-700" /><center>MySql</center>
                </motion.div>
                <motion.div
                    variants={iconVariants(-30, 5.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-3">
                    <FaNodeJs className="text-7xl text-green-500" /><center>Node.js</center>
                </motion.div>
                <motion.div 
                    variants={iconVariants(35, 6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-3">
                    <SiFirebase className="text-7xl text-amber-500" /><center>Firebase</center>
                </motion.div>
                <motion.div 
                    variants={iconVariants(35, 6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-3">
                    <SiFigma className="text-7xl text-[#A259FF]" /><center>Figma</center>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;
