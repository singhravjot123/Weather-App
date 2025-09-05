
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {weatherCodeMap} from "./weatherCodes.js";



export default function SearchPanel({ updateInfo }) {
  const [city, setCity] = useState("");

  // We use geocoding to get latitude & longitude from city name
  const GEOCODE_URL = "https://geocoding-api.open-meteo.com/v1/search";
  const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

  const getWeatherInfo = async (cityName) => {
    try {
      if (!cityName) return null;

      // Step 1: Get coordinates for city
      const geoRes = await fetch(`${GEOCODE_URL}?name=${encodeURIComponent(cityName)}&count=1`);
      const geoJson = await geoRes.json();

      if (!geoJson.results || geoJson.results.length === 0) {
        throw new Error("City not found");
      }

      const { latitude, longitude, name, country } = geoJson.results[0];

      // Step 2: Fetch weather using lat/lon
      const weatherRes = await fetch(
        `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
      );
      const weatherJson = await weatherRes.json();

      const current = weatherJson.current_weather;
      const daily = weatherJson.daily;

      return {
        city: `${name}, ${country}`,
        temp: current.temperature,
        feelsLike: current.temperature, // Open-Meteo doesn’t give feels_like directly
        tempMin: daily.temperature_2m_min[0],
        tempMax: daily.temperature_2m_max[0],
        humidity: "—", // Open-Meteo free endpoint doesn’t include humidity
        weather: `Code ${current.weathercode}`, // numeric weather code
        code: current.weathercode,
      };
    } catch (err) {
      console.error("getWeatherInfo error:", err);
      alert(err.message || "Could not fetch weather");
      return null;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    const info = await getWeatherInfo(city.trim());
    if (info) updateInfo(info);
    setCity(city);
  };



  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        padding: "14px",
        borderRadius: "16px",
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
        color: "white",
        width: "min(720px, 100%)",
        margin: "0 auto",
      }}
    >
      <TextField
        id="city"
        label="City Name"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
       InputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
        sx={{ flex: 1 }}
        autoComplete="off"  
      />
      <Button type="submit" variant="contained" sx={{ whiteSpace: "nowrap" }}>
        Search
      </Button>
    </Box>
  );
}
