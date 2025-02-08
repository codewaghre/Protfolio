import React, { useState } from 'react'
import { tools } from '../utils/tools'
import useScreenWidth from '@/utils/useScreeWidth';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";



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
                <h1>TECH</h1>
                <h1>TOOLS</h1>
            </div>


            <div className='tools-containter'>
                <div className='tools'>
                    {tools.slice(0, visibleImages).map((tool, index) => (
                        <>
                            <div className='tool-box' key={index} >
                                <div className='tool-img'>
                                    <img src={tool.logo} />
                                </div>
                                <div className='tool-des'>
                                    <h1>{tool.name}</h1>
                                    <p>{tool.description}</p>
                                </div>
                            </div>
                        </>
                    ))}
                </div>

                {/* Testing */}
                {/* {isMobile && visibleImages < tools.length && (
                    <button className="show-more-button" onClick={handleShowMore}>
                        Show More
                    </button>
                )} */}
            </div>

            <div className='show-more'>

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

            </div>
        </main >
    )
}

export default Tools


