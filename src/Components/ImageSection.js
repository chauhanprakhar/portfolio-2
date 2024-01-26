import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                {/* <h4>I am <span>Prakhar</span></h4> */}
                <p className="paragraph">
                Over the course of my career, I've embraced the dynamic world of startups, each offering unique challenges and opportunities
                 across a wide spectrum of technologies and industries. From my early days in programming, where I honed 
                 my skills in back-end services with Node.js, and other frameworks to my venture into startups, where I 
                 tackled complex financial data analysis using Python and established secure API integrations, 
                 and later in Media Sharing, where I delved into backend development
                 each startup experience has enriched my skill set and broadened my perspective.
                  My journey has not only fostered adaptability and rapid learning but also instilled a passion for 
                  leveraging technology to address diverse business needs
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Prakhar Chauhan</p>
                        <p>: 24</p>
                        <p>: Indian</p>
                        <p>: English, Hindi</p>
                        <p>: Hyderabad</p>
                        <p>: Freelance</p>
                    </div>
                </div>
                <a href="https://drive.google.com/file/d/19vXKVeOwgd-U1JptjWSq0liixNOi0IPn/view?usp=sharing"><PrimaryButton title={'Download Cv'} /></a>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
