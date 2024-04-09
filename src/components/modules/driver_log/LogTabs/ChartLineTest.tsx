import React from "react";
import {
  Chart,
  registerables,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from 'faker';
import "chartjs-adapter-moment";
import "chartjs-adapter-date-fns";

Chart.register(...registerables);

const Footer = (tooltipItems: any) => {
  let sum = 0;

  tooltipItems.forEach(function (tooltipItem: any) {
    sum += tooltipItem.parsed.y;
  });
  return "Duration: 06:45"; // TODO replace with real duration
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const Data: any = {
  datasets: [
    {
      data: [
        {
          x: "00:00:00",
          y: 1,
        },
        {
          x: "08:45:17",
          y: 1,
        },
        {
          x: "09:30:17",
          y: 2,
        },
        {
          x: "10:15:16",
          y: 0,
        },
        {
          x: "11:00:17",
          y: 3,
        },
        {
          x: "14:45:16",
          y: 1,
        },
        {
          x: "23:59:59",
          y: 1,
        },
      ],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      stepped: true,
      pointStyle: false,
      type: "line",
    },
    {
      fill: false,
      borderColor: "rgba(0, 0, 0, 0)",
      data: [0, 3],
      pointStyle: false,
      type: "line",
    },
  ],
};

const Config: any = {
  type: "line",
  data: Data,
  options: {
    scales: {
      y: {
        type: "linear",
        display: true,
        ticks: {
          stepSize: 1,
          callback: function (value: any, index: any, values: any) {
            var customLabels = ["On", "D", "SB", "Off"];
            return customLabels[index];
          },
        },
      },
      x: {
        type: "time",
        drawTicks: true,
        time: {
          displayFormats: {
            hour: "HH:mm:ss",
          },
        },
        ticks: {
          beginAtZero: true,
          stepSize: 1,
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
    plugins: {
      tooltip: {
        xAlign: "center",
        bodyAlign: "center",
        titleAlign: "center",
        usePointStyle: true,
        callbacks: {
          footer: Footer,
          title: function (tooltipItems: any, data: any) {
            let currentTime = new Date();
            let options: any = {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
            };
            return currentTime.toLocaleTimeString("en-US", options);
          },
          label: function (tooltipItem: any, data: any) {
            let status = "";
            switch (tooltipItem.parsed.y) {
              case 0:
                status = "On";
                break;
              case 1:
                status = "D";
                break;
              case 2:
                status = "SB";
                break;
              case 3:
                status = "Off";
                break;
              default:
                break;
            }

            return "Status: " + status;
          },
        },
      },
      legend: {
        display: false,
      },
    },
  },
};

export function ChartLineTest() {
  return <Line options={Config?.options} data={Data} />;
}
