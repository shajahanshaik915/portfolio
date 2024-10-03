import React, { useEffect, useState } from 'react'
import {hero_content} from "../constants/index"
import profile_pic from "../assets/profile.jpeg"
import { motion } from "framer-motion"
import { FaArrowDown } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';


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
    const [showArrow,setShowArrow]=useState(true);
    useEffect(()=>{
        const handler=()=>{
            if(window.scrollY<50){
                setShowArrow(true);
            }
            else{
                setShowArrow(false);
            }
        }
        window.addEventListener("scroll",handler);

        return ()=>{
            window.removeEventListener("scroll",handler);
        }
    },[])

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
                            I'm a {' '}
                            <Typewriter loop={true} words={["Full Stack Developer"," Problem Solver","Graduate Student", "Open Source Contributor","Leet Coder"]}></Typewriter>
                        </motion.span>
                        <motion.p variants={container(1)} initial="hidden" animate="visible" className='mt-20 max-w-xl py-6 tracking-tighter font-light'>
                            
                            

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
            {showArrow&& (
                <motion.button
                    className="absolute bottom-10 flex flex-col items-center"
                    initial={{  x:0, opacity:0 }}
                    animate={{  x:0 , opacity:1}} 
                    transition={{ duration: 1.5, delay:2 }}
                    onClick={()=>{window.scrollBy({top:600,behavior:'smooth'})}}
                    >
                <span className="text-neutral-400 mb-2">Scroll Down</span>
                <FaArrowDown className="text-2xl text-neutral-400" />
                </motion.button>
            )}
      
        </div>
    )
}

export default Hero
