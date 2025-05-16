import React, { useEffect , useState } from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Hidden } from '@mui/material';
const Weather =()=>{
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
      const handleButtonClick = async () => {
        const cityname_input = document.getElementById("cityname_input");
        const submit_button = document.getElementById("submit_button");
        const cityname_out = document.getElementById("cityname_out");
        const day1 = document.getElementById("day1");
        const api_key = "b16f06dd7853e355d8f28c1d57df22ab";
  
        const weather_res = await (
          await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${cityname_input.value}&appid=${api_key}`
          )
        ).json();
  
        set_Info(weather_res);
        //console.log(weather_res["list"]);
      };
  
      const formatWeatherData = (data) => {
        let date = data["dt_txt"];
        let temperature = data["main"]["temp"] - 273.15;
        let description = data["weather"][0]["description"];
        return `<strong>Date and time:</strong> ${date}<br><strong>Temperature:</strong> ${temperature.toFixed(2)} °C<br><strong>Weather:</strong> ${description}`;
      };
  
      const set_Info = (data) => {
        document.getElementById("day1").innerHTML = formatWeatherData(data["list"][0]);
        document.getElementById("day2").innerHTML = formatWeatherData(data["list"][8]);
        document.getElementById("day3").innerHTML = formatWeatherData(data["list"][16]);
        document.getElementById("day4").innerHTML = formatWeatherData(data["list"][24]);
        document.getElementById("day5").innerHTML = formatWeatherData(data["list"][32]);
        document.getElementById("day6").innerHTML = formatWeatherData(data["list"][39]);
        document.getElementById("day7").innerHTML = formatWeatherData(data["list"][0]);
      };
  
      const submit_button = document.getElementById("submit_button");
      if (submit_button) {
        submit_button.addEventListener("click", handleButtonClick);
      }
  
      return () => {
        if (submit_button) {
          submit_button.removeEventListener("click", handleButtonClick);
        }
      };
    }, []);
  
    return (
      <div>
        <div style={{marginTop:'10vh' , display:'flex' , justifyContent:'center' }}>
        <TextField id="cityname_input" label="Outlined" variant="outlined" />
        <Button  id="submit_button" variant="contained" onClick={()=>setWeatherData(true)}>GetReport</Button>
        </div>
        {weatherData && <div id="weeklyWeatherContainer" style={{ display: 'flex', flexDirection: 'row', marginTop:'20vh', marginLeft:'2vw' , marginRight:'2vw'}} >
            <Card sx={{ width:'200px', height:'150px' , margin:'10px' , fontFamily:'Lato'}}>
              <CardContent>
              <div id="day1"></div>
              </CardContent>
            </Card>
            
            <Card sx={{ width:'200px', height:'150px' , margin:'10px' , fontFamily:'Lato'}}>
              <CardContent>
              <div id="day2"></div>
              </CardContent>
            </Card>
            
            <Card sx={{width:'200px', height:'150px' , margin:'10px' , fontFamily:'Lato'}}>
              <CardContent>
              <div id="day3"></div>
              </CardContent>
            </Card>
            <Card sx={{width:'200px', height:'150px' , margin:'10px' , fontFamily:'Lato'}}>
              <CardContent>
              <div id="day4"></div>
              </CardContent>
            </Card>
            <Card sx={{width:'200px', height:'150px' , margin:'10px' , fontFamily:'Lato'}}>
              <CardContent>
              <div id="day5"></div>
              </CardContent>
            </Card>
            
            <Card sx={{width:'200px', height:'150px' , margin:'10px' , fontFamily:'Lato'}}>
              <CardContent>
              <div id="day6"></div>
              </CardContent>
            </Card>
            <Card sx={{width:'200px', height:'150px' ,  margin:'10px' , fontFamily:'Lato'}}>
              <CardContent>
              <div id="day7"></div>
              </CardContent>
            </Card>
          
          
        </div>}
      </div>
  );  
}
export default Weather