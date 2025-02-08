import { meta } from '@eslint/js';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

function Contact() {

    const [formValue, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    console.log("Access Key:", import.meta.env.VITE_EMAIL_ACCESS_KEY);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formValue,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formValue);
        console.log("Access Key:", import.meta.env.VITE_EMAIL_ACCESS_KEY);

        const payload = {
            ...formValue,
            access_key: import.meta.env.VITE_EMAIL_ACCESS_KEY
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Form Submitted Successfully")
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                toast.error("Smothing Went Wrong")

            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Smothing Went Wrong")
        }
    }


    return (
        <>
            <main>
                <div className='heading'>
                    <h1>LET'S WORK</h1>
                    <h1>TOGETHER</h1>
                </div>

                <div className='form-container'>

                    <div className='form'>
                        <form onSubmit={handleSubmit}>
                            <div className='name-email'>
                                <div className='field'>
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        className='bg name'
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formValue.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className='field'>
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        className='bg email'
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formValue.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='field'>
                                <label htmlFor="subject">Subject:</label>
                                <input
                                    className='bg'
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formValue.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='field'>
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    className='bg'
                                    id="message"
                                    name="message"
                                    value={formValue.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {/* submit Button */}
                            <div className='submit'>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </main>
        </>
    )
}

export default Contact