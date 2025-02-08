import { Button } from "@/components/ui/button"
import useScreenWidth from "@/utils/useScreeWidth";
import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Projects() {


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
                <h1>RECENT</h1>
                <h1>PROJECTS</h1>
            </div>



            <div className='project-card-container'>
                <div className='cards'>
                    <div className='project-card' >
                        <div className='img-container'>
                            <img src='https://images.unsplash.com/photo-1594854094685-24273329bb91?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='card-img' />
                        </div>

                        <div className='desc'>
                            <h1>Hello</h1>
                            <h1>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h1>
                        </div>
                    </div>

                    <div className='project-card' >
                        <div className='img-container'>
                            <img src='https://images.unsplash.com/photo-1594854094685-24273329bb91?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='card-img' />
                        </div>

                        <div className='desc'>
                            <h1>Hello</h1>
                            <h1>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h1>
                        </div>
                    </div>
                    <div className='project-card' >
                        <div className='img-container'>
                            <img src='https://images.unsplash.com/photo-1594854094685-24273329bb91?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='card-img' />
                        </div>

                        <div className='desc'>
                            <h1>Hello</h1>
                            <h1>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h1>
                        </div>
                    </div>
                    <div className='project-card' >
                        <div className='img-container'>
                            <img src='https://images.unsplash.com/photo-1594854094685-24273329bb91?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='card-img' />
                        </div>

                        <div className='desc'>
                            <h1>Hello</h1>
                            <h1>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h1>
                        </div>
                    </div>



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