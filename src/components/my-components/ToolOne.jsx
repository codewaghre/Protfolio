// import { tools } from '@/utils/tools'
import React from 'react'
import variants from '@/utils/variants';
import { motion } from "framer-motion";
import useScrollDirection from '@/utils/useScrollDirect';

import tool from '../../data/tools.json'



function ToolOne({ visibleImages }) {

    const { tools } = tool.tech_tools

    console.log("tools", tools);


    const scrollDirection = useScrollDirection(); // Get current scroll direction
    const shouldAnimate = scrollDirection === "down"; // Only animate on scroll down



    return (
        <div className='tool-container'>
            <div className='tool'>

                {tools.slice(0, visibleImages).map((tool, i) => (
                    <>
                        <motion.div
                            initial={shouldAnimate ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ amount: 0.1 }}
                            variants={variants("bottom", 0.2)}
                            className='tool-box' key={i}>
                            <div>
                                <img src={tool.logo} />
                            </div>
                            <h1>{tool.name.length > 7 ? tool.name.slice(0, 7).concat("...") : tool.name}</h1>
                        </motion.div >

                    </>
                ))}
            </div>
        </div >
    )
}

export default ToolOne