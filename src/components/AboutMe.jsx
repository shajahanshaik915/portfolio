import React from 'react'
import about from "../assets/about.png"
import { aboutme_content } from '../constants'
import { motion } from "framer-motion"

export const AboutMe = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-20'>
            <h2 className='text-center text-3xl pb-3'>ABOUT <span className='text-neutral-500'>ME</span></h2>
            
            <div className='flex flex-wrap'>
                {/* IMAGE OF LEFT */}
                <motion.div
                whileInView={{x:0,opacity:1}}                
                initial={{x:-100,opacity:0}}
                transition={{duration:0.5}}
                 className='rounded w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center'>
                            <img src={about} height={300} width={300} className='rounded'></img>
                    </div>
                </motion.div>

                {/* TextOn right */}
                <motion.div 
                initial={{x:100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:0.5}}
                className='w-full lg:w-1/2'>
                    <div className='flex justify-center items-center lg:items-start'>
                        <p className='my-2 max-w-lg py-6 '>
                            {aboutme_content}
                        </p>
                    </div>
                </motion.div>
            </div>

            

            
        </div>
    )
}
