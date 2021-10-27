import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
// import design from '../img/design.svg';
// import intelligence from '../img/intelligence.svg';
// import gamedev from '../img/game-dev.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                        // image={design} 
                        title={'Web Dev'} 
                        paragraph={'My web development tech stack includes Reactjs, Express.js, Nodejs, MongoDB. Apart of these I have experience in GraphQL and SQL'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            // image={intelligence} 
                            title={'App Development'} 
                            paragraph={'I am experienced in app development using Flutter framework. I can build optimized mobile application which can be used in Android and IOS'}
                        />
                    </div>
                    <ServiceCard 
                        // image={gamedev} 
                        title={'Blockchain'} 
                        paragraph={'Blockchain is the thing which really excites me. I love working on projects of blockchain specially which revolves around NFTs and gaming.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
