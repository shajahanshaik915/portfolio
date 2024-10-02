import React from 'react'
import { motion } from "framer-motion"
import { education } from '../constants'

function Education() {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-20'>
            <motion.h2 initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5}} className='text-3xl text-center'>Education</motion.h2>
            <div className='lg:pt-4 pb-10'>
                {education.map((items,index)=>(
                    <div key={index} className='flex flex-wrap lg:justify-center py-2 lg:py-6'>

                        <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className='w-full lg:w-1/4 text-neutral-400 text-sm'>
                            {items.year}
                        </motion.div>

                        <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}}  className='w-full lg:w-3/4 max-w-xl'>
                            <h2 className='text-lg font-semibold mb-2'>{items.institution} - {items.location}</h2>
                            <h2 className='text-base font-semibold mb-2'>{items.course}</h2>
                            <p className='text-neutral-400 '>{items.cgpa}</p>
                            <p className='text-neutral-400 '>{items.coursework}</p>
                            
                        </motion.div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education
