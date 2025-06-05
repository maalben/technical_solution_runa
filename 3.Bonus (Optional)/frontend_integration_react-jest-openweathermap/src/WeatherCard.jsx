import React, { useEffect, useState } from 'react';

export default function WeatherCard({ city }) {
  const [data, setData] = useState(null);
  const apiKey = '4625306e478b69a3ccdcb9b0aebe7610';

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, [city]);

  if (!data) return <p>Loading...</p>;
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.main?.temp}°C</p>
    </div>
  );
}