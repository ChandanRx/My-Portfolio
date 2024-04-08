"use client"
import Image from 'next/image'
import { BsFillProjectorFill } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { motion } from 'framer-motion'

const ProjectsCard = ({ project, showDetails, setShowdetails }) => {
    const { description, id, name, deployed_url, github_url, category, key_techs, image_path } = project

    const variants = {
        initial: {
            opacity: 0,
            y: 60
        },
        animate: {
            opacity: 1,
            y: 0
        }
    }

    const stagger = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    return (
        <div>

            <Image
                src={image_path}
                alt={name}
                className='cursor-pointer'
                onClick={() => setShowdetails(id)}
                width="300"
                height="150"
                layout='responsive'
            />
            <p className='my-2 text-center'>{name}</p>


            {showDetails === id && (

                <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-white bg-gray-800 md:grid-cols-2 gap-x-12">
                    <motion.div
                        variants={stagger}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.div
                            variants={variants}
                        >
                            <Image
                                src={image_path}
                                alt={name}
                                layout="responsive"
                                height="150"
                                width="300"
                                quality={100}
                            />
                        </motion.div>
                        <motion.div
                            className='flex justify-center my-4 space-x-3'
                            variants={variants}
                        >
                            <a href={github_url} className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-700'><FaGithub /> <span>Github</span></a>
                            <a href={deployed_url} className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-700'><BsFillProjectorFill /> <span>Project</span></a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                      variants={stagger}
                      initial="initial"
                      animate="animate"
                    >
                        <motion.h2 variants={variants} className='mb-3 text-xl font-medium md:text-2xl'>{name}</motion.h2>
                        <motion.h3 variants={variants} className='mb-3 font-medium'>{description}</motion.h3>
                        <motion.div variants={variants} className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>
                            {
                                key_techs.map(tech => <span key={tech} className='px-2 py-1 my-1 bg-gray-700 rounded-sm'>
                                    {tech}
                                </span>)
                            }
                        </motion.div>
                    </motion.div>

                    <button onClick={() => setShowdetails(null)}
                        className='absolute p-1 bg-gray-700 rounded-full top-3 right-3 focus:outline-none'
                    >
                        <IoClose size={30} />
                    </button>
                </div>
            )
            }

        </div>

    )
}

export default ProjectsCard