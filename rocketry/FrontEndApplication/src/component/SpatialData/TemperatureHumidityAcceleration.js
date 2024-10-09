import React, { useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useWebSocket } from "../context/WebSocketProvider"; // Adjust this import as necessary

const getColor = (value) => {
  const numericValue = parseFloat(value);
  if (numericValue >= 70) return "rgba(255, 99, 132, 1)"; // Bright pink for high temperature
  if (numericValue >= 50) return "rgba(54, 162, 235, 1)"; // Sky blue for moderate humidity
  return "rgba(75, 192, 192, 1)"; // Teal for low acceleration
};

const TemperatureHumidityAcceleration = () => {
  const { data } = useWebSocket(); // Get data from WebSocket

  // Assuming `data` has fields for temperature, humidity, and acceleration
  const temperatureValue = data.temperature || "0"; // Fallback to "0"
  const humidityValue = data.hum || "0"; // Fallback to "0"
  const accelerationValue = data.acceleration || "0"; // Fallback to "0"

  return (
    <div>
      <h2>Temperature, Humidity, and Acceleration</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        <div>
          <h3>Temperature</h3>
          <CircularProgressbar
            value={parseFloat(temperatureValue) || 0} // Fallback to 0 if NaN
            text={`${temperatureValue}°C`}
            styles={buildStyles({
              pathColor: getColor(temperatureValue),
              textColor: "#00FFFF",
            })}
          />
        </div>
        <div>
          <h3>Humidity</h3>
          <CircularProgressbar
            value={parseFloat(humidityValue) || 0} // Fallback to 0 if NaN
            text={`${humidityValue}%`}
            styles={buildStyles({
              pathColor: getColor(humidityValue),
              textColor: "#00FFFF",
            })}
          />
        </div>
        <div>
          <h3>Acceleration</h3>
          <CircularProgressbar
            value={parseFloat(accelerationValue) || 0} // Fallback to 0 if NaN
            text={`${accelerationValue} m/s²`}
            styles={buildStyles({
              pathColor: getColor(accelerationValue),
              textColor: "#00FFFF",
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default TemperatureHumidityAcceleration;
