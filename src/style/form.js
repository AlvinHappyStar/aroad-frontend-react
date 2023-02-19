import { Box, Input, Typography } from '@mui/material';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import * as color from './basic/color';
import * as font from './basic/font';

const ICON_STYLE = {
    position: 'absolute',
    width: '19px',
    height: '19px',
    top: '14px',
    right: '20px',
    cursor: 'pointer',
}

const TextEdit_Custom = ({ placeholder, label, icon, text, style }) => {
    return (
        <Box sx={{
            ...style,
            ...{
                // width: 'fit-content',
                // height: '47px',
                position: 'relative',
            }
        }}>
            <Input
                placeholder={placeholder}
                value={text}
                sx={{
                    minHeight: '47px',
                    borderRadius: '8px',
                    backgroundColor: color.lightGray,
                    padding: '0 20px',
                    '&::before': {
                        display: 'none',
                    },
                    '&::after': {
                        display: 'none',
                    },
                }} />
        </Box>
    );
}

export default TextEdit_Custom;