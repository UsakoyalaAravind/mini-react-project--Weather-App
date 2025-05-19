import SearchBox from "./SearchBox";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import './InfoBox.css'
export default function InfoBox({info}){    
    const rain="https://plus.unsplash.com/premium_photo-1733436275328-bbb7da0fe4ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"          
    const hot="https://thumbs.dreamstime.com/b/heat-wave-extreme-sun-sky-background-hot-weather-global-warming-concept-temperature-summer-season-148330905.jpg"
    const winter="https://images.unsplash.com/photo-1640955157682-1dab55d7cac7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return(
        <div className="InfoBox">
            <div className="info">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={
                            info.humidity>80? rain:
                            info.temp>15?hot:winter
                        }
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="div" className="inf">
                        {info.city}
                        {
                            info.humidity>80? <ThunderstormIcon/>:
                            info.temp>15?<SunnyIcon/>:<AcUnitIcon/>
                        }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <div className="inf">
                            <p>humidity:{info.humidity}</p>
                            <p>temp_max:{info.temp_max}</p>
                            <p>temp_min:{info.temp_min}</p>
                            </div>
                            <p>The weather can be described as {info.des} and feels like {info.temp} celsius</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
        
    );
}