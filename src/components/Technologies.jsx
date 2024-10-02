import React from 'react'
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { motion } from "framer-motion"


const iconVariants=(duration)=>({
    hidden:{
        y:-10,
    },
    visible:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }   

})
function Technologies() {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-20'>
            <motion.h2 initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1.5}} className='text-center text-3xl pb-3'>Technologies</motion.h2>
            <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1.5}} className='flex flex-wrap flex justify-center items-center gap-3 text-6xl lg:p-8'>
                <motion.div variants={iconVariants(2)} initial="hidden" animate="visible" className='border-4 rounded-2xl p-2 border-neutral-800'>
                    <FaReact className='text-cyan-400'/>
                </motion.div>
                <motion.div variants={iconVariants(3)} initial="hidden" animate="visible" className='border-4 rounded-2xl p-2 border-neutral-800'>
                    <RiNextjsFill className=''/>
                </motion.div>
                <motion.div variants={iconVariants(4)} initial="hidden" animate="visible" className='border-4 rounded-2xl p-2 border-neutral-800'>
                    <RiTailwindCssFill className='text-sky-700'/>
                </motion.div>
                <motion.div variants={iconVariants(5)} initial="hidden" animate="visible" className='border-4 rounded-2xl p-2 border-neutral-800'>
                    <IoLogoJavascript className='text-cyan-400'/>
                </motion.div>
                <motion.div variants={iconVariants(4)} initial="hidden" animate="visible" className='border-4 rounded-2xl p-2 border-neutral-800'>
                    <FaNodeJs className='text-green-500'/>
                </motion.div>
                <motion.div variants={iconVariants(2)} initial="hidden" animate="visible" className='border-4 rounded-2xl p-2 border-neutral-800'>
                    <FaDocker className='text-blue-600'/>
                </motion.div>
                <motion.div variants={iconVariants(3)} initial="hidden" animate="visible" className='border-4 rounded-2xl p-2 border-neutral-800'>
                    <SiMongodb className='text-green-500'/>
                </motion.div>
                <motion.div variants={iconVariants(5)} initial="hidden" animate="visible" className='border-4 rounded-2xl p-2 border-neutral-800'>
                    <BiLogoPostgresql className='text-sky-700'/>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies
