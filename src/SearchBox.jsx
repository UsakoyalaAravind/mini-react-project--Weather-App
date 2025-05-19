    import TextField from '@mui/material/TextField';
    import Button from '@mui/material/Button';
    import './SearchBox.css'
    import { useState } from 'react';
    export default function SearchBox({updateWeather}){
        let [city,setCity]=useState("");
        let [err,setErr]=useState(false);
        const API = "https://api.openweathermap.org/data/2.5/weather";
        const APIKey="09f57b8252a9a9d78f9ddb4ea3a57eb2"
        // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
        let getWeather= async()=>{
            try{
                let response = await fetch(`${API}?q=${city}&appid=${APIKey}&units=metric`);
                let jsonres=await response.json();
                // console.log(jsonres);
                let weather={
                    temp:jsonres.main.temp,
                    temp_max:jsonres.main.temp_max,
                    temp_min:jsonres.main.temp_min,
                    humidity:jsonres.main.humidity,
                    des:jsonres.weather[0].description,
                    city:city,
                }
                return weather;
            }
            catch(error){
                throw error;
            }
        }
        let handleChange=(evt)=>{
            setCity(evt.target.value);
        }
        let handleSubmit= async (evt)=>{
            evt.preventDefault();
            // console.log(city);
            try{
                let info=await getWeather();
                    updateWeather(info);
            }
            catch(err){
                setErr(true);
            }
            setCity("");
        }
        return(
            <div className='SearchBox'>
                <form onSubmit={handleSubmit}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" value={city} onChange={handleChange} required/>
                    <br /><br />
                    <Button variant="contained" type='submit' >Search</Button>
                    {err && <p style={{color:"red"}}>Could not fetch the result</p>}
                </form>
            </div>
        );
    }