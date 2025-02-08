import React from 'react'
import { LuArrowUpRight } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { blogs } from '@/utils/blogs';
import variants from '@/utils/variants';
import { motion } from "framer-motion";
function Blog() {
    return (
        <>
            <main>
                <div className='heading'>
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.1 }}
                        variants={variants("bottom", 0.2)}
                    >CREATIVE</motion.h1>
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.1 }}
                        variants={variants("bottom", 0.2)}
                    >BLOGS</motion.h1>
                </div>

                <div className='blog-container'>
                    <div className='blog'>

                        {blogs.length && blogs.slice(0, 4).map((data, i) => (
                            <>
                                <Link to={data.link} key={i}>
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.1 }}
                                        variants={variants(i % 2 === 0 ? "left" : "right", 0.3)}
                                        className='blog-card'>
                                        <div className='blog-des'>
                                            <h1>{data.title}</h1>
                                            <p>{data.description} </p>

                                            <p>{data.date}</p>
                                        </div>

                                        <div className='blog-go'>
                                            <div>
                                                <LuArrowUpRight />
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            </>
                        ))}


                    </div>
                </div>
            </main>
        </>
    )
}

export default Blog