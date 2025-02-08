import React, { useState } from 'react'
import { Slider } from "6pp";
import {
    FaArrowLeftLong,
    FaArrowRightLong
} from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoMdArrowDropright } from "react-icons/io";




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
    const [tool, setTool] = useState(false)
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
                        <div className='img'>
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

                        </div>
                    </div>

                    <div className='right-info'>
                        <div className='project-info'>



                            <div className='setArrow'>
                                <span onClick={handleClickOne}> <IoMdArrowDropright /></span>
                                <h1 >  Abhishek Waghre   </h1>
                            </div>



                            {projectInfo ? (
                                <>
                                    <div className='info'>

                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

                                        <div className='links'>
                                            <div>
                                                Git  :-
                                                <Link className='link' to="https://github.com/billimarie/prosecutor-database/issues/9">
                                                    https://github.com/billimarie/prosecutor-database/issues/9
                                                </Link>
                                            </div>


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



                                        </div>
                                    </div>
                                </>
                            ) : ""}


                            <div className='setArrow'>
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
                                </div></>) : ""}


                            <div className='setArrow'>
                                <span onClick={handleClickThree}> <IoMdArrowDropright /></span>
                                <h1 >  Tech and Tools   </h1>
                            </div>

                            {

                                tool ? (<> <div className='tech'>


                                    <div className='tech-box'>
                                        <div>
                                            JavaScript
                                        </div>
                                        <div>
                                            JavaScript
                                        </div>
                                        <div>
                                            JavaScript
                                        </div>
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