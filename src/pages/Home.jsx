import React from 'react'
import profile from "../../public/profile-pic.jpg"


import { FaArrowRightLong } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";

import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";

import Social from '@/components/my-components/Social';

import variants from '@/utils/variants';
import { motion } from "framer-motion";


function Home() {
    return (

        <>
            <main className='main-home'>
                {/* Banner */}
                <section className='main-banner'>

                    {/* Main Banner */}
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

                                {/* Social Links */}
                                <Social />

                            </div>
                        </div>

                        {/* Right Card */}
                        <div className='right'>
                            <div className='right-card'>

                                <motion.h1
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.1 }}
                                    variants={variants("bottom", 0.1)}
                                >
                                    SOFTWARE
                                </motion.h1>

                                <motion.h1
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.1 }}
                                    variants={variants("bottom", 0.1)}
                                >
                                    ENGINEER
                                </motion.h1>

                                <motion.p
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.1 }}
                                    variants={variants("bottom", 0.1)}
                                >Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.</motion.p>


                                {/* Achiement Info */}
                                <div className='achivements'>
                                    <motion.div
                                        className='achivements-card'
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.1 }}
                                        variants={variants("bottom", 0.1)}
                                    >
                                        <h1>{'\u002B'} 12</h1>
                                        <p>YEARS OF EXPERIENCE</p>
                                    </motion.div>

                                    <motion.div
                                        className='achivements-card'
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.1 }}
                                        variants={variants("bottom", 0.1)}
                                    >
                                        <h1>{'\u002B'}12</h1>
                                        <p>PROJECTS COMPLETED</p>
                                    </motion.div>

                                    <motion.div
                                        className='achivements-card'
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.1 }}
                                        variants={variants("bottom", 0.1)}
                                    >
                                        <h1>{'\u002B'} 12</h1>
                                        <p>WORLDWIDE CLIENTS</p>
                                    </motion.div>
                                </div>

                                {/* Work Info */}
                                <div className='info'>
                                    <motion.button
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.1 }}
                                        variants={variants("bottom", 0.1)}
                                    >
                                        <p> lets Talk</p>
                                    </motion.button>
                                    {/* <Button>
                                        <p>Resume</p>
                                    </Button> */}

                                    <motion.div
                                        className='work-info'
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.1 }}
                                        variants={variants("bottom", 0)}
                                    >
                                        <Link to="/" style={{ color: "white" }}>
                                            <h1> My Work</h1>
                                        </Link>
                                        <h1><FaArrowRightLong /></h1>
                                    </motion.div>
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


