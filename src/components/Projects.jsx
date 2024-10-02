import React from 'react'
import { experience } from '../constants'
import { projects } from '../constants'
import { motion } from "framer-motion"

function Projects() {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-20'>
            <motion.h2 initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5}} className='text-3xl text-center'>Projects</motion.h2>
            <div className='lg:pt-4 pb-10'>
                {projects.map((items,index)=>(
                    <div key={index} className='flex flex-wrap lg:justify-center py-2 lg:py-8'>

                        <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className='w-full lg:w-1/4 text-neutral-400 text-sm'>
                            <img className='rounded' height={200} width={200} src={items.image} />
                        </motion.div>

                        <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className='w-full lg:w-3/4 max-w-xl'>
                            <div>
                                <h2 className='text-lg font-semibold mb-2'>{items.title} <a className='text-sm text-neutral-400' href={items.github}>| GITHUB</a></h2>
                            </div>
                            <p className='text-neutral-400 '>{items.description}</p>
                            <div className='flex flex-wrap gap-1'>
                            {items.technologies.map((tech,i)=>(
                                <span className='text-purple-700 bg-neutral-800 rounded py-1 px-2 mt-2 text-sm'>{tech}</span>
                            ))}
                            </div>
                            
                        </motion.div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
