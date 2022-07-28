import { Box, Typography } from "@mui/material";
import CloudIcon from '@mui/icons-material/Cloud';
import SunnyIcon from '@mui/icons-material/WbSunny';
import SnowIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { amber, blue, grey } from '@mui/material/colors';


const iconMap = {
    'cloudy': <CloudIcon sx={{color: grey[500], fontSize: 150}}/>,
    'sunny': <SunnyIcon sx={{color: amber[500], fontSize: 150}}/>,
    'snow': <SnowIcon sx={{color: blue[500], fontSize: 150}}/>,
    'thunderStorm': <ThunderstormIcon sx={{color: grey[500], fontSize: 150}}/>,
}
export default function WeatherDetailCard({ data }) {
    return (
        <>
            <Box display="flex" justifyContent="space-between" padding={2}>
                <Box display="flex" flexDirection={"column"} justifyContent="start" alignItems={"start"}>
                    <Typography variant="h6" color={"gray"}>{data?.date}</Typography>
                    <Typography variant="h5">{data?.temperature}</Typography>
                    <Typography variant="h5">{data?.description}</Typography>
                </Box>
                <Box display="flex" flexDirection={"column"} justifyContent="start" alignItems={"start"}>
                    {iconMap[data?.code]}
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" padding={2}>
                <Box display="flex" flexDirection={"column"} justifyContent="start" alignItems={"start"}>
                    <Typography variant="h6" color={"gray"}>{data?.date}</Typography>
                    <Typography variant="h5">{data?.temperature}</Typography>
                    <Typography variant="h5">{data?.description}</Typography>
                </Box>
            </Box>     
        </>
    )
}