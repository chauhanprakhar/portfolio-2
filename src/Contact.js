import React, {useState, useRef} from 'react'
import './Aboutstyle.css'
import emailjs from "emailjs-com";

const Contact = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "service_wth8aop",
            "template_8cefzd6",
            formRef.current,
            "user_UVrfQkyDNxxUilSTZyUgk"
          )
          .then(
            (result) => {
              console.log(result.text);
              setDone(true)
            },
            (error) => {
              console.log(error.text);
            }
          );
      };


    return (
        <div className="contactstyle " id="section5">
            <section className='container' data-aos="fade-up">
                <div className="text-center">
                    <div className='contact-heading'>
                    <h1>Contact</h1>
                    </div>
                    <div className="contact-form">
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" placeholder="Your Name" name="name" className="form-control" required /> <br />
                            <input type="email" placeholder="E-mail" name="email" className="form-control" required /> <br />
                            <textarea name="message" placeholder="Message" rows="4" className="form-control" required></textarea> <br />

                            <input type="Submit" value="SUBMIT" /><br/>
                            <h3 className="thankyou">{done && "Thank you..."}</h3>
                        </form>

                    </div>

                </div>
            </section>
        </div>
    )
}
export default Contact;