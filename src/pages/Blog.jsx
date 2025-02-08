import React from 'react'
import { LuArrowUpRight } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { blogs } from '@/utils/blogs';
function Blog() {
    return (
        <>
            <main>
                <div className='heading'>
                    <h1>CREATIVE</h1>
                    <h1>BLOGS</h1>
                </div>

                <div className='blog-container'>
                    <div className='blog'>

                        {blogs.length && blogs.slice(0, 4).map((data, i) => (
                            <>
                                <Link to={data.link} key={i}>
                                    <div className='blog-card'>
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
                                    </div>
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