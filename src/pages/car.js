import React from 'react';
import { Box } from '@mui/material';
import Banner from '../component/car/banner';
import MotoringDriveCourse from '../component/car/motoringDriveCourse';
import CourseList from '../component/car/courseList';
import CourseBuilder from '../component/car/courseBuilder';

function Car() {
    return (
        <>
            <Box>
                <Banner />
                <MotoringDriveCourse />
                <CourseList />
                <CourseBuilder />
            </Box>
        </>
    );
}

export default Car;