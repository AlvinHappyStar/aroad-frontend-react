import { Box, Typography } from '@mui/material';
import { DISPLAY_FLEX_ROW } from './default';

const Custom_Typo = ({s1, s2}) => {

    return (
        <Box sx={{
            ...DISPLAY_FLEX_ROW,
            ...{
                justifyContent: 'center',
                borderRadius: '30px',
                border: 'solid',
                borderColor: '#31373E',
                backgroundColor: '#31373E',
                margin:'5px',
                overflow:'hidden',
            }
        }}>
            <Typography sx={{
                backgroundColor:'white',
                color: '#31373E',
                width: '100px',
                textAlign: 'center',
                padding: '10px 0',
                transform: 'skew(-20deg)',
            }}>{s1}</Typography>
            <Typography sx={{
                backgroundColor: '#31373E',
                color: 'white',
                width: '100px',
                textAlign: 'center',
                padding: '10px 0',
            }}>{s2}</Typography>
        </Box>
    );
}

export default Custom_Typo;