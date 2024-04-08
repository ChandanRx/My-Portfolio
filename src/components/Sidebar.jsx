'use client'
import React from 'react'
import myPhoto from '../../assets/Images/mypic.jpg'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";


const Sidebar = () => {
    const handleWhatsAppClick = () =>{
        const phoneNumber = 9904284492;
        const message = "Hello! How May I Help You ?"
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
        window.open(url , "_blank");
    }

    return (
        <div>
            <Image
                src={myPhoto}
                alt='myphoto'
                className='w-32 h-32 mx-auto border border-indigo-900 rounded-full'
            
            />
            <h3 className='my-4 text-3xl font-bold text-gray-400 font-josefin'>
                <span className='font-bold text-blue-400'>Chandan </span>
                Pargi
            </h3>
            <p className='px-2 py-1 my-3 text-white bg-gray-900 rounded-full'>Application Developer</p>

            <a 
               className='flex items-center justify-center px-2 py-1 my-3 text-white bg-gray-900 rounded-full' 
               href='../../assets/Resume.pdf'
               download='Resume.pdf'
               target='_blank'
               >
               
               <GiTie className='w-6 h-6' /> Download Resume </a>

            {/*social icons*/}

            <div className='flex justify-around w-9/12 mx-auto my-5 text-indigo-500 md:full'>
                <a href='https://www.youtube.com/@rxn013' target='_blank'>
                    <FaYoutube className='w-8 h-8 cursor-pointer' />
                </a>
                <a href='https://www.linkedin.com/in/chandan-pargi-459272187' target='_blank'>
                    <FaLinkedin className='w-8 h-8 cursor-pointer' />
                </a>
                <a href='https://github.com/ChandanRx' target='_blank'>
                    <FaGithub className='w-8 h-8 cursor-pointer' />
                </a>
            </div>

            <div className='py-4 my-5 text-white bg-gray-900 rounded-sm' style={{marginLeft:'-1rem',marginRight:'-1rem'}}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation />
                    <span>Ahmedabad,Gujarat</span>
                </div>
                <p className='my-2'>chandan.rxn@gmail.com</p>
                <p className='my-2'>+91 9904284492</p>
            </div>
            <button
                className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue-900 to-blue-500'
                onClick={()=>window.open("mailto:chandan.rxn@gmail.com")} 
            >
            Email Me</button>
            <button
                className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue-900 to-blue-500'
                onClick={handleWhatsAppClick} 
            >
            Whats App</button>
            
        </div>
    )
}

export default Sidebar