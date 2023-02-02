import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from '../../style/default';
import { H3_Desktop, H5_Desktop, Body_Text_Desktop } from '../../style/typography';
import { SCREEN_SMALL_WIDTH } from '../../default/value';
import Custom_Typo from '../../style/custom_typo';

function CourseList() {
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
            }
        }}>
            <Grid container spacing={4}
                sx={{
                    width: windowWidth > SCREEN_SMALL_WIDTH ? 'calc(100vw - 100px)' : 'calc(100vw)',
                    maxWidth: '1600px',
                    margin: windowWidth > SCREEN_SMALL_WIDTH ? '10px 20px' : '10px 20px',
                    height: 'fit-content',
                    justifyContent: 'left',
                    // marginBottom: '60px',
                }}>
                <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 4 : 12}>
                    <Box sx={{
                        ...DISPLAY_FLEX_ROW,
                        ...{
                            justifyContent: 'center',
                            marginTop: '20px',
                            height:'400px',
                        }
                    }}>
                        <Box sx={{
                            ...DISPLAY_FLEX_COLUMN,
                            ...{
                                justifyContent: 'center',
                                marginTop: '20px',
                                padding: '30px 0',
                                borderRadius: '30px',
                                boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.16)',
                                alignItems: 'center',
                            }
                        }}>
                            <Box sx={{
                                ...DISPLAY_FLEX_ROW,
                                ...{
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    margin: '20px',
                                }
                            }}>
                                <Box sx={{
                                    ...DISPLAY_FLEX_COLUMN,
                                    ...{
                                        justifyContent: 'center',
                                    }
                                }}>
                                    <Custom_Typo
                                        s1={'20 hrs'}
                                        s2={'£799'} />
                                    <Custom_Typo
                                        s1={'30 hrs'}
                                        s2={'£1,119'} />
                                </Box>
                                <Box sx={{
                                    ...DISPLAY_FLEX_COLUMN,
                                    ...{
                                        justifyContent: 'center',
                                    }
                                }}>
                                    <img alt='' src='./images/flow_horizontal.png'
                                        style={{
                                            width: '200px',
                                            height: '55px',
                                            marginLeft: '40px',
                                        }} />
                                </Box>

                            </Box>

                            <Box sx={{
                                ...DISPLAY_FLEX_COLUMN,
                                ...{
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    margin: '20px',
                                }
                            }}>
                                <H3_Desktop style={{
                                    width: 'calc(100% - 60px)',
                                    maxWidth: '750px',
                                    textAlign: 'left',
                                    marginBottom: '10px'
                                }}>Driving Intermediate</H3_Desktop>
                                <Body_Text_Desktop>This course is for drivers who need to brush up on their driving skills, or who want to learn how to drive.</Body_Text_Desktop>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 4 : 12}>
                    <Box sx={{
                        ...DISPLAY_FLEX_ROW,
                        ...{
                            justifyContent: 'center',
                            marginTop: '20px',
                            height:'400px',
                        }
                    }}>
                        <Box sx={{
                            ...DISPLAY_FLEX_COLUMN,
                            ...{
                                justifyContent: 'center',
                                marginTop: '20px',
                                padding: '30px 0',
                                borderRadius: '30px',
                                boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.16)',
                                alignItems: 'center',
                            }
                        }}>
                            <Box sx={{
                                ...DISPLAY_FLEX_ROW,
                                ...{
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    margin: '20px',
                                }
                            }}>
                                <Box sx={{
                                    ...DISPLAY_FLEX_COLUMN,
                                    ...{
                                    }
                                }}>
                                    <H5_Desktop style={{
                                }}>Theory Test</H5_Desktop>
                                </Box>
                                <Box sx={{
                                    ...DISPLAY_FLEX_COLUMN,
                                    ...{
                                        justifyContent: 'center',
                                    }
                                }}>
                                    <img alt='' src='./images/flow_horizontal.png'
                                        style={{
                                            width: '200px',
                                            height: '55px',
                                            marginLeft: '40px',
                                        }} />
                                </Box>

                            </Box>

                            <Box sx={{
                                ...DISPLAY_FLEX_COLUMN,
                                ...{
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    margin: '20px',
                                }
                            }}>
                                <H3_Desktop style={{
                                    width: 'calc(100% - 60px)',
                                    maxWidth: '750px',
                                    textAlign: 'left',
                                    marginBottom: '10px'
                                }}>Driving Theory Test Prep</H3_Desktop>
                                <Body_Text_Desktop>You must pass your theory test before taking your practical test as a learner driver. We can guide you through preparing for the test to boost your confidence and chances to pass the test.</Body_Text_Desktop>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 4 : 12}>
                    <Box sx={{
                        ...DISPLAY_FLEX_ROW,
                        ...{
                            justifyContent: 'center',
                            marginTop: '20px',
                            height:'400px',
                        }
                    }}>
                        <Box sx={{
                            ...DISPLAY_FLEX_COLUMN,
                            ...{
                                justifyContent: 'center',
                                marginTop: '20px',
                                padding: '30px 0',
                                borderRadius: '30px',
                                boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.16)',
                                alignItems: 'center',
                            }
                        }}>
                            <Box sx={{
                                ...DISPLAY_FLEX_ROW,
                                ...{
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    margin: '20px',
                                }
                            }}>
                                <Box sx={{
                                    ...DISPLAY_FLEX_COLUMN,
                                    ...{
                                        justifyContent: 'center',
                                    }
                                }}>
                                    <Custom_Typo
                                        s1={'4 hrs'}
                                        s2={'£349'} />
                                    <Body_Text_Desktop>Including Practical Test</Body_Text_Desktop>
                                </Box>
                                <Box sx={{
                                    ...DISPLAY_FLEX_COLUMN,
                                    ...{
                                        justifyContent: 'center',
                                    }
                                }}>
                                    <img alt='' src='./images/flow_horizontal.png'
                                        style={{
                                            width: '200px',
                                            height: '55px',
                                            marginLeft: '40px',
                                        }} />
                                </Box>

                            </Box>

                            <Box sx={{
                                ...DISPLAY_FLEX_COLUMN,
                                ...{
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    margin: '20px',
                                }
                            }}>
                                <H3_Desktop style={{
                                    width: 'calc(100% - 60px)',
                                    maxWidth: '750px',
                                    textAlign: 'left',
                                    marginBottom: '10px'
                                }}>Road Test</H3_Desktop>
                                <Body_Text_Desktop>This course is designed for drivers who need help preparing for their road test. It's perfect if you're nervous about taking your first road test, or if you recently failed your test.</Body_Text_Desktop>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 4 : 12}>
                    <Box sx={{
                        ...DISPLAY_FLEX_ROW,
                        ...{
                            justifyContent: 'left',
                            marginTop: '20px',
                        }
                    }}>
                        <Box sx={{
                            ...DISPLAY_FLEX_COLUMN,
                            ...{
                                justifyContent: 'center',
                                marginTop: '20px',
                                padding: '30px 0',
                                borderRadius: '30px',
                                boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.16)',
                                alignItems: 'center',
                            }
                        }}>
                            <Box sx={{
                                ...DISPLAY_FLEX_ROW,
                                ...{
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    margin: '20px',
                                }
                            }}>
                                <Box sx={{
                                    ...DISPLAY_FLEX_COLUMN,
                                    ...{
                                        justifyContent: 'center',
                                    }
                                }}>
                                    <Custom_Typo
                                        s1={'36 hrs'}
                                        s2={'£1,499'} />
                                    <Custom_Typo
                                        s1={'46 hrs'}
                                        s2={'£1,839'} />
                                </Box>
                                <Box sx={{
                                    ...DISPLAY_FLEX_COLUMN,
                                    ...{
                                        justifyContent: 'center',
                                    }
                                }}>
                                    <img alt='' src='./images/flow_horizontal.png'
                                        style={{
                                            width: '200px',
                                            height: '55px',
                                            marginLeft: '40px',
                                        }} />
                                </Box>

                            </Box>

                            <Box sx={{
                                ...DISPLAY_FLEX_COLUMN,
                                ...{
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    margin: '20px',
                                }
                            }}>
                                <H3_Desktop style={{
                                    width: 'calc(100% - 40px)',
                                    maxWidth: '750px',
                                    textAlign: 'left',
                                    marginBottom: '10px'
                                }}>Hands-on Driving Lesson</H3_Desktop>
                                <Body_Text_Desktop>This course is designed for those who want to learn how to drive a manual transmission or automatic vehicle. Hands-on training allows students to get behind the wheel of a manual or automatic vehicle and start practicing immediately with the guidance of a professional instructor.</Body_Text_Desktop>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 4 : 12}>
                    <Box sx={{
                        ...DISPLAY_FLEX_ROW,
                        ...{
                            justifyContent: 'center',
                            marginTop: '20px',
                        }
                    }}>
                        <Box sx={{
                            ...DISPLAY_FLEX_COLUMN,
                            ...{
                                justifyContent: 'center',
                                marginTop: '20px',
                                padding: '30px 0',
                                borderRadius: '30px',
                                boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.16)',
                                alignItems: 'center',
                            }
                        }}>
                            <Box sx={{
                                ...DISPLAY_FLEX_ROW,
                                ...{
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    margin: '20px',
                                }
                            }}>
                                <Box sx={{
                                    ...DISPLAY_FLEX_COLUMN,
                                    ...{
                                        justifyContent: 'center',
                                    }
                                }}>
                                    <Custom_Typo
                                        s1={'6 hrs'}
                                        s2={'£239'} />
                                    <Custom_Typo
                                        s1={'16 hrs'}
                                        s2={'£639'} />
                                </Box>
                                <Box sx={{
                                    ...DISPLAY_FLEX_COLUMN,
                                    ...{
                                        justifyContent: 'center',
                                    }
                                }}>
                                    <img alt='' src='./images/flow_horizontal.png'
                                        style={{
                                            width: '200px',
                                            height: '55px',
                                            marginLeft: '40px',
                                        }} />
                                </Box>

                            </Box>

                            <Box sx={{
                                ...DISPLAY_FLEX_COLUMN,
                                ...{
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    margin: '20px',
                                }
                            }}>
                                <H3_Desktop style={{
                                    width: 'calc(100% - 60px)',
                                    maxWidth: '750px',
                                    textAlign: 'left',
                                    marginBottom: '10px'
                                }}>Refresher Course</H3_Desktop>
                                <Body_Text_Desktop>Taking a refresher course allows learners to refresh their driving knowledge. Refresher courses are designed to last just a few days since many aspects of driving are already mastered by experienced learners.</Body_Text_Desktop>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
}

export default CourseList;