import { Button } from "@/components/ui/button"
import useScreenWidth from "@/utils/useScreeWidth";
import { motion } from "framer-motion";
import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import variants from '@/utils/variants';
import { Link } from "react-router-dom";

import coverImg from '../assets/img-5.svg'


import projectData from '../data/project.json'

function Projects() {

    const { project_title_one, project_title_two } = projectData.projects

    const [visibleImages, setVisibleImages] = useState(9);

    // calulate this screen pixel screen (like Phone, Pad )
    const isMobile = useScreenWidth();


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
                    {project_title_one}
                </motion.h1>
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.1 }}
                    variants={variants("bottom", 0.2)}
                >
                    {project_title_two}
                </motion.h1>
            </div>



            <div className='project-card-container'>

                <div className='cards' >
                    {projectData && projectData.projects.project_data.map((data, i) => (
                        <>

                            <Link to={`/project-details/${data.id}`} key={data.id} >
                                <motion.div
                                    key={data.id}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.1 }}
                                    variants={variants("bottom", 0.1)}
                                    className='project-card' >
                                    <div className='img-container'>
                                        <img src={data.banners[0] ? data.banners[0] : data.banners[1]} alt='card-img' />
                                    </div>

                                    <div className='desc'>
                                        <h1>{data.project_name}</h1>

                                    </div>
                                </motion.div>
                            </Link>

                        </>
                    ))}
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