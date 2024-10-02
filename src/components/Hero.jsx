import React from 'react'
import {hero_content} from "../constants/index"
import profile_pic from "../assets/profile.jpeg"
import { motion } from "framer-motion"

const container=(delay)=>({
    hidden:{
        x:-100,
        opacity:0,
    },
    visible:{
        x:0,
        opacity:1,
        transition:{
            duration:0.5,delay:delay,
        }
    }
})
function Hero() {
    return (
        <div className='border-b border-neutral-900 pb-20 lg:pb-40 lg:mb-20'>
            <div className='flex flex-wrap'>
                {/* Name, ROle and Description */}
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className='text-6xl font-thin tracking-tight pb-16 lg:mt-16 lg:text-8xl'>Shajahan Shaik</motion.h1>
                        <motion.span variants={container(0.5)} initial="hidden" animate="visible"  className='bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-cyan-600 to-violet-500 text-4xl tracking-tight'>
                        Full Stack Developer
                        </motion.span>
                        <motion.p variants={container(1)} initial="hidden" animate="visible" className='my-2 max-w-xl py-6 tracking-tighter font-light'>
                            {hero_content}
                        </motion.p>
                    </div>
                </div>

                {/* ProfilePic */}
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center'>
                        <motion.img initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,delay:1.2}} className='rounded' src={profile_pic} height={400} width={400}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
