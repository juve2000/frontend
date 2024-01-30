import React from "react";
import { get } from "lodash";
import { Row, Col } from "antd";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./logtab.scss";
const originalData = [
  [1369206795000, 1],
  [1369225421000, 3],
  [1369230934000, 1],
  [1369232934000, 5],
];

// Function to generate new data
const generateNewData = (
  originalData: any,
  numStatus: any,
  hourDifference: any
) => {
  const newData: any = [];
  let currentTime = originalData[0][0];
  let currentStatus = 1; // Start from status 1

  // Loop through the original data and generate new data
  originalData.forEach((item: any) => {
    const [timestamp, value] = item;

    // Add the current item to the new data
    newData.push([currentTime, currentStatus]);

    // Increment the current time by the specified hour difference
    currentTime += hourDifference * 60 * 60 * 1000;

    // Increment the status or reset to 1 if it exceeds the number of statuses
    currentStatus = currentStatus === numStatus ? 1 : currentStatus + 1;
  });

  return newData;
};

// Generate new data with 4 statuses and a 2-hour difference between each item
const newData = generateNewData(originalData, 4, 2);

const options = {
  chart: {
    zoomType: "x",
  },
  yAxis: {
    type: "line",
    step: "center",
    labels: {
      formatter: function (): any {
        // Customize label text here
        return get(this, "value") + "DB";
      },
      style: {
        // Customize label style here
        color: "red",
        fontSize: "12px",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
      },
    },
  },

  xAxis: {
    type: "datetime",
    step: "center",
    tickInterval: 3600 * 1000,
    // tickInterval: 24,

    min: Date.UTC(2013, 4, 22),
    max: Date.UTC(2013, 4, 23),
    style: {
      display: "flex",
      alignItems: "center",
    },
  },
  navigator: { enabled: true, liveRedraw: true },
  series: [
    {
      type: "line",
      step: "center",
      marker: {
        lineWidth: 12,
        // lineColor: Highcharts?.getOptions()?.colors[3],
        // fillColor: "white",
      },
      data: [
        [1369100504000, 1],

        [1369201504000, 1],

        [1369206504000, 1],

        [1369206795000, 1],
        [1369206895021, 3],
        [1369208995021, 4],

        [1369225421000, 2],
        [1369230934000, 3],
        [1369232934000, 4],
      ],
      pointStart: Date.UTC(2012, 5, 22),
      pointInterval: 24 * 3600 * 1000, // one day
    },
  ],
};

export const LogChartHight = () => {
  return (
    <>
      <Row>
        <Col span={2}>
          <div className="interactive-log-graph-item" style={{ marginTop: 60 }}>
            <div style={{ fontWeight: "bold" }}>Break</div>
            <div>13 hr 27 min</div>
          </div>
          <div className="interactive-log-graph-item">
            <div style={{ fontWeight: "bold" }}>Shift</div>
            <div>13 hr 27 min</div>
          </div>
          <div className="interactive-log-graph-item">
            <div style={{ fontWeight: "bold" }}>Driving</div>
            <div>13 hr 27 min</div>
          </div>
          <div className="interactive-log-graph-item">
            <div style={{ fontWeight: "bold" }}>Cycle</div>
            <div>13 hr 27 min</div>
          </div>
        </Col>
        <Col span={22}>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </Col>
      </Row>
    </>
  );
};

// $(function () {
//     $('#container').highcharts({
//         chart: {
//             zoomType: 'x'
//         },
//         xAxis: {
//             type: 'datetime',
//             tickInterval: 3600 * 1000,
//             min: Date.UTC(2013,4,22),
//             max: Date.UTC(2013,4,23),
//         },
//         series: [{
//             data: [
//                 [1369206795000, 1],
//                 [1369225421000, 3],
//                 [1369230934000, 2]
//             ],
//             pointStart: Date.UTC(2012, 05, 22),
//             pointInterval: 24 * 3600 * 1000 // one day
//         }]
//     });
// });
