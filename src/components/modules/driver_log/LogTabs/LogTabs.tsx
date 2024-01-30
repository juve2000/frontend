import React from "react";
import { Tabs } from "antd";
import NewLogChart from "./NewLogChart2";
// import NewLogChart from "./NewLogChart";
import { Graph } from "../../../common/graph/Graph";
import { LogChartHight } from "./LogChartHightCharts";
import "./logtab.scss";
import { LogTabelPanel } from "../LogTabelPanel";

const onChange = (key: string) => {
  console.log(key);
};
const truckTasks = [
  {
    id: "truck1",
    name: "Truck 1",
    start: 0,
    end: 6,
    status: "Moving",
  },
  {
    id: "truck2",
    name: "Truck 2",
    start: 6,
    end: 12,
    status: "Idle",
  },
  // Add more tasks as needed
];

export const LogTabs: React.FC = (props: any) => {
  const items: any = [
    {
      key: "1",
      label: "Records",
      children: <LogTabelPanel />,
      // children: <Graph />,
      // children: <LogChartHight />,
    },
    {
      key: "2",
      label: "Profile Form",
      children: "Content of Tab Pane 2",
    },
  ];
  return (
    <div className="ubuntu log-tabs-container">
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        tabBarStyle={{ border: "none" }}
      />
    </div>
  );
};
