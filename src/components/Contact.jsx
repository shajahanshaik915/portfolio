import React from 'react'
import { motion } from "framer-motion"

function Contact() {
    return (
        <div className='border-b border-neutral-900 lg:mb-20 text-center tracking-tight pb-8'>
            <motion.h1 initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5}} className=' text-3xl  mb-4'>GET IN TOUCH</motion.h1>
            <motion.p initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className='tracking-tight'>+1 913 407 5994</motion.p>
            <motion.a initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} href='mailto:shaikshajahan517@gmail.com'>shaikshajahan517@gmail.com</motion.a>
        </div>
    )
}

export default Contact
