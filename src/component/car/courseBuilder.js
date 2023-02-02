import React, { useState, useEffect } from 'react';
import { Box, Grid, Slider } from '@mui/material';
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from '../../style/default';
import { H2_Desktop, H2_Mobile, H5_Desktop } from '../../style/typography';
import TextEdit_Custom from '../../style/form';
import { SCREEN_SMALL_WIDTH } from '../../default/value';
import { Button_Contained } from '../../style/button';


function CourseBuilder() {
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
                width: '100vw',

            }
        }}>
            <Box sx={{
                ...DISPLAY_FLEX_COLUMN,
                ...{
                    width: windowWidth > SCREEN_SMALL_WIDTH ? 'calc(100vw - 100px)' : 'calc(100vw - 40px)',
                    maxWidth: '1440px',
                    margin: windowWidth > SCREEN_SMALL_WIDTH ? '50px 50px' : '50px 20px',
                    height: 'fit-content',
                    padding: '30px 0',
                    borderRadius: '30px',
                    boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.16)',
                    alignItems: 'center',
                }
            }}>
                {
                    windowWidth > SCREEN_SMALL_WIDTH &&
                    <H2_Desktop style={{
                        width: 'calc(100% - 60px)',
                        maxWidth: '750px',
                        textAlign: 'center',
                    }}>Course Builder</H2_Desktop>
                }
                {
                    windowWidth <= SCREEN_SMALL_WIDTH &&
                    <H2_Mobile style={{
                        width: 'calc(100% - 60px)',
                        maxWidth: '750px',
                        textAlign: 'center',
                    }}>Course Builder</H2_Mobile>
                }
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
                            <H5_Desktop style={{
                                maxWidth: '750px',
                                textAlign: 'left',
                            }}>Postal Code*</H5_Desktop>
                            <TextEdit_Custom
                                placeholder={''}
                                label={'Input Postal Code'}
                                icon={0}
                                text={''}
                                style={{
                                    marginBottom: '22px',
                                    '& input': {
                                        maxWidth: '700px',
                                    },
                                }}
                            />

                        </Grid>
                        <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 3 : 12}>
                            <H5_Desktop style={{
                                maxWidth: '750px',
                                textAlign: 'left',
                            }}>Contact No*</H5_Desktop>
                            <TextEdit_Custom
                                placeholder={''}
                                label={'Input Contact Number'}
                                icon={0}
                                text={''}
                                style={{
                                    marginBottom: '22px',
                                    '& input': {
                                        maxWidth: '700px',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 3 : 12}>
                            <H5_Desktop style={{
                                maxWidth: '750px',
                                textAlign: 'left',
                            }}>Email Address*</H5_Desktop>
                            <TextEdit_Custom
                                placeholder={''}
                                label={'Input Email Address'}
                                icon={0}
                                text={''}
                                style={{
                                    marginBottom: '22px',
                                    '& input': {
                                        maxWidth: '700px',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 3 : 12}>
                            <H5_Desktop style={{
                                maxWidth: '750px',
                                textAlign: 'left',
                            }}>Email Address*</H5_Desktop>
                            <TextEdit_Custom
                                placeholder={''}
                                label={'Input Email Address'}
                                icon={0}
                                text={''}
                                style={{
                                    marginBottom: '22px',
                                    '& input': {
                                        maxWidth: '700px',
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{
                    ...DISPLAY_FLEX_COLUMN,
                    ...{
                        width: windowWidth > SCREEN_SMALL_WIDTH ? 'calc(100vw - 100px)' : 'calc(100vw - 40px)',
                        maxWidth: '750px'
                    }
                }}>
                    <H5_Desktop style={{
                        maxWidth: '1440px',
                        textAlign: 'left',
                    }}>What is your driving experience?</H5_Desktop>
                    <Slider />
                </Box>

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
                            <H5_Desktop style={{
                                maxWidth: '750px',
                                textAlign: 'left',
                            }}>What is your pace of learning new skills?</H5_Desktop>
                            <TextEdit_Custom
                                placeholder={''}
                                label={'Average'}
                                icon={0}
                                text={''}
                                style={{
                                    marginBottom: '22px',
                                    '& input': {
                                        maxWidth: '700px',
                                    },
                                }}
                            />

                        </Grid>
                        <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 3 : 12}>
                            <H5_Desktop style={{
                                maxWidth: '750px',
                                textAlign: 'left',
                            }}>Select transmission for the course</H5_Desktop>
                            <TextEdit_Custom
                                placeholder={''}
                                label={'Automatic'}
                                icon={0}
                                text={''}
                                style={{
                                    marginBottom: '22px',
                                    '& input': {
                                        maxWidth: '700px',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 3 : 12}>
                            <H5_Desktop style={{
                                maxWidth: '750px',
                                textAlign: 'left',
                            }}>Select transmission for the course</H5_Desktop>
                            <TextEdit_Custom
                                placeholder={''}
                                label={'Include a Driving Test'}
                                icon={0}
                                text={''}
                                style={{
                                    marginBottom: '22px',
                                    '& input': {
                                        maxWidth: '700px',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 3 : 12}>
                            <H5_Desktop style={{
                                maxWidth: '750px',
                                textAlign: 'left',
                            }}>Preferred Lesson Times</H5_Desktop>
                            <TextEdit_Custom
                                placeholder={''}
                                label={'Weekends or Evenings (+ £50)'}
                                icon={0}
                                text={''}
                                style={{
                                    marginBottom: '22px',
                                    '& input': {
                                        maxWidth: '700px',
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{
                    ...DISPLAY_FLEX_ROW,
                    ...{
                        justifyContent: 'left',
                        margin: '30px 0 10px',
                    }
                }}>
                    <Button_Contained>Continue</Button_Contained>
                </Box>
            </Box>
        </Box >
    );
}

export default CourseBuilder;