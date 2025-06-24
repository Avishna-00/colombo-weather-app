import { Sun, Moon, Cloud, CloudRain, Wind, Eye, Thermometer, Droplets, Gauge, MapPin, RefreshCw } from 'lucide-react';

// Weather icon mapping
const getWeatherIcon = (condition) => {
  const iconMap = {
    'sunny': Sun,
    'clear': Moon,
    'partly cloudy': Cloud,
    'cloudy': Cloud,
    'overcast': Cloud,
    'rain': CloudRain,
    'drizzle': CloudRain,
    'light rain': CloudRain,
    'moderate rain': CloudRain,
    'heavy rain': CloudRain,
  };
  
  const conditionLower = condition.toLowerCase();
  for (const [key, icon] of Object.entries(iconMap)) {
    if (conditionLower.includes(key)) return icon;
  }
  return Cloud;
  };

const Weather = ({ data, onRefresh }) => {
  const { location, current } = data;
  const WeatherIcon = getWeatherIcon(current.condition.text);

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const weatherDetails = [
    { icon: Wind, label: 'Wind Speed', value: `${current.wind_kph} km/h` },
    { icon: Eye, label: 'Visibility', value: `${current.vis_km} km` },
    { icon: Droplets, label: 'Humidity', value: `${current.humidity}%` },
    { icon: Gauge, label: 'Pressure', value: `${current.pressure_mb} mb` },
  ];

  return (
    <div className="app-background">
      <div className="weather-container">
        {/* Main Weather Card */}
        <div className="weather-card">
          {/* Header */}
          <div className="weather-header">
            <div className="location-info">
              <MapPin className="location-icon" />
              <h1 className="city-name">{location.name}</h1>
            </div>
            <button onClick={onRefresh} className="refresh-button">
              <RefreshCw className="refresh-icon" />
            </button>
          </div>

          {/* Date */}
          <p className="weather-date">{formatTime(location.localtime)}</p>

          {/* Main Weather Display */}
          <div className="main-weather">
            <div className="weather-icon-container">
              <WeatherIcon className="weather-icon" />
              <div className="weather-glow"></div>
            </div>
            <div className="temperature">
              {Math.round(current.temp_c)}°
            </div>
            <p className="condition">{current.condition.text}</p>
            <p className="feels-like">
              Feels like {Math.round(current.feelslike_c)}°C
            </p>
          </div>

          {/* Temperature Range */}
          <div className="temp-info-bar">
            <div className="temp-info-content">
              <div className="temp-info-details">
                <Thermometer className="temp-info-icon" />
                <span className="temp-info-text">
                  UV Index: {current.uv} | Wind Direction: {current.wind_dir}
                </span>
              </div>
            </div>
          </div>

          {/* Weather Details Grid - Inside Main Card */}
          <div className="weather-details-grid">
            {weatherDetails.map((detail, index) => {
              const IconComponent = detail.icon;
              return (
                <div key={index} className="weather-detail-card">
                  <div className="weather-detail-content">
                    <div className="weather-detail-icon-wrapper">
                      <IconComponent className="weather-detail-icon" />
                    </div>
                    <div className="weather-detail-info">
                      <span className="weather-detail-label">{detail.label}</span>
                      <span className="weather-detail-value">{detail.value}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="weather-footer">
          <p className="last-updated">
            Last updated: {new Date(current.last_updated).toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
