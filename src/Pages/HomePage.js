import React from 'react'
import styled from 'styled-components';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Prakhar Chauhan</span></h1>
                <p>
                I have done my graduation from the Indian Institute of Information Technology Vadodara in Computer Science. I am currently working as a Software Engineer at GEP Worldwide with Angular, .NET, MongoDB, SQL Server, and TypeScript Stack. Apart from this tech stack, I have also worked with other techs during my various internships including Python, Flutter, Node, React, and AWS. I have got a good hold on DSA and CS Subjects as well.
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/prakhar-chauhan-8a8283199/" className="icon i-facebook">
                        <LinkedIn />
                    </a>
                    <a href="https://github.com/chauhanprakhar" className="icon i-github">
                        <GithubIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
