import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { DISPLAY_FLEX_ROW } from '../../style/default';
import { H5_Desktop, H5_Mobile } from '../../style/typography';
import { SCREEN_SMALL_WIDTH } from '../../default/value';
import { StyledToggleButtonGroup, ToogleButton_Contained } from '../../style/button';

function SelectOptions() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            console.log('Navbar handleResize log - 1 : ', window.innerWidth);
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]);

    return (
        <Box sx={{
            ...DISPLAY_FLEX_ROW,
            ...{
                justifyContent: 'center',
                marginTop: '45px',
            }
        }}>
            <Grid container spacing={4}
                sx={{
                    width: 'calc(100vw - 160px)',
                    maxWidth: '1100px',
                    justifyContent: 'left',
                    marginBottom: '60px',
                }}>
                <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 3 : 12}>
                    {
                        windowWidth > SCREEN_SMALL_WIDTH &&
                        <H5_Desktop style={{

                            textAlign: 'center',
                        }}>Transmission</H5_Desktop>
                    }
                    {
                        windowWidth <= SCREEN_SMALL_WIDTH &&
                        <H5_Mobile style={{
                            textAlign: 'center',
                        }}>Transmission</H5_Mobile>
                    }
                    <Box sx={{
                        ...DISPLAY_FLEX_ROW,
                        ...{
                            justifyContent: 'center',
                            marginTop: '10px',
                            background: '#f6f6f6',
                            borderRadius: '16px',
                            boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.16)',
                            alignItems: 'center',
                        }
                    }}>
                        <StyledToggleButtonGroup
                            size="small"
                            exclusive
                            aria-label="text alignment">
                            <ToogleButton_Contained>Manual</ToogleButton_Contained>
                            <ToogleButton_Contained>Auto</ToogleButton_Contained>
                        </StyledToggleButtonGroup>
                    </Box>

                </Grid>
                <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 3 : 12}>
                    {
                        windowWidth > SCREEN_SMALL_WIDTH &&
                        <H5_Desktop style={{

                            textAlign: 'center',
                        }}>CBT Training</H5_Desktop>
                    }
                    {
                        windowWidth <= SCREEN_SMALL_WIDTH &&
                        <H5_Mobile style={{
                            textAlign: 'center',
                        }}>CBT Training</H5_Mobile>
                    }
                    <Box sx={{
                        ...DISPLAY_FLEX_ROW,
                        ...{
                            justifyContent: 'center',
                            marginTop: '10px',
                            background: '#f6f6f6',
                            borderRadius: '16px',
                            boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.16)',
                            alignItems: 'center',
                        }
                    }}>
                        <StyledToggleButtonGroup
                            size="small"
                            exclusive
                            aria-label="text alignment">
                            <ToogleButton_Contained>Yes</ToogleButton_Contained>
                            <ToogleButton_Contained>No</ToogleButton_Contained>
                        </StyledToggleButtonGroup>
                    </Box>
                </Grid>
                <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 3 : 12}>
                {
                        windowWidth > SCREEN_SMALL_WIDTH &&
                        <H5_Desktop style={{

                            textAlign: 'center',
                        }}>Theory Test?</H5_Desktop>
                    }
                    {
                        windowWidth <= SCREEN_SMALL_WIDTH &&
                        <H5_Mobile style={{
                            textAlign: 'center',
                        }}>Theory Test?</H5_Mobile>
                    }
                    <Box sx={{
                        ...DISPLAY_FLEX_ROW,
                        ...{
                            justifyContent: 'center',
                            marginTop: '10px',
                            background: '#f6f6f6',
                            borderRadius: '16px',
                            boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.16)',
                            alignItems: 'center',
                        }
                    }}>
                        <StyledToggleButtonGroup
                            size="small"
                            exclusive
                            aria-label="text alignment">
                            <ToogleButton_Contained>Yes</ToogleButton_Contained>
                            <ToogleButton_Contained>No</ToogleButton_Contained>
                        </StyledToggleButtonGroup>
                    </Box>
                </Grid>
                <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 3 : 12}>
                {
                        windowWidth > SCREEN_SMALL_WIDTH &&
                        <H5_Desktop style={{

                            textAlign: 'center',
                        }}>Practical Test</H5_Desktop>
                    }
                    {
                        windowWidth <= SCREEN_SMALL_WIDTH &&
                        <H5_Mobile style={{
                            textAlign: 'center',
                        }}>Practical Test</H5_Mobile>
                    }
                    <Box sx={{
                        ...DISPLAY_FLEX_ROW,
                        ...{
                            justifyContent: 'center',
                            marginTop: '10px',
                            background: '#f6f6f6',
                            borderRadius: '16px',
                            boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.16)',
                            alignItems: 'center',
                        }
                    }}>
                        <StyledToggleButtonGroup
                            size="small"
                            exclusive
                            aria-label="text alignment">
                            <ToogleButton_Contained>Yes</ToogleButton_Contained>
                            <ToogleButton_Contained>No</ToogleButton_Contained>
                        </StyledToggleButtonGroup>
                    </Box>
                </Grid>
                <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 3 : 12}>
                {
                        windowWidth > SCREEN_SMALL_WIDTH &&
                        <H5_Desktop style={{

                            textAlign: 'center',
                        }}>Direct Access Scheme</H5_Desktop>
                    }
                    {
                        windowWidth <= SCREEN_SMALL_WIDTH &&
                        <H5_Mobile style={{
                            textAlign: 'center',
                        }}>Direct Access Scheme</H5_Mobile>
                    }
                    <Box sx={{
                        ...DISPLAY_FLEX_ROW,
                        ...{
                            justifyContent: 'center',
                            marginTop: '10px',
                            background: '#f6f6f6',
                            borderRadius: '16px',
                            boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.16)',
                            alignItems: 'center',
                        }
                    }}>
                        <StyledToggleButtonGroup
                            size="small"
                            exclusive
                            aria-label="text alignment">
                            <ToogleButton_Contained>Yes</ToogleButton_Contained>
                            <ToogleButton_Contained>No</ToogleButton_Contained>
                        </StyledToggleButtonGroup>
                    </Box>
                </Grid>
                
            </Grid>
        </Box>
    );
}

export default SelectOptions;