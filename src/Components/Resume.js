import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'August,2021 - October,2021'} 
                        title={'SDE Intern'}
                        subTitle={'Masters India'}
                        text={'Worked as a React/Flutter developer helped in building optimized mobile app for users to manage their business by simply entering GST number.'} 
                    />
                    <ResumeItem 
                        year={'May,2021 - July,2021'} 
                        title={'Web Developer Intern'}
                        subTitle={'WebPanda Media'}
                        text={'Worked in the backend of a referral-based investor and founder system. The tech stack in which I work includes mainly nodejs and reactjs.'} />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2019 - Present'} 
                        title={'Btech in Computer Science'}
                        subTitle={'Indian Institute of Information Technology Vadodara, Gandhinagar'}
                        text={'Completed studying major subjects like Operating Systems, Database Management System, Computer Programming, Computer Networks and other core subjects.'} 
                    />
                    <ResumeItem 
                        year={'2009 - 2018'} 
                        title={'Intermediate'}
                        subTitle={'PMS Dhampur'}
                        text={'Completed my intermediate in science with physics, chemistry, mathematics as my major subjects. Physical Education and English are other two subjects.'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
