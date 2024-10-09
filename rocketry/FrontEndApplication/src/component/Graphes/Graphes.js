import React from "react";
import Graphe from "./Graphe";
import styles from "../component.module.css";

export default function Graphes() {
  const co2Data = [400, 450, 420, 500, 5]; // CO2 levels
  const o2Data = [20.9, 21.0, 21.1, 21.0, 20.8]; // O2 levels
  const timestamps = ["10:00", "10:30", "11:00", "11:30", "12:00"]; // Time stamps

  return (
    <div className={styles.Graphes}>
      <h1 className={styles.title}> Graphes</h1>
      <div className={styles.GrapheContainer}>
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
      </div>
    </div>
  );
}
