import React from "react";
import styles from "../component.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import DisplayField from "../SpatialData/DisplayField";
import Graphe from "../Graphes/Graphe";
const getColor = (value) => {
  const numericValue = parseFloat(value);
  if (numericValue >= 70) return "rgba(255, 99, 132, 1)"; // Bright pink for high temperature
  if (numericValue >= 50) return "rgba(54, 162, 235, 1)"; // Sky blue for moderate humidity
  return "rgba(75, 192, 192, 1)"; // Teal for low acceleration
};

export default function Information() {
  const temperatureValue = "50";
  const accelerationValue = "10";
  const co2Data = [400, 450, 420, 500, 5]; // CO2 levels
  const o2Data = [20.9, 21.0, 21.1, 21.0, 20.8]; // O2 levels
  const timestamps = ["10:00", "10:30", "11:00", "11:30", "12:00"]; // Time stamps

  return (
    <div className={styles.Information}>
      <h2 className={styles.title}>Some information</h2>
      <div className={styles.container}>
       
        <div style={{ flex: "1 1 140px", textAlign: "center", width: "140px" }}>
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
        <div style={{ flex: "1 1 140px", textAlign: "center", width: "140px" }}>
          <h3>Temperature</h3>
          <div style={{ width: "150px", height: "150px", margin: "0 auto" }}>

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
        <div style={{ flex: "1 1 140px", textAlign: "center", width: "140px" }}>
          <h3>Temperature</h3>
          <div style={{ width: "150px", height: "150px", margin: "0 auto" }}>

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
        
        <div>
          <h3>CO2 Levels Graph</h3>
          <Graphe
            label="CO2 Levels (ppm)"
            dataPoints={co2Data}
            timestamps={timestamps}
            borderColor="rgba(255,99,132,1)"
            backgroundColor="rgba(255,99,132,0.2)"
          />
        </div>
        <div>
          <h3>O2 Levels Graph</h3>
          <Graphe
            label="O2 Levels (%)"
            dataPoints={o2Data}
            timestamps={timestamps}
            borderColor="rgba(54,162,235,1)"
            backgroundColor="rgba(54,162,235,0.2)"
          />
        </div>
        <div>
          <h3>O2 Levels Graph</h3>
          <Graphe
            label="O2 Levels (%)"
            dataPoints={o2Data}
            timestamps={timestamps}
            borderColor="rgba(54,162,235,1)"
            backgroundColor="rgba(54,162,235,0.2)"
          />
        </div>
        
      </div>
    </div>
  );
}
