import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaInstagramSquare, FaLinkedin, } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa";
function Social() {
    return (
        <>
            <div className='social'>
                <Link to="/" >
                    <FaInstagramSquare size={24} />
                </Link>

                <Link >
                    <FaLinkedin size={24} />
                </Link>

                <Link>
                    <FaTwitter size={24} />
                </Link>

                <Link>
                    <FaGithub size={24} />
                </Link>
            </div>
        </>
    )
}

export default Social