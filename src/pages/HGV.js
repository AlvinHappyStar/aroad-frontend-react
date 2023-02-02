import React from 'react';
import { Box } from '@mui/material';
import Banner from '../component/hgv/banner';
import MotoringDriveCourse from '../component/hgv/motoringDriveCourse';
import CourseList from '../component/hgv/courseList';

function HGV() {
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

export default HGV;