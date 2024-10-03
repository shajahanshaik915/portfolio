import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";



import logo from "../assets/logo.png"
function Navbar() {
    return (
        <div className='flex items-center justify-between py-6 mb-20'>
            <div className='flex flex-shrink-0 items-center'>
                <img src={logo} width={40} height={40}/>
            </div>
            
            <div className="flex items-center mx-3 gap-4 text-2xl">
                
                <a href='https://www.linkedin.com/in/shaikshajahan15/'> <FaLinkedin /> </a>
                <a href='https://github.com/shajahanshaik915'><FaGithub /></a>
                <a href='https://leetcode.com/shaikshajahan/'><TbBrandLeetcode /></a>
                <a href='mailto:shaikshajahan517@gmail.com'><BiLogoGmail /></a>
                
            </div>

        </div>
        

    )
}

export default Navbar
