// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
import {useEffect, useState} from "react";
import axios from "axios";
import {usePosition} from 'use-position';
import WeatherStatus from "./components/WeatherStatus";

const App = () => {
    const [weather, setWeather] = useState();
    const {latitude, longitude} = usePosition();
    const getWeather = async (lat, lon) => {
        const key = process.env.REACT_APP_WEATHER_API_KEY;
        const lang = navigator.language.split('-')[0];
        console.log(lang)
        try{
            const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}`)
            setWeather(data)
        }catch (e){
            alert('veri alınırken bir hata oluştu.')
        }
    }

    useEffect(() => {
        latitude && longitude && getWeather(latitude, longitude);
    }, [latitude, longitude])

    return (
        <>
            <h2>Hava Durumu</h2>
            <WeatherStatus weather={weather} />
        </>
    )
}

export default App;