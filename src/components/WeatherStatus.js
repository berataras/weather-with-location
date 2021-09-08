export default function WeatherStatus(props){
    const {weather} = props;
    console.log(weather)
    if (!weather){
        return <p>Yükleniyor...</p>
    }
    return (
        <>
            <h3>{weather.name}</h3>
            <h4>{weather.weather.map(weather => weather.description).join(", ")}</h4>
            <p>{weather.main.temp}</p>
            <p>{new Date(weather.dt).toLocaleDateString()}</p>
        </>
    );
}