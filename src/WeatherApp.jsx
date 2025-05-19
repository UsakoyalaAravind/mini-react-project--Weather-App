import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";
export default function WeatherApp(){
    const [weather , setWeather]=useState({
        city:"Delhi",
        des:"clear sky",
        humidity:26,
        temp:36.29,
        temp_max:36.29,
        temp_min:36.29,
    })
    let updateWeather=(newinfo)=>{
        setWeather(newinfo);
    }
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Weather App</h1>
            <SearchBox updateWeather={updateWeather}/><br /><br />
            <InfoBox info={weather}/>
        </div>
    );
}