import React from "react";
import styles from "../component.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import DisplayField from "./DisplayField";

const getColor = (value) => {
  const numericValue = parseFloat(value);
  if (numericValue >= 70) return "rgba(255, 99, 132, 1)"; // Bright pink for high temperature
  if (numericValue >= 50) return "rgba(54, 162, 235, 1)"; // Sky blue for moderate humidity
  return "rgba(75, 192, 192, 1)"; // Teal for low acceleration
};

export default function SpatialData() {
  const temperatureValue = "50";
  const humidityValue = "80";
  const accelerationValue = "10";
  
  return (
    <div className={styles.SpatialData}>
      <h2 className={styles.title}>
        Some information
      </h2>
      <div style={{
            width:"100%",}} >
        <DisplayField label={"Altitude"} value={"Altitude"} />
      </div>
        <div
          style={{
            width:"100%",
            display: "flex",
            justifyContent: "start",
            fontWeight: "bold",
            fontSize: "16px", // Reduced font size
            gap: "20px",
            flexWrap: "wrap", // Allows items to wrap on smaller screens
          }}
        >
          {/* Temperature Section */}
          <div style={{ flex: "1 1 150px", textAlign: "center", width: "150px" }}>
            <h3>Temperature</h3>
            <div style={{ width: "150px", height: "150px", margin: "0 auto" }}> {/* Adjust size here */}
              <CircularProgressbar
                value={parseFloat(temperatureValue) || 0}
                text={`${temperatureValue}°C`}
                styles={buildStyles({
                  pathColor: getColor(temperatureValue),
                  textColor: "#00FFFF",
                })}
              />
            </div>
          </div>
          {/* Humidity Section */}
          <div style={{ flex: "1 1 150px", textAlign: "center", width: "150px" }}>
            <h3>Humidity</h3>
            <div style={{ width: "150px", height: "150px", margin: "0 auto" }}>
              <CircularProgressbar
                value={parseFloat(humidityValue) || 0}
                text={`${humidityValue}%`}
                styles={buildStyles({
                  pathColor: getColor(humidityValue),
                  textColor: "#00FFFF",
                })}
              />
            </div>
          </div>
          {/* Acceleration Section */}
          <div style={{ flex: "1 1 150px", textAlign: "center", width: "150px" }}>
            <h3>Acceleration</h3>
            <div style={{ width: "150px", height: "150px", margin: "0 auto" }}>
              <CircularProgressbar
                value={parseFloat(accelerationValue) || 0}
                text={`${accelerationValue} m/s²`}
                styles={buildStyles({
                  pathColor: getColor(accelerationValue),
                  textColor: "#00FFFF",
                })}
              />
            </div>
          </div>
        </div>
      
    </div>
  );
}
