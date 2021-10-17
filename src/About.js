import React from 'react'
import './Aboutstyle.css'
import profPic from './Images/pic.jpg'


const About = () => {
  return (
    <div className='aboutstyle' id="section2">

      {/* <section className="about"> */}

      <div className="container" data-aos="fade-right">

        <div className="profpic">
          <img src={profPic} height="400px" alt="" />

        </div>
        <div className="about-heading" >
          <h1 id='section2'>About</h1>
        </div>

        <p>
           Hi there! I am Prakhar, a full-stack(MERN) developer and a beginner in the field of blockchain(Web3, truffle, solidity, infura ).
           I have nearly 2-year experience working on personal projects and open-source projects. I have 2 months of experience
           working as a Nodejs back-end developer in WebPanda Media and I am currently working as a React/Futter intern in Masters India.
           Thank you <br />
          <br /> Currently i am in 5th semester of my bachelors from IIITV.
          </p>
        <br />
        <p>
          Here are a few technologies I've been working with recently:
          <li>Nodejs</li>
          <li>Web3</li>
          <li>ReactJS</li>
          <li>Flutter</li>
          <li>Truffle</li>   
          <li>HTML5 & (S)CSS3</li>
        </p>


      </div>

      

      {/* </section> */}

      <div className="landing-text">
        {/* <img src={logo} alt="aitsam ahad logo" className="logo" /> */}
        <h6>WEB Developer | Mobile Developer | Blockchain</h6>
      </div>

    </div>
  )
}
export default About;