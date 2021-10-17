import React from 'react'
import './Aboutstyle.css'

const Contact = () => {
    return (
        <div className="contactstyle " id="section5">
            <section className='container' data-aos="fade-up">
                <div className="text-center">
                    <div className='contact-heading'>
                    <h1>Contact</h1>
                    </div>
                    <div className="contact-form">
                        <form id="contact-form" method="POST">

                            <input type="text" placeholder="Your Name" name="name" className="form-control" required /> <br />
                            <input type="email" placeholder="E-mail" name="email" className="form-control" required /> <br />
                            <textarea name="message" placeholder="Message" rows="4" className="form-control" required></textarea> <br />

                            <input type="Submit" value="SUBMIT" />
                        </form>

                    </div>

                </div>
            </section>
        </div>
    )
}
export default Contact;