import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { useEffect } from 'react';
import CloudIcon from '@mui/icons-material/Cloud';
import { fetchWeatherDetails } from '../app/actions/weatherAction';
import WeatherDetailCard from '../components/weather/details';


export default function Home() {
    const dispatch = useDispatch();
    const searchQuery = useSelector((state) => state.address.searchQuery);
    const weatherDetails = useSelector((state) => state.weather.weatherDetails);

    useEffect(() => {
        if (searchQuery?.label !== undefined) {
            const currentDate = new Date()
            const formattedDate = currentDate.toISOString().split('T')[0]
            dispatch(fetchWeatherDetails(searchQuery.type, searchQuery.label, formattedDate))
        }
    }, [searchQuery])

    return (
        <Grid container spacing={5}>
            <Grid item xs={12}>
                <Paper elevation={3} sx={{ width: 500, height: 300, padding: 1 }}>
                    {weatherDetails === null ?
                    <Box display="flex" justifyContent="center" alignSelf="center" padding={2}>
                        <Typography variant="h5">Select Zipcode or City for More Information</Typography>
                    </Box>  : 
                    
                    weatherDetails.code === 'JW-1001' ?
                    <Box display="flex" justifyContent="center" alignSelf="center" padding={2}>
                        <Typography variant="h5">Weather Information not available for {searchQuery.label}</Typography>
                    </Box>
                    :
                    <WeatherDetailCard data={weatherDetails} />
                    }
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper elevation={3} sx={{ width: "100%", height: 100, padding: 1 }}>
                    <Box display="flex" flexDirection={"row"} justifyContent="start" padding={2}>
                        <Box display="flex" flexDirection={"column"} justifyContent="space-between" alignItems={"start"} marginRight={1}>
                            {/* <Typography variant="h5">{weatherDetails.date}</Typography> */}
                            <Typography variant="h6">{weatherDetails?.temperature}</Typography>
                            <div><CloudIcon sx={{ fontSize: 40 }} color="disabled" /></div>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box display="flex" flexDirection={"column"} justifyContent="start" alignItems={"start"} >
                            {/* <Typography variant="h5">{weatherDetails.date}</Typography> */}
                            <Typography variant="h6">{weatherDetails?.temperature}</Typography>
                            <div><CloudIcon sx={{ fontSize: 40 }} color="disabled" /></div>
                        </Box>                    
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    )
}