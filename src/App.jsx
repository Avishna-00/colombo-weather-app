import { useEffect, useState } from 'react';
import './App.css';
import Weather from './components/Weather';
import Loading from './components/Loading';
import Error from './components/Error';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const CITY = "Colombo";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}&aqi=no`
      );
      if (!response.ok) throw new Error("Failed to fetch weather");
      const data = await response.json();
        setWeather(data);
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }  
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const handleRetry = () => {
    fetchWeather();
  };

  const handleRefresh = () => {
    fetchWeather();
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={handleRetry} />;
  return <Weather data={weather} onRefresh={handleRefresh} />;
}

export default App;
