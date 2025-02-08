import { tools } from '@/utils/tools'
import React from 'react'
import variants from '@/utils/variants';
import { motion } from "framer-motion";

function ToolOne({ visibleImages }) {
    return (
        <div className='tool-container'>
            <div className='tool'>

                {tools.slice(0, visibleImages).map((tool, i) => (
                    <>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.1 }}
                            variants={variants("bottom", 0.2)}
                            className='tool-box' key={i}>
                            <div>
                                <img src={tool.logo} />
                            </div>
                            <h1>{tool.name}</h1>
                        </motion.div>

                    </>
                ))}


            </div>
        </div>
    )
}

export default ToolOne