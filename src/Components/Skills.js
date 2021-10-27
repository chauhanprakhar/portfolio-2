import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'Reactjs'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'Nodejs'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'Javascript'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'Web3js'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'Python'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'Solidity'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'C++'}
                            width={'90%'}
                            text={'90%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
