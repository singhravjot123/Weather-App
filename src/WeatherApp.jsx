
import React, { useState } from "react";
import SearchPanel from "./SearchPanel";
import InfoBox from "./InfoBox";
import { getWeatherBackground } from "./weatherImages";
import { weatherCodeMap } from "./weatherCodes.js";

export default function WeatherApp() {
    const [weatherinfo, setWeatherInfo] = useState({
        city: "",
        feelsLike:0,
        temp:0,
        tempMax:0,
        tempMin:0,
        humidity:0,
        weather: "",
        code: 0,
    });

    // background handling for crossfade
    const [bgImage, setBgImage] = useState(getWeatherBackground(weatherinfo.code));
    const [prevBg, setPrevBg] = useState(null);
    const [crossfade, setCrossfade] = useState(true);

    const updateInfo = (result) => {
        if (!result) return;

        console.log("updateInfo called:", result);

        // Ensure numeric humidity
        const humidity = typeof result.humidity === "number" ? result.humidity : 0;

        // Map code to weather type
        const weather = weatherCodeMap[result.code] || "Unknown";

        // Update state
        const newWeatherInfo = {
            ...result,
            humidity,
            weather,
        };
        setWeatherInfo(newWeatherInfo);

        // Update background
        const newBg = getWeatherBackground(result.code);
        setPrevBg(bgImage);
        setBgImage(newBg);

        // Animate crossfade
        setCrossfade(false);
        setTimeout(() => setCrossfade(true), 50);
        setTimeout(() => setPrevBg(null), 1100);
    };


    // Outer wrapper — holds background layers (absolute) and content wrapper
    const outerStyle = {
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
    };

    // Background common styles (absolute, behind content)
    const bgCommon = {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "opacity 1s ease-in-out",
    };

    // Foreground content wrapper (must be positioned and have higher zIndex)
    const contentStyle = {
        position: "relative",       // important for z-index to work
        zIndex: 2,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",       // center horizontally
        justifyContent: "flex-start", // keep content at top
        gap: "18px",
        paddingTop: "36px",
        paddingLeft: "20px",
        paddingRight: "20px",
        color: "white",
    };

    return (
        <div style={outerStyle}>
            {/* previous background (fades out) */}
            {prevBg && (
                <div
                    style={{
                        ...bgCommon,
                        backgroundImage: `url(${prevBg})`,
                        opacity: crossfade ? 0 : 1,
                        zIndex: 0,
                    }}
                />
            )}

            {/* current background (fades in) */}
            <div
                style={{
                    ...bgCommon,
                    backgroundImage: `url(${bgImage})`,
                    opacity: crossfade ? 1 : 0,
                    zIndex: 0,
                }}
            />

            {/* Foreground content (above backgrounds) */}
            <div style={contentStyle}>
                <h2 style={{ margin: 0, paddingBottom: 6 }}>Weather Now</h2>

                {/* SearchPanel must call updateInfo(result) */}
                <SearchPanel updateInfo={updateInfo} />

                {/* InfoBox shows weatherinfo */}
                <InfoBox info={weatherinfo} />
            </div>
        </div>
    );
}
