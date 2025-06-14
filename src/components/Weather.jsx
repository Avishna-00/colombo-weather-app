const Weather = ({ data }) => {
  const { location, current } = data;
  const localTime = new Date(location.localtime);
  const formattedTime = localTime.toLocaleString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });

  return (
    <div className="container">
      <h1 className="city">{location.name}</h1>
      <p className="date">{formattedTime}</p>

      <div className="main-weather">
        <img src={current.condition.icon} alt="weather icon" />
        <h2 className="temp">{current.temp_c}°C</h2>
        <p className="condition">{current.condition.text}</p>
      </div>

      <div className="details">
        <p><strong>Humidity:</strong> {current.humidity}%</p>
        <p><strong>Wind Speed:</strong> {current.wind_kph} km/h</p>
        <p><strong>UV Index:</strong> {current.uv}</p>
      </div>
    </div>
  );
};

export default Weather;
