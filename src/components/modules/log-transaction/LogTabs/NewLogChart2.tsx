import React from "react";
import { Column } from "@ant-design/charts";

const data = [
  { time: "00:00", Row1: 10, Row2: 20, Row3: 15, Row4: 25 },
  // Add more data points for each hour...
];

const Chart = () => {
  const config = {
    data,
    height: 400,
    xField: "time",
    yField: ["Row1", "Row2", "Row3", "Row4"], // Use an array to create grouped columns
    isGroup: true,
    xAxis: {
      label: {
        formatter: (val: any) => `${val}:00`,
      },
    },
    yAxis: {
      label: {
        formatter: (val: any) => `${val}`,
      },
    },
    legend: {
      position: "top",
    },
    tooltip: { shared: true },
  };

  return <div>123</div>;
};

export default Chart;
