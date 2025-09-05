
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function InfoBox({ info }) {
  // If info is null/undefined, render nothing (prevents layout jumps)
  if (!info) return null;

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "8px 0" }}>
      <Card
        style={{
          width: "340px",
          borderRadius: "16px",
          background: "rgba(255,255,255,0.14)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
          color: "white",
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {info.city || ""}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {info.weather || ""}
          </Typography>
          <Typography>🌡️ Temperature: {info.temp ?? ""}°C</Typography>
          <Typography>🤒 Feels like: {info.feelsLike ?? ""}°C</Typography>
          <Typography>
            ⬇️ Min: {info.tempMin ?? ""}°C &nbsp; | &nbsp; ⬆️ Max: {info.tempMax ?? ""}°C
          </Typography>
          <Typography>💧 Humidity: {info.humidity ?? ""}%</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
