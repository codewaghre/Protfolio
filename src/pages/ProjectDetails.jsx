import React, { useState } from 'react'
import { Slider } from "6pp";
import {
    FaArrowLeftLong,
    FaArrowRightLong
} from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoMdArrowDropright } from "react-icons/io";
import variants from '@/utils/variants';
import { motion } from "framer-motion";




const images = [
    {
        "id": 1,
        "url": "https://images.unsplash.com/photo-1738969773091-abcf274f7e0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 2,
        "url": "https://images.unsplash.com/photo-1738831920700-ab556b543b46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 3,
        "url": "https://images.unsplash.com/photo-1738395548716-522475b89043?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 4,
        "url": "https://images.unsplash.com/photo-1738748444696-2d847bc253ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

function ProjectDetails() {


    const [projectInfo, setProjectInfo] = useState(true)
    const [spec, setSpec] = useState(false)
    const [tool, setTool] = useState(true)
    const handleClickOne = () => {
        setProjectInfo(!projectInfo)
    }

    const handleClickTwo = () => {
        setSpec(!spec)
    }

    const handleClickThree = () => {
        setTool(!tool)
    }


    return (
        <>
            <main className='project-details-container'>
                <div className='details-contaier'>

                    <div className='left-info'>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.1 }}
                            variants={variants("bottom", 0.2)}
                            className='img'>
                            <Slider
                                showThumbnails
                                objectFit="cover"
                                NextIcon={<FaArrowRightLong />}
                                PrevIcon={<FaArrowLeftLong />}
                                autoplay={true}
                                autoplayInterval={500}
                                onClick={() => setCarouselOpen(true)}
                                images={images.map(i => i.url) || []}
                            />

                        </motion.div>
                    </div>

                    <div className='right-info'>
                        <div className='project-info'>



                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.1 }}
                                variants={variants("bottom", 0.2)}
                                className='setArrow'>
                                <span onClick={handleClickOne}> <IoMdArrowDropright /></span>
                                <h1 >  Abhishek Waghre   </h1>
                            </motion.div>



                            {projectInfo ? (
                                <>
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.1 }}
                                        variants={variants("bottom", 0.2)}
                                        className='info'>

                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

                                        <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ amount: 0.1 }}
                                            variants={variants("bottom", 0.2)}
                                            className='links'>
                                            <motion.div
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ amount: 0.1 }}
                                                variants={variants("bottom", 0.2)}
                                            >
                                                Git  :-
                                                <Link className='link' to="https://github.com/billimarie/prosecutor-database/issues/9">
                                                    https://github.com/billimarie/prosecutor-database/issues/9
                                                </Link>
                                            </motion.div>


                                            <div>
                                                Live  :-
                                                <Link className='link' to="https://github.com/billimarie/prosecutor-database/issues/9">
                                                    https://github.com/billimarie/prosecutor-database/issues/9
                                                </Link>
                                            </div>

                                            <div>
                                                Youtube  :-
                                                <Link className='link' to="https://github.com/billimarie/prosecutor-database/issues/9">
                                                    https://github.com/billimarie/prosecutor-database/issues/9
                                                </Link>
                                            </div>



                                        </motion.div>
                                    </motion.div>
                                </>
                            ) : ""}


                            {/* <div className='setArrow'>
                                <span onClick={handleClickTwo}> <IoMdArrowDropright /></span>
                                <h1 >  Specifications   </h1>
                            </div>

                            {spec ? (<>
                                <div className='specs'>


                                    <ul>
                                        <li>The minimum requirements necessary for a web app include a user interface, database, security features</li>
                                    </ul>
                                    <ul>
                                        <li>The minimum requirements necessary for a web app include a user interface, database, security features,</li>
                                    </ul>
                                    <ul>
                                        <li>The minimum requirements necessary for a web app include a user interface, database, security features,</li>
                                    </ul>
                                    <ul>
                                        <li>The minimum requirements necessary for a web app include a user interface, database, security features,</li>
                                    </ul>
                                    <ul>
                                        <li>The minimum requirements necessary for a web app include a user interface, database, security features,</li>
                                    </ul>
                                </div></>) : ""} */}


                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.1 }}
                                variants={variants("bottom", 0.2)}
                                className='setArrow'>
                                <span onClick={handleClickThree}> <IoMdArrowDropright /></span>
                                <h1 >  Tech and Tools   </h1>
                            </motion.div>

                            {

                                tool ? (<> <div className='tech'>


                                    <div className='tech-box'>
                                        <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ amount: 0.1 }}
                                            variants={variants("bottom", 0.2)}
                                        >
                                            JavaScript
                                        </motion.div>
                                        <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ amount: 0.1 }}
                                            variants={variants("bottom", 0.2)}
                                        >
                                            JavaScript
                                        </motion.div>
                                        <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ amount: 0.1 }}
                                            variants={variants("bottom", 0.2)}
                                        >
                                            JavaScript
                                        </motion.div>
                                    </div>
                                </div></>) : ""
                            }


                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}

export default ProjectDetails