import CompaniesLogo from '@/components/my-components/CompaniesLogo';
import { WorkflowIcon } from 'lucide-react';
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import variants from '@/utils/variants';
import { motion } from "framer-motion";

function Work() {
    return (
        <>
            <div>
                <div className='heading'>
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.1 }}
                        variants={variants("bottom", 0.4)}
                    >
                        ABOUT MY
                    </motion.h1>
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.1 }}
                        variants={variants("bottom", 0.2)}
                    >
                        WORK
                    </motion.h1>
                </div>



                <div className='work-timeline'>
                    <VerticalTimeline lineColor='#353334' >

                        {/* first */}
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work custom-timeline-element" // Add custom class
                            contentStyle={{
                                background: '#151312',
                                color: '#988E8E',
                                border: '1px solid #988e8e40',
                                marginBottom: "20px"
                            }}
                            contentArrowStyle={{ borderRight: '7px solid #353334' }}
                            date="2011 - present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: 'white' }}
                            icon={<CompaniesLogo />}
                        >
                            <h1 className="vertical-timeline-element-title hero">Creative Director</h1>
                            <h4 className="vertical-timeline-element-subtitle hero-des">Miami, FL</h4>
                            <div>
                                <ul className='ul'>
                                    <motion.li
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.1 }}
                                        variants={variants("bottom", 0.1)}
                                    >
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'
                                    </motion.li>
                                    <motion.li
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.1 }}
                                        variants={variants("bottom", 0.2)}
                                    >
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'
                                    </motion.li>
                                </ul>
                            </div>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work custom-timeline-element" // Add custom class
                            contentStyle={{
                                background: '#151312',
                                color: '#988E8E',
                                border: '1px solid #988e8e40',
                            }}
                            contentArrowStyle={{ borderRight: '7px solid #353334' }}
                            date="2011 - present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: 'white' }}
                            icon={<CompaniesLogo />}
                        >
                            <h1 className="vertical-timeline-element-title hero">Creative Director</h1>
                            <h4 className="vertical-timeline-element-subtitle hero-des">Miami, FL</h4>
                            <div>
                                <ul className='ul'>
                                    <motion.li
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.1 }}
                                        variants={variants("bottom", 0.2)}
                                    >
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'
                                    </motion.li>
                                    <motion.li
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.1 }}
                                        variants={variants("bottom", 0.2)}
                                    >
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'
                                    </motion.li>
                                </ul>
                            </div>
                        </VerticalTimelineElement>






                    </VerticalTimeline>
                </div>

            </div>


        </>
    )
}

export default Work