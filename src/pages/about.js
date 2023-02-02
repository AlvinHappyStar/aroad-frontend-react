import React from 'react';
import { Box } from '@mui/material';
import Banner from '../component/about/banner';
import MotoringCourse from '../component/about/motoringCourse';
import OfferCourse from '../component/about/offerCourse';
import WhyTakeCourse from '../component/about/whyTakeCourse';
import CarTestDate from '../component/about/cartestdate';
import GetCarLicense from '../component/about/getCarLicense';

function About() {
    return (
        <>
            <Box>
                <Banner />
                <MotoringCourse />
                <OfferCourse />
                <WhyTakeCourse />
                <CarTestDate />
                <GetCarLicense />
            </Box>
        </>
    );
}

export default About;