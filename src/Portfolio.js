import React from 'react'
import webDevelop from './Images/web.jpg'
import IOS from './Images/ios.jpg'
import Dapp from './Images/dapp.jpg'
import Crypto from './Images/crypto.jpg'


const Portfolio = () => {
  return (
    <section className='portfoliostyle' id='section4'>
      <div className="portfolio-heading">
        <h1>Portfolio</h1>
        <div
          className="portfolio-item"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="portfolio-img has-margin-right">
            <img src={webDevelop} height='250px' alt=""/>
          </div>
          <div className="portfolio-description">
            <h6>Web Development</h6>
            <h2>Instagram Clone</h2>
            <p>
              A fully functional instagram clone 
              made in MERN stack with cloudinary as 
              image cloud provider. You can signin/signup
              upload imagee, follow and unfollow, and other 
              small functionalities.
            </p>

          </div>
        </div>
        <div
          className="portfolio-item"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <div className="portfolio-description has-margin-right" style={{marginLeft: 20}}>
            <h6>Blockchain Wep App</h6>
            <h2>Decentralized Twitter</h2>
            <p>
            A decentralized space for creating content in which viewers
             can pay you directly for your content.
            Technology Used: Web3, Solidity, Truffle, Reactjs
            </p>

          </div>
          <div className="portfolio-img">
            <img src={Dapp} height='250' alt="" />
          </div>
        </div>
        <div
          className="portfolio-item"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="portfolio-img has-margin-right">
            <img src={Crypto} height='250px' alt=""/>
          </div>
          <div className="portfolio-description">
            <h6>Web Development</h6>
            <h2>Crpto Tracking</h2>
            <p>
              A simple cryptocurrency tracking 
              web app made with reactjs and chart.js.
              You can add a coin in the given list and 
              visualize te data of that coin.
            </p>

          </div>
        </div>
        
        <div
          className="portfolio-item"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="portfolio-img has-margin-right">
            <img src={IOS} height='250' alt="" />
          </div>
          <div className="portfolio-description">
            <h6>iOS Application</h6>
            <h2>Mobile Application</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              minus neque in laboriosam qui sunt consequatur consequuntur esse!
              Dolor, corrupti?
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}
export default Portfolio;