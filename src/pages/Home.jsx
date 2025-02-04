import React from 'react'
import profile from "../../public/profile-pic.jpg"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { FiHome } from "react-icons/fi";
import { FaGithub, FaInstagramSquare, FaLinkedin, FaRegFolder } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { FaArrowLeftLong, FaArrowRightLong, FaLaptopCode } from "react-icons/fa6";
import { MdForwardToInbox } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { Button } from '@/components/ui/button';
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";





function Home() {
    return (

        <>
            <main className='main-home'>

                {/* Tooltip */}
                <div className='main-tooltip'>
                    <div className='tooltip-container'>
                        <div className='tooltip'>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='icon'>
                                            <FiHome />
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom" sideOffset={14}>
                                        <p className='popup'>Home</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='icon'>
                                            <FaRegFolder />
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom" sideOffset={14}>
                                        <p className='popup'>Projects</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='icon'>
                                            <FaLaptopCode />
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom" sideOffset={14}>
                                        <p className='popup'>Work</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='icon'>
                                            <IoSettingsOutline />
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom" sideOffset={14}>
                                        <p className='popup'>Tools</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>


                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='icon'>
                                            <TfiWrite />
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom" sideOffset={14}>
                                        <p className='popup'>Thoughts</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>


                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='icon'>
                                            <MdForwardToInbox />
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom" sideOffset={14}>
                                        <p className='popup'>Contact Me</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>





                        </div>
                    </div>
                </div>


                {/* Banner */}
                <section className='main-banner'>

                    <div className='banner'>

                        <div className='left'>
                            <div className='card'>

                                <div className='profile'>
                                    <img src={profile} alt='profle pic' />
                                </div>

                                <div className='profile-name'>
                                    <h1>Vaibhav Waghre</h1>
                                </div>

                                <Button className='resume'>
                                    Resume <FaFileAlt />
                                </Button>

                                <p>
                                    A Software Engineer who has developed countless innovative solutions.
                                </p>


                                <div className='social'>
                                    <Link to="/" >
                                        <FaInstagramSquare size={24} />
                                    </Link>

                                    <Link >
                                        <FaLinkedin size={24} />
                                    </Link>

                                    <Link>
                                        <FaTwitter size={24} />
                                    </Link>

                                    <Link>
                                        <FaGithub size={24} />
                                    </Link>


                                </div>

                            </div>
                        </div>

                        <div className='right'>
                            <div className='right-card'>

                                <h1>SOFTWARE</h1>
                                <h1>ENGINEER</h1>

                                <p>Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.</p>


                                <div className='achivements'>
                                    <div className='achivements-card'>
                                        <h1>{'\u002B'} 12</h1>
                                        <p>YEARS OF EXPERIENCE</p>
                                    </div>

                                    <div className='achivements-card'>
                                        <h1>{'\u002B'}12</h1>
                                        <p>PROJECTS COMPLETED</p>
                                    </div>

                                    <div className='achivements-card'>
                                        <h1>{'\u002B'} 12</h1>
                                        <p>WORLDWIDE CLIENTS</p>
                                    </div>
                                </div>


                                <div className='info'>
                                    <Button>
                                        <p> lets Talk</p>
                                    </Button>

                                    <div>
                                        <Link to="/">
                                            My Work <FaArrowRightLong />
                                        </Link>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </section>
            </main >
        </>

    )
}

export default Home


