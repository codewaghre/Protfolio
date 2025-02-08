import { Button } from "@/components/ui/button"
import useScreenWidth from "@/utils/useScreeWidth";
import { motion } from "framer-motion";
import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import variants from '@/utils/variants';
import { Link } from "react-router-dom";

function Projects() {


    const [visibleImages, setVisibleImages] = useState(9);

    // calulate this screen pixel screen (like Phone, Pad )
    const isMobile = useScreenWidth();

    console.log(visibleImages > 13);

    const handleShowMore = () => {
        setVisibleImages((prevVisibleImages) => prevVisibleImages + 9);
    };

    const handleShowLess = () => {
        setVisibleImages((prevVisibleImages) => prevVisibleImages - 9);
    }


    return (
        <main>
            <div className='heading'>
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.1 }}
                    variants={variants("bottom", 0.2)}
                >
                    RECENT
                </motion.h1>
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.1 }}
                    variants={variants("bottom", 0.2)}
                >
                    PROJECTS
                </motion.h1>
            </div>



            <div className='project-card-container'>
                <div className='cards'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.1 }}
                        variants={variants("left", 0.2)}
                        className='project-card' >
                        <div className='img-container'>
                            <img src='https://images.unsplash.com/photo-1594854094685-24273329bb91?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='card-img' />
                        </div>

                        <div className='desc'>
                            <h1>Hello</h1>
                            {/* <h1>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h1> */}
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.1 }}
                        variants={variants("left", 0.2)}
                        className='project-card' >
                        <div className='img-container'>
                            <img src='https://images.unsplash.com/photo-1594854094685-24273329bb91?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='card-img' />
                        </div>

                        <div className='desc'>
                            <h1>Hello</h1>
                            {/* <h1>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h1> */}
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.1 }}
                        variants={variants("right", 0.2)}
                        className='project-card' >
                        <div className='img-container'>
                            <img src='https://images.unsplash.com/photo-1594854094685-24273329bb91?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='card-img' />
                        </div>

                        <div className='desc'>
                            <h1>Hello</h1>
                            {/* <h1>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h1> */}
                        </div>
                    </motion.div>


                    <Link to="/project-details">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.1 }}
                            variants={variants("right", 0.2)}
                            className='project-card' >
                            <div className='img-container'>
                                <img src='https://images.unsplash.com/photo-1594854094685-24273329bb91?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='card-img' />
                            </div>

                            <div className='desc'>
                                <h1>Hello</h1>
                                {/* <h1>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h1> */}
                            </div>
                        </motion.div>
                    </Link>



                </div>
            </div>



            {/* Tesitng / future need */}
            {/* <div className='show-more'>

                <h1 onClick={handleShowMore}>
                    <FaChevronDown />
                </h1>


                {visibleImages && visibleImages > 9
                    ? (
                        <>
                            <h1 className='up' onClick={handleShowLess}>
                                <FaChevronUp />
                            </h1>
                        </>
                    ) : ""
                }

            </div> */}


        </main>
    )
}

export default Projects