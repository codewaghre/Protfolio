import React from 'react'
import { Link } from "react-router-dom";

import profile from "../../public/profile-pic.jpg"
import img1 from '../../src/assets/img-3.svg'
import img2 from '../../src/assets/img-2.svg'

import { FaArrowRightLong } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { Button } from '@/components/ui/button';

import Social from '@/components/my-components/Social';

import variants from '@/utils/variants';
import { motion } from "framer-motion";

import homeData from "../../src/data/home.json"


function Home() {

    const { img, name, description } = homeData.home.card_details
    const { pagetitleone, pagetitletwo, about, years_of_expirence, completed_project, Worldwide_client } = homeData.home

    return (

        <>
            <main className='main-home'>
                {/* Banner */}
                <section className='main-banner'>

                    {/* Main Banner */}
                    <div className='banner'>
                        <div className='left'>
                            <div className='card'>

                                <img className='style-icon-2' src={img2} />
                                <div className='profile'>
                                    <img src={img ? img : profile} alt='profle pic' />
                                </div>

                                <div className='profile-name'>
                                    <h1>{name ? name : "Vaibhav Waghre"}</h1>
                                </div>

                                <img className='style-icon-1' src={img1} />

                                <Button className='resume'>
                                    Resume <FaFileAlt />
                                </Button>

                                <p>
                                    {description ? description : "Resume A Software Engineer who has developed countless innovative solutions."}
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
                                    {pagetitleone ? pagetitleone : "SOFTWARE"}
                                </motion.h1>

                                <motion.h1
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.1 }}
                                    variants={variants("bottom", 0.1)}
                                >
                                    {pagetitletwo ? pagetitletwo : "DEVELOPER"}
                                </motion.h1>

                                <motion.p
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.1 }}
                                    variants={variants("bottom", 0.1)}
                                >{about ? about : "Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products."}</motion.p>


                                {/* Achiement Info */}
                                <div className='achivements'>
                                    <motion.div
                                        className='achivements-card'
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.1 }}
                                        variants={variants("bottom", 0.1)}
                                    >
                                        <h1>{'\u002B'} {years_of_expirence}</h1>
                                        <p>YEARS OF EXPERIENCE</p>
                                    </motion.div>

                                    <motion.div
                                        className='achivements-card'
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.1 }}
                                        variants={variants("bottom", 0.1)}
                                    >
                                        <h1>{'\u002B'} {completed_project}</h1>
                                        <p>PROJECTS COMPLETED</p>
                                    </motion.div>

                                    <motion.div
                                        className='achivements-card'
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.1 }}
                                        variants={variants("bottom", 0.1)}
                                    >
                                        <h1>{'\u002B'} {Worldwide_client}</h1>
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


