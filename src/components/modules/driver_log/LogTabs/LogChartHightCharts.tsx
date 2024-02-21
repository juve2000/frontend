import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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

var currentDate = new Date();

export const LogChartHight = () => {
  const logs = useSelector((state: any) => state.driverLog.logList);
  const [data, setData] = useState<any>([]);
  const todayStart = Date.UTC(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    0,
    0,
    0
  );
  const defaultY = [
    [todayStart, 1],
    [todayStart, 2],
    [todayStart, 3],
    [todayStart, 4],
  ];

  useEffect(() => {
    if (logs?.length) {
      const logsToUpdate = logs
        ?.map((l: any) => [l?.timestamp * 1000, l?.event_code])
        .sort((a: any, b: any) => a[0] - b[0]);

      setData([...logsToUpdate]);
    }
  }, [logs]);
  useEffect(() => {
    console.log("DATA", data);
  }, [data]);

  const options = {
    chart: {
      zoomType: "x",
    },
    yAxis: {
      type: "line",
      step: "center",
      categories: [1, 2, 3, 4],
      reserved: true,
      labels: {
        formatter: function (): any {
          // Customize label text here
          let categoryLabel = "";
          const value = get(this, "value");
          if (value === 1) {
            categoryLabel = "On";
          }
          if (value === 2) {
            categoryLabel = "D";
          }
          if (value === 3) {
            categoryLabel = "SB";
          }
          if (value === 4) {
            categoryLabel = "On";
          }
          return "";
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
      // step: "center",
      tickInterval: 3600 * 1000,
      // tickInterval: 24,

      min: Date.UTC(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        0,
        0,
        0
      ),
      max: Date.UTC(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        23,
        59,
        59
      ),
      style: {
        display: "flex",
        alignItems: "center",
      },
    },
    title: {
      text: null,
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
        data: data,
        pointStart: Date.UTC(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate(),
          0,
          0,
          0
        ),
        pointInterval: 24 * 3600 * 1000, // one day
        // pointEnd: Date.UTC(
        //   currentDate.getFullYear(),
        //   currentDate.getMonth(),
        //   currentDate.getDate(),
        //   23,
        //   59,
        //   59
        // ),
      },
    ],
  };
  return (
    <>
      <Row>
        <Col span={2}>
          <div className="interactive-log-graph-item" style={{ marginTop: 20 }}>
            <div style={{ fontWeight: "bold" }}>OFF</div>
          </div>
          <div className="interactive-log-graph-item">
            <div style={{ fontWeight: "bold" }}>SB</div>
          </div>
          <div className="interactive-log-graph-item">
            <div style={{ fontWeight: "bold" }}>D</div>
          </div>
          <div className="interactive-log-graph-item">
            <div style={{ fontWeight: "bold" }}>On</div>
          </div>
        </Col>
        <Col span={20}>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </Col>
        <Col span={2}>
          <div className="interactive-log-graph-item" style={{ marginTop: 20 }}>
            <div>13 hr 27 min</div>
          </div>
          <div className="interactive-log-graph-item">
            <div>13 hr 27 min</div>
          </div>
          <div className="interactive-log-graph-item">
            <div>13 hr 27 min</div>
          </div>
          <div className="interactive-log-graph-item">
            <div>13 hr 27 min</div>
          </div>
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
