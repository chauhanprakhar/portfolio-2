import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import WebIcon from '@material-ui/icons/Web';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
// import { colors } from '@material-ui/core';

let iconStyles = {
  fontSize: '75px',
  
};

const Service = () => {
  return (
    <div className='servicestyle' id='section3'>


      <div className="container Service">
        <div className="service-heading">
          <h1>Services</h1>
          <h6>What i can do for you</h6>
        </div>
        <div className="my-skills">
          <div className="skill" data-aos="fade-in" data-aos-delay="200">
            <div className="icon-container">
              <WebIcon style={iconStyles} />
            </div>
            <h3>Web Development</h3>
            <p>
              I can build your web solution using some of most 
              hot javascript libraries like ReactJS, Nodejs as server,
              MySQL, Mongodb as database. 
            </p>
          </div>
          <div className="skill" data-aos="fade-in" data-aos-delay="300">
            <div className="icon-container">
            <PhoneIphoneIcon style={iconStyles} />
            </div>
            <h3>Mobile Applications</h3>
            <p>
              I have experience in building optimized
              mobile application using flutter you can use in
              both Android and IOs.
            </p>
          </div>
          <div className="skill" data-aos="fade-in" data-aos-delay="400">
            <div className="icon-container">
            <DynamicFeedIcon style={iconStyles} />
            </div>
            <h3>Blockchain</h3>
            <p>
              Blockchain is my another interest. I have built
              many projects of blockchain over ethereum.
              I have designed smart contracts in solidity in truffle 
              development environment.
            </p>
          </div>
        </div>
      </div>

    </div>


  )
}
export default Service;