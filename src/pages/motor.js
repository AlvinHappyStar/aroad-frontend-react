import React from 'react';
import { Box } from '@mui/material';
import Banner from '../component/motor/banner';
import MotoringDriveCourse from '../component/motor/motoringDriveCourse';
import CourseList from '../component/motor/courseList';

function Motor() {
    return (
        <>
            <Box>
                <Banner />
                <MotoringDriveCourse />
                <CourseList />
            </Box>
        </>
    );
}

export default Motor;