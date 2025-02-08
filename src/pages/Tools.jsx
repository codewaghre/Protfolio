import React, { useState } from 'react'
import { tools } from '../utils/tools'
import useScreenWidth from '@/utils/useScreeWidth';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import variants from '@/utils/variants';
import { motion } from "framer-motion";
import ToolsTwo from '../components/my-components/ToolsTwo';
import ToolOne from '@/components/my-components/ToolOne';


function Tools() {

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
                >TECH</motion.h1>
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.1 }}
                    variants={variants("bottom", 0.2)}
                >TOOLS</motion.h1>
            </div>


            {/* <ToolsTwo visibleImages={visibleImages} /> */}
            <ToolOne visibleImages={visibleImages} />

            <div className='show-more'>

                <h1 onClick={handleShowMore}>
                    <FaChevronDown />
                </h1>


                {visibleImages && visibleImages > 9
                    ? (
                        <>
                            <motion.h1
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.1 }}
                                variants={variants("bottom", 0.2)}
                                className='up' onClick={handleShowLess}>
                                <FaChevronUp />
                            </motion.h1>
                        </>
                    ) : ""
                }

            </div>
        </main >
    )
}

export default Tools




