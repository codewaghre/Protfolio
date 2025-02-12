import React from 'react'
import { LuArrowUpRight } from "react-icons/lu";
import { Link, useLocation } from 'react-router-dom';
import { blogs } from '@/utils/blogs';
import variants from '@/utils/variants';
import { motion } from "framer-motion";
import useScrollDirection from '@/utils/useScrollDirect';
import blog from '../data/blog.json'

function Blog() {

    const { blog_title_one, blog_title_two, blogs_contents } = blog.blogs
    const scrollDirection = useScrollDirection();
    const shouldAnimate = scrollDirection === "down";
    const location = useLocation();



    return (
        <>
            <main key={location.pathname}>
                <div className='heading'>
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        animate={shouldAnimate ? 'visible' : false}
                        viewport={{ amount: 0.1 }}
                        variants={variants("bottom", 0.2)}
                    >{blog_title_one}</motion.h1>
                    <motion.h1
                        initial="hidden"
                        animate={shouldAnimate ? 'visible' : false}
                        whileInView="visible"
                        viewport={{ amount: 0.1 }}
                        variants={variants("bottom", 0.2)}
                    >{blog_title_two}</motion.h1>
                </div>

                {/* <div className='blog-container'>
                    <div className='blog'>

                        {blogs.length && blogs.slice(0, 4).map((data, i) => (
                            <>
                                <Link to={data.link} key={i}>
                                    <motion.div
                                        initial="hidden"
                                        animate={shouldAnimate ? 'visible' : false}
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
                </div> */}


                {/* new blog Style  */}
                <div className='project-card-container'>

                    <div className='cards' >
                        {blog && blogs_contents.map((data, i) => (
                            <>

                                <Link to={data.link} key={data.id} >
                                    <motion.div
                                        key={i}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.1 }}
                                        variants={variants("bottom", 0.1)}
                                        className='project-card' >
                                        <div className='img-container'>
                                            <img src={data.banner} alt='card-img' />
                                        </div>

                                        <div className='blog-des'>
                                            <p>{data.date}</p>
                                            <h1>{data.title}</h1>
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