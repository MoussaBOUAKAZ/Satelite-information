import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function Gauge({title,temperatureValue,color}) {
  return (
    <div>
      <h3>{title}</h3>
          <CircularProgressbar
            value={parseFloat(temperatureValue) || 0} 
            text={`${temperatureValue}°C`}
            styles={buildStyles({
              pathColor: {color},
              textColor: "#00FFFF",
            })}
          />
    </div>
  )
}
