import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const Graphe = ({
  label,
  dataPoints,
  timestamps,
  borderColor,
  backgroundColor,
}) => {
  const chartData = {
    labels: timestamps, // X-axis data (e.g., timestamps)
    datasets: [
      {
        label: label, // Graph label (e.g., "CO2 Levels (ppm)")
        data: dataPoints, // Y-axis data (e.g., CO2 levels)
        borderColor: borderColor || "rgba(0,99,132,1)", // Default or custom border color
        backgroundColor: backgroundColor || "rgba(0,99,132,0.2)", // Default or custom background color
        borderWidth: 2,
        tension: 0.4, // Smooth curve
        pointRadius: 4,
        pointBackgroundColor: borderColor || "rgba(0,99,132,1)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#fcfcfc",
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
        backgroundColor: "rgba(0,0,0,0.8)",
        titleFont: { size: 16 },
        bodyFont: { size: 14 },
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: "#ddd",
        },
        ticks: {
          color: "#fcfcfc",
          font: {
            size: 14,
          },
        },
      },
      y: {
        grid: {
          color: "#ddd",
        },
        ticks: {
          color: "#fcfcfc",
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "400px", height: '200px' }}>
      <Line  style={{ width: '100%', height: '100%' }} data={chartData} options={options} />
    </div>
  );
};

export default Graphe;
