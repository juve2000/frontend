import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

const TruckEventsChart = () => {
  const [eventData, setEventData] = useState(Array(24).fill(0));

  // Function to update event data
  const updateEventData = (hour: any) => {
    setEventData((prevData) => {
      const newData = [...prevData];
      newData[hour] += 1; // Increment the event count for the selected hour
      return newData;
    });
  };

  // Sample function to simulate updating events
  const simulateEventUpdate = () => {
    const randomHour = Math.floor(Math.random() * 24);
    updateEventData(randomHour);
  };

  // Chart.js data and options
  const chartData = {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    datasets: [
      {
        label: "Truck Events",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: eventData,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        max: Math.max(...eventData) + 1,
      },
    },
  };

  return (
    <div>
      <h2>Truck Events Chart</h2>
      <button onClick={simulateEventUpdate}>Simulate Event</button>

      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default TruckEventsChart;
